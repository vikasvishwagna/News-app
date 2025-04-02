export const FETCH_NEWS_LOADING = 'FETCH_NEWS_LOADING';
export const FETCH_NEWS_SUCESS = 'FETCH_NEWS_SUCESS';
export const FETCH_NEWS_FailED = 'FETCH_NEWS_FailED';




export const fetchNewsLoading = ()=>({
  type:FETCH_NEWS_LOADING
})

export const fetchNewsSucess = (news)=>({
  type:FETCH_NEWS_SUCESS
  payLoad:news
})

export const fetchNewsFailed  = (errorMessage)=>({
  type:FETCH_NEWS_FAILED
  payLoad:errorMessage
})