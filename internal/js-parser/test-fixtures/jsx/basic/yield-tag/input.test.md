# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > yield-tag`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "it"
				loc: SourceLocation jsx/basic/yield-tag/input.jsx 1:9-1:11 (it)
			}
			body: JSBlockStatement {
				body: [
					JSExpressionStatement {
						expression: JSYieldExpression {
							delegate: false
							argument: JSXElement {
								attributes: []
								children: []
								selfClosing: false
								name: JSXIdentifier {
									name: "a"
									loc: SourceLocation jsx/basic/yield-tag/input.jsx 2:11-2:12
								}
								loc: SourceLocation jsx/basic/yield-tag/input.jsx 2:10-2:17
							}
							loc: SourceLocation jsx/basic/yield-tag/input.jsx 2:4-2:17
						}
						loc: SourceLocation jsx/basic/yield-tag/input.jsx 2:4-2:18
					}
				]
				directives: []
				loc: SourceLocation jsx/basic/yield-tag/input.jsx 1:13-3:1
			}
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: []
				loc: SourceLocation jsx/basic/yield-tag/input.jsx 1:11-1:13
			}
			loc: SourceLocation jsx/basic/yield-tag/input.jsx 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: ["jsx"]
	path: UIDPath<jsx/basic/yield-tag/input.jsx>
	loc: SourceLocation jsx/basic/yield-tag/input.jsx 1:0-4:0
}
```

### `diagnostics`

```

```
