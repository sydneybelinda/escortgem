
import db from "../../../models"

export default async (req, res) => {

  
  const {
    query: { cat }
  } = req;


  const s = await db.seoservices.findOne({
    where: {
      keyindex: cat
    }

  })




  return res.status(200).send(s || {});
};





