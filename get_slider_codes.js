(function() {
	const codes = [...document.querySelectorAll('textarea')]
		.map(x => x.value)

	const previews = [...document.querySelectorAll('a')]
		.filter(x => {
			const id = x.getAttribute('id')
			return !!id && id.includes('external-preview')
		})
		.map(x => x.getAttribute('href'))

	const output = [
		'Embed', 
		...codes, 
		'----',
		'Preview',
		...previews,
	]
		.join('\n\n')

	console.log(output)
})()
