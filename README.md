# PetAdoption API

## Sobre
Esta API tem como objetivo servir dados para os Clientes web e Mobile do produto PetAdoption.

## Requisitos

1. VSCode
2. Node
3. Yarn

## Como rodar a API

1. Copie este repositório para sua máquina: `git clone https://github.com/Vitorhr10/petadoption-backend`
2. Instale a CLI do Node e Yarn para utilizar os comandos abaixo, caso não possua.
3. Acesse este [link](https://nodejs.org/en/) para instalar a CLI do Node e acesse este [link](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) para instalar a CLI do Yarn.
4. Verifique se foi instalado corretamente a CLI usando o comando: `node -v` e `yarn -v`
5. Instale as dependências do projeto: `yarn`
6. Rode as migrations: `yarn knex:migrate`
7. Rode as seeds: `yarn knex:seed`
8. Rode a aplicação: `yarn dev`

## Como contribuir

1. Clique em Fork neste repositório
2. Crie uma Branch com sua implementação: `git checkout -b my-feature`
3. Comita suas alterações: `git commit -m 'feat: My new feature'`
4. Envie sua branch para o repositório remoto: `git push origin my-feature`
5. Aguarde a aprovação de sua implementação pelo mantenedor do projeto
