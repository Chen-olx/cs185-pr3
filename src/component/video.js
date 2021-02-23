import React, { Component } from 'react';
import V1 from '../videos/1.mp4'
import V2 from '../videos/2.mp4'
import V3 from '../videos/3.mp4'
import V4 from '../videos/4.mp4'
import V5 from '../videos/5.mp4'
import V6 from '../videos/6.mp4'
import V7 from '../videos/7.mp4'
import V8 from '../videos/8.mp4'

class Video extends Component {
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
                <div class="grid-item"><video onClick={this.on} src={V1} autoplay></video></div>
                <div class="grid-item"><video onClick={this.on} src={V2} autoplay></video></div>
                <div class="grid-item"><video onClick={this.on} src={V3} autoplay></video></div>
                <div class="grid-item"><video onClick={this.on} src={V4} autoplay></video></div>
                <div class="grid-item"><video onClick={this.on} src={V5} autoplay></video></div>
                <div class="grid-item"><video onClick={this.on} src={V6} autoplay></video></div>
                <div class="grid-item"><video onClick={this.on} src={V7} autoplay></video></div>
                <div class="grid-item"><video onClick={this.on} src={V8} autoplay></video></div>
                </div>
                <div class="overlay" id="overlay" ><video class="obj" id="obj" controls/></div>
            </div>
        )
    }
}

export default Video;