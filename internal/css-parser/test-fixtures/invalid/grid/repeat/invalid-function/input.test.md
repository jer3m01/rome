# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > grid > repeat > invalid-function`

### `ast`

```javascript
CSSRoot {
	body: [
		CSSRule {
			prelude: [
				CSSSelector {
					patterns: [
						CSSClassSelector {
							value: "style"
							loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 1:0-1:6
						}
					]
					loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 1:0-1:7
				}
			]
			block: CSSBlock {
				value: [
					CSSDeclaration {
						name: "grid-template-columns"
						value: [
							CSSFunction {
								name: "repeat"
								params: []
								loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:24-2:42
							}
							CSSCalcFunction {
								name: "calc"
								params: [
									CSSCalcSum {
										value: [
											CSSCalcProduct {
												value: [
													CSSCalcValue {
														value: CSSDimension {
															value: 1
															unit: "px"
															loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:47-2:50
														}
														loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:47-2:50
													}
												]
												loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:50-2:51
											}
											CSSCalcOperation {
												value: "+"
												loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:52-2:53
											}
											CSSCalcProduct {
												value: [
													CSSCalcValue {
														value: CSSPercentage {
															value: 5
															loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:53-2:55
														}
														loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:53-2:55
													}
												]
												loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:55-2:55
											}
										]
										loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:47-2:55
									}
								]
								loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:47-2:56
							}
							CSSRaw {
								loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:56-2:57
							}
						]
						important: false
						loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 2:1-2:57
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 1:7-3:1
			}
			loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<css>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Use <emphasis>minmax()</emphasis> or <emphasis>fit-content()</emphasis>."}
					}
				]
				category: ["parse"]
				categoryValue: "css"
				message: RAW_MARKUP {value: "Unsupported function at this position"}
			}
			location: {
				language: "css"
				path: UIDPath<invalid/grid/repeat/invalid-function/input.css>
				end: Position 2:47
				start: Position 2:42
			}
		}
	]
	path: UIDPath<invalid/grid/repeat/invalid-function/input.css>
	loc: SourceLocation invalid/grid/repeat/invalid-function/input.css 1:0-3:1
}
```

### `diagnostics`

```

 invalid/grid/repeat/invalid-function/input.css:2:42 parse(css) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unsupported function at this position

    1 │ .style {
  > 2 │   grid-template-columns: repeat(auto-fill, calc(1px + 5%));
      │                                            ^^^^^
    3 │ }

  ℹ Use minmax() or fit-content().


```
