//Import actions types
import { 
    LOGIN_SUCCESS,
    LOGIN_FAILED, 
    LOGIN_SUBMITTED, 
    REGISTER_SUBMITTED, 
    REGISTER_SUCCESS, 
    REGISTER_FAILED,
    LOOKUP_REQUEST,
    LOOKUP_SUCCESS,
    LOOKUP_FAILED,
    SEARCH_SUBIMTTED,
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

} from '../actions/types';

//Default state if no state is pass to the reducer
const INITIAL_STATE = { 
    user: null,
    error: '',
    isLoading: false,
    list: null,
    message: '',
    selected: '',
    wiki: {
        pages: []
    },
    loading: false,
    searching: false,
    item: null,
    breed: ''

};

let images = [];
let index = 0;
let formatedlist = [];
let i = 0;

//Reducer receives actions and updated state
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUBMITTED:
            return {
                ...state,
                error: '',
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: '',
                isLoading: false
            };
        case LOGIN_FAILED:
            return {
                ...state,
                user: null,
                error: 'Authentication Failure',
                isLoading: false
            };

        case REGISTER_SUBMITTED:
            return {
                ...state,
                error: '',
                isLoading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.user,
                error: '',
                isLoading: false
            };
        case REGISTER_FAILED:
            return {
                ...state,
                user: null,
                error: 'Authentication Failure',
                isLoading: false
            };
        case LOOKUP_REQUEST:
            return {
                ...state,
                list: null,
                message: ''
            };
        case LOOKUP_SUCCESS:

            formatedlist = [];
            i = 0;

            for (const key of Object.keys(action.list)) {
                formatedlist.push({ breed: key, key: i++ });
            }
            return {
                ...state,
                list: formatedlist,
                message: ''
        };
        case LOOKUP_FAILED:
            return {
                ...state,
                list: null,
                message: action.message
            };
        case SEARCH_SUBIMTTED:
            return {
                ...state,
                searchlist: [],
                message: ''
            };
        case SEARCH_SUCCESS:
            images = [];
            index = 0;

            for (const key of Object.keys(action.list)) {
                images.push({ image: action.list[key], key: index++ });
            }
            return {
                ...state,
                searchResult: images,
                message: '',
                searching: false
            };
        case SEARCH_FAILED:
            return {
                ...state,
                selected: ''
            };
        case SHOW_IMAGE_FULLSCREEN:
            return {
                ...state,
                selected: action.url
            };
        case CLOSE_IMAGE_FULLSCREEN:
            return {
                ...state,
                selected: ''
            };
        case WIKI_SEARCH_SUBMITTED:
            return {
                ...state,
                loading: true,
                message: '',
                wiki: {
                    pages: []
                },
            };
        case WIKI_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                message: '',
                wiki: action.wiki
            };
        case WIKI_SEARCH_FAILED:
            return {
                ...state,
                loading: false,
                message: action.message,
                wiki: {
                    pages: []
                },
            };
        case WIKI_ARTICLE_SUBMITTED:
            return {
                ...state,
                item: action.article
            };
        case DOG_SELECTED:
        console.log(action.breed);
            return {
                ...state,
                breed: action.breed
            };
        case SEARCH_ON_FOCUSED:
            return {
                ...state,
                breed: ''
        };
        default:
            return state;
    }
};
