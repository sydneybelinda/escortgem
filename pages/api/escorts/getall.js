
import {Escort} from "../../../models"

export default async (req, res) => {

  try {

    var escorts = [];

     escorts = await Escort.findAndCountAll({
      where: {
        enabled: "True",
      },
      order: [['id', 'DESC']],
  
    })

    if(!escorts){
      escorts = [];
    }



    return res.status(200).send(escorts);
  } catch (err) {
    return res.status(500).send(err);
  }

};
