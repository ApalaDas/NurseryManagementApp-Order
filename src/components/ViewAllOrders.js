import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
import footer from './footer.jfif';
class ViewAllOrders extends Component {
    componentDidMount() {
        this.props.onGetOrders()
    }
   
    delete(id) {
        this.props.onDeleteOrder(id);
    }
    render() {
        let ordersList = this.props.orderList.map((order, index) => {
            return (
                <tr key={index}>
                    <th>{order.orderId}</th>
                    <td>{order.orderDate}</td>
                    <td>{order.transactionMode}</td>
                    <td>{order.quantity}</td>
                    <td>{order.totalCost}</td>
                    <td>
                        <button type="button"  onClick={this.delete.bind(this, order.orderId)} className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
                
            )
        })


        return (
            <div>
                 <div className="planter-table-div ">
                <div className="retmsg">
                <h2>{this.props.returnedMessage}</h2>

                </div>
                
                <table className="planter-table">
                    <thead>
                        <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Date</th>
                            <th scope="col">Mode of Transaction</th>
                            <th scope="col">No Of Items</th>
                            <th scope="col">Total Cost</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList}
                    </tbody>
                </table>

            </div>
            <div className = "footer1" >
                    <div>
                        All Rights Reserved 2021 @ApalaDas
                        <img src={footer}></img>
                        
                    </div>
                   
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orderList: state.orderList,
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetOrders: () => {
            dispatch(actionCreators.getAllOrders())
        },
        onDeleteOrder: (orderId) => {
            dispatch(actionCreators.deleteOrder(orderId))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewAllOrders))
