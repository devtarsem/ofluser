import { configureStore} from '@reduxjs/toolkit'
import { productReducer } from './productslice'

const store = configureStore({
    reducer : {
       product : productReducer
    //    applyMiddleware : applyMiddleware(thunk)
    }
})



export default store