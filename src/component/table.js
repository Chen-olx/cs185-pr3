import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
            <h2>Projects</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Details</th>
                    <th>Year</th>
                </tr>
                <tr>
                    <td><a href= "https://drive.google.com/drive/folders/1pl4NNIv4F8Y4KkY_wyh7_0IXO1AjCadF">Horror Maze</a></td>
                    <td>A horror game developed by my friends and I in class CS48. Players need to control the character run out of the basement.</td>
                    <td>2020</td>
                </tr>
                <tr>
                    <td><a href= "https://github.com/ucsb-cs56-f19/proj01-chen-olx">Earthquake web</a></td>
                    <td>It is a project in CS56 which asking us establish a web. The web can be used to search earthquake happened on the world.</td>
                    <td>2019</td>
                </tr>
            </table>
            </div>
        )
    }
}

export default Table;