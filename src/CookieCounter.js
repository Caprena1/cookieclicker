import React, { Component } from "react";
import "./CookieCounter.css"
import cookie from "./cookie.jpeg"

class CookieCounter extends Component {
    constructor(props) {
        super(props)

        this.state= {
            score:0
        }  
    }

    clickCookie = () => {
        this.setState ({score: this.state.score + 1})
    }
    render() {
        return (
            <div className="Cookie-Counter">
                <img src={cookie} alt = "cookie"/>
                <button className="button" onClick={this.clickCookie} id="Cooke-Button">A cookie</button>

            <h1 id="Score">Your score is {this.state.score}</h1>
            
            </div>
        )
    }

    
}



export default CookieCounter


//Parent (super) - Component
//child (subclass)- CookieCounter