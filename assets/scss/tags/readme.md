Tags
===

## Content Models

We're using the HTML5 [Content Model Spec](http://www.w3.org/TR/2011/WD-html5-20110525/content-models.html) to define the structure of the [`tags/*`](_*.scss "View file...") import file. Below is an overview of all HTML tags included by each model:

#### Metadata

Sets up the presentation or behavior of the rest of the content, or that sets up the relationship of the document with other documents, or that conveys other “out of band” information.

###### Elements:

	- base
	- command
	- link
	- meta
	- noscript
	- script
	- style
	- title

#### Flow

Elements that are used in the body of documents and applications are categorized as **flow content**.

###### Elements:

	- a
	- abbr
	- address
	- article
	- aside
	- audio
	- b
	- bdi
	- bdo
	- blockquote
	- br
	- button
	- canvas
	- cite
	- code
	- command
	- datalist
	- del
	- details
	- dfn
	- div
	- dl
	- em
	- embed
	- fieldset
	- figure
	- footer
	- form
	- h1
	- h2
	- h3
	- h4
	- h5
	- h6
	- header
	- hgroup
	- hr
	- i
	- iframe
	- img
	- input
	- ins
	- kbd
	- keygen
	- label
	- map
	- mark
	- math
	- menu
	- meter
	- nav
	- noscript
	- object
	- ol
	- output
	- p
	- pre
	- progress
	- q
	- ruby
	- s
	- samp
	- script
	- section
	- select
	- small
	- span
	- strong
	- sub
	- sup
	- svg
	- table
	- textarea
	- time
	- u
	- ul
	- var
	- video
	- wbr
	- text

#### Sectioning

Defines the scope of headings and footers.

###### Elements:

	- article
	- aside
	- nav
	- section

#### Heading

Defines the header of a section (whether explicitly marked up or implied).

###### Elements:

	- h1
	- h2
	- h3
	- h4
	- h5
	- h6
	- hgroup

#### Phrasing

Text of the document, as well as elements that mark up that text at the intra-paragraph level.

###### Elements:

	- abbr
	- audio
	- b
	- bdi
	- bdo
	- br
	- button
	- canvas
	- cite
	- code
	- command
	- datalist
	- dfn
	- em
	- embed
	- i
	- iframe
	- img
	- input
	- kbd
	- keygen
	- label
	- mark
	- math
	- meter
	- noscript
	- object
	- output
	- progress
	- q
	- ruby
	- s
	- samp
	- script
	- select
	- small
	- span
	- strong
	- sub
	- sup
	- svg
	- textarea
	- time
	- u
	- var
	- video
	- wbr
	- text

###### Conditional:

	- a (if it contains only phrasing content)
	- area (if it is a descendant of a map element)
	- del (if it contains only phrasing content)
	- ins (if it contains only phrasing content)
	- map (if it contains only phrasing content)

#### Embedded

Content that imports another resource into the document, or content from another vocabulary.

###### Elements:

	- audio
	- canvas
	- embed
	- iframe
	- img
	- math
	- object
	- svg
	- video

#### Interactive

Content that is specifically intended for user interaction.

###### Elements:

	- a
	- button
	- details
	- embed
	- iframe
	- keygen
	- label
	- select
	- textarea

###### Conditional:

	- audio (if the controls attribute is present)
	- img (if the usemap attribute is present)
	- input (if the type attribute is not in the hidden state)
	- menu (if the type attribute is in the toolbar state)
	- object (if the usemap attribute is present)
	- video (if the controls attribute is present)