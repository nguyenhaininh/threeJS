import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/main.js',
	output: [
		{
			name: 'UMD',
			file: 'build/main.umd.js',
			format: 'umd',
		},
		{
			name: 'ESM',
			file: 'build/main.esm.js',
			format: 'esm'
		},
		{
			name: 'CJS',
			file: 'build/main.cjs.js',
			format: 'cjs'
		}
	],
	plugins: [ resolve() ]
};
