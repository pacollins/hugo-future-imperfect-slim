+++
author = "Hugo Auteurs"
title = "Guide de syntaxe de Markdown"
date = "2019-03-11"
description = "Exemple d'article présentant la syntaxe et le formatage de base de Markdown pour les éléments HTML."
tags = ["markdown", "css", "html", "themes"]
categories = ["themes", "syntax"]
images  = ["img/2014/04/pic02.jpg"]
type = "post"
aliases = ["migrate-from-jekyl"]
+++

Cet article propose un exemple de syntaxe de base de Markdown pouvant être utilisée dans les fichiers de contenu Hugo. Il indique également si les éléments HTML de base sont décorés avec CSS dans un thème Hugo.
<!--more-->

## Rubriques

Les éléments HTML `<h1>` —` <h6> `suivants représentent six niveaux d'en-tête de section. `<h1>` est le niveau de section le plus élevé tandis que `<h6>` est le plus bas.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraphe

Xerum, mais qui est un peu explicite sur le labo. Ace venitatiusda cum, voluptionse latur sitiae dolessi aut paristo nue en vol qui voluptate dolestendit péritin re plis aut quas inctum laceat est volestemque commosa comme date de fin, agent de base Quianimin porecus evelectur, cum que nis noll voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Vérifiez les résultats, notez les réponses, les rapports, les rapports, les chiffres, les chiffres, les chiffres, les chiffres, les chiffres, le temps, le temps, le temps, la durée, le temps, le temps, et le temps, puis le temps.

Itatur? Quiatae cullecum se souvient de manière automatique dans les archives non-formées. Sapicia est sinveli squiatum, noyau et que aut hariosam ex eat.

## Blockquotes

L'élément blockquote représente le contenu cité d'une autre source, éventuellement avec une citation qui doit figurer dans un élément `footer` ou` cite`, et éventuellement avec des modifications en ligne telles que des annotations et des abréviations.

#### Blockquote sans attribution

> Tiam, menthe et andaepu dandae nostion secatur sequo quae.
> **Remarque** que vous pouvez utiliser la syntaxe * Markdown * dans un bloc de citation.

#### Blockquote avec attribution

> Ne communiquez pas en partageant la mémoire, partagez la mémoire en communiquant. </p>
> - <cite> Rob Pike [^1] </cite>


[^1]: La citation ci-dessus est extraite de [conversation] de Rob Pike (https://www.youtube.com/watch?v=PAAkCSZUG1c) lors de la fête de Gopherfest, le 18 novembre 2015.

## Les tables

Les tables ne font pas partie de la spécification Markdown principale, mais Hugo les prend en charge immédiatement.

   Nom | Âge
-------- | ------
    Bob | 27
  Alice | 23

#### Inline Markdown au sein des tables

| En ligne & nbsp; & nbsp; & nbsp; | Markdown & nbsp; & nbsp; & nbsp; | Dans & nbsp; & nbsp; & nbsp; | Tableau |
| ---------- | --------- | ----------------- | ---------- |
| * italique * | ** gras ** | ~~ barré ~~ & nbsp; & nbsp; & nbsp; | `code` |

## Blocs de code

#### Bloc de code avec backticks

```
html
<! DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Exemple de document HTML5 </title>
</head>
<body>
  <p> Test </p>
</body>
</html>
```
#### Bloc de code indenté de quatre espaces

    <! DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Exemple de document HTML5</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### Bloc de code avec le shortcode interne de la surbrillance de Hugo
{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title> Exemple de document HTML5 </title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## Types de liste

#### Liste ordonnée

1. Premier article
2. Deuxième élément
3. Troisième article

#### Liste non ordonnée

* Élément de liste
* Un autre article
* Et un autre article

#### Liste imbriquée

* Article
1. Premier sous-article
2. Deuxième sous-article

## Autres éléments - abbr, sous, sup, kbd, mark

<abbr title="Format d'échange graphique">GIF</abbr> est un format d'image bitmap.

H<sub>2</sub>O

X<sup>n</sup>+Y<sup>n</sup>=Z<sup>n</sup>

Appuyez sur <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Supprimer</kbd></kbd> pour mettre fin à la session.

La plupart des <mark>salamandres</mark> sont nocturnes et chassent les insectes, les vers et autres petites créatures.
