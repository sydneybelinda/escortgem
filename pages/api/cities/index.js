import {City} from "../../../models";

export default async (req, res) => {


  const s = await City.findAll();

  
  return res.status(200).send(s);
};
