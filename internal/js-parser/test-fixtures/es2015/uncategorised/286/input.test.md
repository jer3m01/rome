# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 286`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSArrowFunctionExpression {
				body: JSBlockStatement {
					body: []
					directives: []
					loc: SourceLocation es2015/uncategorised/286/input.js 1:14-1:16
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: []
					rest: JSBindingArrayPattern {
						elements: [
							JSBindingIdentifier {
								name: "INVALID_PLACEHOLDER"
								loc: SourceLocation es2015/uncategorised/286/input.js 1:14-1:13
							}
						]
						loc: SourceLocation es2015/uncategorised/286/input.js 1:4-1:9
					}
					loc: SourceLocation es2015/uncategorised/286/input.js 1:0-1:13
				}
				loc: SourceLocation es2015/uncategorised/286/input.js 1:0-1:16
			}
			loc: SourceLocation es2015/uncategorised/286/input.js 1:0-1:16
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Invalid left-hand side in "}, "arrow function parameters"]
			}
			location: {
				language: "js"
				path: UIDPath<es2015/uncategorised/286/input.js>
				end: Position 1:7
				start: Position 1:6
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/286/input.js>
	loc: SourceLocation es2015/uncategorised/286/input.js 1:0-1:16
}
```

### `diagnostics`

```

 es2015/uncategorised/286/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in arrow function parameters

    (...[ 5 ]) => {}
          ^


```
