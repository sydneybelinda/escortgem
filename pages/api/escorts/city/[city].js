
import {Escort } from "../../../../models"

export default async (req, res) => {
    const {
        query: { city }
      } = req;
    

  const s = await Escort.findAndCountAll({
        where:{
            city: city,
            enabled: "True",
        },
        order: [['id', 'DESC']],
  });

  
  return res.status(200).send(s);
};