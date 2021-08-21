
import db from "../../../models"

export default async (req, res) => {

  

  const s = await db.seohair.findAll({

  })




  return res.status(200).send(s);
};





