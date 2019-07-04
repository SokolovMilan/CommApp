import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {ShowImage} from "./Functions/functions";
import {getChatDetails, makeChat, clearChat, selectedConversation} from "../actions/chat";
import socketEmitFunctions from '../util/socketEmitFunctions';

const mapDispatchToProps = (dispatch) => {
    return {
        selectedConversation: (data) => dispatch(selectedConversation(data)),
        makeChat: (data) => dispatch(makeChat(data)),
        getChatDetails: (data) => dispatch(getChatDetails(data)),
        clearChat: () => dispatch(clearChat()),

    }
};
const mapStateToProps = (state) => {
    return {
        conversations: state.contactsReducer.listUsers,
        chatId: state.chatReducer.chatId,
        selectedChat: state.chatReducer.selectedChat,
    };
};
const imageSrc = require('./Functions/imageSrc');

class Conversations extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.chooseConversation = this.chooseConversation.bind(this);
        this.details = this.details.bind(this);
    }

    chooseConversation(item){
        //need action to load all chat text from backend

        if(this.props.selectedChat != item) {
            this.props.selectedConversation(item);
            this.props.clearChat();
            this.props.makeChat(item);
        }

        let conDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        let defaultScreen = document.getElementById("default-screen");

        defaultScreen.style.display = 'none';
        conDet.style.display = 'none';
        chat.style.visibility = 'visible';

    }

    details(item){
        console.log(item);
        //need chat id from API contact list from backend to send for details!!!!!
        this.props.getChatDetails(this.props.chatId);

        let conDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        let rightchat = document.getElementById("right-chat");
        conDet.style.display = 'block';
        chat.style.visibility = 'hidden';
        rightchat.style.overflow = 'hidden';
        this.props.selectedId(item);
        console.log("choose details "+item.id);
    }

    render() {
        if(this.props.chatId != null){
            socketEmitFunctions.notifyUserConnectedToChat(this.props.chatId);
        }
        return (
            <div className="left-convers" id="convers">
                <div className="favorites">
                    <div>Favorites:</div>
                </div>
                { (this.props.conversations != null) ?
                    this.props.conversations.map((item, index) =>
                        <div className="list-cont" key={index}>
                            <div className="left-list" key={item.id}
                                 onClick={ () => {this.chooseConversation(item)}}>
                                <div className="list-image">
                                    <ShowImage src={imageSrc.homeIcon} width="50px"/>
                                </div>
                                <div className="list-contacts">
                                    <div className="contact-name">
                                        Chat beetwen you and user {item}
                                    </div>


                                </div>
                            </div>

                            <div className="right-list">
                                <div className="empty-space"
                                     onClick={ () => {this.chooseConversation(item)}}>
                                </div>
                                <div className="details"
                                     onClick={ () => {this.details(item)}}>
                                    Details
                                </div>
                            </div>
                        </div>
                    ): console.log('error')

                }
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);