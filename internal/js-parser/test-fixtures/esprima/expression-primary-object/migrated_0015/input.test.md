# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-object > migrated_0015`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					properties: [
						JSObjectMethod {
							kind: "get"
							key: JSStaticPropertyKey {
								value: JSStringLiteral {
									value: "undef"
									loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:10-1:17
								}
								loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:10-1:17
							}
							body: JSBlockStatement {
								body: []
								directives: []
								loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:20-1:22
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: []
								loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:17-1:19
							}
							loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:6-1:22
						}
					]
					loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:4-1:24
				}
				loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:0-1:24
			}
			loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:0-1:24
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/expression-primary-object/migrated_0015/input.js>
	loc: SourceLocation esprima/expression-primary-object/migrated_0015/input.js 1:0-1:24
}
```

### `diagnostics`

```

```
