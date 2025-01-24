module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "extends": ["airbnb", "airbnb/hooks", "airbnb-typescript"],
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "settings": {
      "react": {
        "version": "detect",
      },
    },
    "rules": {
        "react/prop-types": "off"
    }
};