# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 491`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSCallExpression {
				arguments: []
				callee: JSFunctionExpression {
					id: JSBindingIdentifier {
						name: "package"
						loc: SourceLocation core/uncategorised/491/input.js 1:10-1:17 (package)
					}
					body: JSBlockStatement {
						body: []
						directives: [
							JSDirective {
								value: "use strict"
								loc: SourceLocation core/uncategorised/491/input.js 1:21-1:34
							}
						]
						loc: SourceLocation core/uncategorised/491/input.js 1:20-1:36
					}
					head: JSFunctionHead {
						async: false
						generator: false
						hasHoistedVars: false
						params: []
						loc: SourceLocation core/uncategorised/491/input.js 1:17-1:19
					}
					loc: SourceLocation core/uncategorised/491/input.js 1:1-1:36
				}
				loc: SourceLocation core/uncategorised/491/input.js 1:0-1:39
			}
			loc: SourceLocation core/uncategorised/491/input.js 1:0-1:39
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {advice: [], category: ["parse"], categoryValue: "js", message: ["package", RAW_MARKUP {value: " is a reserved word"}]}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/491/input.js>
				end: Position 1:17
				start: Position 1:10
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/491/input.js>
	loc: SourceLocation core/uncategorised/491/input.js 1:0-1:39
}
```

### `diagnostics`

```

 core/uncategorised/491/input.js:1:10 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ package is a reserved word

    (function package() {'use strict'; })()
              ^^^^^^^


```
