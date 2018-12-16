import React, { Component } from 'react';
import styled from "styled-components";

class Paragraph extends Component {

    render() {
        const Paragraph = styled.p`
            color: #242424;			
            line-height: 23px;
        `;

        return (
            <Paragraph> {this.props.children} </Paragraph>
        );
    }
}

export default Paragraph;