import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
import Footer from './Footer';
import footer from './footer.jfif';

class SearchById extends Component {


    constructor(props) {
        super(props)

        this.orderId = React.createRef()
    }

    componentDidMount() {
        this.props.clearState()
    }


    search() {
        this.props.onGetOrdersById(this.orderId.current.value)
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
                   
                </tr>
                
            )
        })

        return (
            <div className="search-common-name">
            <div className="mb-3 input-search-name ">
                <input type="number" ref={this.orderId} className="form-control" id="orderId" placeholder="Enter ID" />
                <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
            </div>
            <hr />

            <div className="planter-table-div1">
            <div className="retmsg">
                <h2>THE DESIRED ORDER</h2>
                </div>
                <table className="planter-table">
                    <thead>
                        <tr>
                        <th scope="col">Order Id</th>
                            <th scope="col">Date</th>
                            <th scope="col">Mode of Transaction</th>
                            <th scope="col">No Of Items</th>
                            <th scope="col">Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ordersList}
                    </tbody>
                </table>
                

            </div>
            <Footer></Footer>
            {/* <div className = "footer" >
                    <div>
                        All Rights Reserved 2021 @ApalaDas
                        <img src={footer}></img>
                        
                    </div>
                   
                </div> */}

        </div>
    )
}

}
const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage,
        orderList: state.orderList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetOrdersById: (orderId) => dispatch(actionCreators.getOrderById(orderId)),
        clearState: () => dispatch(actionCreators.clearState())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchById)
