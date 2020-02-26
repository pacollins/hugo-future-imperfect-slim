+++
author = "Hugo Auteurs"
title = "Emoji Support"
date = "2019-03-05"
description = "Guide d'utilisation des emoji dans Hugo"
tags = ["emoji"]
categories = [""]
images  = ["img/2014/04/pic01.jpg"]
type = "post"
+++

Emoji peut être activé dans un projet Hugo de plusieurs manières.
<!--more--->
La fonction [`emojify`] (https://gohugo.io/functions/emojify/) peut être appelée directement dans les modèles ou [Inline Shortcodes] (https://gohugo.io/templates/shortcode-templates/#inline- codes courts).

Pour activer globalement emoji, définissez `enableEmoji` sur` true` dans la [configuration] de votre site (https://gohugo.io/getting-started/configuration/), puis vous pourrez taper des codes abrégés emoji directement dans les fichiers de contenu; par exemple.


<p> <span class = "nowrap"> <span class = "emojify"> 🙈 </ span> <code>: see_no_evil: </ code> </ span> <span class = "nowrap"> <span class = "emojify"> 🙉 </ span> <code>: hear_no_evil: </ code> </ span> <span class = "nowrap"> <span class = "emojify"> </ span> <code>: speak_no_evil: </ code> </ span> </ p>
<br>

Le [aide-mémoire Emoji] (http://www.emoji-cheat-sheet.com/) est une référence utile pour les codes abrégés emoji.

***

** N.B.: ** Les étapes ci-dessus permettent d'activer des caractères emoji standard Unicode dans Hugo. Toutefois, le rendu de ces glyphes dépend du navigateur et de la plate-forme. Pour dénommer les émoticônes, vous pouvez utiliser une police emoji tierce ou une pile de polices. par exemple.

{{< highlight html >}}
.emoji {
font-family: Apple Color Emoji, Interface utilisateur Segoe Emoji, NotoColorEmoji, Symbole Segoe UI, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}

{{< css.inline >}}
<style>
.emojify {
font-family: Apple Color Emoji, Interface utilisateur Segoe Emoji, NotoColorEmoji, Symbole Segoe UI, Android Emoji, EmojiSymbols;
taille de la police: 2rem;
alignement vertical: milieu;
}
Écran @média et (largeur maximale: 650px) {
    .nowrap {
bloc de visualisation;
marge: 25px 0;
}
}
</ style>
{{< /css.inline >}}
