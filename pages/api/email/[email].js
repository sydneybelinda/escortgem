import {User} from "../../../models";

export default async (req, res) => {
    const {
        query: { email }
      } = req;
    

  const s = await User.findAll({
        where:{
            email: email
        }
  });

  
  return res.status(200).send(s);
};
