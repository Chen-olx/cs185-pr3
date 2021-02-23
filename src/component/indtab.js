import React, { Component } from 'react';

function Itab (props) {
    const addstyle = () => {
        if(props.out.id === props.activetab) {
            return {
                backgroundColor: '#444'
            }
        }
    };

    return (
        <div className="tab" style={addstyle()} onClick={props.ctab.bind(this,props.out.id)}>{props.out.title}</div>
    );
}

export default Itab;