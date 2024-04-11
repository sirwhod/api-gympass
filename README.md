# GymPass

Este é um aplicativo no estilo GymPass.

## Requisitos Funcionais (RFs)

Os Requisitos Funcionais descrevem as funcionalidades disponíveis para os usuários na aplicação.

Deve ser possível:

- [X] se cadastrar;
- [X] se autenticar;
- [X] obter o perfil de um usuário logado;
- [X] obter o número de check-ins realizados pelo usuário logado;
- [X] o usuário obter seu histórico de check-ins;
- [X] o usuário buscar academias próximas;
- [X] o usuário buscar academias pelo nome;
- [X] o usuário realizar check-in em uma academia;
- [ ] validar o check-in de um usuário;
- [X] cadastrar uma academia;

## Regras de Negócio (RNs)

As Regras de Negócio são os caminhos que cada requisito funcional pode seguir. Cada uma está associada a um requisito funcional específico.

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## Requisitos Não-Funcionais (RNFs)

Os Requisitos Não-Funcionais são aspectos técnicos da aplicação que o cliente não influencia diretamente. Eles são mais relacionados à performance, segurança e outras características técnicas do que às funcionalidades em si.

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
- [X] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);