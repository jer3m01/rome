# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > arrow-function > default-parameter-values`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSArrowFunctionExpression {
				body: JSNumericLiteral {
					value: 0
					loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:19-1:20
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					params: [
						JSBindingAssignmentPattern {
							operator: "="
							left: JSBindingIdentifier {
								name: "x"
								meta: JSPatternMeta {
									typeAnnotation: TSNumberKeywordTypeAnnotation {
										loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:4-1:10
									}
									loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:11-1:10
								}
								loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:11-1:10
							}
							right: JSNumericLiteral {
								value: 0
								loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:13-1:14
							}
							loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:1-1:14
						}
					]
					loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:0-1:18
				}
				loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:0-1:20
			}
			loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:0-1:21
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/arrow-function/default-parameter-values/input.ts>
	loc: SourceLocation typescript/arrow-function/default-parameter-values/input.ts 1:0-2:0
}
```

### `diagnostics`

```

```
