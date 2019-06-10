import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {getContacts} from "../actions/contacts";
import {ShowImage} from "./Functions/functions";

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => dispatch(getContacts()),
    }
};
const mapStateToProps = (state) => {
    return {
        contacts: state.contactsReducer.allContacts,
    };
};
const imageSrc = require('./Functions/imageSrc');

class ConversationDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listitems: [
                {name: 'milan'},
                {name: 'jovan'},
                {name: 'nikola'}
            ]

        };

        this.backToChat = this.backToChat.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        this.props.getContacts();
    }

    backToChat(){
        let conDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        conDet.style.display = 'none';
        chat.style.visibility = 'visible';

    }
    deleteItem(index){
        let item = this.state.listitems;
        item.splice(index, 1);
        this.setState({listitems: item});
    }

    render() {
        return (
            <div className="conversation-details" id="convers-det">
                Conversation details

                <p/>
                <ShowImage src={imageSrc.user3Icon} width="50px"/>
                <p/>
                Name: {this.props.selectedConversation.username}
                <p/>
                Members:
                <div className="items-cont">
                    {this.state.listitems.map((item, index) =>
                        <li className="items" key={index}> {item.name}
                            <span
                                onClick={ () => {this.deleteItem(index)}}
                                className="deleteitem">x</span></li>
                    )
                    }
                </div>

                <p/>
                <button>ADD</button>
                <p/>
                <button onClick={this.backToChat}>GO BACK</button>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationDetails);