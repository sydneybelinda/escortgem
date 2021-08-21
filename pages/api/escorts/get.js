
import db from "../../../models"

export default async (req, res) => {

  try {

    var escorts = [];

     escorts = await db.escorts.findAndCountAll({
      where: {
        enabled: "True",
      },
      order: [['position', 'DESC']],
  
    })

    if(!escorts){
      posts = [];
    }



    return res.status(200).send(posts);
  } catch (err) {
    return res.status(500).send(err);
  }

};
