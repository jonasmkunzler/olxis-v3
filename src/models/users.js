import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'O campo "email" é obrigatório.'],
  },
  password: {
    type: String,
    required: [true, 'O campo "senha" é obrigatórioU.'],
  },
});
export default mongoose.models.users || mongoose.model('users', schema);
