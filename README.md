# E-Food - E-commerce de Delivery

## Descrição do Projeto
E-Food é uma plataforma de e-commerce para delivery de alimentos, desenvolvida como projeto final do curso de Engenheiro Front-End na EBAC. A aplicação é um front-end dinâmico que se integra a um back-end para exibir uma lista de restaurantes, seus respectivos cardápios e processar pedidos.

Este projeto foi fundamental para aplicar e aprofundar conhecimentos em:

- **Desenvolvimento Frontend Robusto:** Construção de uma aplicação completa, desde a listagem de restaurantes até o fluxo de checkout e confirmação de pedido.
- **Consumo de APIs:** Integração fluida com um back-end para carregar dados de restaurantes, menus e enviar informações de pedidos via requisições GET e POST.
- **Gerenciamento de Estado:** Utilização do Redux Toolkit para gerenciar o estado global da aplicação, especialmente o carrinho de compras e os dados do pedido.
- **Componentização e Reusabilidade:** Organização do código em componentes reutilizáveis, como cartões de restaurante e itens do cardápio.
- **Validação de Formulários:** Implementação de validações robustas com Formik e Yup para garantir a integridade dos dados no processo de checkout, proporcionando uma experiência de usuário segura e eficiente.
- **Tipagem Estática:** Uso de TypeScript para adicionar segurança e eficiência ao código, prevenindo erros comuns durante o desenvolvimento.
- **Estilização Modular:** Aplicação do Styled Components para uma estilização elegante e modular dos componentes.
- **Boas Práticas de Código:** Manutenção de um código limpo e padronizado com ESLint e Prettier.

## Tecnologias Utilizadas

- **Linguagem de Programação:** TypeScript
- **Framework/Biblioteca:** React
- **Gerenciamento de Estado:** Redux & Redux Toolkit (RTK Query)
- **Requisições HTTP:** Consumo de APIs
- **Roteamento:** React Router DOM
- **Estilização:** Styled Components
- **Validação de Formulários:** Formik e Yup
- **Formatação de Inputs:** InputMask
- **Análise de Código:** ESLint e Prettier

## Funcionalidades Principais

- **Página Inicial:** Lista dinâmica de restaurantes, que se atualiza automaticamente ao carregar novos dados do back-end.
- **Página do Restaurante:** Exibe o cardápio completo do estabelecimento.
- **Carrinho de Compras:** Adiciona e remove pratos, exibe o total e a quantidade de itens.
- **Checkout:** Formulário de pagamento com validação para simular a conclusão da compra.
- **Confirmação de Pedido:** Tela de sucesso com o ID do pedido após a conclusão da compra.

## Como Rodar o Projeto

1. Clone este repositório:
```bash
git clone <https://github.com/GeorgeBrookss/eFood>
```
2. Navegue até o diretório do projeto:
```bash
cd efood
```
3. Instale as dependências:
```bash
git clone <https://github.com/GeorgeBrookss/eFood>
```
4. Inicie a aplicação:
```bash
npm start
```
A aplicação será iniciada em http://localhost:3000
