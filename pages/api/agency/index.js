import {Agency} from "../../../models";

export default async (req, res) => {


  const s = await Agency.findAll();

  
  return res.status(200).send(s);
};
