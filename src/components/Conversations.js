import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {getConversations, chooseChat} from "../actions/conversations";
import {ShowImage} from "./Functions/functions";

const mapDispatchToProps = (dispatch) => {
    return {
        getConversations: () => dispatch(getConversations()),
        chooseChat: (item) => dispatch(chooseChat(item)),
    }
};
const mapStateToProps = (state) => {
    return {
        conversations: state.conversationsReducer.allConversations,
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

    componentDidMount(){
        this.props.getConversations();
    }

    chooseConversation(item){
        console.log("choose conversation "+item.id);
        let conDet = document.getElementById("convers-det");
        let chat = document.getElementById("chat");
        conDet.style.display = 'none';
        chat.style.visibility = 'visible';
        this.props.chooseChat(item);
    }

    details(item){
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
        return (
            <div className="left-convers" id="convers">
                <div className="favorites">
                    <div>Favorites:</div>
                </div>
                { (this.props.conversations != null) ?
                    this.props.conversations.sort((a, b) => (a.username > b.username) ? 1 : -1).map((item, index) =>
                        <div className="list-cont" key={index}>
                            <div className="left-list" key={item.id}
                                 onClick={ () => {this.chooseConversation(item)}}>
                                <div className="list-image">
                                    <ShowImage src={imageSrc.homeIcon} width="50px"/>
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