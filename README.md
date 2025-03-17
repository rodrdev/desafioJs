# 🔥 Desafio de Filtro Inteligente

Este desafio consiste em criar uma função que filtre e organize dados com base em uma entrada do usuário. A função deve buscar um termo digitado e retornar os resultados agrupados por categoria.

## 🚀 Descrição do Desafio

Temos um objeto `apiResponse` que contém cinco categorias de dados:

- **Users**
- **Machines**
- **Challenges**
- **Teams**
- **Companies**

O objetivo é implementar uma função que receba um termo de busca e retorne os itens que contenham esse termo em seu nome, agrupados por categoria. Se nenhuma correspondência for encontrada em uma categoria, ela deve ser exibida como `VAZIO`.

## 📌 Exemplo de Entrada

```js
const input = "e";
```

## 📜 Exemplo de Saída Esperada

```
- Users:
    Anderson
- Machines:
    Sense
- Challenges:
    Weak RSA
    Tear Or Dear
- Teams:
    VAZIO
- Companies:
    All Net
    AT Telecom
```

## 🎯 Passo a Passo para Resolver

1. Criar uma função que recebe o termo de busca como parâmetro.
2. Percorrer cada categoria do objeto `apiResponse`.
3. Filtrar os itens cujo nome contenha o termo.
4. Formatar a saída agrupando os resultados por categoria.
5. Exibir "VAZIO" para categorias sem correspondências.

## 🔥 Desafio Extra

Se quiser elevar o nível, tente modificar o código para:

- Torná-lo insensível a maiúsculas e minúsculas.
- Permitir regex na busca para maior flexibilidade.
- Ordenar os resultados alfabeticamente antes de exibi-los.

🚀 Bora codar! 💻
