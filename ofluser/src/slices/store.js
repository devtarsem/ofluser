import { configureStore} from '@reduxjs/toolkit'
import { productReducer } from './productslice'
import thunk from 'react-thunk'

const store = configureStore({
    reducer : {
       product : productReducer
    //    applyMiddleware : applyMiddleware(thunk)
    }
})



export default store