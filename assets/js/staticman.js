// Static comments
// from: https://github.com/eduardoboucas/popcorn/blob/gh-pages/js/main.js
$(document).ready(function() {
  $('.new-comment').submit(function () {
    var form = this;

    $(form).addClass('loading');
    $('input[type="submit"]:enabled').addClass('hidden'); // hide "submit"
    $('input[type="submit"]:disabled').removeClass('hidden'); // show "submitted"

    // Construct form action URL form JS to avoid spam
    var api = '{{ .api | default "staticman3.herokuapp.com" }}';
    var gitProvider = '{{ .gitprovider }}';
    var username = '{{ .username }}';
    var repo = '{{ .repo }}';
    var branch = '{{ .branch }}';

    $.ajax({
      type: $(this).attr('method'),
      url: ['https:/', api, 'v3/entry', gitProvider, username, repo, branch, 'comments'].join('/'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        showAlert('success');
        setTimeout(function(){ clearForm() }, 3000); // display success message for 3s
        $(form).removeClass('loading');
      },
      error: function (err) {
        console.log(err);
        showAlert('failed');
        $(form).removeClass('loading');
      }
    });

    return false;
  });

  function showAlert(msg) {
    if (msg == 'success') {
      $('.submit-notice').addClass('submit-success')
      $('.new-comment .submit-success').removeClass('hidden');  // show submit success message
      $('.new-comment .submit-failed').addClass('hidden'); // hide submit failed message
    } else {
      $('.submit-notice').addClass('submit-failed')
      $('.new-comment .submit-success').addClass('hidden'); // hide submit success message
      $('.new-comment .submit-failed').removeClass('hidden');  // show submit failed message
    }
    $('input[type="submit"]:enabled').removeClass('hidden'); // show "submit"
    $('input[type="submit"]:disabled').addClass('hidden');  // hide "submitted"
  }

  function clearForm() {
    resetReplyTarget();
    $('.new-comment input')
      .filter(function() {
        return this.name.match(/^fields\[.*\]$/);
      })
      .val(''); // empty all text & hidden fields but not options
    $('.new-comment textarea').val(''); // empty text area
    $('.submit-notice').removeClass('.submit-success').removeClass('.submit-failed');
    $('.new-comment .submit-success').addClass('hidden'); // hide submission status
    $('.new-comment .submit-failed').addClass('hidden'); // hide submission status
  }

  function resetReplyTarget() {
    $('.new-comment .reply-notice .reply-name').text('');
    $('.new-comment .reply-notice .comment-avatar').remove();
    $('.new-comment .reply-notice .reply-close-btn').remove();
    $('.new-comment .reply-notice').addClass('hidden'); // hide reply target display
    $('.new-comment input[type="hidden"]')
      .filter(function() {
        return this.name.match(/^fields\[reply[a-zA-Z]*\]$/);
      })
      .val(''); // empty all hidden fields whose name starts from "reply"
  }

  // record reply target when "reply to this comment" is pressed
  $('.comment').on('click', '.comment-reply-btn', function (evt){
    resetReplyTarget();
    var cmt = $(evt.delegateTarget);
    var replyThread = cmt.find('.comment-threadID').text();
    $('.new-comment input[name="fields[replyThread]"]').val(replyThread);
    $('.new-comment input[name="fields[replyID]"]').val(cmt.attr("id"));
    authorTag = cmt.find('.comment-author');
    replyName = authorTag.text();
    $('.new-comment input[name="fields[replyName]"]').val(replyName);

    // display reply target avatar and name
    $('.new-comment .reply-notice').removeClass('hidden');
    $('.new-comment .reply-name').text(replyName);
    avatarTag = cmt.find('.comment-avatar');
    // use clone to avoid removal of avatar in comments by resetReplyTarget()
    $('.new-comment .reply-arrow').after(avatarTag.clone());
    // add button for removing reply target (static method would give error msg)
    closeBtn = $("<a class='reply-close-btn button'><i class='fas fa-times'></i></a>");
    $('.new-comment .reply-notice').append(closeBtn);
  });

  // handle removal of reply target when '×' is pressed
  $('.new-comment .reply-notice').on('click', '.post-reply-close-btn', function(){
    resetReplyTarget();
  });

  // clear form when reset button is clicked
  $('.new-comment input[type="reset"]').click(function (){
    clearForm();
  });
});
