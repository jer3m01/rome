# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-literal-regular-expression > u-flag-surrogate-pair`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "var"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:4-1:5 (x)
						}
						init: JSRegExpLiteral {
							global: false
							insensitive: false
							multiline: false
							noDotNewline: false
							sticky: false
							unicode: true
							expression: JSRegExpSubExpression {
								body: [
									JSRegExpCharSet {
										body: [
											JSRegExpCharacter {
												value: "\ud834"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:10-1:16
											}
											JSRegExpCharSetRange {
												end: JSRegExpCharacter {
													value: "\udf06"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:16-1:22
												}
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:16-1:29
												start: JSRegExpCharacter {
													value: "\ud834"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:23-1:29
												}
											}
											JSRegExpCharacter {
												value: "\udf08"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:29-1:35
											}
											JSRegExpCharSetRange {
												end: JSRegExpCharacter {
													value: "z"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:37-1:38
												}
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:35-1:38
												start: JSRegExpCharacter {
													value: "a"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:35-1:36
												}
											}
										]
										invert: false
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:9-1:38
									}
								]
								loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:9-1:38
							}
							loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:8-1:41
						}
						loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:4-1:41
					}
				]
				loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:0-1:41
			}
			loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:0-1:41
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<regex>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "regex"
				message: RAW_MARKUP {value: "Range values reversed. Start char code is greater than end char code"}
			}
			location: {
				language: "regex"
				path: UIDPath<esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js>
				end: Position 1:35
				start: Position 1:29
			}
		}
	]
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js>
	loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js:1:29
parse(regex) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Range values reversed. Start char code is greater than end char code

    var x = /[\uD834\uDF06-\uD834\uDF08a-z]/u
                                 ^^^^^^


```
