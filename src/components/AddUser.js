import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {ShowImage} from "./Functions/functions";
import {addUser} from "../actions/contacts";

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (id) => dispatch(addUser(id)),
    }
};
const mapStateToProps = (state) => {
    return {

    };
};
const imageSrc = require('./Functions/imageSrc');

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ""

        };
        this.backToChat = this.backToChat.bind(this);
        this.setId = this.setId.bind(this);
        this.add = this.add.bind(this);
    }

    componentDidMount(){

    }

    backToChat(){
        let addUser = document.getElementById("add-user");
        let chat = document.getElementById("chat");
        addUser.style.display = 'none';
        chat.style.visibility = 'visible';

    }
    setId(e){
        this.setState({
            id: e.target.value
        })

    }

    add(){
        if(this.state.id == ""){
            return;
        }
        let id = this.state.id;
        this.props.addUser(id);
        this.setState({
            id: ""
        })
    }

    render() {
        return (
            <div className="add-user" id="add-user">
                    Add new user to your contact list
                    <p/>
                    enter user id: <input type="text" onChange={this.setId} value={this.state.id}/>
                    <p/>
                    <button onClick={this.add}>ADD</button>
                    <p/>
                    <button onClick={this.backToChat}>GO BACK</button>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);