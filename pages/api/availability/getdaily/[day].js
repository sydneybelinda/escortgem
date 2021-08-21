
// import db from "../../../models"

export default async (req, res) => {

  
  const {
    query: { day }
  } = req;


  var escort = []

  const e = await db.escorts.findAll({
    where: {
      enabled: "True",
      username: username
    }

  })

  const files = await db.files.findAll({
    where: {
      user: username,
      type: "Thumb"
    }

  })

 escort.push(e);
 escort.push({files: files})

      if (!escort) {
escort = [];
    }



  return res.status(200).send(escort);
};





