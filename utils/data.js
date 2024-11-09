const bcrypt = require('bcryptjs');

const users = [
  { 
    username: 'admin', 
    password: bcrypt.hashSync('adminpassword', 10), 
    role: 'Admin' 
  },
  { 
    username: 'editor', 
    password: bcrypt.hashSync('editorpassword', 10), 
    role: 'Editor' 
  },
  { 
    username: 'viewer', 
    password: bcrypt.hashSync('viewerpassword', 10), 
    role: 'Viewer' 
  }
];

const resources = [
  { id: 1, name: "Resource 1" },
  { id: 2, name: "Resource 2" },
  { id: 3, name: "Resource 3" },
];

module.exports = { users, resources };