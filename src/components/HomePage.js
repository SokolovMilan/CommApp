import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {getConversations} from "../actions/conversations";
import SeachResult from "./SearchResult";
const mapDispatchToProps = (dispatch) => {
    return {
        getConversations: () => dispatch(getConversations()),
    }
};
const mapStateToProps = (state) => {
    return {
        conversations: state.conversationsReducer.allConversations,
    };
};

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.chooseConversation = this.chooseConversation.bind(this);
        this.search = this.search.bind(this);
        this.gotoChat = this.gotoChat.bind(this);
        this.gotoContacts = this.gotoContacts.bind(this);
    }
    componentDidMount(){
        this.props.getConversations();
    }

    chooseConversation(index){
        console.log(index);
    }
    search(e) {
        let index = e.target.value;
        let result = document.getElementById("result");
        let convers = document.getElementById("convers");
        let contactImg = document.getElementById("contactImg");
        let chatImg = document.getElementById("chatImg");


        if(index.length == 0){
            result.style.display = 'none';
            convers.style.display = 'block';
            contactImg.style.borderBottom = 'none';
            chatImg.style.borderBottom = '1px solid red';
        }else{
            result.style.display = 'block';
            convers.style.display = 'none';
            contactImg.style.borderBottom = '1px solid red';
            chatImg.style.borderBottom = 'none';
        }

        console.log(index);
    }
    gotoChat(){
        let result = document.getElementById("result");
        let convers = document.getElementById("convers");
        let search = document.getElementById("search");
        let contactImg = document.getElementById("contactImg");
        let chatImg = document.getElementById("chatImg");

        result.style.display = 'none';
        convers.style.display = 'block';
        search.value = "";
        contactImg.style.borderBottom = 'none';
        chatImg.style.borderBottom = '1px solid red';
    }

    gotoContacts(){
        let result = document.getElementById("result");
        let convers = document.getElementById("convers");
        let contactImg = document.getElementById("contactImg");
        let chatImg = document.getElementById("chatImg");

        result.style.display = 'block';
        convers.style.display = 'none';
        contactImg.style.borderBottom = '1px solid red';
        chatImg.style.borderBottom = 'none';
    }

    render() {
        return (
            <div className="home-cont">
                <div className="home-head">
                </div>
                <div className="home-body">
                    <div className="left-cont">
                        <div className="left-body">
                            <div className="left-header">
                                <div onClick={this.gotoChat} className="chatImg" id="chatImg">
                                    <img src={require("../assets/images/chat.png")} />
                                </div>
                                <div onClick={this.gotoContacts} className="contactImg" id="contactImg">
                                    <img src={require("../assets/images/user.png")} />
                                </div>
                            </div>
                            <div className="left-search">
                                <div className="search-field">
                                    <img src={require("../assets/images/search.png")} />
                                    <input type="search" placeholder="Search contacts"
                                           id="search" onChange={this.search}/>
                                </div>



                            </div>
                            <div className="left-show">
                                <div className="left-convers" id="convers">
                                    <div className="favorites">
                                        <div>Favorites:</div>
                                    </div>
                                    { (this.props.conversations != null) ?
                                        this.props.conversations.map((item, index) =>
                                            <div className="list" key={item.id}
                                                 onClick={ () => {this.chooseConversation(index)}}>
                                                <div className="list-image">
                                                    <img src={require("../assets/images/user3.png")} width="50px"/>

                                                </div>
                                                <div className="list-contacts">
                                                    <div className="contact-name">
                                                        {item.username}
                                                    </div>
                                                    <div className="contact-detail">
                                                        {item.name}
                                                    </div>
                                                </div>

                                            </div>
                                        ): console.log('error')

                                    }
                                </div>
                                <div className="left-result" id="result">
                                    <SeachResult/>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="right-cont">
                        <div className="right-body">
                            <div className="right-chat">
                                place for chat
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);