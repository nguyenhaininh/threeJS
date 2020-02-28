import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

export default {
	input: 'src/main.js',
	output: [
		{
			name: 'UMD',
			file: 'build/main.umd.js',
			format: 'umd',
		}
	],
	plugins: [
		resolve(),
		commonjs()
	]
};
