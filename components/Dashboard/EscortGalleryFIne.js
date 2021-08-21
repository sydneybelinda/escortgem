import React, {useState, useEffect } from 'react'

import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'react-fine-uploader'
import Filename from 'react-fine-uploader/filename'

// ...or load this specific CSS file using a <link> tag in your document
import 'react-fine-uploader/gallery/gallery.css'




const UploadComponent = (props) => {

    const [ subFiles, setSubFiles ] = useState(props.files || [])

    const uploader = new FineUploaderTraditional({
        options: {
            chunking: {
                enabled: true
            },
            deleteFile: {
                enabled: true,
                endpoint: '/api/file/delete'
            },
            request: {
                params: {
                    username:props.un
    
                },
                endpoint: '/api/file/upload'
            },
            retry: {
                enableAuto: true
            }
        }
    })


    
  useEffect(
    async () => {
        // uploader.on('submitted', id => {
        //     const submittedFiles = subFiles

        //     submittedFiles.push(id)
        //     setSubFiles({ submittedFiles })
        // })
    }, []);

console.log(subFiles)

        return (
            // <Gallery uploader={ uploader } />
            <div>
            {
                subFiles && subFiles.map(id => (
                    <Filename id={ id } uploader={ uploader } />
                ))
            }
        </div>
        )

}

export default UploadComponent