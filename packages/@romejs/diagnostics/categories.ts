/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Rather than having a generic `string` type, we use string literals so there's one place where
// all category names are defined. This allows the naming scheme to be more easily reviewed and
// made consistent.
export type DiagnosticCategory =
	| LintDiagnosticCategory
	| "analyzeDependencies/cjsExportInES"
	| "args/fileNotFound"
	| "args/invalid"
	| "bundler/moduleCycle"
	| "bundler/topLevelAwait"
	| "compile/classes"
	| "compile/jsx"
	| "flags/invalid"
	| "format/disabled"
	| "internalError/httpServer"
	| "internalError/request"
	| "lint/disabled"
	| "lint/pendingFixes"
	| "lsp/parse"
	| "parse/js"
	| "parse/json"
	| "parse/manifest"
	| "parse/patchMatch"
	| "parse/regex"
	| "parse/semver"
	| "parse/snapshots"
	| "parse/spdxLicense"
	| "parse/stringMarkup"
	| "parse/url"
	| "parse/url/query"
	| "projectManager/incorrectConfigFilename"
	| "projectManager/missing"
	| "projectManager/nameCollision"
	| "projectManager/vscMissing"
	| "resolver/fetchFailed"
	| "resolver/importTypeMismatch"
	| "resolver/notFound"
	| "resolver/unknownExport"
	| "resolver/unsupported"
	| "suppressions/duplicate"
	| "suppressions/incorrectPrefix"
	| "suppressions/missingSpace"
	| "suppressions/missingTarget"
	| "suppressions/unused"
	| "tests/cancelled"
	| "tests/disabled"
	| "tests/failure"
	| "tests/fixtureOptions"
	| "tests/logs"
	| "tests/noneDeclared"
	| "tests/snapshots/frozen"
	| "tests/snapshots/inlineMissingReceived"
	| "tests/snapshots/inlineCollision"
	| "tests/snapshots/incorrect"
	| "tests/snapshots/missing"
	| "tests/snapshots/redundant"
	| "tests/timeout"
	| "tests/unhandledRejection"
	| "typeCheck/incompatible"
	| "typeCheck/missingCondition"
	| "typeCheck/notExhaustive"
	| "typeCheck/uncallable"
	| "typeCheck/undeclaredVariable"
	| "typeCheck/unknownImport"
	| "typeCheck/unknownProperty"
	| "vsc/dirty"
	| "v8/syntaxError";

export type DiagnosticCategoryPrefix =
	| "analyzeDependencies"
	| "args"
	| "bundler"
	| "compiler"
	| "flags"
	| "internalError"
	| "lint"
	| "lsp"
	| "parse"
	| "projectManager"
	| "resolver"
	| "tests"
	| "typeCheck"
	| "v8";

// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS

type LintDiagnosticCategory =
	| "lint/camelCase"
	| "lint/caseSingleStatement"
	| "lint/confusingLanguage"
	| "lint/defaultExportSameBasename"
	| "lint/doubleEquals"
	| "lint/duplicateImportSource"
	| "lint/emptyBlocks"
	| "lint/emptyMatches"
	| "lint/getterReturn"
	| "lint/importDefaultBasename"
	| "lint/jsxA11yAltText"
	| "lint/jsxA11yHeadingHasContent"
	| "lint/jsxA11yHTMLHasLang"
	| "lint/jsxA11yIframeHasTitle"
	| "lint/jsxA11yImgRedundantAlt"
	| "lint/jsxA11yNoAccessKey"
	| "lint/jsxA11yNoAutofocus"
	| "lint/jsxA11yNoDistractingElements"
	| "lint/jsxA11yNoTargetBlank"
	| "lint/jsxA11yScope"
	| "lint/jsxKey"
	| "lint/jsxNoCommentText"
	| "lint/negationElse"
	| "lint/noArguments"
	| "lint/noAsyncPromiseExecutor"
	| "lint/noCatchAssign"
	| "lint/noChildrenProp"
	| "lint/noCommaOperator"
	| "lint/noCompareNegZero"
	| "lint/noCondAssign"
	| "lint/noDanger"
	| "lint/noDangerWithChildren"
	| "lint/noDebugger"
	| "lint/noDelete"
	| "lint/noDeleteVars"
	| "lint/noDidUpdateSetState"
	| "lint/noDupeArgs"
	| "lint/noDuplicateCase"
	| "lint/noDuplicateGroupNamesInRegularExpressions"
	| "lint/noDuplicateKeys"
	| "lint/noEmptyCharacterClass"
	| "lint/noExplicitAny"
	| "lint/noExtraBooleanCast"
	| "lint/noFindDOMNode"
	| "lint/noFunctionAssign"
	| "lint/noImportAssign"
	| "lint/noLabelVar"
	| "lint/noMultipleSpacesInRegularExpressionLiterals"
	| "lint/noPosixInRegularExpression"
	| "lint/noReferenceToNonExistingGroup"
	| "lint/noSetterReturn"
	| "lint/noShadowRestrictedNames"
	| "lint/noShorthandArrayType"
	| "lint/noTemplateCurlyInString"
	| "lint/noUnsafeFinally"
	| "lint/noVar"
	| "lint/preferBlockStatements"
	| "lint/preferFunctionDeclarations"
	| "lint/preferTemplate"
	| "lint/preferWhile"
	| "lint/reactInJsxScope"
	| "lint/restrictedGlobals"
	| "lint/singleVarDeclarator"
	| "lint/sortImportExportSpecifiers"
	| "lint/sparseArray"
	| "lint/stylePropObject"
	| "lint/undeclaredVariables"
	| "lint/unsafeNegation"
	| "lint/unusedVariables"
	| "lint/voidDomElementsNoChildren";
