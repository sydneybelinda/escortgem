import * as Models from "../../../models";

export default async (req, res) => {
    const {
        query: { type }
      } = req;

  //    console.log(Models)

  const s = await Models[type].findAll();

  
  return res.status(200).send(s);
};
