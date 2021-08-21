const { User } = require('../../../models')

export default async (req, res) => {

    console.log(User)
    const users = await User.findAll();
   
    return res.status(200).send(users);
  };
  