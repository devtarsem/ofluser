import axios from "axios"
import io from 'socket.io-client'

const socket = io.connect("http://127.0.0.1:4000")
const initialProds = {
    addedprods : [],
    cartCount : 0,
    nameOfProductsInCart : [],
    filterBool : false,
    grossBill : 0,
    delivery_charges : 0,
    total_bill : 0,
    cartLength : 0,
    order_finish : false,
    tracks : [],
    trackedItem : {}
}


export const productReducer = (state = initialProds, action)=>{
    switch(action.type){
        case 'addtocart':
            return {...state, addedprods : [...action.payload]}
        case 'cartCount':
            return {...state, cartCount : action.payload}
        case 'cartCountFromReload':
            return {...state, cartCount : action.payload}
        case 'nameOfProductsInCarts':
            return {...state, nameOfProductsInCart : action.payload}
        case 'addtocartADDMORE' :
            return {...state, addedprods : action.payload}
        case 'addtocartLESSMORE' :
            return {...state, addedprods : action.payload}
        case 'reduceMore' :
            return {...state, addedprods : action.payload}
        case 'cartInitialPrep' :
            return {...state, addedprods : [...action.payload]}
        case 'AlreadyHavecartInitialPrep' :
            return {...state, addedprods : action.payload}
        case 'searchedList' :
            return {...state, addedprods : action.payload, filterBool : action.payload.length===0 ? true: false}
        case 'OrderItemWithCOD' :
            return {...state, order_finish : action.payload}
        case 'bills' :
            return {...state, cartLength : action.payload.cartLength, grossBill : action.payload.grossPrice, delivery_charges : action.payload.delivery, total_bill : action.payload.totalBill}
        case 'AllTracksAllOrders':
            return {...state, tracks : action.payload}
        case 'TrackedItem' :
            return {...state, trackedItem : action.payload}
        default :
            return state
    }
}

export function AddToCartCreator(newElement,data){
    return function(dispatch, getstate){
        // const cart = JSON.parse(localStorage.getItem('cart'))
        // const updatedCart = [...cart, newElement]
        // localStorage.setItem('cart', JSON.stringify(updatedCart))
        let newCart = [...data]
        newCart.forEach(el=>{
            if(el.name == newElement[0]){
                el.addedValue = newElement[1]
            }
        })
        console.log(newCart)
        localStorage.setItem('prepcart', JSON.stringify(newCart))
        dispatch({type : 'addtocart', payload : newCart})
    
    
        /*****billing calculation****/
        const prepCart = JSON.parse(localStorage.getItem('prepcart'))
        let cartArr = []
        prepCart.forEach(el=>{
            if(el.addedValue!=0){
                cartArr.push(el)
            }
        })
        console.log(cartArr)
        const cartLength = cartArr.length

        let grossPrice = 0
        cartArr.forEach(el=>{
            grossPrice = grossPrice + el.addedValue*el.price
        })

        let delivery = 20

        let totalBill = delivery + grossPrice
        dispatch({type : 'bills', payload : {grossPrice:grossPrice,cartLength : cartLength, delivery: delivery, totalBill: totalBill}})

    }
}


export function BillCalculationOnPageLoad(){
    return function(dispatch, getstate){
        /*****billing calculation****/
        const prepCart = JSON.parse(localStorage.getItem('prepcart'))
        let cartArr = []
        prepCart.forEach(el=>{
            if(el.addedValue!=0){
                cartArr.push(el)
            }
        })
        console.log(cartArr)
        const cartLength = cartArr.length

        let grossPrice = 0
        cartArr.forEach(el=>{
            grossPrice = grossPrice + el.addedValue*el.price
        })

        let delivery = 20

        let totalBill = delivery + grossPrice
        dispatch({type : 'bills', payload : {grossPrice:grossPrice,cartLength : cartLength, delivery: delivery, totalBill: totalBill}})

    }
}


export function cartCountCreator(){
    // const count = JSON.parse(localStorage.getItem('cart')).length
    // return {type : 'cartCount', action : count}

    return function(dispatch, getstate){
       
        const cart = JSON.parse(localStorage.getItem('prepcart'))
        const addedval =  []
        cart.forEach(el=>{
            if(el.addedValue!==0){
                addedval.push(1)
            }
        })
        const count = addedval.length
        dispatch({type : 'cartCount', action : count})
    }
}

// export function renderAllCartFromLoadCreator(){
//     return async function(dispatch, getstate){
//         const cart = JSON.parse(localStorage.getItem('cart'))
//         let nameCart = []
//         cart.forEach(el=>{
//             nameCart.push(el[0])
//         })
//         console.log(nameCart)

//         dispatch({type : 'nameOfProductsInCarts', action : cart})
//     }
// }

export function renderAllCartItemNameFromLoadCreator(newElement){
    return function(dispatch, getstate){
        const cart = JSON.parse(localStorage.getItem('prepcart')) ? JSON.parse(localStorage.getItem('prepcart')) : []
        let nameCart = []
        cart.forEach(el=>{
            if(el.addedValue!==0){
                nameCart.push(el.name)
            }
        })
        console.log(nameCart)
        dispatch({type : 'nameOfProductsInCarts', payload : nameCart})
    }
}


export function renderCountFromLoadCreator(){
    return function(dispatch, getstate){
        const cart = JSON.parse(localStorage.getItem('prepcart')) ? JSON.parse(localStorage.getItem('prepcart')) : []
        const addedval =  []
        cart.forEach(el=>{
            if(el.addedValue!==0){
                addedval.push(1)
            }
        })
        dispatch({type : 'cartCountFromReload', payload : addedval.length})
    }
}

export function renderCartFromLoadCreator(){
    return function(dispatch, getstate){
        const cart = JSON.parse(localStorage.getItem('cart'))
        dispatch({type : 'addtocart', payload : cart})
    }
}

export function AddMoreQuantityToItemsCreator(itemName){
    return function(dispatch, getstate){
        let cart = JSON.parse(localStorage.getItem('prepcart'))
        cart.forEach(el=>{
            if(el.name === itemName){
                // el[2] = Number(el[2]) + Number(el[3])
                el.addedValue = Number(el.addedValue)+ Number(el.min)
            }
        })
        localStorage.setItem('prepcart', JSON.stringify(cart))
        dispatch({type : 'addtocartADDMORE', payload : cart})

        /*****billing calculation****/
        const prepCart = JSON.parse(localStorage.getItem('prepcart'))
        let cartArr = []
        prepCart.forEach(el=>{
            if(el.addedValue!=0){
                cartArr.push(el)
            }
        })
        console.log(cartArr)
        const cartLength = cartArr.length

        let grossPrice = 0
        cartArr.forEach(el=>{
            grossPrice = grossPrice + el.addedValue*el.price
        })

        let delivery = 20

        let totalBill = delivery + grossPrice
        dispatch({type : 'bills', payload : {grossPrice:grossPrice,cartLength : cartLength, delivery: delivery, totalBill: totalBill}})

    }
}


export function LessMoreQuantityToItemsCreator(itemName){
    return function(dispatch, getstate){
        let cart = JSON.parse(localStorage.getItem('prepcart'))
        cart.forEach(el=>{
            if(el.name === itemName){
                // el[2] = Number(el[2]) + Number(el[3])
                if(el.addedValue === 0){
                    return
                }
                el.addedValue = Number(el.addedValue)- Number(el.min)
            }
        })
        localStorage.setItem('prepcart', JSON.stringify(cart))
        dispatch({type : 'addtocartLESSMORE', payload : cart})


        /*****billing calculation****/
        const prepCart = JSON.parse(localStorage.getItem('prepcart'))
        let cartArr = []
        prepCart.forEach(el=>{
            if(el.addedValue!=0){
                cartArr.push(el)
            }
        })
        console.log(cartArr)
        const cartLength = cartArr.length

        let grossPrice = 0
        cartArr.forEach(el=>{
            grossPrice = grossPrice + el.addedValue*el.price
        })

        let delivery = 20

        let totalBill = delivery + grossPrice
        dispatch({type : 'bills', payload : {grossPrice:grossPrice,cartLength : cartLength, delivery: delivery, totalBill: totalBill}})


    }
}

export function cartPrepOnStartWhenCartNotAvailable(data){
    return function(dispatch, getstate){
        const cartPrep = []
        data.forEach(el=>{
            el.addedValue = 0;
            cartPrep.push(el)
        })

        console.log(cartPrep)
        localStorage.setItem('prepcart', JSON.stringify(cartPrep))
        dispatch({type : 'cartInitialPrep', payload : cartPrep})
    }
}


export function alreadyHaveCart(data){
    return ({type : 'AlreadyHavecartInitialPrep', payload : data})
}

export function SearchedItemsListProducts(data){
    return ({type : 'searchedList', payload : data})

}

export function OrderItemWITHCODCreator(data){
    return function(dispatch, getItem){
        // dispatch({type : 'OrderItemWithCOD', payload : true})
        let listfromLocal = data.itemsList
        let cart = []
        listfromLocal.forEach(el=>{
            if(el.addedValue !== 0){
                cart.push(el)
            }
        })
        data.itemsList = cart
        axios({
            method : 'POST',
            url : 'http://127.0.0.1:4000/api/v1/user/cod-payment',
            data : {
                items : data
            }
        }).then(el=>{
            let listfromLocal = JSON.parse(localStorage.getItem('prepcart'))
            listfromLocal.forEach(el=>{
                el.addedValue = 0
            })
            localStorage.setItem('prepcart', JSON.stringify(listfromLocal))
            
            // if(localStorage.getItem('orderPlaced')){
            //     const placed_orders = JSON.parse(localStorage.getItem('orderPlaced'))
            //     placed_orders.push(el.data.data.orders)
            //     localStorage.setItem('orderPlaced', JSON.stringify(placed_orders))
            // }else{
            //     localStorage.setItem('orderPlaced', JSON.stringify([el.data.data.orderPlaced]))
            // }

            localStorage.setItem('orderPlaced', true)

            localStorage.setItem('AllOrders', JSON.stringify(el.data.data.orders))            
            dispatch({type : 'OrderItemWithCOD', payload : true})
            // dispatch({type : 'orderPlacingFinish'})
            dispatch({type : 'cartItems', payload : {arr:[], grossPrice:0,cartLength : 0, delivery: data.items.delivery_charges, totalBill: data.items.delivery_charges}})
        
            // socket connection here

            
        })

    }
}



export function OpenAccountCreator(data){
    return async function(dispatch, getstate){
        axios({
            method : 'POST',
            url : 'http://127.0.0.1:4000/api/v1/user/open-acc',
            data : {
                user : data
            }
        }).then(el=>{
            localStorage.setItem('user', JSON.stringify(el.data))
            dispatch({type : 'signup'})
            window.location='/products'
        })
    }
}


export function TracksAllCreator(){
    return async (dispatch, getItem)=>{
        console.log(localStorage.getItem("orderPlaced"))
        if(localStorage.getItem("orderPlaced")==='true'){
            console.log('logged')
            axios({
                method : 'POST',
                url : 'http://127.0.0.1:4000/api/v1/user/get-latest-placed-order',
                data : {
                    token : JSON.parse(localStorage.getItem('user')).data.token
                }
            }).then(el=>{
                console.log(el.data.data)
                localStorage.setItem('AllOrders', JSON.stringify(el.data.data.orderPlaced))
                dispatch({type : 'AllTracksAllOrders', payload : el.data.data.orderPlaced})
            })
        }else{
            const orders = JSON.parse(localStorage.getItem('AllOrder'))
            dispatch({type : 'AllTracksAllOrders', payload : orders})
        }
    }
}

export function TrackedItemCreator(id){ 
    return async (dispatch, getItem)=>{
        const allOrders = JSON.parse(localStorage.getItem('AllOrders'))
        const filterElement = allOrders.filter(order=>{
            if(String(order._id) === id){
                return order
            }
        })
        console.log(filterElement)
        dispatch({type : 'TrackedItem', payload : filterElement[0]})
    }
}