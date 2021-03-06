import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import { Link } from 'react-router-dom';
import {ShowImage} from "./Functions/functions";
import FileReader from "./FileReader";
import { ClipLoader } from 'react-spinners';
import {storage} from '../firebase';
import socketEmitFunctions from '../util/socketEmitFunctions';
import {saveChat} from "../actions/chat";
const mapDispatchToProps = (dispatch) => {
    return {
        saveChat: (data) => dispatch(saveChat(data)),
    }
};
const mapStateToProps = (state) => {
    return {
        text: state.chatReducer.chatMessages,
        chatId: state.chatReducer.chatId,
        selectedChat: state.chatReducer.selectedChat,
        myId: state.registerReducer.myId,

    };
};
const imageSrc = require('./Functions/imageSrc');

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            body: "",
            chat_id: "",
            user_id: localStorage.getItem('myId')
        };
        this.sendChat = this.sendChat.bind(this);
        this.add = this.add.bind(this);
        this.message = this.message.bind(this);
        this.showImage = this.showImage.bind(this);
    }

    componentWillUnmount() {
        socketEmitFunctions.notifyUserLeaveToChat(this.props.chatId);
    }
    sendChat(e){
        e.preventDefault();
        let input = document.getElementById("chat-input");
        let body = document.getElementById("chat-body");
        if(this.props.selectedChat == null){
            alert("Choose chat please!");
            return;
        }
        if(input.value.length < 1){
            console.log('please enter text')
        }else{
            this.props.saveChat(this.state);
            input.value = "";

            setTimeout(() => {
                body.scrollTop =  body.scrollHeight;
            }, 100);
        }

    }

    message(e){
        e.preventDefault();
        let input = document.getElementById("chat-input");

        this.setState({
            body: input.value,
            chat_id: this.props.chatId
        });
    }
    add(e){
        let body = document.getElementById("chat-body");
        this.setState({
            loading: true
        });

        //testing with firebase
        //check file type
        let filePath = e.target.files[0].type;
        let res = filePath.split('/')[0];

        if(res == 'image'){
            console.log('add file, type is image');
            const upload = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);

            upload.on('state_changed',
                    (snapshot) => {
                        //progress
                    },
                    (error) => {
                        console.log(error)
                    },
                    () => {
                        upload.snapshot.ref.getDownloadURL().then((url) => {
                            let data = {
                                "chat_id": this.props.chatId,
                                "user_id": this.state.user_id,
                                "body": url
                            }
                            this.props.saveChat(data);
                            setTimeout(() => {
                                body.scrollTop =  body.scrollHeight;
                            }, 500);
                        });
                        this.setState({
                            loading: false
                        })
                    }
            );
        }else{
                console.log('add file, type is text/application');
                const upload = storage.ref(`files/${e.target.files[0].name}`).put(e.target.files[0]);

                upload.on('state_changed',
                    (snapshot) => {
                        //progress
                    },
                    (error) => {
                        console.log(error)
                    },
                    () => {
                        upload.snapshot.ref.getDownloadURL().then((url) => {
                            let data = {
                                "chat_id": this.props.chatId,
                                "user_id": this.state.user_id,
                                "body": url
                            }
                            this.props.saveChat(data);
                            setTimeout(() => {
                                body.scrollTop =  body.scrollHeight;
                            }, 500);
                        });
                        this.setState({
                            loading: false
                        })
                    }
                );
        }
    }
    showImage(e){
        let url = e.currentTarget.getAttribute('data-url');
         window.open(url, '_blank');
    }

    render() {
        return (
            <div className="chat-cont" id="chat">
                <div className="chat-header">
                    <div className="user-details">
                        <div className="user-name">
                            {(this.props.selectedChat != null)
                                ? <div>User id: {this.props.selectedChat}</div>
                                :
                                <div>Default</div>
                            }
                        </div>
                        <div className="user-status">

                        </div>
                    </div>
                </div>
                <div className="chat-body" id="chat-body">
                    {(this.props.text.length > 0) ?
                        <div>
                                {this.props.text.map((item, index) =>
                                    <div key={index} >
                                        {(item.user_id == this.props.myId)?
                                            <div className="chat-right-cont">
                                                User: {item.user_id}
                                                <div className="text-right">
                                                    {
                                                        (item.body.split('.')[0]
                                                            == 'https://firebasestorage')?
                                                            (item.body.split('%')[0]
                                                                == 'https://firebasestorage.googleapis.com/v0/b/commapp-95caf.appspot.com/o/images')
                                                                ?
                                                                <img src={item.body} width="200px"
                                                                     onClick={this.showImage}
                                                                     data-url={item.body}
                                                                     className="firebaseImg"
                                                                />
                                                                :
                                                                <div>
                                                                    <FileReader
                                                                        url={item.body}
                                                                    />
                                                                </div>
                                                            :
                                                            <div className="single-text" >
                                                                {item.body}
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                            :
                                            <div className="chat-left-cont">
                                                User: {item.user_id}
                                                <div className="text-left">
                                                    {
                                                        (item.body.split('.')[0]
                                                            == 'https://firebasestorage')?
                                                            (item.body.split('%')[0]
                                                                == 'https://firebasestorage.googleapis.com/v0/b/commapp-95caf.appspot.com/o/images')
                                                                ?
                                                                <img src={item.body} width="200px"
                                                                     onClick={this.showImage}
                                                                     data-url={item.body}
                                                                     className="firebaseImg"
                                                                />
                                                                :
                                                                <div>
                                                                    <FileReader
                                                                        url={item.body}
                                                                    />
                                                                </div>
                                                            :
                                                            <div className="single-text" >
                                                                {item.body}
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                            }
                                    </div>
                                )
                                }
                                {
                                    (this.state.loading)?
                                        <ClipLoader
                                            sizeUnit={"px"}
                                            size={20}
                                            color={'#123abc'}
                                            loading={this.state.loading}
                                        />
                                        :console.log('no loader')
                                }
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
                               placeholder="Type message"
                        onChange={this.message}/>

                        <button className="send" onClick={this.sendChat} >Send</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);