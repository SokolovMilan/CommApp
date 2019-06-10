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
        searchResults: state.searchReducer.searchResults,
    };
};
const imageSrc = require('./Functions/imageSrc');

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.chooseSearch = this.chooseSearch.bind(this);
    }



    chooseSearch(item){
        console.log("selected search id is "+item.id);
    }


    render() {
        return (
            <div className="left-result" id="result">
                        <div className="head">
                            <div className="head-title">Search results: </div>
                        </div>
                        { (true) ?
                            (this.props.searchResults != null) ?
                                this.props.searchResults.filter(
                                    (item) => {
                                        return item.name.toLowerCase().indexOf(this.props.searchTerm) !== -1;
                                    }
                                ).sort((a, b) => (a.name > b.name) ? 1 : -1).map((item, index) =>
                                    <div className="result" key={item.id}
                                         onClick={ () => {this.chooseSearch(item)}}>
                                        <div className="list-image">
                                            <ShowImage src={imageSrc.user3Icon} width="50px"/>
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

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);