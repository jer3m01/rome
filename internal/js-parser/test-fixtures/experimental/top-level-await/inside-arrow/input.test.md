# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > top-level-await > inside-arrow`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSArrowFunctionExpression {
				body: JSReferenceIdentifier {
					name: "await"
					loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:6-1:11 (await)
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: []
					loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-1:5
				}
				loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-1:11
			}
			loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-1:11
		}
		JSExpressionStatement {
			expression: JSNumericLiteral {
				value: 0
				loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:12-1:13
			}
			loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:12-1:14
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
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: {
				language: "js"
				path: UIDPath<experimental/top-level-await/inside-arrow/input.js>
				end: Position 1:12
				start: Position 1:12
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<experimental/top-level-await/inside-arrow/input.js>
	loc: SourceLocation experimental/top-level-await/inside-arrow/input.js 1:0-2:0
}
```

### `diagnostics`

```

 experimental/top-level-await/inside-arrow/input.js:1:12 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    () => await 0;
                ^


```
