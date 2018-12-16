import React, { Component } from 'react';
import styled from "styled-components";

class Wrapper extends Component {

    render() {
        const Wrapper = styled.section`
            height: 769px;	
            width: 508px;
            border-radius: 3px;	
            background-color: #FFFFFF;
            margin:0 auto;	
            padding: 50px;
            margin-top: 128px;	
            margin-bottom: 128px;	
            box-shadow: 0 2px 12px 2px rgba(0,0,0,0.16);
        `;

        return (
            <Wrapper> {this.props.children} </Wrapper>
        );
    }
}

export default Wrapper;
