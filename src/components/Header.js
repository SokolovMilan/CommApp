import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import history from '../util/history';

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const mapStateToProps = (state) => {
    return {
        myName: state.registerReducer.myName,
        myId: state.registerReducer.myId,
    };
};

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.myName != null && nextProps.myId != null){
            localStorage.setItem('myName', nextProps.myName);
            localStorage.setItem('myId', nextProps.myId);
        }
    }

    render() {
        return (
            <div className="head-main">
                <div className="head-container">
                    <Link to="/"><img src={require("../assets/images/home-512.png")} width="20px"/></Link>
                    <div>CommApp</div>
                    {(localStorage.getItem('myName'))?
                        <div>Hi, {localStorage.getItem('myName')}</div>
                        :
                        <div>Register</div>
                    }
                </div>
            </div>
        );
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
