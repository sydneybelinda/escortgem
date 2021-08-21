import {Services} from "../../../models";

export default async (req, res) => {
  const {
    query: { serviceid },
  } = req;

  const s = await Services.findAll({});

  return res.status(200).send(s);
};
