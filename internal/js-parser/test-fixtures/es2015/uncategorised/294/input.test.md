# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 294`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSSequenceExpression {
				expressions: [
					JSReferenceIdentifier {
						name: "b"
						loc: SourceLocation es2015/uncategorised/294/input.js 1:1-1:2 (b)
					}
					JSReferenceIdentifier {
						name: "INVALID_PLACEHOLDER"
						loc: SourceLocation es2015/uncategorised/294/input.js 1:9-1:9
					}
				]
				loc: SourceLocation es2015/uncategorised/294/input.js 1:0-1:9
			}
			loc: SourceLocation es2015/uncategorised/294/input.js 1:0-1:9
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
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, ".", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<es2015/uncategorised/294/input.js>
				end: Position 1:4
				start: Position 1:4
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/294/input.js>
	loc: SourceLocation es2015/uncategorised/294/input.js 1:0-1:9
}
```

### `diagnostics`

```

 es2015/uncategorised/294/input.js:1:4 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character .

    (b, ...a)
        ^


```
