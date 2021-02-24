import axios from 'axios';

export const GET_ALL_ORDERS='GET_ALL_ORDERS'
export const GET_ORDER_BY_ID='GET_ORDER_BY_ID'
export const ADD_ORDERS='ADD_ORDERS'
export const UPDATE_ORDERS='UPDATE_ORDERS'
export const DELETE_ORDERS='DELETE_ORDERS'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
const BASE_URL = 'http://localhost:9191/nursery/'




//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}


const getAllOrdersAction = (data) => {
    return {
        type: GET_ALL_ORDERS,
        data
    }
}
export const getAllOrders = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllOrdersAction(response.data))
            })
    }
}

const addOrderAction = (data) => {
    return {
        type: ADD_ORDERS,
        data
    }
}

export const addOrder = (newOrder) => {
    return (dispatch) => {
        axios.post(BASE_URL, newOrder)
            .then((response) => {dispatch(addOrderAction(response.data))})
            .catch((err) => console.log(err.response));
            
    }
}

const deleteOrderAction = (data) => {
    return {
        type: DELETE_ORDERS,
        data
    }
}

export const deleteOrder = (orderId) => {
    return (dispatch) => {
        axios.delete(BASE_URL + orderId)
            .then((response) => {
                dispatch(deleteOrderAction(response.data))
            })
    }
}

const updateOrderAction = (data) => {
    return {
        type: UPDATE_ORDERS,
        data
    }
}

export const updateOrder = (orderId, newOrder) => {
    return (dispatch) => {
        axios.put(BASE_URL + orderId, newOrder)
            .then((response) => {
                dispatch(updateOrderAction(response.data))
            })

            // .catch(function (error) { alert('NOT OK.'); });
            
    }
}

const getOrderByIdAction = (data) => {
    return {
        type: GET_ORDER_BY_ID,
        data
    }
}

export const getOrderById = (id) => {
    return (dispatch) => {
     //   let URL = `http://localhost:9191/nursery/searchById?id=${id}`
     let url=`http://localhost:9191/nursery/searchById/${id}`
            axios.get(url)
            .then((response) => {
                dispatch(getOrderByIdAction(response.data))
            })
    }
}