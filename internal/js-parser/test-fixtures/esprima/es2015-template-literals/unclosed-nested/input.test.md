# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-template-literals > unclosed-nested`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSTemplateLiteral {
				expressions: [
					JSTaggedTemplateExpression {
						quasi: JSTemplateLiteral {
							expressions: []
							quasis: [
								JSTemplateElement {
									cooked: "test"
									raw: "test"
									tail: true
									loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:13-1:17
								}
							]
							loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:12-1:18
						}
						tag: JSNumericLiteral {
							value: 10
							loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:9-1:11
						}
						loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:9-1:18
					}
				]
				quasis: [
					JSTemplateElement {
						cooked: "hello "
						raw: "hello "
						tail: false
						loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:1-1:7
					}
					JSTemplateElement {
						cooked: ""
						raw: ""
						tail: false
						loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 2:0-2:0
					}
				]
				loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:0-2:0
			}
			loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:0-2:0
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: [RAW_MARKUP {value: "We expected to find the closing character <emphasis>"}, "}", RAW_MARKUP {value: "</emphasis> here"}]
					}
					frame {
						location: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 2:0-2:0
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Unclosed <emphasis>"}, "template expression value", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-template-literals/unclosed-nested/input.js>
				end: Position 1:7
				start: Position 1:7
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-template-literals/unclosed-nested/input.js>
	loc: SourceLocation esprima/es2015-template-literals/unclosed-nested/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-template-literals/unclosed-nested/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed template expression value

    `hello ${10 `test`
           ^

  ℹ We expected to find the closing character } here

    `hello ${10 `test`


```
