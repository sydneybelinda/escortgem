// Import React FilePond
import FilePondPluginFileRename from "filepond-plugin-file-rename";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
// import { URL } from "../../../config";
import {deleteFile} from "../../utils/Queries";
import Config from "../../config"



// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginFileRename,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageCrop,
  FilePondPluginImageValidateSize,
  FilePondPluginImageTransform
);

// Our app
class FileUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
   
      files: []
    };
  }

  componentDidMount = () => {
    const URL = Config.URL
    if (this.props.files) {
      var files = [];
      this.props.files.map(file => {
        files.push({
          source: `${URL}/uploadedimages/${file.name}`,
          options: {
            type: "local"
          }
        });
      });

      this.setState({ files: files });
    }
  };

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  makeid = length => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  render() {
    var n;

    const URL = Config.URL;

    return (
      <div className="App">
        <FilePond
          ref={this.props.setRef}
          files={this.state.files}
          allowMultiple={true}
          name={"file"}
          maxFiles={10}
          server={{
            process: "/api/file/upload",

            load: (source, load) => {
              fetch(source)
                .then(res => res.blob())
                .then(load);
            },
            remove: (source, load, error) => {
              var name = source.replace(`${URL}/public/uploadedimages/`, "");

              deleteFile(name,props.config);

              error("oh my goodness");

              load();
            }
          }}
          imageResizeMode="cover"
          allowImageTransform={true}
          allowImageCrop={true}
          imageCropAspectRatio={"1:1"}
          oninit={() => this.handleInit()}
          imageTransformOutputQuality={65}
          imageTransformOutputMimeType="image/jpeg"
          fileRenameFunction={file => {
            n = this.makeid(25);
            return n + file.extension;
          }}
          onupdatefiles={fileItems => {
            this.setState({ files: fileItems.map(fileItem => fileItem.file) });
          }}
          // onupdatefiles={this.props.onupdatefiles }
          onDrop={this.props.handleUploadImages}
        />
      </div>
    );
  }
}

export default FileUploader;
