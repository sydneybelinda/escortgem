import {User} from "../../../models";

export default async (req, res) => {
    const {
        query: { username }
      } = req;
    

  const s = await User.findAll({
        where:{
            username: username
        }
  });

  
  return res.status(200).send(s);
};
