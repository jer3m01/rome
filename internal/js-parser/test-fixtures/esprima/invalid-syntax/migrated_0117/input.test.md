# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0117`

### `ast`

```javascript
JSRoot {
	body: [
		JSBreakStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0117/input.js 1:0-1:5
		}
		JSExpressionStatement {
			expression: JSNumericLiteral {
				value: 1
				loc: SourceLocation esprima/invalid-syntax/migrated_0117/input.js 1:6-1:7
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0117/input.js 1:6-1:8
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
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, "1", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0117/input.js>
				end: Position 1:7
				start: Position 1:6
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0117/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0117/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0117/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character 1

    break 1;
          ^


```
