# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > dynamic-import > invalid-trailing-comma`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSImportCall {
				argument: JSStringLiteral {
					value: "foo"
					loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:7-1:12
				}
				loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:6-1:14
			}
			loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:0-1:15
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
				message: RAW_MARKUP {value: "Trailing comma is disallowed inside import(...) arguments"}
			}
			location: {
				language: "js"
				path: UIDPath<es2020/dynamic-import/invalid-trailing-comma/input.js>
				end: Position 1:13
				start: Position 1:12
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2020/dynamic-import/invalid-trailing-comma/input.js>
	loc: SourceLocation es2020/dynamic-import/invalid-trailing-comma/input.js 1:0-1:15
}
```

### `diagnostics`

```

 es2020/dynamic-import/invalid-trailing-comma/input.js:1:12 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Trailing comma is disallowed inside import(...) arguments

    import("foo",);
                ^


```
