# boilerplate-eslint-prettier-basic

At this point,

ESLint works. It displays squiggly lines.
ESLint works with ES6 syntax.
ESLint recommended rules are applied.
My custom ESLint rules (.eslintrc) are applied.

Prettier works. It automatically formats my defined rules on save.

"extends": ["eslint:recommended", "plugin:prettier/recommended"]
Prettier is last bc we want Prettier rules to override everything.

## ESLint Integration - Recommended configuration

If I do this:
"extends": ["plugin:prettier/recommended"]

Then I don't need to do this:
"extends": ["prettier"] // Disable formatting rules
and
"plugins": ["prettier"], // Use ESLint to run Prettier
"rules": { "prettier/prettier": "error" }
