
//import { File, Escort } from "../../../models";

import {Escort, File } from "../../../models"

export default async (req, res) => {

  
  const {
    query: { username }
  } = req;


  

  const e = await Escort.findOne({
    where: {
      enabled: "True",
      username: username
    }

  })
  const f = await File.findAll({
    where: {
      owner: username
    }

  })

  const escort = {
    escort: e,
    files: f
  }

  // const files = await File.findAll({
  //   where: {
  //     user: username,
  //   }

  // })

//  escort.push(e);
//  escort.push({files: files})

      if (!escort) {
escort = [];
    }



  return res.status(200).send(escort);
};





