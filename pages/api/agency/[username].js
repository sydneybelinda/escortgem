import {Agency} from "../../../models";

export default async (req, res) => {
    const {
        query: { username }
      } = req;
  
      var s = []

   s = await Agency.findOne({
        where:{
            username: username
        }
  });

  if (!s){
      s = []
  }

  
  return res.status(200).send(s);
};
