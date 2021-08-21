import {Agency} from "../../../models";

export default async (req, res) => {
     if (req.method === "POST") {
         const data = req.body.data;




        if (data.username) {

              const agency = await Agency.findOne({
                where: {
                  username: data.username,
                }
              });
      

      
            if (agency) {
                try {

              const updatedAgency = await Agency.update(data, {
                where: {
                    username: data.username
                }
            })
      

              return res.status(200).send(updatedAgency);
            
            } catch (err) {
              console.log(err);
              return res.status(500).send(err);
            }
          } else {

      
            try {
              const newagency = await Agency.create(data)
      
              return res.status(200).send(newagency);
            } catch (err) {
              console.log(err);
              return res.status(500).send(err);
            }
             }
         }
    }


}
