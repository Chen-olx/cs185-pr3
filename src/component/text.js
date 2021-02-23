import React, { Component } from 'react';

class Text extends Component {
    render() {
        return (
            <div>
            <form>
                <label for = "firstname">First name:</label><br/>
                <input type="text" name="firstname" id="firstname"/><br/>
                <label for = "lastname">Last name:</label><br/>
                <input type="text" name="lastname" id="lastname"/><br/><br/>
                <label for = "fmovie">Favorite Movie</label><br/><br/>
                <input type="radio" name="fmovie" id="Avengers"/>
                <label for = "Avengers">Avengers</label><br/>
                <input type="radio" name="fmovie" id="DarkKnight"/>
                <label for = "DarkKnight">Dark Knight</label><br/>
                <input type="radio" name="fmovie" id="Tenet"/>
                <label for = "Tenet">Tenet</label><br/><br/>
                <input type="Submit" name="submit" value="Done"/>
	        </form>
            </div>
        )
    }
}

export default Text;