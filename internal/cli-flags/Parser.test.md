# `Parser.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/cli-flags/Parser.test.ts --update-snapshots` to update.

## `allow special-cased -h shorthand for help`

### `flags`

```javascript
{}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

## `command required with missing command`

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 argv:1:5 flags/invalid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ No command specified

    test
         ^

  ℹ To see all available commands run

    test --help


```

## `command required with no command but with --help flag`

### `flags`

```javascript
{}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  - bar
  - foo

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  - bar
  - foo

  ℹ To view help for a specific command run
  $ test command_name --help


```

## `command required with wrong command but multiple generated suggestions`

### `flags`

```javascript
{}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test foo1 [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view global flags run
  $ rome --help


```

### `output`

```

```

## `command required with wrong command but only one generated suggestion`

### `flags`

```javascript
{}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test foobar [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view global flags run
  $ rome --help


```

### `output`

```

```

## `command required with wrong command but provided suggestion`

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 argv:1:5 flags/invalid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown command losg

    test losg
         ^^^^

  ℹ Did you mean logs instead? A much cooler command

  ℹ To see all available commands run

    test --help


```

## `do not allow invalid shorthand commands`

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 argv:1:5 flags/invalid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The -help flag is not a valid shorthand flag at help

    test -help
         ^^^^^


```

## `does not allow camel case`

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 argv:1:5 flags/invalid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Incorrect cased flag name at fooBar

    test --fooBar
         ^^^^^^^^

  ℹ Use foo-bar instead


```

## `does not allow shorthands`

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 argv:1:5 flags/invalid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown f flag

    test -f
         ^^


```

## `flag value equals`

### `flags`

```javascript
{name: "sebastian"}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                     --name <input> no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `flag with description`

### `flags`

```javascript
{name: "sebastian"}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                     --name <input> the name of the coolest person in the world
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `flip boolean flag`

### `flags`

```javascript
{run: false}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                              --run no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `optional boolean flag`

### `flags`

```javascript
{run: true}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                              --run no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `optional boolean flag omitted`

### `flags`

```javascript
{run: true}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                              --run no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `optional flag`

### `flags`

```javascript
{name: "sebastian"}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                     --name <input> no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `optional flag omitted`

### `flags`

```javascript
{}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                     --name <input> no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `required boolean flag`

### `flags`

```javascript
{run: true}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                              --run no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `required boolean flag omitted`

### `flags`

```javascript
{run: true}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                              --run no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `required flag`

### `flags`

```javascript
{name: "sebastian"}
```

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                     --name <input> no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

```

## `required flag omitted`

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
                     --name <input> no description found
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 argv:1:4 flags/invalid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a string at name

    test
        ^


```

## `use normalized flags`

### `help`

```

 Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  test [flags]

 Global Flags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                         --help, -h Show this help screen
    --log-shell-completions <shell> Generate shell completion commands - values "fish" "bash"
                                    "zsh")
  --write-shell-completions <shell> Write shell completion commands - values "fish" "bash" "zsh"
                                    )

 Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ℹ To view help for a specific command run
  $ test command_name --help


```

### `output`

```

 argv:1:5 flags/invalid ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown foo-bar flag

    test --foo-bar
         ^^^^^^^^^


```
