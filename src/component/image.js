import React, { Component } from 'react';
import HongKong from '../images/1.jpeg'
import Hawaii from '../images/2.jpeg'
import Fish from '../images/3.jpeg'
import Ski from '../images/4.jpeg'
import Snow from '../images/5.jpeg'
import Snow2 from '../images/6.jpeg'
import Cat1 from '../images/7.jpeg'
import Cat2 from '../images/8.jpeg'
import Cat3 from '../images/9.jpeg'
import Street from '../images/10.jpeg'
import Seafood from '../images/11.jpeg'
import Bbq from '../images/12.jpeg'
import Sky from '../images/13.jpeg'

class Image extends Component {
    on(a){
        document.getElementById("overlay").style.display = "block";
        document.getElementById("obj").src = a.target.src;
        var tar = document.getElementById("overlay");
	    tar.addEventListener("click", function(event) {
            if(event.target===this) document.getElementById("overlay").style.display = "none";
        });
    }

    render() {
        return (
            <div>
                <div class="grid_container">
                <div class="grid-item"><img onClick={this.on} src={HongKong} alt="HongKong"/></div>
                <div class="grid-item"><img onClick={this.on} src={Hawaii} alt="Hawaii"/></div>
                <div class="grid-item"><img onClick={this.on} src={Fish} alt="fish"/></div>
                <div class="grid-item"><img onClick={this.on} src={Ski} alt="ski"/></div>
                <div class="grid-item"><img onClick={this.on} src={Snow} alt="snow"/></div>
                <div class="grid-item"><img onClick={this.on} src={Snow2} alt="snow"/></div>
                <div class="grid-item"><img onClick={this.on} src={Cat1} alt="cat1"/></div>
                <div class="grid-item"><img onClick={this.on} src={Cat2} alt="cat2"/></div>
                <div class="grid-item"><img onClick={this.on} src={Cat3} alt="cat3"/></div>
                <div class="grid-item"><img onClick={this.on} src={Street} alt="street"/></div>
                <div class="grid-item"><img onClick={this.on} src={Seafood} alt="seafood"/></div>
                <div class="grid-item"><img onClick={this.on} src={Bbq} alt="bbq"/></div>
                <div class="grid-item"><img onClick={this.on} src={Sky} alt="sky"/></div>
                </div>
	            <div class="overlay" id="overlay" ><img class="obj" id="obj" alt="overlay"/></div>
            </div>
        )
    }
}

export default Image;