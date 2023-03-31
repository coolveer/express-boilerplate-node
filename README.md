#  express-boilerplate-node
  Fast, unopinionated, minimalist boilerplate [Node.js](http://nodejs.org).

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```js
├── docker-compose.yml
├── Dockerfile
├── package.json
├── package-lock.json
├── prettier.config.js
├── src
│   ├── app.ts
│   ├── common
│   ├── config
│   ├── connection.ts
│   ├── controllers
│   ├── helpers
│   ├── interfaces
│   ├── models
│   ├── responses
│   ├── server.ts
│   ├── test
│   ├── utils
│   └── validations
├── swagger.json
└── tsconfig.json

```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If setting this first time using
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) globally:

Installation is done using the
[`npm install express-boilerplate-node -g` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install express-boilerplate-node -g
```

Contribute to [readMe](https://github.com/coolveer/express-boilerplate-node).


## Features

  * Easy and efficient code.
  * Integrated with husky hooks for pre commit.
  * Highly scalable at large stages
  * Good test coverage
  * MVC structure with environment variables
  * 3 database structure with example
  * Executable for generating applications quickly



## Quick Start

  The quickest way to get started with express is to utilize the executable [`npx express-boilerplate-node`](https://github.com/expressjs/generator) to generate a template as shown below:

  Install the executable. The executable's major version will match Express's:

```console
$ npm install -g express-boilerplate-node
```

  Create the boilerplate:

```console
$ npx express-boilerplate-node [project-name]
```
 Select boilerplate

 ```console
  ? select the databse you want to use ? (Use arrow keys)
  
❯ cassendra database 
  mongoDB database 
  Mysql database 


 ```

  Plate setup:

```console
$ npm run set
```

  Start the docker:

```console
$ docker compose up
```
  Start app:

```console
$ npm run dev
```  
Build app:

```console
$ npm start
```

  View the backend at: http://localhost:${PORT}/api/typec

## Philosophy

  The main philosophy is to provide small, robust tooling for backend developers, making it a great solution for quick application setup on diverse databses,
  HTTP APIs.

  express-boilerplate-node does not force you to use any specific ORM or template engine. With support for over

## Examples

  To view the examples, clone the boilerplate repoz and install the dependencies:

### cassandra-database
```console
$ git clone https://github.com/coolveer/boilerplate-node-express-cassandra
$ cd boilerplate-node-express-cassandra
$ npm run set
```

### mongodb-database
```console
$ git clone https://github.com/coolveer/boilerplate-node-express-mongodb
$ cd boilerplate-node-express-mongodb
$ npm run set
```

### cassandra-database
```console
$ git clone hhttps://github.com/coolveer/boilerplate-node-express-mysql
$ cd boilerplate-node-express-mysql
$ npm run set

```

  Then run whichever example you want:

```console
$ npm run dev
```

## Contributing

  [![Linux Build][github-actions-ci-image]][github-actions-ci-url]
  [![Linux Build][github-actions-ci-image-1]][github-actions-ci-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

Our project welcomes all constructive contributions. Contributions take many forms,
from code for bug fixes and enhancements, to additions and fixes to documentation, additional
tests, triaging incoming pull requests and issues, and more!

Feel free to contribute at [express-boilerplate-node-github](https://github.com/coolveer/express-boilerplate-node) 


### Running Tests

To run the test , :

```console
$ npm run fix   //eslint && prettier && mocha-chai tests
$ npm test      //mocha-chai test
```

## Contributors

* ### [Veer Pratap Singh](https://github.com/coolveer)

* ### [Malay Srivastava](https://github.com/malaysrivastava)



## License

  [ISC](LICENSE)


[appveyor-image]: https://badgen.net/appveyor/ci/dougwilson/express/master?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://badgen.net/coveralls/c/github/expressjs/express/master
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
[github-actions-ci-image]: https://badgen.net/github/checks/expressjs/express/master?label=linux
[github-actions-ci-image-1]: https://badgen.net/github/checks/expressjs/express/master?label=mac
[github-actions-ci-url]: https://github.com/expressjs/express/actions/workflows/ci.yml
[npm-downloads-image]: https://badgen.net/badge/npm/v18/purple
[npm-downloads-url]: https://npmcharts.com/compare/express?minimal=true
[npm-install-size-image]: https://badgen.net/badge/size/2.98kb/purple
[npm-install-size-url]: https://packagephobia.com/result?p=express
[npm-url]: https://npmjs.org/package/express
[npm-version-image]: https://badgen.net/badge/downloads/500+/purple
