# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0250`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					properties: [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "__proto__"
									loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:6-1:15 (__proto__)
								}
								loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:6-1:15
							}
							value: JSNumericLiteral {
								value: 42
								loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:17-1:19
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:6-1:19
						}
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "__proto__"
									loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:21-1:30 (__proto__)
								}
								loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:21-1:30
							}
							value: JSNumericLiteral {
								value: 43
								loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:32-1:34
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:21-1:34
						}
					]
					loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:4-1:36
				}
				loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:0-1:36
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:0-1:36
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
				message: RAW_MARKUP {value: "Redefinition of __proto__ property"}
			}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0250/input.js>
				end: Position 1:30
				start: Position 1:21
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0250/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0250/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0250/input.js:1:21 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Redefinition of __proto__ property

    x = { __proto__: 42, __proto__: 43 }
                         ^^^^^^^^^


```
