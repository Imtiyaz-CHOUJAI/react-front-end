import React, { Component } from 'react';
import styled from "styled-components";

class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            withPadding: props.withPadding,
        }
    }

    render() {
        const { withPadding } = this.state
        const Title = styled.h1`
            color: #242424;		
            font-size: 18px;	
            font-weight: 300;	
            line-height: 21px;
            padding-top: ${withPadding ? '61px' : '0'}
            padding-bottom: ${withPadding ? '31px' : '0'};
        `;

        return (
            <Title> {this.props.children} </Title>
        );
    }
}

export default Title;
