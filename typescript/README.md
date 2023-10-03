

- Addresses JS's shortcoming
- TS adds static typing, code completion, shorthand notations, and refactoring

- Requires a compilation step

- Installed typescript compiler in order to produce JS code; Remember that browsers are capable of only executing JS
- run ts file with `tsc <file>.ts` to compile TS code into JS

- configuration for TS compiler in tsconfig.json
    - root dir and out dir uncommented; remove-comment set to true, noEmitonError set to true to prevent producing JS code when TS error found 

- running `tsc` at root to compile as TS files, and create out-dir as needed

- sourceMap setting enabled to get source map from TS to JS

- debugging TS app by creating launch.json, and adding pre launch task to build application with tsconfig.json file

---------------

Fundamentals:
- TS types: