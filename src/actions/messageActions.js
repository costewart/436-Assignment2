import { getFirestore } from "redux-firestore";

 

export const deleteMessage = (id) => {
    return {
        type: 'DELETE_MESSAGE',
        id: id
    }
}

export const addMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFireStore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('messages').add({
            ...message
        }).then(()=> {
            dispatch({ type: 'ADD_MESSAGE', message });
        }).catch((err) => {
            dispatch({type: 'ADD_MESSAGE_ERROR', err});
        })
    }
};