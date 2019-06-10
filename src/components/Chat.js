import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {sendChat} from "../actions/chat";
import {ShowImage} from "./Functions/functions";

import {storage} from '../firebase';


const mapDispatchToProps = (dispatch) => {
    return {
        chat: (data) => dispatch(sendChat(data)),
    }
};
const mapStateToProps = (state) => {
    return {
        item: state.chatReducer.choosedChat,
        text: state.chatReducer.chatText,

    };
};
const imageSrc = require('./Functions/imageSrc');

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.sendChat = this.sendChat.bind(this);
        this.add = this.add.bind(this);
    }


    sendChat(e){
        e.preventDefault();
        let input = document.getElementById("chat-input");
        let body = document.getElementById("chat-body");
        //body.scrollTop = body.scrollHeight - body.clientHeight;
        body.scrollTop =  body.scrollHeight;
        if(input.value.length < 1){
            console.log('please enter text')
        }else{
            console.log('uneti text je '+input.value);
            this.props.chat(input.value);
            input.value = "";
        }

    }
    add(e){
        console.log('add file ');

        let body = document.getElementById("chat-body");
        body.scrollTop =  body.scrollHeight;

        const file = new FormData();
        file.append('file', e.target.files[0], e.target.files[0].name);
        //need action to send file to database!!!


        //testing with firebase
        const upload = storage.ref(`${e.target.files[0].name}`).put(e.target.files[0]);


        //check if file is image
        let filePath = e.target.files[0].type;
            let res = filePath.split('/')[0];
            if(res == 'image'){
                console.log('type is image');
                const reader  = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = reader.result;
                    //document.getElementById('test').appendChild(img);

                }

                upload.on('state_changed',
                    (snapshot) => {
                        //progress
                    },
                    (error) => {
                        console.log(error)
                    },
                    () => {
                        upload.snapshot.ref.getDownloadURL().then((url) => {
                            this.props.chat(url);
                        })
                    }
                );


            }else if(res == 'text'){
                console.log('type is text');
                this.props.chat(e.target.files[0].name);
            }


    }
    render() {
        return (
            <div className="chat-cont" id="chat">
                <div className="chat-header">
                    <div className="user-details">
                        <div className="user-name">
                            {(this.props.item != null)
                                ? this.props.item.username
                                :
                                <div>Default</div>
                            }

                        </div>
                        <div className="user-online">
                            Online
                        </div>
                    </div>
                </div>
                <div className="chat-body" id="chat-body">
                    <div className="chat-left-cont">
                        <ShowImage src={imageSrc.user3Icon} width="30px"/>
                        <div className="text-left">
                            <div className="single-text">Hi</div>
                        </div>

                    </div>
                    {(this.props.text.length > 0) ?
                        <div className="chat-right-cont">
                            <ShowImage src={imageSrc.userMan} width="30px"/>
                            <div className="text-right">

                                {this.props.text.map((item, index) =>
                                    <div key={index} >

                                            {
                                                (item.split('.')[0]
                                                    == 'https://firebasestorage')?
                                                    <img src={item} width="200px"/>
                                                    :
                                                    <div className="single-text" >
                                                        {item}
                                                    </div>

                                            }

                                    </div>
                                )
                                }
                            </div>
                        </div>
                        :
                        console.log('no text jet')
                    }
                </div>
                <div className="chat-footer">
                    <form className="form">
                        <input type="file" onChange={this.add}
                               style={{ display: 'none' }}
                               ref={fileInput1 => this.fileInput1 = fileInput1}
                        />
                        <div className="plus"  onClick={() => this.fileInput1.click()}>
                        <ShowImage src={imageSrc.plusSign} width="25px"/>
                        </div>

                        <input type="text" id="chat-input"
                               placeholder="Type message"/>

                        <button className="send" onClick={this.sendChat} >Send</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);