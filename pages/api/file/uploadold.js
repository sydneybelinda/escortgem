var fs = require("fs");
import formidable from "formidable";

import {File} from "../../../models";

export default async (req, res) => {
  // for the pipe to work, we need to disable "bodyParser" (see below)

  const form = new formidable.IncomingForm();
  form.parse(req, async function(err, fields, files) {

console.log(fields)



    const uploadedFile = files.file.path;
    const fileName = files.file.name;

    const data = {
        name: files.file.name,
        size: files.file.size,
        owner: fields.username
    }

    const newfile = await File.create(data)

    try  {

    fs.rename(uploadedFile, `public/uploadedimages/${fileName}`, function(err) {
       
       


      return res.status(200).send(`public/uploadedimages/${fileName}`);
    });
  } catch (err) {
    return res.status(500).send(err);
  }
  });
};
export const config = {
  api: {
    bodyParser: false
  }
};
