
import {Escort, Agency} from "../../../models";

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
          } else {

      
            try {
              const newescort = await Escort.create(data)

              if(data.type == "Agency Escort"){

                const agency = await Agency.findOne({
                  where: {
                    username: data.owner,
                  }
              })
              
              let nextid = 1

              if(agency.lastEscortId){
                nextid = agency.lastEscortId + 1;
              }

              const adata = {
                lastEscortId: nextid
              }

              const updateAgency = await Agency.update(adata, {
                where: {
                    username: data.owner
                }
            })
            }
      
              return res.status(200).send(newescort);
            } catch (err) {
              console.log(err);
              return res.status(500).send(err);
            }
             }
         }
    }


}
