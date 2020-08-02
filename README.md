# TASKLIST - API

API REST básica para gerenciar tarefas. Essa API tem o intuito de demonstrar um pouco dos meus amplos conhecimentos no desenvolvimento de API's REST.

## Stack Principal

- Javascript
- NodeJS
- Express
- MongoDB
- Mongoose
- Padrões REST

## O QUE FOI UTILIZADO E ABSORVIDO DURANTE O PROJETO

- Criação e Consumo de API's
- Padrões REST
- Verbos HTTPS
- Status Code
- Endpoints Amigáveis
- Params, Querys e afins
- Autenticação com *JWT*
- Criptografias & Hashs com *Bcrypt*
- Padronização de Cógico com *ESlint*, *Prettier* e *EditorConfig*
- Banco de Dados não Relacional *MongoDB*, utilizando *Mongoose*
- "Travando" Requisições pra API com *CORS*
- Variáveis de Ambiente com *DotEnv*
- Validações com *YUP*
- Testando Requisição pra API com *Insominia*
- Estrutura *MVC*

## Instalação

00. Será necessário uma string de conexão com o MongoDB. Caso você não tenha uma ainda, você pode criar no atlas através [desse link](https://www.mongodb.com/cloud/atlas/register)
01. Você irá precisar ter o NodeJS e o NPM instalados no seu computador. [Clique aqui](https://nodejs.org/en/) para baixar o NodeJS. O NPM já vem com o NodeJS.
02. Baixe o repositório deste projeto no seu computador. Você poderá fazer isso através do botão "code" que tem ali em cima, basta clicar nele e em seguida em download ZIP.
03. Localize o arquivo recem baixado no seu computador e descompate-o
04. Abra a pasta que descompactou e localize o arquivo .env
05. abra o arquivo .env e add a vaiavel de ambiente MONGO_URL.
06. O valor dessa variável deve ser correspondente a string de conexão do MongoDB que você criou na etapa 00. Ficará assim: MONGO_URL=stringdeconexao
07. Abra o Prompt de Comando do seu computador
08. Através do Prompt navegue até a pasta que você acabou de descompactar
09. Digite o comando `npm install` e aperte enter
10. Espere terminar de instalar todas as dependências
11. Digite o comando `npm start` e aperte enter
12. Pronto! a API estará rodando na porta 3333. Caso você deseje alterar para outra porta, basta adicionar ao aquivo .env do projeto como no exemplo a seguir: `PORT=3333`.



## Endpoints

### Sessions: POST /sessions

Método para logar usuário. Ele retorna o id, nome, email e token de acesso.

**Body*
```
{
  	"email": "example@example.com",
  	"password_hash": "example123"
}

```

### Users: POST /users

Método para cadastrar novo usuário.

**Body*

```
{

	"name": "Example Name",
	"email": "example@example.com",
	"password_hash": "example123",

}

```

### Users: PUT /users

Método para atualizar dados do usuário. É necessário além do corpo da requisição o token de acesso gerado na rota de `/sessions`. Nenhum dos campos abaixos são obrigatorios, entretanto, caso deseje alterar a senha os campos `old_password`, `password_hash` e `confirm_password` se tornam obrigatórios.

- `old_password` -> Senha de acesso anterior
- `password_hash` -> Nova senha
- `confirm_password` -> Repetição Nova Senha

*Body*

```
{

	"name": "Example Name Edit",
	"email": "example@example.com",
	"old_password": "example123"
	"password_hash": "editexample123",
	"confirm_password": "editexample123"

}

```

*Headers*

```
{ "Authorization": "token" }

```

### Tasks: POST /tasks

Método para cadastrar nova tarefa. Somente a propriedade `task` é obrigatória no corpo da requisição. Caso não seja informado  a propriedade `ckeck`, como padrão ela é salva como false.

**Body*

```
{
	"task": "Criando Task Example",
	"check": true
}

```

*Headers*

```
{ "Authorization": "token" }

```


### Tasks: GET /tasks OR GET /tasks?propriety=value

Método para listar as tarefas, podendo elas serem filtradas através do Query Params. É necessário o token de acesso gerado na rota de `/sessions`.


*Headers*

```
{ "Authorization": "token" }

```

**example**

```
GET /tasks?check=true

```

### Tasks: PUT /tasks/:task_id

Método em que o usuário poderá atualizar a tarefa desejada, desde que a mesma esteja vincula ao seu id de usuário. Nenhuma das propriedas citadas abaixo são obrigatórias no corpo da requisição. `task_id` no endpoint corresponde ao id da tarefa que o usuário está tentando atualizar.

**Body*

```
{

	"task": "Edit Title Task"
	"check": false,

}

```

*Headers*

```
{ "Authorization": "token" }

```


### Tasks: DELETE /tasks/:task_id

Método em que o usuário poderá deletar a tarefa desejada, desde que a mesma esteja vincula ao seu id de usuário. `task_id` no endpoint corresponde ao id da tarefa que o usuário está tentando atualizar.

*Headers*

```
{ "Authorization": "token" }

```


