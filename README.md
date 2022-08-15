<h1 align="center">
  <img src="https://raw.githubusercontent.com/LeoHPC/teste-kabum/b03bde245f7e6cbe9cfc570fb1a427b193517a64/public/images/logo.svg" width="200">
  <br>
  Teste KaBum
</h1>

<p align="center">
  <a href="https://teste-kabum.vercel.app">Demonstração</a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/leohpc/teste-kabum">
  <img src="https://img.shields.io/github/stars/leohpc/teste-kabum">
</p>

<p align="center">
  <a href="#exclamation-sobre">Sobre</a> | <a href="#camera-funcionalidades">Funcionalidades</a> | <a href="#newspaper-layout">Layout</a> | <a href="#rocket-tecnologias">Tecnologias</a> | <a href="#mag-como-visualizar">Como visualizar</a>
</p>

<img src="https://raw.githubusercontent.com/LeoHPC/teste-kabum/main/src/demo/demo_01.png">

## :exclamation: Sobre

Este repositório é destinado ao teste da empresa KaBum, no qual consistia na criação de uma página inicial similar à pagina original da empresa. Para tal, foi proposto um layout criado na plataforma Figma para servir como guia de desenvolvimento.

## :camera: Funcionalidades

A aplicação deveria conter a finalidade de adicionar um produto ao carrinho no clique do botão "comprar" de cada item. O mesmo foi feito com êxito, além de se precaver ao caso do produto já existir no carrinho do usuário, apresentando a seguinte mensagem:

<div align="center">
  <img src="https://raw.githubusercontent.com/LeoHPC/teste-kabum/main/src/demo/demo_02.png">
</div>

Além disso, a página mantém o login do usuário e os produtos no carrinho ao recarregar da página, não precisando adicionar um por um novamente na hora da compra!

E para a criação dos produtos, foi utilizado o MockAPI, do qual simula um banco de dados com as informações necessárias de cada produto da página inicial.

## :newspaper: Layout

Você pode visualizar o layout do projeto através [deste link](https://www.figma.com/file/XQ1KqEcyYtdw0GRcu4MkPf/kabum-home?node-id=62%3A7174). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.

## :rocket: Tecnologias

Este projeto foi criado com as seguintes tecnologias:

- TypeScript
- React
- Next
- Styled Components
- MockAPI
- Axios
- Git

<div style="display: inline_block">
    <img align="center" alt="TypeScript" height="40" width="45" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg">
    <img align="center" alt="ReactJS" height="45" width="45" src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_reactjs.svg">
    <img align="center" alt="Nextjs" height="45" width="40" src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg" />
    <img align="center" alt="Styled Components" height="45" width="45" src="https://www.styled-components.com/atom.png" />
    <img align="center" alt="Git" height="45" width="40" src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" />
</div>

## :mag: Como visualizar

Pelo seu terminal, execute os seguintes comandos para executar a aplicação localmente:
```shell
  # Clone o repositório
  git clone https://github.com/LeoHPC/teste-kabum
  
  # Acesse a pasta do projeto
  cd teste-kabum
  
  # Instale as dependências 
  npm install
  
  # Rode o projeto
  npm run dev
  
  # Acesse http://localhost:3000/
```
Ou, simplesmente, clique <a href="https://teste-kabum.vercel.app">aqui</a> para ser redirecionado para o site da aplicação!

---

Feito com ❤ por Leonardo Henrique :kissing: [Contato](https://www.linkedin.com/in/leonardo-henrique-33a3ab210)
