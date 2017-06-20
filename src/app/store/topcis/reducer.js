import * as types from "./actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
    topicsByUrl: undefined,
    selectedTopicUrls: []
});

export default function reduce(state = initialState, action={}){
    switch (action.type){
        case type.TOPICS_FETCHED:
            return state.merge({
                topicsByUrl: action.topicsByUrl
            });
        default:
            return state;
    }
}


export function getTopicsByUrl(state){
    return state.topics.topicsByUrl;
}

export function getTopicsUrlArray(state){
    return _.keys(state.topics.topicsByUrl);
}

export function isTopicSelectionValid(state){
    return state.topics.selectedTopicUrls.length === 3;
}