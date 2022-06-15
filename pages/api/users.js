import dbConnect from '../../src/utils/dbConnect';
import UserModel from '../../src/models/users';
import { crypto } from '../../src/utils/password'

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
      const passwordCryto = await crypto(password)
      const user = new UserModel({
        email,
        password : passwordCryto,
      });
      user.save();
      res.status(201).json({ success: true });
  }
};

export default users;
