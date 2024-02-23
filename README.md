# Vite + React Project

Este é um projeto de exemplo que usa Vite e React.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- Node.js (recomenda-se a versão mais recente)
- npm (geralmente vem com o Node.js)

## Configuração do Projeto

1. Clone o repositório para o seu computador local.

```
git clone <url-do-repositório>
```

2. Navegue até o diretório do projeto.

```
cd <nome-do-projeto>
```

3. Instale as dependências do projeto.

```
npm install
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```
npm run dev
```

O aplicativo agora deve estar rodando em `http://localhost:3000`.

## Formatação e Linting

Este projeto usa ESLint para linting e Prettier para formatação de código. Para verificar o código para problemas de linting, execute o seguinte comando:

```
npm run lint
```

Para formatar o código, execute o seguinte comando:

```
npm run format
```

## Configurações do VS Code

Para formatar automaticamente o código com ESLint e Prettier ao salvar, adicione as seguintes configurações ao seu arquivo `settings.json` do VS Code:

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  }
}
```
```

Por favor, substitua `<url-do-repositório>` e `<nome-do-projeto>` com a URL do seu repositório e o nome do seu projeto, respectivamente. Além disso, você pode precisar ajustar os comandos de script (`npm run dev`, `npm run lint`, `npm run format`) para corresponder aos scripts definidos no seu arquivo `package.json`.
