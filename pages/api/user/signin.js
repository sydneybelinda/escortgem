import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { PRIVATEKEY } from "../../../../config";
import {User} from "../../../models";


const { Op } = require("sequelize");

export default async (req, res) => {
  try {
    let errors = {};

     if (req.method === "POST") {
      const { username, password } = req.body;

      User.findOne({
        where: {
          [Op.or]: [
            { username: username },
            { email: username }
          ]
        }
      }).then(user => {
        // if (!user) {
        //   let error = {};
        //   errors.email = "No Account Found";
        //   // const error = new Error(errors.email)
        //   error.response = "No Account Found";
        //   res.status(400).json(error);
        //   //  throw error
        // }
        if (user) {
        bcrypt.compare(password, user.password).then(isMatch => {
          if (isMatch) {
            // const id  = user.id
            // return res.status(200).json({ token: id })

            // const payload = {
            //   id: user.id,
            //   username: user.username,
            //   email: user.email
            // };

            // let token = jwt.sign(payload, PRIVATEKEY);
            res.json({user: user});

          } else {
            var response = "Username or Password is incorrect";
      
            res.status(400).json({ response: response });
          }
        });
      } else {
        var response = "Username or Password is incorrect";
       
            res.status(400).json({ response: response });
      }

      });
   }

  } catch (error) {
    const { response } = error;
    return response
      ? res.status(response.status).json({ response: response.statusText })
      : res.status(400).json({ response: error.message });
  }
 };
//}
