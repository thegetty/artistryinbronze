---
title: Figures Documentation
weight: 1001
type: page
menu: true
---

## Samples

#### Basic Figure shortcode

```
{{</* q-figure id="1.5" */>}}
```

{{< q-figure id="1.5" >}}

#### Figure shortcode with a class

```
{{</* q-figure id="1.5" class="float-left" */>}}
```

{{< q-figure id="1.5" class="float-left" >}}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna nunc, cursus ut justo eu, gravida feugiat massa. Ut et leo feugiat, faucibus nibh eget, pellentesque ex. Etiam eu malesuada ex. Nam at sodales libero, nec lacinia dolor. Proin at nibh quis enim aliquam euismod id eget purus. Duis suscipit sodales gravida. Pellentesque ut turpis diam. Donec libero elit, accumsan in sapien in, sodales vestibulum orci. Quisque pulvinar venenatis nulla, at pretium elit luctus ac. Mauris aliquam aliquam dignissim. Etiam sed metus tincidunt, tristique ligula et, rutrum justo. Praesent ac velit in erat finibus rutrum. Suspendisse id egestas odio. Aenean aliquet varius est, vitae auctor mi posuere sit amet. Sed vestibulum ante ac consectetur aliquet. In malesuada vulputate blandit. Etiam in malesuada tortor. Vestibulum ornare justo in nisi commodo, sollicitudin facilisis quam bibendum.

#### Basic Figure Group shortcode

```
{{</* q-figure-group id="1.5, 1.5" */>}}
```

{{< q-figure-group id="1.5, 1.5" >}}

#### Figure Group shortcode in grid of three

```
{{</* q-figure-group id="1.5, 1.5, 1.5, 1.5, 1.5, 1.5" grid="3" */>}}
```

{{< q-figure-group id="1.5, 1.5, 1.5, 1.5, 1.5, 1.5" grid="3" >}}

#### Figure Group shortcode with labels and a custom caption

```
{{</* q-figure-group id="1.5" grid="2" label="true" caption="Duis suscipit sodales gravida. Pellentesque ut turpis diam (**figure 1.5**). Donec libero elit, accumsan in sapien in, sodales vestibulum orci." */>}}
```

{{< q-figure-group id="1.5, 1.5" grid="2" label="true" caption="Duis suscipit sodales gravida. Pellentesque ut turpis diam (**figure 1.5**). Donec libero elit, accumsan in sapien in, sodales vestibulum orci." >}}

#### Figure Group shortcode with many images and a custom caption

```
{{</* q-figure-group id="1.5, 1.5, 1.5, 1.5,1.5, 1.5, 1.5, 1.5" grid="4" label="false" caption="Clockwise, from top left: Duis suscipit sodales gravida. Pellentesque ut turpis diam. Donec libero elit, accumsan in sapien in, sodales vestibulum orci." */>}}
```

{{< q-figure-group id="1.5, 1.5, 1.5, 1.5,1.5, 1.5, 1.5, 1.5" grid="4" label="false" caption="Clockwise, from top left: Duis suscipit sodales gravida. Pellentesque ut turpis diam. Donec libero elit, accumsan in sapien in, sodales vestibulum orci." >}}

#### Figure Group shortcode with images of different sizes

```
{{</* q-figure-group id="1.2, 1.5, 1.7" grid="3" */>}}
```

{{< q-figure-group id="1.2, 1.5, 1.7" grid="3" >}}


#### Figure Group shortcode with images aligned and a custom caption

```
{{</* q-figure-group id="1.2, 1.5, 1.7" grid="3" grid-align="bottom" caption="From left to right: Duis suscipit sodales gravida. Pellentesque ut turpis diam. Donec libero elit, accumsan in sapien in, sodales vestibulum orci. Quisque pulvinar venenatis nulla, at pretium elit luctus." */>}}
```

{{< q-figure-group id="1.2, 1.5, 1.7" grid="3" grid-align="bottom" caption="From left to right: Duis suscipit sodales gravida. Pellentesque ut turpis diam. Donec libero elit, accumsan in sapien in, sodales vestibulum orci. Quisque pulvinar venenatis nulla, at pretium elit luctus." >}}

## Documentation

#### Basic Figures

Figures—including still images and animated gifs—can be inserted in any Markdown document in your publication with the `q-figure` shortcode, where `src` is the name of your file as it appears in the `figures` folder of your project.

```
{{</* q-figure src="fig01.jpg" */>}}
```

Unless the figure is purely decorative, it should always also include an alternate textual description (`alt`) for the use of screen readers and other assistive technologies.

```
{{</* q-figure src="fig01.jpg" alt="detail of painting showing diagonal brushstrokes in browns and reds" */>}}
```

By default, figures are the full width of the text column (depending on your theme), but may be styled by adding a class within the shortcode.

```
{{</* q-figure src="fig01.jpg" alt="detail of painting showing diagonal brushstrokes in browns and reds" class="float-left" */>}}
```

Available in all Quire themes are "float-left" (smaller and to the left), "float-right" (smaller and to the right), "small-center" (for decorative elements), and "plate" (big). Some themes may offer additional options, and styles may be edited and new styles added in any theme with [css](#link).

In the same way you add styles and alternate texts to a shortcode, captions and other information can be included in a similar manner. The following attributes are suported in the `q-figure` shortcode. They may be called within the shortcode in any order.

| Attribute | Value |
| --- | --- |
|`id` | Numbers and lowercase letters only, with no spaces or special characters (`001`, `fig-01a`, etc). This can be used to create an anchor that can be linked to directly (`mypublication.com/chapter01/#fig-01a`). It can also be used in conjunction with a `figures.yml` file in your project for cetralized figure handling and for creating figure groups. |
| `src` | the file name (`fig01.jpg`), and if it’s in a sub-folder within the main `figures` directory, it should include that folder name as well (`comparatives/fig01.jpg`). |
| `class` |  Add predefined styles to your figures. Supported values are "float-left", "float-right", "small-center", and "plate". More can be added with css. |
| `alt` | For accessibility, all images should have alternative text descriptions. ([Tips on crafting good alt text.](#link)) Only ever leave blank if the image is purely decorative. |
| `label` | When using a `figures.yml` document, if label is set to `true`, label text will be automatically generated from the `id` value and with the `imageLabelContentBefore` value defined in your `config.yml` file, and added to your layout under or on the corner of the image, depending on your theme. If not using a `figures.yml` document or if text other than `true` is used, it will override the use of the `imageLabelContentBefore` value, and appear in the label as is. |
| `caption` | The caption to appear below the figure. Special characters are allowed. Use Markdown for formatting. |
| `grid` | Whole integer values: 2, 3, 4 etc. For use specifically with the `q-figure-group` shortcode.  |
| `grid-align` | Can be "top" or "bottom". For use specifically with the `q-figure-group` shortcode. Useful for when images in the grid are different sizes.  |
| `media-type` | Not yet available. Supported values are: video, youtube, vimeo, audio, soundcloud. For use specifically with the `q-figure-media` shortcode. |
| `fallback` | Not yet available.  |

As you can imagine, when including many attributes, shortcodes can quicky become not so short. One way to manage this is by using a `figures.yml` file.

#### Using figures.yml

Figures and all their associated attributes can be listed in a single `figures.yml` file in your `data` folder, and then called from wherever you need them in your project.

```yaml
- id: "001"
  src: "fig01.jpg"
  alt: "detail of painting showing diagonal brushstrokes in browns and reds"
  caption:
- id: "002"
  src: "fig02_withframe.jpg"
  alt: "painting of man in brown and red cloak, shown from the waist up, in a gold frame on a dark red wall"
  caption:
```

Assuming each yaml figure entry includes a unique `id`, you can insert a figure in your publication with only the `id` attribute, and all of the other attributes defined in the yaml for that figure, will be automaticallly included.

```
{{</* q-figure id="###" */>}}
```

If you include an attribute in the shortcode that is also in the `figures.yml` file, the `figures.yml` version is overridden. This can be useful when, for example, a figure is used in multiple locations and you want different captions.

```
{{</* q-figure id="###" caption="" */>}}
```

Note that including an attribute in this way but leaving it blank, as in the caption example above, can also be used to display no caption at all, even if one is present in `figures.yml`.

If you use a shortcode with both `src` ad `id` Quire will insert your figure image and give it the `id`, but will ignore any data in the `figures.yml` even if an `id` matches.

```
{{</* q-figure src="fig01.jpg" id="###" */>}}
```

#### Figure Groups

Using a `figures.yml` file gives you the additional ability to create a group of figures by using the `q-figure-group` shortcode extension and simply including multiple, comma-separated values in the `id` field.

```
{{</* q-figure-group id="###, ###, ###" */>}}
```

In the above example, each figure’s caption will be included. Alternatively, if you add a `caption` field directly in the shortcode, it will override those present in the `figures.yml` file and display in the group alone, usually along the bottom depending on your theme.

Just as with the single `q-figure` shortcode, classes can be added to groups to style them. For example, to create a small group of images running along one side of your text.

```
{{</* q-figure-group class="float-right" id="###, ###, ###" */>}}
```

In addition to all the attributes available to the `q-figure` shortcode, the `q-figure-group` extension also supports the `grid` attribute to specify a preferred grid width. In the below example, a `grid="2"` is specified and so the gallery grid will be 2 images wide at you publication layout's full-size. Alternately, if you specified `grid="4"` the grid would be 4 images wide making each image relatively smaller.

```
{{</* q-figure-group grid="2" id="###, ###, ###, ###" */>}}
```

Note that this is only a **preferred** grid width. With Quire’s responsively desiged templates, the specific width of images is variable and their position relative to one another may also change depending on a reader’s device. For instance, on a large monitor, four images in a group may appear side-by-side in a row, whereas on a phone, they would most likely be in a 2 x 2 grid, or stack one on top of another.

This responsiveness also means that group captions that use language like “From left to right” or "Clockwise from upper left," will only be correct some of the time. To avoid this issue and ensure a clear reading experience across all devices and publication formats we recommend labeling figures. Adding `label="true"` to the shortcode will add a small text label to each image in the group (usually right below the image or in a corner on top of it, depending on your theme), which you can then reference in the caption, rather than referencing the figure’s relative position. The label text is constructed automatically with the `id` of the image and the `imageLabelContentBefore` value defined in your `config.yml` file. For example if the `id` value is "12.3" and the `imageLabelContentBefore` value is "Figure ", the `label` would be "Figure 12.3".

And `label` will work similarly in any `q-figure` shortcode, not just groups.

Finally, for grids, individual figures will center themselves vertically by default. When grid images are differen sizes, a top or bottom alignment may be preferred. For this, you can use the `grid-align` attribute set to either "top" or "bottom".
