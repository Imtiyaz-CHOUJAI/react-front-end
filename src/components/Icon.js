import React, { Component } from 'react';
import styled from "styled-components";

class Icon extends Component {

    render() {
        const Icon = styled.i`
            position: absolute;
            top: 50%;
            left: 25px;
            transform: translateY(-50%);
            font-size: 25px;
            text-align: left;
        `;

        return (
            <Icon className={this.props.className}> {this.props.children} </Icon>
        );
    }
}

export default Icon;