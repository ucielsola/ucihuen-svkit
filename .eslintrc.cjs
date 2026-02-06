module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	overrides: [{ files: ['*.svelte'], parser: 'svelte-eslint-parser' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
	}
};
