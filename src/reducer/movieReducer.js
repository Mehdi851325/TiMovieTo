

const initState={
    upComing :[],
    popular :[],
    topRating :[],
}

const movieReducer =(state=initState,action) =>{
    switch (action.type) {
        case "FETCH_MOVIES":
            return {...state ,
                popular: action.payload.popular,
                upComing : action.payload.upComing,
                topRating : action.payload.topRating,
            }
        default:
            return {...state}
    }
}

export default movieReducer;