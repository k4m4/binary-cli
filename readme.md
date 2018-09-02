# binary-cli [![Build Status](https://travis-ci.org/k4m4/binary-cli.svg?branch=master)](https://travis-ci.org/k4m4/binary-cli)

> Binary encode & decode a string, right from your terminal.

---

## Install

```
~ ❯❯❯ npm install -g binary-cli
```

## Usage

```
  Binary encode & decode a string, right from your terminal.

  Usage
    ~ ❯❯❯ binary [string]
    ~ ❯❯❯ echo [string] | bin
  Options
        -d, --decode  Decode binary-encoded string
        -p, --plain   Display output without log symbols
  Examples
    ~ ❯❯❯ binary foo
    ✔ 1100110 1101111 1101111
    ~ ❯❯❯ binary -d "1100010 1100001 1110010"
    ✔ bar
```

## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)