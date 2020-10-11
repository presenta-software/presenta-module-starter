# PRESENTA Starter Module

This is a `starter` scaffonding to help develop your own PRESENTA module.

There are some parts you need to edit before publishing your own module:

- update the `name`, `version`, `unpkg` and `module` in `package.json`
- update the `file` and `name` in `rollup.config.js`
- update all the `starter` references in `src` and `test`

The following is a template documentation for the end user that needs to be integrated as well.

## Installation

Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#install-an-official-plugin) using this unique identifier: `module-starter`

## Usage

To configure this module use this setting:

```js
{
    modules:{
      starter:true
    }
}
```


## Development

Run the watcher:

    npm start

and the local webserver

    npm run test



