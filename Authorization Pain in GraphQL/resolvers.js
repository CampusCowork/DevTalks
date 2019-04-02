// Mock products data
const productsData = require('./datamocks/products');
// Mock users data
const users = require('./datamocks/users');
// Mock permissions data
const { globalPermissions, permission, resolver, attribute } = require('./datamocks/permissions');

userPermissions = []

const resolvers = {
  Query: {
    getEditProduct: (parent, { id }) => {
      output = authorize("getEditProduct");

      if (!output) {
        throw Error('Unauthorized');
      }

      const allowedAttrs = output.allowedAttributes;
      const info = [];

      // valid ugly hack
      let product = JSON.parse(JSON.stringify(productsData[id]));
      productKeys = Object.keys(productsData[id]);

      productKeys.forEach((value) => {
        if (!allowedAttrs.includes(value)) {
          product[value] = null;
          info.push(`${value} value cannot be displayed due to restricted access!`);
        }
      });

      return {
        product,
        info
      }
    },
    getProducts: () => {
      output = authorize("getProducts");

      if (!output) {
        throw Error('Unauthorized');
      }

      return {
        productList: productsData,
        childResolvers: output.childResolvers
      }
    }
  },
  Mutation: {
    login: (parent, { username, password }) => {
      let user = users.filter((user) => {
        if (user.username === username) {
          return user;
        }
      });
      user = user[0];

      if (user.length === 0 || user.password !== password) {
        return 'wrong user name or password';
      }
      userPermissions = user.permissions;
      return 'Succesfully loged in';
    },
    updateProduct: (parent, { input }) => {
      output = authorize("updateProduct");

      if (!output) {
        throw Error('Unauthorized');
      }
      const info = [];
      const allowedAttrs = output.allowedAttributes;

      updateId = input.id;
      delete input['id'];

      inputKeys = Object.keys(input);

      inputKeys.forEach((value) => {
        if (!allowedAttrs.includes(value)) {
          input[value] = null;
          info.push(`${value} value cannot be updated due to restricted access!`);
        }
      });

      productKeys = Object.keys(productsData[updateId]);

      productKeys.forEach((value) => {
        if (input[value] !== null) {
          productsData[updateId][value] = input[value];
        }
      })

      return {
        product: productsData[updateId],
        info: info
      }
    },
    deleteProduct: (parent, { id }) => {
      output = authorize("deleteProduct");

      if (!output) {
        throw Error('Unauthorized');
      }

      productsData.splice(id, 1);
      return true
    }
  }
};

module.exports = resolvers;

const authorize = (resolverName) => {
  const allowedPermissions = globalPermissions.filter((permission) => {
    if (permission.resolver === resolverName && userPermissions.includes(permission.permissionId)) {
      return true;
    }
  })

  if (allowedPermissions.length === 0) {
    return false;
  }

  console.log(allowedPermissions);

  const childResolvers = [];

  allowedPermissions[0].children.forEach((value) => {
    perm = globalPermissions.filter((gPerm) => gPerm.permissionId === value);
    if (!childResolvers.includes(perm[0].resolver) && userPermissions.includes(perm[0].permissionId)) {
      childResolvers.push(perm[0].resolver)
    }
  });

  console.log(childResolvers);


  let allowedAttributes = [];

  allowedPermissions.forEach((value) => {

    const perm = permission.filter((item) => item.id === value.permissionId);

    const attr = attribute.filter((item) => item.id === perm[0].attribute);

    if (attr.length !== 0) {
      allowedAttributes.push(attr[0].name);
    } else {
      allowedAttributes = true
    }
  });

  return {
    allowedAttributes,
    childResolvers
  };
}