

const initState={
    popularTv :[],
    topRatingTv :[],
}

const TvShowReducer =(state=initState,action) =>{
    switch (action.type) {
        case "FETCH_TV":
            return {...state ,
                popularTv : action.payload.popularTv,
                topRatingTv : action.payload.topRatingTv,
            }
        default:
            return {...state}
    }
}

export default TvShowReducer;