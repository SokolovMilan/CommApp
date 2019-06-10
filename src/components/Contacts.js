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

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.chooseContact = this.chooseContact.bind(this);
        this.details = this.details.bind(this);
    }

    componentDidMount(){
        this.props.getContacts();
    }

    chooseContact(item){
        console.log("selected contact id is "+item.id);
        let contDet = document.getElementById("cont-det");
        let chat = document.getElementById("chat");
        contDet.style.display = 'none';
        chat.style.visibility = 'visible';

    }
    details(item){
        let contDet = document.getElementById("cont-det");
        let chat = document.getElementById("chat");
        let rightchat = document.getElementById("right-chat");
        contDet.style.display = 'block';
        chat.style.visibility = 'hidden';
        rightchat.style.overflow = 'hidden';
        this.props.selectedId(item);
        console.log("choose details "+item.id);
    }


    render() {
        return (
            <div className="left-contact-main" id="contact">
                        <div className="head">
                            <div className="head-title">CONTACTS</div>
                        </div>
                        { (true) ?
                            (this.props.contacts != null) ?
                                this.props.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1).map((item, index) =>
                                    <div className="contact-cont" key={index}>
                                        <div className="left-contact" key={item.id}
                                             onClick={ () => {this.chooseContact(item)}}>
                                            <div className="list-image">
                                                <ShowImage src={imageSrc.user3Icon} width="50px"/>
                                            </div>
                                            <div className="list-contacts">
                                                <div className="contact-detail">
                                                    {item.name}
                                                </div>
                                                <div className="list-details"
                                                     onClick={ () => {this.details(item)}}>
                                                    Details
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