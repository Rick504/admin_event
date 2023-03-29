# Admin Envent

### Descrição do Projeto

    Sistema de admin de evento, onde séra permitido listar usuários cadastrados no sistema, editar dados do mesmo, deletar, e criar um novo registro de um usuário na lista do evento, tudo conforme o nível de permissionamento do admin logado.

### Tecnologias utilizadas

    Prod:
        axios: 0.27.2,
        vue: 2.6.14,
        vue-router: 3.2.,
        vuetify: 2.6.7,
        vuex: 3.4.0

    Teste:
        json-serve


### Inicialização

    yarn - ira executar o comando yarn install para preparar a pasta node_modules

### Como rodar o projeto

    yarn serve - subir o Vuejs
    yarn db - subir o json-server para testes de api

### Testar permissionamento:

    # temos abaixo os administradores cadastrados no sistema, para testar o permicionamento trocamos a varivavel
    de ambiente TESTE_ID no arquivo .env pelo id do admin e subimos a aplicaçao novamente, se mudarmos o permissionLevel tambem é possivel alterar o permissionamento:

    "id": 1,
    "name": "Rick",
    "permissionLevel": "GENERAL_ADMIN"

    "id": 2,
    "name": "Joaquin",
    "permissionLevel": "OPERATOR"

    "id": 3,
    "name": "Karla",
    "permissionLevel": "OPERATOR"

    "id": 4,
    "name": "Julia",
    "permissionLevel": "OPERATOR"

    "id": 5,
    "name": "Gabriel",
    "permissionLevel": "VISIT"
