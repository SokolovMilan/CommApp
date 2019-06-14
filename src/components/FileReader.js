import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {ShowImage} from "./Functions/functions";
import {storage} from '../firebase';

const mapDispatchToProps = (dispatch) => {
    return {

    }
};
const mapStateToProps = (state) => {
    return {

    };
};

const imageSrc = require('./Functions/imageSrc');

class FileReader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filename: "",
            filesize: 0

        };
        this.showFile = this.showFile.bind(this);
    }
    componentWillMount(){
        let url = this.props.url;
        let res = url.substr(80, 100);
        window.fileName = res.split('?')[0];


        const data = storage.ref(`files/${fileName}`);
        data.getMetadata().then((metadata) => {

            this.setState({
                filename: metadata.name
            });

            let bytes = metadata.size;
                if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB";
                    this.setState({
                        filesize: bytes
                    });
                }
                else if (bytes >= 1048576)    { bytes = (bytes / 1048576).toFixed(2) + " MB";
                    this.setState({
                        filesize: bytes
                    });
                }
                else if (bytes >= 1024)       { bytes = (bytes / 1024).toFixed(2) + " KB";
                    this.setState({
                        filesize: bytes
                    });
                }
                else if (bytes > 1)           { bytes = bytes + " bytes";
                    this.setState({
                        filesize: bytes
                    });
                }
                else if (bytes == 1)          { bytes = bytes + " byte";
                    this.setState({
                        filesize: bytes
                    });
                }
                else                          { bytes = "0 bytes";
                    this.setState({
                        filesize: bytes
                    });
                }

        });


    }

    showFile(){
        let url = this.props.url;
        window.open(url, '_blank');
    }


    render() {
        return (
                <div onClick={this.showFile} className="fileReader">
                    <ShowImage src={imageSrc.fileIcon} width="40px"/>
                    <div className="details">
                        <div>{this.state.filename}</div>
                        <div className="size">{this.state.filesize}</div>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileReader);