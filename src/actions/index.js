//Importing actions types
import { 
    LOGIN_SUBMITTED,
    LOGIN_SUCCESS, 
    LOGIN_FAILED, 
    REGISTER_SUBMITTED, 
    REGISTER_SUCCESS, 
    REGISTER_FAILED,
    LOOKUP_REQUEST,
    LOOKUP_SUCCESS,
    LOOKUP_FAILED,
    SEARCH_SUBMITTED,
    SEARCH_SUCCESS,
    SEARCH_FAILED,
    SHOW_IMAGE_FULLSCREEN,
    CLOSE_IMAGE_FULLSCREEN,
    WIKI_SEARCH_SUBMITTED,
    WIKI_SEARCH_SUCCESS,
    WIKI_SEARCH_FAILED,
    WIKI_ARTICLE_SUBMITTED,
    DOG_SELECTED,
    SEARCH_ON_FOCUSED

} from './types';

/**
 * LOGIN 
 * Define Actions Creators 
 */
export const loginSubmitted = (values) => {
    //return actions as object with action type and payload
    return {
        type: LOGIN_SUBMITTED,
        form: values
    };
};

export const loginSuccess = (data) => {
    console.log(data);
    return {
        type: LOGIN_SUCCESS,
        user: data
    };
};

export const loginfailed = (text) => {
    return {
        type: LOGIN_FAILED,
        message: text
    };
};

/**
 * REGISTER 
 * Define Actions Creators 
 */
export const registerSubmitted = (values) => {
    return {
        type: REGISTER_SUBMITTED,
        form: values
    };
};


export const registerSuccess = (data) => {
    console.log(data);
    return {
        type: REGISTER_SUCCESS,
        user: data
    };
};

export const registerfailed = (text) => {
    return {
        type: REGISTER_FAILED,
        message: text
    };
};

/**
 * LOOKUP 
 * Define Actions Creators 
 */
export const lookupRequest = () => {
    return {
        type: LOOKUP_REQUEST
    };
};

export const lookupSuccess = (data) => {
    return {
        type: LOOKUP_SUCCESS,
        list: data
    };
};

export const lookupFailed = (text) => {
    return {
        type: LOOKUP_FAILED,
        message: text
    };
};

/**
 * SEARCH SUMBITTED 
 * Define Actions Creators 
 */
export const searchSubmitted = (text) => {
    return {
         type: SEARCH_SUBMITTED,
         keyword: text
    };
};

export const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        list: data
    };
};

export const searchFailed = (text) => {
    return {
        type: SEARCH_FAILED,
        message: text
    };
};


/**
 * SHOW IMAGE FULL SCREEN
 * Define Actions Creators 
 */
export const showImageFullscreen = (text) => {
    return {
         type: SHOW_IMAGE_FULLSCREEN,
         url: text
    };
};

export const closeImageFullscreen = () => {
    return {
        type: CLOSE_IMAGE_FULLSCREEN
    };
};

/**
 * WIKI SEARCH 
 * Define Actions Creators 
 */
export const wikiSearch = (text) => {
    return {
        type: WIKI_SEARCH_SUBMITTED,
        keyword: text
    };
};

export const wikiSearchSuccess = (data) => {
    return {
        type: WIKI_SEARCH_SUCCESS,
        wiki: data
    };
};

export const wikiSearchFailed = (text) => {
    return {
        type: WIKI_SEARCH_FAILED,
        message: text
    };
};

/**
 * WIKI ARTICLE SUBMITTED 
 * Define Actions Creators 
 */
export const wikiArticleSubmitted = (item) => {
    return {
        type: WIKI_ARTICLE_SUBMITTED,
        article: item
    };
};

/**
 * DOG SELECTED 
 * Define Actions Creators 
 */
export const dogSelected = (name) => {
    return {
        type: DOG_SELECTED,
        breed: name
    };
};

/**
 * SEARCH ON FOCUSED
 * Define Actions Creators 
 */
export const searchOnFocused = () => {
    return {
        type: SEARCH_ON_FOCUSED
    };
};
