# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0141`

### `ast`

```javascript
JSRoot {
	body: [
		JSIfStatement {
			consequent: JSExpressionStatement {
				expression: JSReferenceIdentifier {
					name: "let"
					loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:9-1:12 (let)
				}
				loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:9-1:12
			}
			test: JSBooleanLiteral {
				value: true
				loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:3-1:7
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:0-1:12
		}
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentIdentifier {
					name: "a"
					loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:13-1:14 (a)
				}
				right: JSNumericLiteral {
					value: 1
					loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:17-1:18
				}
				loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:13-1:18
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:13-1:19
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
				path: UIDPath<esprima/invalid-syntax/migrated_0141/input.js>
				end: Position 1:13
				start: Position 1:13
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0141/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0141/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0141/input.js:1:13 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    if(true) let a = 1;
                 ^


```
