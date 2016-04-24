[![NPM Version][npm-image]][npm-url]

## kora

kora is a **Koa** generator, but easy to generator node.js server with simple RESTful service.Also build-in babel support

## Usage

First of all, make sure you have already install [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.org/downloads)

```bash
npm install -g kora
```

generate your koa server with:

```bash
kora /your/projectName && cd /your/projectName
```

install dependencies && dev-dependencies

```bash
npm install
```

or:

```bash 
pnpm install
```

[pnpm?](https://github.com/rstacruz/pnpm)


## NOTE

For now,kora default view engine is `jade`,default database is `MongoDB` with ODM by [mongorito](https://github.com/vdemedes/mongorito)