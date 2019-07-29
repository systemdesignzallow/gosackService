# Zallo Project

> General Description Service

## Related Projects

<https://github.com/systemdesignzallow>
  
## Table of Contents

1. [Installing Dependencies](#InstallingDependencies)
1. [Usage](#Usage)

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack nodemon
npm install
```

## Usage

```JSON
    "precommit": "NODE_ENV=production lint-staged",
    "test": "mocha ./test/test.js --exit",
    "test:client": "webpack --watch --config ./webpack.config.js --mode development & nodemon ./server/test.js",
    "test:client:circleci": "mocha ./public/test-bundle.js --require ./test/setup.js",
    "build": "webpack --config ./webpack.config.js --mode development",
    "start": "webpack --config ./webpack.config.js --watch  --mode development & nodemon ./server/index.js",
    "start-dev": "node ./server/index.js"
```


