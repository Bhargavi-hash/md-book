# md-book

## [itap] preprocessor.js

This file takes an input md file and generates a HTML file which will be rendered to instead of the [itap] tags.

## Where to put my content?

1. Go to 'src' directory.
2. You may directly add a .md file or create a folder to add your files.
3. In case you want to make the page interactive, use the [itap] tag with the theory written and then prompt with "--prompt--" seperating them.

### Other tags
**1. [sc]**: This tag is for single correct options. It creates a radio button. The text should be put after the tag.
`[sc] This is option 1`
**2. [mc]**: This is for multiple correct choice options. It creates a check button. 
`[mc] Multiple option 1`
**3. [im] image_link=alt_text**: Use this in case you want to insert an image. image_link is the link to the image or path to the image. alt_text is the alternative text for the image.
`[img] sch_policy.png=sch_policy`
