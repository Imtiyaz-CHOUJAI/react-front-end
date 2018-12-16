import React, { Component } from 'react';
import styled from "styled-components";

class Label extends Component {

    render() {
        const Label = styled.label`
            color: #242424;	
            line-height: 16px;
        `;

        return (
            <Label htmlFor={this.props.htmlFor}> {this.props.children} </Label>
        );
    }
}

export default Label;
