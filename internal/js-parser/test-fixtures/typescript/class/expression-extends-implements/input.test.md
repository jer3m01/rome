# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > expression-extends-implements`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSClassExpression {
				meta: JSClassHead {
					body: []
					implements: [
						TSExpressionWithTypeArguments {
							expression: TSQualifiedName {
								left: JSReferenceIdentifier {
									name: "X"
									loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:33-1:34 (X)
								}
								right: JSIdentifier {
									name: "Y"
									loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:35-1:36 (Y)
								}
								loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:33-1:36
							}
							typeParameters: TSTypeParameterInstantiation {
								params: [
									TSTypeReference {
										typeName: JSReferenceIdentifier {
											name: "T"
											loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:37-1:38 (T)
										}
										loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:37-1:38
									}
								]
								loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:36-1:39
							}
							loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:33-1:39
						}
					]
					superClass: JSCallExpression {
						arguments: []
						callee: JSReferenceIdentifier {
							name: "f"
							loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:15-1:16 (f)
						}
						loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:15-1:18
					}
					superTypeParameters: TSTypeParameterInstantiation {
						params: [
							TSTypeReference {
								typeName: JSReferenceIdentifier {
									name: "T"
									loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:19-1:20 (T)
								}
								loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:19-1:20
							}
						]
						loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:18-1:21
					}
					loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:1-1:42
				}
				loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:1-1:42
			}
			loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:0-1:44
		}
		JSExpressionStatement {
			expression: JSClassExpression {
				id: JSBindingIdentifier {
					name: "C"
					loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:7-2:8 (C)
				}
				meta: JSClassHead {
					body: []
					implements: [
						TSExpressionWithTypeArguments {
							expression: TSQualifiedName {
								left: JSReferenceIdentifier {
									name: "X"
									loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:35-2:36 (X)
								}
								right: JSIdentifier {
									name: "Y"
									loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:37-2:38 (Y)
								}
								loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:35-2:38
							}
							typeParameters: TSTypeParameterInstantiation {
								params: [
									TSTypeReference {
										typeName: JSReferenceIdentifier {
											name: "T"
											loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:39-2:40 (T)
										}
										loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:39-2:40
									}
								]
								loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:38-2:41
							}
							loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:35-2:41
						}
					]
					superClass: JSCallExpression {
						arguments: []
						callee: JSReferenceIdentifier {
							name: "f"
							loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:17-2:18 (f)
						}
						loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:17-2:20
					}
					superTypeParameters: TSTypeParameterInstantiation {
						params: [
							TSTypeReference {
								typeName: JSReferenceIdentifier {
									name: "T"
									loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:21-2:22 (T)
								}
								loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:21-2:22
							}
						]
						loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:20-2:23
					}
					loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:1-2:44
				}
				loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:1-2:44
			}
			loc: SourceLocation typescript/class/expression-extends-implements/input.ts 2:0-2:46
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/class/expression-extends-implements/input.ts>
	loc: SourceLocation typescript/class/expression-extends-implements/input.ts 1:0-3:0
}
```

### `diagnostics`

```

```
