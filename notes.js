/* =================================================================  
                          CURRENT STATE
================================================================= */

/*
4 DEPENDENCIES
eslint
eslint-config-prettier
eslint-plugin-prettier
prettier

ESLINT RULES
"no-console": 0,
"func-names": 0,
"consistent-return": 0,
"prettier/prettier": "error"

PRETTIER RULES
"tabWidth": 2,
"printWidth": 80,
"singleQuote": true,
"semi": true

ESLINT CONFIG
"extends": ["prettier"]
"plugins": ["prettier"]

MY NOTES
The only ESLint rules applied are the ones I specified in config file.
ESLint works. It displays squiggly lines.
Prettier works. It automatically formats my defined rules on save.

--------------------------------------------------------------------
https://eslint.org/docs/user-guide/getting-started

npm install eslint --save-dev

https://thomlom.dev/setup-eslint-prettier-react/

npm install prettier --save-dev
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

eslint-config-prettier disables rules that conflict with Prettier  
eslint-plugin-prettier adds the rule that format content using Prettier

 */

/* =================================================================  
                              NOTES
================================================================= */

/*
Configuring ESLint
https://eslint.org/docs/user-guide/configuring

Configuration File Formats

ESLint supports configuration files in several formats:
- JavaScript - use .eslintrc.js and export an object containing your configuration.
- JSON - use .eslintrc.json to define the configuration structure. 
ESLint's JSON files also allow JavaScript-style comments.

If there are multiple configuration files in the same directory, ESLint will only use one. 
The priority order is:
1. .eslintrc.js
2. .eslintrc.cjs
3. .eslintrc.yaml
4. .eslintrc.yml
5. .eslintrc.json
6. .eslintrc
7. package.json

--------------------------------------------------------------------
.ESLINTRC.JSON

ESLint rule
0 - turns the rule off // "off"
1 - turn the rule on as a warning (doesn't affect exit code) // "warn"
2 - turn the rule on as an error (exit code is 1 when triggered) // "error"

--------------------------------------------------------------------
HOW TO WRITE RULES 

"arrow-parens": ["error", "always"]  // my guess

"eqeqeq": "off"
"eqeqeq": "warn"
"eqeqeq": 0
"eqeqeq": ["error", "allow-null"]
"eqeqeq": ["warn", "allow-null"]

--------------------------------------------------------------------
PLUGIN RULES

To configure a rule which is defined within a plugin you have to prefix the rule ID with the plugin name and a /. 
For example:
"plugin1/rule1": "error"

--------------------------------------------------------------------
ESLINT RULES - EFFECTS

warn 
- shows lavender squiggly line in code. When you hover over squiggly line, you get a pop-up with an explanation message
Shows up as warning in ESLint terminal
Shows up as warning in ESLint terminal

error 
- shows red squiggly line in code.

Shows up as error in ESLint terminal (Expected '===' and instead saw '=='.)
Shows up as error in Prettier terminal

ESLint rules do NOT get automatically fixed on save.
Prettier rules DO get automatically fixed on save.

--------------------------------------------------------------------
https://thomlom.dev/setup-eslint-prettier-react/

ESLINT

plugins
Basically, plugins are a set of ESLint rules related to a same subject. As an example, eslint-plugin-react contains many rules related to React.
Caution: you have to install the plugin as a dev dependency if you want your rules to work properly.

extends
Allows you to extend your configuration file from others configurations. 
A popular one is react-app provided by Create React App. 
That's also in extends that you can use popular style guides such as the one of Airbnb, Google or Standard.

Integrate Prettier with ESLint

ESLint has formatting rules too like max-len (similar to printWidth) or quotes. 
Well, if you use Prettier, you aren't going to need such rules. 
Prettier replaces ESLint's formatting rules but doesn't replace code-quality rules.

Thus, you can integrate Prettier in your ESLint configuration by installing the following:
eslint-config-prettier 
eslint-plugin-prettier

eslint-config-prettier disables rules that conflict with Prettier  
eslint-plugin-prettier adds the rule that format content using Prettier

You can enable this configuration by using the recommended one:
"extends": ["plugin:prettier/recommended"]
tell ESLint we'll use Prettier's recommended configuration

--------------------------------------------------------------------
https://prettier.io/docs/en/integrating-with-linters.html

ESLint - Disable formatting rules
eslint-config-prettier is a config that disables rules that conflict with Prettier. 
extend from it within your .eslintrc configuration. 
Make sure to put it LAST in the extends array, so it gets the chance to OVERRIDE other configs.
"extends": ["prettier"]

Use ESLint to run Prettier
eslint-plugin-prettier is a plugin that adds a rule that formats content using Prettier. 
"plugins": ["prettier"],
"rules": { "prettier/prettier": "error" }

Recommended configuration
eslint-plugin-prettier exposes a "recommended" configuration that configures both eslint-plugin-prettier and eslint-config-prettier in a single step. 
extend the recommended config:
"extends": ["plugin:prettier/recommended"]

--------------------------------------------------------------------
https://eslint.org/docs/user-guide/configuring

Specifying Parser Options

ESLint allows you to specify the JavaScript language options you want to support. 
By default, ESLint expects ECMAScript 5 syntax. 
You can override that setting to enable support for other ECMAScript versions as well as JSX by using parser options.
We recommend using eslint-plugin-react if you are using React and want React semantics. 
By the same token, supporting ES6 syntax is not the same as supporting new ES6 globals (e.g., new types such as Set). 

For ES6 syntax, use { "parserOptions": { "ecmaVersion": 6 } }; 
for new ES6 global variables, use { "env": { "es6": true } }. 

{ "env": { "es6": true } } enables ES6 syntax automatically, 
but { "parserOptions": { "ecmaVersion": 6 } } does not enable ES6 globals automatically.
*/
