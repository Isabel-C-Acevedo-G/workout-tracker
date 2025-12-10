let users = [
  {
    id:"1",
    name: "facundo cruz",
    email: "cruz@example.com",
    role: "admin",
    createdAt: "2025-09-12T12:00:00Z"
  },
    {
    id:"2",
    name: "Juan",
    email: "juang@example.com",
    role: "estuden",
    createdAt: "2025-09-12T12:00:00Z"
  },
    {
    id:"3",
    name: "carloa",
    email: "carlos@example.com",
    role: "admin",
    createdAt: "2025-09-12T12:00:00Z"
  },
    {
    id:"4",
    name: "daniel",
    email: "daniel@example.com",
    role: "gerente",
    createdAt: "2025-09-12T12:00:00Z"
  },

];

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(200).json(user);
};