import * as actionCreators from '../actions/actions';

const initialState = {
    returnedMessage: 'empty msg',
    orderList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionCreators.GET_ALL_ORDERS:
            let listOfOrders = action.data
            console.log('List of Orders')
            console.log(listOfOrders)
            return {
                returnedMessage: 'ORDERS IN THE INVENTORY!! ',
                orderList: listOfOrders
            }

        
        case actionCreators.DELETE_ORDERS:
                let messageAfterDeletion = action.data.message
                let listAfterDeletion = action.data.orderList
                console.log('Deletion of Order')
                console.log(listAfterDeletion)
                console.log(messageAfterDeletion)
                return {
                    returnedMessage: messageAfterDeletion,
                    orderList: listAfterDeletion
                }

        case actionCreators.ADD_ORDERS:
                    let messageAfterAddition = action.data.message
                    let listAfterAddition = action.data.orderList
                    console.log('Addition of orders')
                    console.log(listAfterAddition)
                    console.log(messageAfterAddition)
                    return {
                        returnedMessage: messageAfterAddition,
                        orderList: listAfterAddition
                    }

                    case actionCreators.UPDATE_ORDERS:
                        let messageAfterUpdation = action.data.message
                        let listAfterUpdation = action.data.orderList
                        console.log('Updating orders')
                        console.log(listAfterUpdation)
                        console.log(messageAfterUpdation)
                        return {
                            returnedMessage: messageAfterUpdation,
                            orderList: listAfterUpdation
                        }
                        case actionCreators.GET_ORDER_BY_ID:
                            let msg=action.data.message
                            let listOfOrdersById = action.data.orderList
                            console.log(msg)
                            console.log(listOfOrdersById)
                            console.log(action.data)
                            return {
                                returnedMessage:msg,
                                orderList: listOfOrdersById
                            }
                    case actionCreators.CLEAR_STATE:
                        return {
                            returnedMessage: '',
                            orderList: []
                        }
            
                    
                    default:
                        return state

    }
}

export default reducer;