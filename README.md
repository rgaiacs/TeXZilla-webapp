# TeXZilla-webapp

This is a demo for Firefox OS that use
[TeXZilla](https://github.com/fred-wang/TeXZilla).

## License

See [LICENSE](LICENSE).

## Dependencies

- [TeXZilla](https://github.com/fred-wang/TeXZilla)
  - Directory: `texzilla`
  - License: Mozilla Public License, v. 2.0
- [Building Blocks](https://github.com/buildingfirefoxos/Building-Blocks)
  - Directory: `building-blocks`
  - License: Apache License, Version 2.0

## Build

~~~
$ make build
~~~

To view the webapp open the file `index.html`.

## Package

~~~
$ make package
~~~

The file `texzilla-webapp.zip` is your package app.
