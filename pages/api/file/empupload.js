var fs = require("fs");
// import formidable from "formidable";
// export default async (req, res) => {
//   // for the pipe to work, we need to disable "bodyParser" (see below)

//   const form = new formidable.IncomingForm();
//   form.parse(req, function(err, fields, files) {


//     const filename = fields.filename

//     console.log(files)


//     const uploadedFile = files.file.path;
//     //const fileName = files.file.name;

//     fs.rename(uploadedFile, `public/userdata/employment/${fileName}`, function(err) {
//       if (err) {
//         return res.status(500).send(err);
//       }

//       return res.status(200).send(`public/userdata/employment/${fileName}`);
//     });
//   });
// };
// export const config = {
//   api: {
//     bodyParser: false
//   }
// };

import formidable from 'formidable';

export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default async (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./";
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
    //  console.log(err, fields, files);

    const uploadedFile = files.file.path

    const ext = uploadedFile.split(".")[1]


    const filename = fields.filename.trim() + "." + ext;




      fs.rename(uploadedFile, `public/userdata/employment/${filename}`, function(err) {
              if (err) {
                return res.status(500).send(err);
              }
        
              return res.status(200).send(`/userdata/employment/${filename}`);
            });
    });
  };
