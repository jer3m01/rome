# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > regression > issue-11387`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSXElement {
				attributes: []
				children: [
					JSXExpressionContainer {
						expression: JSSequenceExpression {
							expressions: [
								JSMemberExpression {
									object: JSThisExpression {
										loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:7-1:11
									}
									property: JSStaticMemberProperty {
										optional: true
										value: JSIdentifier {
											name: "class"
											loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:13-1:18 (class)
										}
										loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:13-1:18 (class)
									}
									loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:7-1:18
								}
								JSMemberExpression {
									object: JSThisExpression {
										loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:20-1:24
									}
									property: JSStaticMemberProperty {
										value: JSIdentifier {
											name: "class"
											loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:25-1:30 (class)
										}
										loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:25-1:30 (class)
									}
									loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:20-1:30
								}
								JSMemberExpression {
									object: JSThisExpression {
										loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:32-1:36
									}
									property: JSStaticMemberProperty {
										optional: true
										value: JSIdentifier {
											name: "function"
											loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:38-1:46 (function)
										}
										loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:38-1:46 (function)
									}
									loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:32-1:46
								}
							]
							loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:6-1:46
						}
						loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:5-1:46
					}
					JSXText {
						value: ", this.function)}"
						loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:46-1:63
					}
				]
				selfClosing: false
				name: JSXIdentifier {
					name: "div"
					loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:1-1:4
				}
				loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:0-1:69
			}
			loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:0-1:69
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [log {category: "info", text: [RAW_MARKUP {value: "Expected character <emphasis>"}, ",", RAW_MARKUP {value: "</emphasis>"}]}]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, ",", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<jsx/regression/issue-11387/input.jsx>
				end: Position 1:63
				start: Position 1:46
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: ["jsx"]
	path: UIDPath<jsx/regression/issue-11387/input.jsx>
	loc: SourceLocation jsx/regression/issue-11387/input.jsx 1:0-2:0
}
```

### `diagnostics`

```

 jsx/regression/issue-11387/input.jsx:1:46 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character ,

    <div>{(this?.class, this.class, this?.function, this.function)}</div>
                                                  ^^^^^^^^^^^^^^^^^

  ℹ Expected character ,


```
