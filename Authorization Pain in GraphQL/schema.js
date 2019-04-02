const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const schema = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Product {
    name: String
    desc: String
    image: String
    price: Float
  }

  type ProductsPage {
    productList: [Product]
    childResolvers: [String]
  }

  type ProductUpdateInfo {
    product: Product
    info: [String]
  }

  type ProductEditPage {
    product: Product
    info: [String]
  }

  input UpdateProductInput {
    id: Int!
    name: String
    desc: String
    image: String
    price: Float
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    getEditProduct(id: Int): ProductEditPage
    getProducts: ProductsPage
  }

  type Mutation {
    login(username: String, password: String): String
    updateProduct(input: UpdateProductInput): ProductUpdateInfo
    deleteProduct(id: Int): Boolean
  }
`;

module.exports = schema;