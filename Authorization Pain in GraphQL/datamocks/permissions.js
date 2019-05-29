const globalPermissions = [
  {
    permissionId: 1,
    resolver: "getProducts",
    children: [2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    permissionId: 2,
    resolver: "getEditProduct",
    children: []
  },
  {
    permissionId: 3,
    resolver: "getEditProduct",
    children: []
  },
  {
    permissionId: 4,
    resolver: "getEditProduct",
    children: []
  },
  {
    permissionId: 5,
    resolver: "getEditProduct",
    children: []
  },
  {
    permissionId: 6,
    resolver: "deleteProduct",
    children: []
  },
  {
    permissionId: 7,
    resolver: "updateProduct",
    children: []
  },
  {
    permissionId: 8,
    resolver: "updateProduct",
    children: []
  },
  {
    permissionId: 9,
    resolver: "updateProduct",
    children: []
  },
  {
    permissionId: 10,
    resolver: "updateProduct",
    children: []
  },

];

const permission = [
  {
    id: 1,
    resolver: 1,
    attribute: null,
    parentId: null
  },
  {
    id: 2,
    resolver: 2,
    attribute: 1,
    parentId: 1
  },
  {
    id: 3,
    resolver: 2,
    attribute: 2,
    parentId: 1
  },
  {
    id: 4,
    resolver: 2,
    attribute: 3,
    parentId: 1
  },
  {
    id: 5,
    resolver: 2,
    attribute: 4,
    parentId: 1
  },
  {
    id: 6,
    resolver: 3,
    attribute: null,
    parentId: 1
  },
  {
    id: 7,
    resolver: 4,
    attribute: 1,
    parentId: 1
  },
  {
    id: 8,
    resolver: 4,
    attribute: 2,
    parentId: 1
  },
  {
    id: 9,
    resolver: 4,
    attribute: 3,
    parentId: 1
  },
  {
    id: 10,
    resolver: 4,
    attribute: 4,
    parentId: 1
  },
];


const resolver = [
  {
    id: 1,
    name: "getProducts",
  },
  {
    id: 2,
    name: "getEditProduct",
  },
  {
    id: 3,
    name: "deleteProduct",
  },
  {
    id: 4,
    name: "updateProduct",
  },
];

const attribute = [
  {
    id: 1,
    name: "name"
  },
  {
    id: 2,
    name: "desc"
  },
  {
    id: 3,
    name: "image"
  },
  {
    id: 4,
    name: "price"
  },
];

module.exports = { globalPermissions, permission, resolver, attribute };

const roles = [
  {
    id: 1,
    name: "product watcher"
  },
  {
    id: 2,
    name: "product admin"
  }
];

const rolesPermissions = [
  {
    roleId: 1,
    permissions: [1]
  },
  {
    roleId: 2,
    permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
]