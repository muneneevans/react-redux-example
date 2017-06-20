import _ from "lodash" ; 
import * as types from "../actionTypes";
import redditService from "../../services/reddit" ;

export function fetchTopics(){
    return async(dispatch, getState) => {
        try{
            const subRedditArray = await redditService.getDefaultSubreddits();
            const topicsByUrl = _.keyBy(subRedditArray, (subreddit) => subreddit.url);
            dispatch({type: types.TOPICS_FETCHED, topicsByUrl });
        }catch(error){
            console.error(error);
        }
    };
}

export function selectTopic(topicUrl){
    return (dispatch, getState) => {
        const selectedTopics = topicSelectors.getSelectedTopicUrls(getState());
        if(_.indexOf(selectedTopics, topicUrl) !== -1) return;
        const newSelectedTopics = selectedTopics.length < 3 ? 
            selectedTopics.concat(topicUrl):
            selectedTopics.slice(1).concat(topicUrl);
        dispatch({ type: types.TOPICS_SELECTED, selectopicUrls: newSelectedTopics });
    };
}