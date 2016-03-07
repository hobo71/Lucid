# A Useful Sass Library

A Useful Sass Library is a library of classes and mixins for use in web applications
using SASS.

The library includes a number of useful mixins for such things as easily applying retina images
to elements, applying certain styles above or below a certain breakpoint, and for
adding a default box-shadow using a specified 'level'.

Also included are classes which can be used to quickly style and layout your HTML.
These include:

* Helper classes for applying padding of various sizes to an element
* Helper classes for applying margins of various sizes to an element
* Helper classes for applying depth (z-index) to elements
* Helper classes for aligning and justifying elements using the `flexbox` layout

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
