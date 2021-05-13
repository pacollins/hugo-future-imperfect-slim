(function() {
  let form = document.querySelector('.new-comment');
  if (form) {
    form.addEventListener('submit', function () {
      form.classList.add('loading');
      form.querySelector('input[type="submit"]:enabled').classList.add('hidden'); // hide "submit"
      form.querySelector('input[type="submit"]:disabled').classList.remove('hidden'); // show "submitted"

      // Construct form action URL form JS to avoid spam
      let api = '{{ .api }}';
      let gitProvider = '{{ .gitprovider }}';
      let username = '{{ .username }}';
      let repo = '{{ .repo }}';
      let branch = '{{ .branch }}';
      let url = ['https:/', api, 'v3/entry', gitProvider, username, repo, branch, 'comments'].join('/');

      // Convert form fields to a JSON-friendly string
      let formObj = Object.fromEntries(new FormData(form));
      let xhrObj = {fields: {}, options: {}};
      Object.entries(formObj).forEach(([key, value]) => {
        let a = key.indexOf('['), b = key.indexOf('reCaptcha');
        if (a == -1) { // key = "g-recaptcha-response"
          xhrObj[key] = value;
        } else if (a == 6 || (a == 7 && b == -1)) { // key = "fields[*]", "options[*]"
          xhrObj[key.slice(0, a)][key.slice(a + 1, -1)] = value;
        } else { // key = "options[reCaptcha][*]"
          // define xhrObj.options.reCaptcha if it doesn't exist
          xhrObj.options.reCaptcha = xhrObj.options.reCaptcha || {};
          xhrObj.options.reCaptcha[key.slice(b + 11, -1)] = value;
        }
      });
      let formData = JSON.stringify(xhrObj);  // some API don't accept FormData objects


      let xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          let status = xhr.status;
          if (status >= 200 && status < 400) {
            formSubmitted();
          } else {
            formError(err);
          }
        }
      };
      xhr.send(formData);

      return false;
    });

    function formSubmitted() {
      showAlert('success');
      setTimeout(function(){ clearForm() }, 3000); // display success message for 3s
      form.classList.remove('loading');
    }

    function formError(err) {
      console.log(err);
      showAlert('failed');
      form.classList.remove('loading');
    }

    function showAlert(msg) {
      if (msg == 'success') {
        form.querySelector('.submit-notice').classList.add('submit-success')
        form.querySelector('.submit-success').classList.remove('hidden');  // show submit success message
        form.querySelector('.submit-failed').classList.add('hidden'); // hide submit failed message
      } else {
        form.querySelector('.submit-notice').classList.add('submit-failed')
        form.querySelector('.submit-success').classList.add('hidden'); // hide submit success message
        form.querySelector('.submit-failed').classList.remove('hidden');  // show submit failed message
      }
      form.querySelector('input[type="submit"]:enabled').classList.remove('hidden'); // show "submit"
      form.querySelector('input[type="submit"]:disabled').classList.add('hidden');  // hide "submitted"
    }

    // empty all text & hidden fields but not options
    function clearForm() {
      resetReplyTarget();
      form.querySelector('.submit-notice').classList.remove('.submit-success'); // IE10 compatibility
      form.querySelector('.submit-notice').classList.remove('.submit-failed');
      form.querySelector('.submit-success').classList.add('hidden'); // hide submission status
      form.querySelector('.submit-failed').classList.add('hidden'); // hide submission status
    }

    function resetReplyTarget() {
      form.querySelector('.reply-notice .reply-name').innerText = '';
      form.querySelector('.reply-notice').classList.add('hidden'); // hide reply target display
      // empty all hidden fields whose name starts from "reply"
      Array.from(form.elements).filter(e => e.name.indexOf('fields[reply') === 0).forEach(e => e.value = '');
    }

    // record reply target when one of the "reply" buttons is pressed
    document.querySelector('.comments-container').addEventListener('click', function (evt) {
      let target = evt.target;
      if (target.matches('.comment-reply-btn')){
        resetReplyTarget();
        let cmt = target;
        while (!cmt.matches('.comment')) {  // find the comment containing the clicked "reply" button
          cmt = cmt.parentNode;
        }
        form.querySelector('input[name="fields[replyThread]"]').value = cmt.dataset.replyThread;
        form.querySelector('input[name="fields[replyID]"]').value = cmt.getAttribute('id');
        let replyName = cmt.querySelector('.comment-author').innerText
        form.querySelector('input[name="fields[replyName]"]').value = replyName;

        // display reply name
        form.querySelector('.reply-notice').classList.remove('hidden');
        form.querySelector('.reply-name').innerText = replyName;
      }
    });

    // handle removal of reply target when '×' is pressed
    form.querySelector('.reply-close-btn').addEventListener('click', resetReplyTarget);

    // clear form when reset button is clicked
    form.querySelector('input[type="reset"]').addEventListener('click', clearForm);
  }
})();
