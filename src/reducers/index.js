
import { combineReducers } from 'redux';

const selectImageReducer = (state=null, action) => {
    console.log('selectImageReducer', action);
    switch(action.type){
        case 'SELECTED_IMAGE':
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    selectedImage: selectImageReducer
});