# PADRONIZAÇÃO DE CÓDIGO


## Instruções Iniciais


*1. Instale as seguintes extensões no VS Code: ESlint, EditorConfig e Prettier*
*2. Instale globalmente o eslint com o comando `npm i -g eslint`*
*3. Rode no terminal do se projeto `npm i eslint-plugin-import@latest -D` *
*4. Rode no terminal do seu projeto `npm i eslint@7.5.0 -D` *
*5. Rode no terminal do seu projeto `eslint --init` e siga o seguinte passo a passo:*

```
1 - To check sintax, find problems, and enforce code style
2 - Nodejs: CommoJS/ReactJS: Javascript
3 - Se estiver no node é one of these
4 - Se estiver no node: desmarca o browser e marca o node (pra marcar/desmarcar é com barra de espaço)
5 - Use popular guide
6 Airbnd
7 - JS
8 - yes
9 - son config do vs: "eslint.codeActionsOnSave.mode": "all"
```

*6. Cole o código a seguir no arquivo .eslintrc.js: *

```
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
		code: 0,
		'max-len': ['error', { ignoreStrings: true }],
		indent: ['error', 'tab'],
		'linebreak-style': 'off',
		'no-multiple-empty-lines': 'off',
		'no-trailing-spaces': ['off', { ignoreComments: 'on' }],
	},
};
```

*7. Crie um arquivo .editorconfig com o seguinte conteúdo: *

```
root = true

[*]
end_of_line = lf
indent_style = tab
indent_size = 4
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

```
*8. Rode no terminal do seu projeto `npm install prettier eslint-config-prettier eslint-plugin-prettier -D`*
*9. Crie um arquivo chamado .prettierrc com o seguinte conteúdo:*

```
{
	"singleQuote": true,
	"trailingComma": "es5"
}

```

*10. Adicione ao JSON Config do seu VS Code o seguinte trecho:*

```
    "eslint.format.enable": true,
    "eslint.lintTask.enable": true,
    "eslint.codeActionsOnSave.mode": "all",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
```

---
