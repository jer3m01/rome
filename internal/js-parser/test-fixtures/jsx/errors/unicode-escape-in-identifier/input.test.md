# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > errors > unicode-escape-in-identifier`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSXElement {
				attributes: []
				children: []
				selfClosing: false
				name: JSXReferenceIdentifier {
					name: ""
					loc: SourceLocation jsx/errors/unicode-escape-in-identifier/input.jsx 1:1-1:10
				}
				loc: SourceLocation jsx/errors/unicode-escape-in-identifier/input.jsx 1:0-1:23
			}
			loc: SourceLocation jsx/errors/unicode-escape-in-identifier/input.jsx 1:0-1:23
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "Unknown JSX identifier token"}
			}
			location: {
				language: "js"
				path: UIDPath<jsx/errors/unicode-escape-in-identifier/input.jsx>
				end: Position 1:1
				start: Position 1:1
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: ["jsx"]
	path: UIDPath<jsx/errors/unicode-escape-in-identifier/input.jsx>
	loc: SourceLocation jsx/errors/unicode-escape-in-identifier/input.jsx 1:0-1:23
}
```

### `diagnostics`

```

 jsx/errors/unicode-escape-in-identifier/input.jsx:1:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown JSX identifier token

    <\u{2F804}></\u{2F804}>
     ^


```
