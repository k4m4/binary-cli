#!/usr/bin/env node
'use strict';
const meow       = require('meow');
const getStdin   = require('get-stdin');
const logSymbols = require('log-symbols');

const cli = meow(`
	Usage
	  ~ ❯❯❯ binary [string]
	  ~ ❯❯❯ echo [string] | bin -d
	Options
		-d, --decode  Decode binary-encoded string
	Examples
	  ~ ❯❯❯ binary foo
	  ${logSymbols.success} 1100110 1101111 1101111
	  ~ ❯❯❯ binary -d "1100010 1100001 1110010"
	  ${logSymbols.success} bar
`, {
	flags: {
		decode: {
			type: 'boolean',
			alias: 'd',
			default: false
		}
	}
});

const input = cli.input[0];

function binEncode (text) {
	var bin = ""
	for (var i = 0; i < text.length; i++) {
		bin += text[i].charCodeAt(0).toString(2) + " ";
	}
	return bin
}

function binEncodedRegex (text) {
	const re = '(?:[01]+)'
	if (new RegExp(re, 'g').test(text)) return true;
	else return false
}

function binDecode (bin) {
	if (binEncodedRegex(bin)) {
		var ascii = ''
		bin.replace(/[01]+/g, function (i) {
			ascii += String.fromCharCode(parseInt(i, 2));
		})
		return ascii
	}
	else return 'Text doesn\'t seem to be binary-encoded'
}

function display (plaintext) {
	if (plaintext != 'Text doesn\'t seem to be binary-encoded') {
		console.log(`${logSymbols.success} ` + plaintext)
	} else {
		console.log(`${logSymbols.error} Text doesn\'t seem to be binary-encoded`);
		process.exit(1);
	}
}

if (!input && process.stdin.isTTY) {
	console.log('Enter string to binary encode/decode');
	process.exit(1);
}
if (input) {
	if (cli.flags["decode"]) {
		display(binDecode(input));
	} else {
		display(binEncode(input));
	}
} else {
	getStdin().then(stdin => {
		if (cli.flags["decode"]) {
			display(binDecode(stdin));
		} else {
			display(binEncode(stdin));
		}
	})
}