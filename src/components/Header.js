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

    };
};

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        return (
            <div className="head-main">
                <div className="head-container">
                    <Link to="/"><img src={require("../assets/images/home-512.png")} width="20px"/></Link>
                    <div>CommApp</div>
                    <div>Login</div>
                </div>
            </div>
        );
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
