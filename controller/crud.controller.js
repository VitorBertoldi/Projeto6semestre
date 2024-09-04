mongoose.connect('mongodb+srv://vitorbertoldi:wrtYXEn67mrZT4im@cluster0.ad7ah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});

const Student = mongoose.model('Student', studentSchema);

export const addStudent = async (req, res) => {
    const { firstName, lastName } = req.body;
    try {
      const newStudent = new Student({ firstName, lastName });
      await newStudent.save();
      res.status(201).json(newStudent);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar aluno', error });
    }
  }

export const selectStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error });
  }
}

export const selectStudentbyId = async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar aluno', error });
    }
  }

export const atualizarStudent = async (req, res) => {
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
  }

export const deleteStudent = async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) {
        return res.status(404).json({ message: 'Aluno não encontrado' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover aluno', error });
    }
  }