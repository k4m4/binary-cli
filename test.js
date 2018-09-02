import test from 'ava'
import execa from 'execa'

test('binary encoding', async t => {
	const {stdout} = await execa('./cli.js', ['foobar'])
	var bin = ''
	for (var i = 0; i < 'foobar'.length; i++) {
		bin += 'foobar'[i].charCodeAt(0).toString(2) + " "
	}
	t.is(stdout, (`✔ ` + bin))
})

test('binary decoding', async t => {
	const {stdout} = await execa('./cli.js', ['-d', '1100110 1101111 1101111'])
	var ascii = ''
	'1100110 1101111 1101111'.replace(/[01]+/g, function (i) {
		ascii += String.fromCharCode(parseInt(i, 2))
	})
	t.is(stdout, (`✔ ` + ascii))
})