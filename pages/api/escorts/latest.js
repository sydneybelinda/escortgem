
import {Escort} from "../../../models"

export default async (req, res) => {

  try {

    var escorts = [];

     escorts = await Escort.findAll({
      where: {
        enabled: "True",
      },
      order: [['id', 'DESC']],
      limit: 20
  
    })

    if(!escorts){
      escorts = [];
    }



    return res.status(200).send(escorts);
  } catch (err) {
    return res.status(500).send(err);
  }

};
