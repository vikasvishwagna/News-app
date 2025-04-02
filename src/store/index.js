import { createStore } from 'redux'
import newsReducer from '../reducers/news'

const store = createStore(newsReducer)

export default store