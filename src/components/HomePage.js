import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';
import {getConversations} from "../actions/conversations";
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

    }

    componentDidMount(){
        this.props.getConversations();
    }


    render() {
        return (
            <div className="home-cont">
                <div className="home-head">
                    All Conversations:

                </div>
                <div className="home-body">
                    { (this.props.conversations != null) ?
                        this.props.conversations.map(item =>
                            <div className="list-convers" key={item.id} > {item.username}</div>
                        ): console.log('error')

                    }
                </div>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);