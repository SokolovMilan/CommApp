import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {ShowImage} from "./Functions/functions";
import {getUsers} from "../actions/contacts";
import {makeChat, selectedConversation, clearChat} from "../actions/chat";


const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        makeChat: (data) => dispatch(makeChat(data)),
        selectedConversation: (data) => dispatch(selectedConversation(data)),
        clearChat: () => dispatch(clearChat()),
    }
};
const mapStateToProps = (state) => {
    return {
        contacts: state.contactsReducer.listUsers,
        selectedChat: state.chatReducer.selectedChat,
    };
};
const imageSrc = require('./Functions/imageSrc');

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.chooseContact = this.chooseContact.bind(this);
        this.details = this.details.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount(){
        this.props.getUsers();
    }

    chooseContact(item){
        //need action to load all chat text from backend

        if(this.props.selectedChat != item) {
            this.props.selectedConversation(item);
            this.props.clearChat();
            this.props.makeChat(item);
        }

        let contDet = document.getElementById("cont-det");
        let addUser = document.getElementById("add-user");
        let chat = document.getElementById("chat");
        let defaultScreen = document.getElementById("default-screen");

        defaultScreen.style.display = 'none';
        contDet.style.display = 'none';
        addUser.style.display = 'none';
        chat.style.visibility = 'visible';

    }
    details(item){
        let contDet = document.getElementById("cont-det");
        let addUser = document.getElementById("add-user");
        let chat = document.getElementById("chat");
        let rightchat = document.getElementById("right-chat");

        contDet.style.display = 'block';
        addUser.style.display = 'none';
        chat.style.visibility = 'hidden';
        rightchat.style.overflow = 'hidden';
        this.props.selectedId(item);
        console.log("choose details of user "+item);
    }

    addUser(){
        let addUser = document.getElementById("add-user");
        let contDet = document.getElementById("cont-det");
        let chat = document.getElementById("chat");
        let rightchat = document.getElementById("right-chat");

        addUser.style.display = 'block';
        contDet.style.display = 'none';
        rightchat.style.overflow = 'hidden';
    }

    render() {
        return (
            <div className="left-contact-main" id="contact">
                        <div className="head">
                            <div className="head-title">CONTACTS</div>
                            <div onClick={ () => {this.addUser()}} className="head-add">ADD USER</div>
                        </div>
                        { (true) ?
                            (this.props.contacts != null) ?
                                this.props.contacts.map((item, index) =>
                                    <div className="contact-cont" key={index}>
                                        <div className="left-contact" key={item.id}
                                             onClick={ () => {this.chooseContact(item)}}>
                                            <div className="list-image">
                                                <ShowImage src={imageSrc.user3Icon} width="50px"/>
                                            </div>
                                            <div className="list-contacts">
                                                <div className="contact-detail">
                                                    User_id: {item}
                                                </div>

                                            </div>

                                        </div>
                                        <div className="right-contact">
                                            <div className="empty-space"
                                                 onClick={ () => {this.chooseContact(item)}}>
                                            </div>
                                            <div className="details"
                                                 onClick={ () => {this.details(item)}}>
                                                Details
                                            </div>
                                        </div>
                                    </div>

                                ): console.log('error')
                            :
                            <div>
                                No results found!
                            </div>

                        }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);