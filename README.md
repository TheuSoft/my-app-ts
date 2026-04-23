# My App TS

Aplicacao em React + TypeScript com autenticacao, Context API, persistencia de sessao em localStorage e rotas protegidas.

## Objetivo

Este projeto foi desenvolvido para praticar:

- Autenticacao de usuario no front-end
- Estado global com Context API
- Persistencia de sessao com localStorage
- Protecao de paginas privadas com React Router
- Organizacao por camadas (pages, components, services)
- Testes unitarios de regras de negocio

## Funcionalidades

- Login com validacao de email e senha
- Logout com limpeza da sessao
- Botao de logout exibido somente quando o usuario esta logado
- Sessao persistida no localStorage (nao perde ao recarregar a pagina)
- Redirecionamento automatico para area logada quando ja existe sessao
- Rotas privadas para paginas protegidas
- Pagina de informacoes da usuaria (nome e email)

## Fluxo da autenticacao

1. Usuaria informa email e senha na tela de login.
2. O service valida as credenciais.
3. Em caso de sucesso:

- Context API salva estado global
- Dados sao persistidos no localStorage
- Navegacao para pagina protegida

4. Em caso de logout:

- Estado global e limpo
- localStorage e limpo
- Navegacao para pagina inicial

## Beneficios no estudo

- Entendimento pratico de async/await e Promise
- Diferenca entre estado local e estado global
- Como separar regras de negocio (services) da interface (pages/components)
- Como manter sessao entre reloads
- Base para evoluir para autenticacao com backend real (JWT/API)

## Tecnologias e bibliotecas utilizadas

- React
- TypeScript
- React Router DOM
- Chakra UI
- Emotion React
- Styled Components
- Next Themes
- React Icons
- Jest
- Testing Library (react, jest-dom, user-event, dom)
- Prettier
- ESLint Config Prettier

## Scripts disponiveis

No diretorio do projeto:

- `npm start`
  Inicia o app em modo de desenvolvimento.

- `npm test`
  Executa os testes em modo interativo.

- `npm run build`
  Gera a versao de producao na pasta build.

## Credenciais de teste

- Email: matheu@hotmail.com
- Senha: 123456

## Estrutura principal

- `src/components`
  Componentes visuais e contexto global

- `src/pages`
  Paginas da aplicacao (login, conta, dados da usuaria)

- `src/services`
  Regras de autenticacao e manipulacao de storage

## Proximos passos sugeridos

1. Adicionar feedback visual de erro sem alert
2. Cobrir mais cenarios com testes de contexto e rotas privadas
3. Integrar com API real para autenticacao
4. Implementar refresh token e expiracao de sessao
