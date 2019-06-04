
const initState = {
    messages: [
        {id: '1', content: 'Im doing great, thanks!'},
        {id: '2', content: 'Yesterday was a little rough'},
        {id: '3', content: 'Hopefully tomorrow will be good'}
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            console.log('created message:', action.message);
            return state;
        case 'ADD_MESSAGE_ERROR':
            console.log('add message error', action.err);
            return state;
        case 'DELETE_MESSAGE':
            let newMessages = state.messages.filter(message => {
                return action.id !== message.id});
                return {...state,
                messages: newMessages }
            
        default:
            return state;

    }
   

    
    // if (action.type === 'DELETE_MESSAGE') {
    //     let newMessages = state.messages.filter(message => {
    //         return action.id !== message.id
    //     });
    //     return {
    //         ...state,
    //         messages: newMessages
    //     }
    // }

    // if (action.type === 'ADD_MESSAGE') {
        
    //     return {
    //         ...state,
    //         messages: [...state.messages,
    //             {
    //                 id: Math.random(),
    //                 content: action.payload}
    //             ]
    //     }
    // }


}

export default rootReducer