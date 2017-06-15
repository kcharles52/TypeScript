﻿// @module: commonjs
// @includebuiltfile: typescript_standalone.d.ts
// @noImplicitAny:true
// @strictNullChecks:true
// @noTypesBaseline: true
// @noSymbolsBaseline: true

/*
 * Note: This test is a public API sample. The sample sources can be found 
         at: https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#a-simple-transform-function
 *       Please log a "breaking change" issue for any API breaking change affecting this issue
 */

declare var console: any;

import * as ts from "typescript";

const source = "let x: string  = 'string'";

let result = ts.transpile(source, { module: ts.ModuleKind.CommonJS });

console.log(JSON.stringify(result));