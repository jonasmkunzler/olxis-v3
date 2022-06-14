import dbConnect from '../../src/utils/dbConnect';
import UserModel from '../../src/models/users';

const users = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      await dbConnect();
      res.status(200).json({ success: true });
      break;
    case 'POST':
      const { email, password } = req.body;
      await dbConnect();
      const user = new UserModel({
        email,
        password,
      });
      user.save();
      res.status(201).json({ success: true });
  }
};

export default users;
