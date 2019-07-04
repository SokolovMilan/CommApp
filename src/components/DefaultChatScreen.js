import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {ShowImage} from "./Functions/functions";

const mapDispatchToProps = (dispatch) => {
    return {
    }
};
const mapStateToProps = (state) => {
    return {
    };
};
const imageSrc = require('./Functions/imageSrc');

class DefaultChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="default-chat-screen" id="default-screen">
                <div>
                    Please choose conversation or contact to start chat
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultChatScreen);