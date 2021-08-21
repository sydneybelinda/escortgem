import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { PRIVATEKEY } from "../../../../config";
import {User} from "../../../models";

export default async (req, res) => {


  if (req.method === "POST") {
    const data = req.body.userData;

 

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    
    

    try {
      const user = await User.create({
        email: data.email.toLowerCase(),
        username: data.username.toLowerCase(),
        type: data.type,
        salt: salt,
        password: hash
      });

    

      const payload = {
        id: user.id,
        username: user.username
      };

      let token = jwt.sign(payload, process.env.SECRET);
      res.json({ msg: "ok", token: `${token}`, user: user });

     // return res.status(200).json({ user, msg: 'account created successfully' });

      //   return req.login(user, err => {
      //     if (!err) {
      //       return res.status(200).send(getUserProps(user));
      //     }

      //     return res.status(500).send({
      //       message: 'Auth error',
      //     });
      //   });
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    res.status(400).json({ message: "Not Authorised" });
  }
};
