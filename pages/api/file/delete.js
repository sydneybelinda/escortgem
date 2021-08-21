import { File } from "../../../models";

export default async (req, res) => {
  if (req.method === "POST") {
    const name = req.body.name;

    try {
      const file = await File.findOne({
        where: { name: name }
      });

      file.destroy();

      return res.status(200).json({ file, msg: "post deleted successfully" });
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    res.status(400).json({ message: "Not Authorised" });
  }
};
