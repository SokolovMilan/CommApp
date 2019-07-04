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
        details: state.chatReducer.chatDetails,
    };
};
const imageSrc = require('./Functions/imageSrc');

class ConversationDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.backToChat = this.backToChat.bind(this);
    }

    backToChat(){
        let conDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        conDet.style.display = 'none';
        chat.style.visibility = 'visible';

    }

    render() {
        return (
            <div className="conversation-details" id="convers-det">
                <div className="note">
                    Note: Page under construction, please first<br/>
                    select conversation to get proper details!
                </div>

                Conversation details
                <p/>
                {(this.props.details != null) ?
                    <div>
                        <ShowImage src={this.props.details.data.image} width="50px"/>
                        <p/>
                        Name: {this.props.details.data.title}
                        <p/>
                        Conversation between users {this.props.details.data.user_ids[0]}
                        {(' ')}and{(' ')}
                        {this.props.details.data.user_ids[1]}

                        <p/>
                    </div>

                    : console.log('no details')
                }
                <p/>
                <button>ADD</button>
                <p/>
                <button onClick={this.backToChat}>GO BACK</button>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationDetails);