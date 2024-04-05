# GymPass

Este é um aplicativo no estilo GymPass.

## Requisitos Funcionais (RFs)

Os Requisitos Funcionais descrevem as funcionalidades disponíveis para os usuários na aplicação.

Deve ser possível:

- [ ] se cadastrar;
- [ ] se autenticar;
- [ ] obter o perfil de um usuário logado;
- [ ] obter o número de check-ins realizados pelo usuário logado;
- [ ] o usuário obter seu histórico de check-ins;
- [ ] o usuário buscar academias próximas;
- [ ] o usuário buscar academias pelo nome;
- [ ] o usuário realizar check-in em uma academia;
- [ ] validar o check-in de um usuário;
- [ ] cadastrar uma academia;

## Regras de Negócio (RNs)

As Regras de Negócio são os caminhos que cada requisito funcional pode seguir. Cada uma está associada a um requisito funcional específico.

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## Requisitos Não-Funcionais (RNFs)

Os Requisitos Não-Funcionais são aspectos técnicos da aplicação que o cliente não influencia diretamente. Eles são mais relacionados à performance, segurança e outras características técnicas do que às funcionalidades em si.

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);