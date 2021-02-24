import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions';
import footer from './footer.jfif';

class AddOrder extends Component {
constructor(props) {
    super(props)

    this.orderId=React.createRef();
    this.orderDate=React.createRef();
    this.transactionMode=React.createRef();
    this.quantity=React.createRef();
    this.totalCost=React.createRef();

}

componentDidMount() {
    this.props.clearState()
}
componentDidUpdate() {
    let check = this.props.returnedMessage.split(' ')
    if (check[0] === 'Successfully') { 
         setTimeout(() => {this.props.history.push('/ordersViewAll')}, 2000)
    }
}
    add(){
        let newOrder={
            orderId:this.orderId.current.value,
            orderDate:this.orderDate.current.value,
            transactionMode:this.transactionMode.current.value,
            quantity:this.quantity.current.value,
            totalCost:this.totalCost.current.value
        }
        this.props.onAddOrder(newOrder)
    }
    update(){
        let newOrder={
            orderId:this.orderId.current.value,
            orderDate:this.orderDate.current.value,
            transactionMode:this.transactionMode.current.value,
            quantity:this.quantity.current.value,
            totalCost:this.totalCost.current.value
        }
        this.props.onUpdateOrder(newOrder.orderId,newOrder)
    }
    

    render(){
        return (
            <div>
                <div className="root-div">
                    <div className="mb-3 add-planter">
                        <label>Order ID: </label>
                        <input type="number" ref={this.orderId} pattern="[0-9]+" className="form-control" id="orderId" required="Please fill id" />
                    </div>

                    <div className="mb-3 add-planter">
                    <label>Order Date: </label>
                        <input type="date" ref={this.orderDate} className="form-control" id="orderDate" placeholder=" DD/MM/YYYY " />
                    </div>

                    {/* <div className="mb-3 add-planter">
                    <label>Order Date: </label>
                        <input type="text" ref={this.orderDate} className="form-control" id="orderDate" placeholder=" DD/MM/YYYY " />
                    </div> */}

                    <div className="mb-3 add-planter">
                    <label>Transaction Mode: </label>
                        <input type="text" ref={this.transactionMode} className="form-control" id="transactionMode" placeholder="upi or credit card or debit card" />
                    </div>

                    <div className="mb-3 add-planter">
                    <label>Number of Products : </label>
                        <input type="number" ref={this.quantity} className="form-control" id="quantity" />
                    </div>

                    <div className="mb-3 add-planter">
                        <label>Total Cost: </label>
                        <input type="number" ref={this.totalCost} className="form-control" id="totalCost" placeholder="in Rupees" />
                    </div>



                    <button type="button" onClick={this.add.bind(this)} className="btn btn-primary add-button">Add</button>
                    <button type="button" onClick={this.update.bind(this)} className="btn btn-primary add-button">Update</button>

                </div>
                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    {this.props.returnedMessage}
                </div>
                <div className = "footer" >
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
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddOrder: (order) => {
            dispatch(actionCreators.addOrder(order))
        },
        onUpdateOrder: (orderId,newOrder) => {
            dispatch(actionCreators.updateOrder(orderId, newOrder))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddOrder))
