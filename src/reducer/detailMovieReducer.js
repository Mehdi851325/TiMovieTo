

const initState ={
    detailMovie : {},
}

const detailMovieReducer =(state=initState,action)=>{
    switch (action.type) {
        case 'FETCH_DETAIL':
            return { ...state,
                detailMovie:action.payload.detailMovie,
                
            }
        default:
            return { ...state}
    }
}

export default detailMovieReducer