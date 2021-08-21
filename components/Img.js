import React, {useState} from 'react';
import Config from "../config"
// import Image from 'next/image'

const Img = (props) => {

  const file = props.file

    const imagePath = `${Config.url}/uploadedImages/${file}`;
    const [src, setSrc] = useState(imagePath)



    const back = {
        backgroundImage: `url(${src})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
      };
    
      var name = file;
  
  
    const onErrorSrc = () => {
      setSrc(`${Config.url}/uploadedImages/photo_coming_soon.jpg`)
    }
  
    return (
        <div className="e-image" style={back}>
                 {/* <Image
        alt={file}
        src={src}
        onError={onErrorSrc}
        layout="fill"
        objectFit="cover"
        quality={75}
      /> */}
        <img
          src={src}
          onError={onErrorSrc}
          alt={file}
          style={{ display: "none" }}
        />
      </div>
    )


}
export default Img;