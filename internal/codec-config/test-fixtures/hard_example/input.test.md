# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/codec-config/index.test.ts --update-snapshots` to update.

## `hard_example`

### `parse .toml`

```javascript
{
	the: {
		test_string: "You'll hate me after this - #"
		hard: {
			another_test_string: " Same thing, but with a string #"
			harder_test_string: " And when \"'s are in the string, along with # \""
			test_array: ["] ", " # "]
			test_array2: ["Test #11 ]proved that", "Experiment #9 was a success"]
			"bit#": {multi_line_array: ["]"], "what?": "You don't think some user won't do that?"}
		}
	}
}
```

### `stringify .toml`

```toml
# Test file for TOML
# Only this one tries to emulate a TOML file written by a user of the kind of parser writers probably hate
# This part you'll really hate
[the]
test_string = "You'll hate me after this - #"
# " Annoying, isn't it?
[the.hard]
test_array = [
	"] ",
	" # ",
]
test_array2 = [
	"Test #11 ]proved that",
	"Experiment #9 was a success",
]
another_test_string = " Same thing, but with a string #"
harder_test_string = " And when \"'s are in the string, along with # \""
# "and comments are there too"
# Things will get harder
[the.hard."bit#"]
"what?" = "You don't think some user won't do that?"
multi_line_array = [
	# ] Oh yes I did
	"]",
]




```
