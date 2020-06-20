export default (arr, chunkSize) => {
	return arr.map((e, i) => i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null)
	.filter(e => e)
}