import db from "../../../models";

export default async (req, res) => {
    const {
        query: { city }
      } = req;
    

  const s = await db.local.findAll({
        where:{
            loc: city
        }
  });

  
  return res.status(200).send(s);
};
