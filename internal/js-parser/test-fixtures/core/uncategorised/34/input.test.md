# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 34`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/34/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					properties: [
						JSObjectMethod {
							kind: "get"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "null"
									loc: SourceLocation core/uncategorised/34/input.js 1:10-1:14 (null)
								}
								loc: SourceLocation core/uncategorised/34/input.js 1:10-1:14
							}
							body: JSBlockStatement {
								body: []
								directives: []
								loc: SourceLocation core/uncategorised/34/input.js 1:17-1:19
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: []
								loc: SourceLocation core/uncategorised/34/input.js 1:14-1:16
							}
							loc: SourceLocation core/uncategorised/34/input.js 1:6-1:19
						}
					]
					loc: SourceLocation core/uncategorised/34/input.js 1:4-1:21
				}
				loc: SourceLocation core/uncategorised/34/input.js 1:0-1:21
			}
			loc: SourceLocation core/uncategorised/34/input.js 1:0-1:21
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/34/input.js>
	loc: SourceLocation core/uncategorised/34/input.js 1:0-1:21
}
```

### `diagnostics`

```

```
