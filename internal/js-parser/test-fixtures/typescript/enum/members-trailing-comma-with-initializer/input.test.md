# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > enum > members-trailing-comma-with-initializer`

### `ast`

```javascript
JSRoot {
	body: [
		TSEnumDeclaration {
			const: false
			members: [
				TSEnumMember {
					id: JSIdentifier {
						name: "A"
						loc: SourceLocation typescript/enum/members-trailing-comma-with-initializer/input.ts 2:4-2:5 (A)
					}
					initializer: JSNumericLiteral {
						value: 0
						loc: SourceLocation typescript/enum/members-trailing-comma-with-initializer/input.ts 2:8-2:9
					}
					loc: SourceLocation typescript/enum/members-trailing-comma-with-initializer/input.ts 2:4-2:9
				}
			]
			id: JSBindingIdentifier {
				name: "E"
				loc: SourceLocation typescript/enum/members-trailing-comma-with-initializer/input.ts 1:5-1:6 (E)
			}
			loc: SourceLocation typescript/enum/members-trailing-comma-with-initializer/input.ts 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/enum/members-trailing-comma-with-initializer/input.ts>
	loc: SourceLocation typescript/enum/members-trailing-comma-with-initializer/input.ts 1:0-4:0
}
```

### `diagnostics`

```

```
