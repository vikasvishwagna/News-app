


const initialState = {
  loading : false,
  news:[],
  errorMessage:''
}

const reducer = (state, action)=>{
  switch(action.type){
    case FETCH_NEWS_LOADING:
      return{
        ...state,
        loading:true
    }

    case FETCH_NEWS_SUCESS:
      return{
        ...state,
        news:[action.payload],
        loading:false
    }

    case FETCH_NEWS_FAILED:
      return{
        ...state,
        news:[action.payload],
        loading:false
    }
    
  }
}