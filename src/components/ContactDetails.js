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
        contacts: state.contactsReducer.listUsers,
    };
};
const imageSrc = require('./Functions/imageSrc');

class ContactsDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.backToChat = this.backToChat.bind(this);
    }

    componentDidMount(){

    }

    backToChat(){
        let contDet = document.getElementById("cont-det");
        let chat = document.getElementById("chat");
        contDet.style.display = 'none';
        chat.style.visibility = 'visible';

    }

    render() {
        return (
            <div className="contact-details" id="cont-det">
                Contact details

                <p/>
                <ShowImage src={imageSrc.user3Icon} width="50px"/>
                <p/>
                User Id: {(this.props.contacts != null)
                ? this.props.selectedUser
                : console.log('no contacts')
                }
                <p/>
                <p/>
                <button onClick={this.backToChat}>GO BACK</button>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsDetails);