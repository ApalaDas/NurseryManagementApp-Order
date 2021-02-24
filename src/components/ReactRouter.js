import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './Home'
import AddOrder from './AddOrder'
import ViewAllOrders from './ViewAllOrders'
import SearchById from './SearchById'
function ReactRouter() {
    return (
        <div>
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    {/* <div className=" jumbotron-fluid "> */}
                        <div className="collapse navbar-collapse" id="navbarNav" >
                            <ul className="navbar-nav" type="none">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ordersViewAll" >Order List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orderAdd"> Add/Update</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ordersById"> Search By ID</Link>
                                </li>
                        
                            </ul>
                        </div>
                    {/* </div> */}
                </nav>

                
                <Switch>
                    <Route exact path="/ordersViewAll">
                      <ViewAllOrders></ViewAllOrders>
                    </Route>
                    <Route path="/orderAdd">
                        <AddOrder></AddOrder>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/ordersById">
                       <SearchById></SearchById>
                    </Route>
                   
                </Switch>
            </div>
            </Router>
            
        </div>
    )
}



export default ReactRouter
