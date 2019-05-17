import React, { Component } from 'react';
import {connect} from "react-redux";
import history from '../util/history';

const mapDispatchToProps = (dispatch) => {
    return {

    }
};
const mapStateToProps = (state) => {
    return {
        contacts: state.conversationsReducer.allConversations,
    };
};

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.chooseContact = this.chooseContact.bind(this);
    }


    chooseContact(index){
        console.log(index);
    }


    render() {
        return (
            <div className="result-cont">
                <div className="result-body">
                    <div className="head">
                        <div className="head-title">CONTACTS</div>
                    </div>
                    { (true) ?
                            (this.props.contacts != null) ?
                            this.props.contacts.map((item, index) =>
                                <div className="result" key={item.id}
                                     onClick={ () => {this.chooseContact(index)}}>
                                    <div className="list-image">
                                        <img src={require("../assets/images/user3.png")} width="50px"/>

                                    </div>
                                    <div className="list-contacts">
                                        <div className="contact-detail">
                                            {item.name}
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

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);