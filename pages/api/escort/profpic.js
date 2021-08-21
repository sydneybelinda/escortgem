
import {Escort} from "../../../models";

export default async (req, res) => {
     if (req.method === "POST") {
         const data = req.body.data;

console.log(data)


        if (data.username) {

              const escort = await Escort.findOne({
                where: {
                  username: data.username,
                }
              });
      

      
            if (escort) {
                try {

              const updatedEscort = await Escort.update(data, {
                where: {
                    username: data.username
                }
            })
      

              return res.status(200).send(updatedEscort);
            
            } catch (err) {
              console.log(err);
              return res.status(500).send(err);
            }
          } 
          return res.status(200).send
         }
         return res.status(500).send(err);
    }


}
