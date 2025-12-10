
const express = require('express'); 
const app = express(); 
const { port } = require('./config/env'); // Import the port from the env file

const userRoutes = require('./routes/v1/users.routes');
const workoutRoutes = require('./routes/v1/workouts.routes');
const exerciseRoutes = require('./routes/v1/exercises.routes');

app.use('/api/user', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/exercises', exerciseRoutes);



//importar rutas
const routes = require('./routes');

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

// Configurar rutas con prefijo /api
app.use('/api', routes);


// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// const express = require('express');
// const app = express();
// app.use(express.json());

 //Rutas
// const userRoutes = require('./routes/users.routes');
// const workoutRoutes = require('./routes/workouts.routes');
// const exerciseRoutes = require('./routes/exercises.routes');

// app.use('/api/users', userRoutes);
// app.use('/api/workouts', workoutRoutes);
// app.use('/api/exercises', exerciseRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`✅ Workout Tracker API corriendo en http://localhost:${PORT}`);
// });