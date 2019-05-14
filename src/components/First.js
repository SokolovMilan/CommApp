import React, { Component } from 'react';
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

class First extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    back(){
        history.push('/');
    }
    render() {
        return (
            <div className="first-cont">
                <div className="first-head">

                        ovo je test page
                    <p></p>
                    <button onClick={this.back.bind(this)}>Back to Home</button>

                </div>


            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(First);