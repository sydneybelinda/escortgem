
import {Seoeyes} from "../../../models"

export default async (req, res) => {

  

  const s = await db.seoeyes.findAll({

  })




  return res.status(200).send(s);
};





