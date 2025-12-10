let exercises = [
  { id: 1, name: "Press de banca", muscle: "pecho", sets: 4, reps: 10 },
  { id: 2, name: "Sentadilla", muscle: "piernas", sets: 5, reps: 8 }
];

// GET /api/exercises
exports.getAllExercises = (req, res) => {
  const { muscle } = req.query;
  let result = [...exercises];

  if (muscle) {
    result = result.filter(e => e.muscle.toLowerCase() === muscle.toLowerCase());
  }

  res.status(200).json(result);
};

// GET /api/exercises/:id
exports.getExerciseById = (req, res) => {
  const id = parseInt(req.params.id);
  const exercise = exercises.find(e => e.id === id);

  if (!exercise) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  res.status(200).json(exercise);
};

// POST /api/exercises
exports.createExercise = (req, res) => {
  const { name, muscle, sets, reps } = req.body;

  if (!name || !muscle || sets === undefined || reps === undefined) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const newExercise = {
    id: exercises.length > 0 ? Math.max(...exercises.map(e => e.id)) + 1 : 1,
    name,
    muscle,
    sets: parseInt(sets),
    reps: parseInt(reps)
  };

  exercises.push(newExercise);
  res.status(201).json(newExercise);
};

// PUT /api/exercises/:id
exports.updateExercise = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, muscle, sets, reps } = req.body;

  const index = exercises.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  if (!name || !muscle || sets === undefined || reps === undefined) {
    return res.status(400).json({ error: "Todos los campos son obligatorios para PUT" });
  }

  exercises[index] = {
    id,
    name,
    muscle,
    sets: parseInt(sets),
    reps: parseInt(reps)
  };

  res.status(200).json(exercises[index]);
};

// PATCH /api/exercises/:id
exports.partialUpdateExercise = (req, res) => {
  const id = parseInt(req.params.id);
  const index = exercises.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  const { name, muscle, sets, reps } = req.body;
  if (name !== undefined) exercises[index].name = name;
  if (muscle !== undefined) exercises[index].muscle = muscle;
  if (sets !== undefined) exercises[index].sets = parseInt(sets);
  if (reps !== undefined) exercises[index].reps = parseInt(reps);

  res.status(200).json(exercises[index]);
};

// DELETE /api/exercises/:id
exports.deleteExercise = (req, res) => {
  const id = parseInt(req.params.id);
  const index = exercises.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Ejercicio no encontrado" });
  }

  exercises.splice(index, 1);
  res.status(204).send();
};