import {Escort} from "../../../../models"

export default async (req, res) => {
    const {
        query: { username }
      } = req;
  
      var s = []

   s = await Escort.findAll({
        where:{
            owner: username
        }
  });

  if (!s){
      s = []
  }

  
  return res.status(200).send(s);
};
