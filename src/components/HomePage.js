import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {getSearchResults} from "../actions/searchResults";
import {ShowImage} from "./Functions/functions";

import Contacts from "./Contacts";
import Conversations from "./Conversations";
import SearchResults from "./SearchResults";
import ContactDetails from "./ContactDetails";
import ConversationDetails from "./ConversationDetails";
import Chat from "./Chat";

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResults: () => dispatch(getSearchResults()),
    }
};
const mapStateToProps = (state) => {
    return {
    };
};
const imageSrc = require('./Functions/imageSrc');



class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: "",
            selectedConversation: "",
            searchTerm: ""

        };

        this.search = this.search.bind(this);
        this.gotoConversations = this.gotoConversations.bind(this);
        this.gotoContacts = this.gotoContacts.bind(this);
        this.selectedContact = this.selectedContact.bind(this);
        this.selectedConversation = this.selectedConversation.bind(this);
    }


    search(e) {
        this.props.getSearchResults();
        console.log("uneti termin za pretragu je "+e.target.value.toLowerCase());
        this.setState({
           searchTerm:  e.target.value.toLowerCase()
        });

        let index = e.target.value;
        let result = document.getElementById("result");
        let convers = document.getElementById("convers");
        let contact = document.getElementById("contact");
        let contactImg = document.getElementById("contactImg");
        let chatImg = document.getElementById("chatImg");
        let convDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        let contDet = document.getElementById("cont-det");

        contDet.style.display = 'none';
        convDet.style.display = 'none';
        chat.style.visibility = 'visible';
        contactImg.style.borderBottom = '1px solid red';
        chatImg.style.borderBottom = 'none';

        if(index.length == 0){
            result.style.display = 'none';
            convers.style.display = 'none';
            contact.style.display = 'block';
        }else{
            result.style.display = 'block';
            contact.style.display = 'none';
            convers.style.display = 'none';
        }

    }
    gotoConversations(){
        let result = document.getElementById("result");
        let convers = document.getElementById("convers");
        let contact = document.getElementById("contact");
        let search = document.getElementById("search");
        let contactImg = document.getElementById("contactImg");
        let chatImg = document.getElementById("chatImg");
        let convDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        let contDet = document.getElementById("cont-det");

        contDet.style.display = 'none';
        convDet.style.display = 'none';
        chat.style.visibility = 'visible';
        result.style.display = 'none';
        contact.style.display = 'none';
        convers.style.display = 'block';
        search.value = "";
        contactImg.style.borderBottom = 'none';
        chatImg.style.borderBottom = '1px solid red';
    }

    gotoContacts(){
        let result = document.getElementById("result");
        let convers = document.getElementById("convers");
        let contact = document.getElementById("contact");
        let search = document.getElementById("search");
        let contactImg = document.getElementById("contactImg");
        let chatImg = document.getElementById("chatImg");
        let convDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        let contDet = document.getElementById("cont-det");

        contDet.style.display = 'none';
        convDet.style.display = 'none';
        chat.style.visibility = 'visible';
        contact.style.display = 'block';
        convers.style.display = 'none';
        result.style.display = 'none';
        search.value = "";
        contactImg.style.borderBottom = '1px solid red';
        chatImg.style.borderBottom = 'none';
    }

    selectedContact(item){
        this.setState({
            selectedUser: item
        })
    }

    selectedConversation(item){
        this.setState({
            selectedConversation: item,
        })
    }

    render() {
        return (
            <div className="home-cont">
                <div className="home-head">
                </div>
                <div className="home-body">
                    <div className="left-cont">
                        <div className="left-main">
                            <div className="left-header">
                                <div onClick={this.gotoConversations} className="chatImg" id="chatImg">
                                    <ShowImage src={imageSrc.chatIcon} width="50px"/>
                                </div>
                                <div onClick={this.gotoContacts} className="contactImg" id="contactImg">
                                    <ShowImage src={imageSrc.userIcon} width="50px"/>
                                </div>
                            </div>
                            <div className="left-search">
                                <div className="search-field">
                                    <ShowImage src={imageSrc.searchIcon} width="50px"/>
                                    <input type="search" placeholder="Search contacts"
                                           id="search" onChange={this.search}/>
                                </div>
                            </div>
                            <div className="left-body">
                                    <Conversations selectedId={this.selectedConversation}/>

                                    <Contacts selectedId={this.selectedContact}/>

                                    <SearchResults searchTerm={this.state.searchTerm}/>
                            </div>
                        </div>
                    </div>
                    <div className="right-cont">
                        <div className="right-body">
                            <div className="right-chat" id="right-chat">
                                <ContactDetails selectedUser={this.state.selectedUser}/>
                                <ConversationDetails selectedConversation={this.state.selectedConversation}/>
                                <Chat />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);