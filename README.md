# lunastra
> A client-side full-text search engine.

Lunastra is a full-text search engine with focus on customization. It started out as a partial ES6 port of [Elasticlunr](https://github.com/weixsong/elasticlunr.js) (you can find the initial es6 ported module in the _base_ branch) and has been heavily revamped with new behaviour, structure, features and APIs.

## Installation & Usage

ES6:

```javascript

```

From script:

```html

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


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

# Documentation

Documentation is generated with JsDoc and jsdoc2md and located in docs/api.md. Run:
```sh
bash docs/docs.sh
```
to generate the documentation automatically from your JsDoc comments.

<!-- Markdown link & img dfn's -->
[wiki]: https://github.com/yuxuan-ji/domql/wiki
