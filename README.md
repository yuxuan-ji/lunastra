<p align="left">
    <img src="./logo.svg"
        height="170">
</p>

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0b878e7ade34055a63c265663797537)](https://www.codacy.com/app/yuxuan98/lunastra?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=yuxuan-ji/lunastra&amp;utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/github/yuxuan-ji/lunastra/badge.svg?targetFile=package.json)](https://snyk.io/test/github/yuxuan-ji/lunastra?targetFile=package.json)
[![MIT Licence](https://img.shields.io/apm/l/vim-mode.svg?color=blue)](https://github.com/yuxuan-ji/lunastra/blob/master/LICENSE)
[![Size](https://img.shields.io/github/size/yuxuan-ji/lunastra/dist/lunastra.min.js.svg?color=green)](https://github.com/yuxuan-ji/lunastra/blob/master/dist/lunastra.min.js)

Lunastra is a full-text search engine with focus on customization. 

## Installation & Usage

ES6:

```javascript
import * as Lunastra from './Lunastra.min.js';
```

From script:

```html
<script src="https://cdn.jsdelivr.net/gh/yuxuan-ji/lunastra@master/dist/Lunastra.min.js"></script>
```

From there, a simple Index be created like so:
```javascript
var doc1 = {title: 'Foo', body: 'Bar', author: 'foo@bar.baz', date:'foo/bar/baz'};
var index = Lunastra.init({
    id: 'id',
    fields: ['title', 'body', 'author', 'date'],
    documents: [doc1]
});
```

Searching can be done on the indexed fields of the documents:
```javascript
index.search('Bar') // returns [doc1]
```

## More examples

_For even more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Install Dependencies:

```sh
npm install
```

Build lib:

```sh
npm run build
```

Build non-minified and run playground:

```sh
npm run dev
```

Run tests:

```sh
npm run test
```

## Acknowledgement

Lunastra was built upon a partial ES6 revamp of [Elasticlunr](https://github.com/weixsong/elasticlunr.js) (you can find this partial module in the _base_ branch).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Documentation

Documentation is generated with JsDoc and jsdoc2md and located in their respective locations in _src/_. Run:
```sh
npm run build:docs
```
to generate the documentation automatically from your JsDoc comments.

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/yuxuan-ji/lunastra/wiki
