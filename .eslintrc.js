module.exports = {
	env: {
		commonjs: true,
		es2020: true,
		node: true,
	},
	extends: ['airbnb-base', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 11,
	},
	rules: {
		'prettier/prettier': 'error',
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		camelcase: 'off',
		'no-underscore-dangle': 'off',
		'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
		'newline-after-var': [2, 'always'],
		'func-names': ['error', 'never'],

		'max-len': ['error', { ignoreStrings: true }],
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		'no-multiple-empty-lines': 'off',
		'no-trailing-spaces': ['off', { ignoreComments: 'on' }],
	},
};
