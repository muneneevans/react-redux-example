import React, { Component } from "react";
import { connect } from "react-redux";
import * as topicActions from "../store/topics/actions";
import * as topicSelectors from "../store/topics/reducer";

class TopicScreen extends Component{

}

const mapStateToProps = (state) => {
    return {
        rowsById: topicSelectors.getTopicsByUrl(state),
        rowsIdArray: topicSelectors.getTopicsUrlArray(state)
    };
};


export default connect(mapStateToProps)(TopicScreen);