# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > migrated_0008`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSArrowFunctionExpression {
				body: JSBinaryExpression {
					operator: "*"
					left: JSReferenceIdentifier {
						name: "x"
						loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:9-1:10 (x)
					}
					right: JSReferenceIdentifier {
						name: "x"
						loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:13-1:14 (x)
					}
					loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:9-1:14
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: [
						JSBindingAssignmentPattern {
							operator: "="
							left: JSBindingIdentifier {
								name: "x"
								loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:1-1:2 (x)
							}
							right: JSNumericLiteral {
								value: 1
								loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:3-1:4
							}
							loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:1-1:4
						}
					]
					loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:0-1:8
				}
				loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:0-1:14
			}
			loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:0-1:14
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-arrow-function/migrated_0008/input.js>
	loc: SourceLocation esprima/es2015-arrow-function/migrated_0008/input.js 1:0-2:0
}
```

### `diagnostics`

```

```
