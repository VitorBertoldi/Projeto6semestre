const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect('mongodb+srv://vitorbertoldi:wrtYXEn67mrZT4im@cluster0.ad7ah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

app.post('/students', async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const newStudent = new Student({ firstName, lastName });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar aluno', error });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error });
  }
});

app.get('/students/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar aluno', error });
  }
});

app.put('/students/:id', async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar aluno', error });
  }
});

app.delete('/students/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover aluno', error });
  }
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
