import React, { Component } from 'react';
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import { render } from 'react-dom';

var url;

class Cloud extends Component {
    uploadWidget = () => {
    	
        window.cloudinary.openUploadWidget({ cloud_name: 'jaders', upload_preset: 'pbctrtjm'},
            function(error, result) {
            	url = result[0].secure_url
            	console.log(url)
            });
    }
    render(){
        return (
            <div className="main">
                <div className="upload">
                    <button onClick={this.uploadWidget} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>
        );
    }
}

export default Cloud;