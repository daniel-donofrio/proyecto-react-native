const increment = () => {
    return {type: 'INCREMENT'}
}

const decrement = () => {
    return { type: 'DECREMENT' }
}

const counterReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { ...state, count: state.count + 1}
        case 'DECREMENT':
            return { ...state, count: state.count - 1}
        default:
            return state;
    }
}

export {increment, decrement, counterReducer};