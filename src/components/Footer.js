
import React, { Component } from 'react'
import footer from './footer.jfif';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className = "footer" >
                    <div>
                    <b>All Rights Reserved 2021 @ApalaDas</b>
                        <img src={footer}></img>
                    </div>
                   
                </footer>
        
                {/* <span className="text-dark"><b>All Rights Reserved 2021 @ApalaDas</b></span> */}
            </div>
        )
    }
}

export default Footer