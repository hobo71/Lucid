# Lucid
## Web Page Styling Made Clear

As web developers, we all know how difficult it can be to start styling a new project, or refactor an old one.

You have to add relevant and understandable classes to your HTML, trying to make sure that you won't repeat yourself
or run into cascade problems when it comes to writing your CSS.

Then you have to create your stylesheets, make sure that they're not too bloated or complex, and make sure
that you're using consistent styling across multiple elements.

It can be very tricky to ensure that you're not going to make a mess of things, or lose track of what you've written
in the past.

Additionally, it can be a nightmare to change things when designs are changed if you haven't been very thorough
in the setup of your stylesheets.

This is where **Lucid** comes to the rescue.

Lucid is a library written in SASS which makes it easy to go from design to implementation, and makes it
very easy to adjust the implementation when designs are changed.

Lucid allows you to configure your project settings - such as the colours you will use, fonts, padding sizes, etc. - and
generates (or provides out of the box) a number of CSS classes which you can use directly in your HTML.

For example, you can configure Lucid with all the colours that you will need to use in your application and assign
labels to them, and lucid will generate classes for these colours which can be used to style the background colour,
text colour, or border colour of an element, i.e. `dark-one: #000` would generate the following classes:

```scss
.bg--dark-one { background-color: #000; }
.text--dark-one { color: #000; }
.border--dark-one { border-color: #000; }
```

### Configuring Colour Classes

TODO: complete

### Configuring Layout Classes

TODO: complete

-----

## Installation
You can install this package with `bower`, via:

```bash
$ bower install a-useful-sass-library
```

## Documentation
The source code is commented using `sassdoc` comments. You can view the documentation by cloning
the repository and opening `sassdoc/index.html` in a browser.

## Usage
In order to use the library, download the package from bower, then either copy and
paste the source code into your styles folder, or import the library into a relevant file,
e.g.

```scss
@import 'path/to/package/library.scss';
```

### Overriding Default Settings
The colours, breakpoint sizes, margin settings, padding settings, etc, used in the helper
classes are defined in the `src/settings` folder of `a-useful-sass-library`.

If you wish to override these, simply copy and paste the library into your project and update
whichever settings you require.

## Examples

### Applying styles below a breakpoint
```scss
h2 {
  font-size: 36px;
  
  @include below-breakpoint($sizes--breakpoint-small) {
    font-size: 30px;
  }
}
```

### Applying styles above a breakpoint
```scss
h2 {
  font-size: 36px;
  
  @include above-breakpoint($sizes--breakpoint-small) {
    font-size: 40px;
  }
}
```

### Setting a retina image
```scss
.logo {
  background-image: url(/path/to/normal/image);
  
  @include on-retina-screens($sizes--breakpoint-small) {
    background-image: url(/path/to/retina/image);
  }
}
```

### Adding extra-large padding to a container
```html
<div class="container p-xl">
  Some content
</div>
```

### Adding large margin to a container
```html
<div class="container m-lg">
  Some content
</div>
```

-------

## License
The MIT License (MIT)

Copyright (c) 2015 Adam Murray

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
