import React, { Component } from 'react'
import order9 from './order9.jpg';
import order10 from './order10.jpg';
import footer from './footer.jfif';
import { MDBMask, MDBView, MDBContainer} from "mdbreact"
 class Home extends Component {
    go() {
        console.log(' bowbow '+this.props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="home">
                
                {/* <h1 className="lead"><center>Welcome to Order Management Section</center></h1> */}
                {/* <center>
                <img src={pot5} alt="Mercury" /> <br />
                </center> */}
                 <MDBContainer className="mt-8">
                <MDBView>
                <img src={order9} alt="Mercury" className="img-fluid"/> 
                <MDBMask className="flex-center" overlay="grey-strong">
                <p className="ptext"><h1>Welcome to Order Management Section</h1></p>
                </MDBMask>
                </MDBView>
                </MDBContainer>
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

export default Home