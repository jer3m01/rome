# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > font`

### `ast`

```javascript
CSSRoot {
	body: [
		CSSAtRule {
			name: "font-face"
			prelude: []
			loc: SourceLocation invalid/font/input.css 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<css>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "css"
				message: RAW_MARKUP {value: "The rule <emphasis>@font-face</emphasis> needs the property <emphasis>src</emphasis> in order to be valid."}
			}
			location: {
				language: "css"
				path: UIDPath<invalid/font/input.css>
				end: Position 1:10
				start: Position 1:0
			}
		}
	]
	path: UIDPath<invalid/font/input.css>
	loc: SourceLocation invalid/font/input.css 1:0-3:1
}
```

### `diagnostics`

```

 invalid/font/input.css:1 parse(css) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The rule @font-face needs the property src in order to be valid.

  > 1 │ @font-face {
      │ ^^^^^^^^^^
    2 │   font-display: block;
    3 │ }


```
