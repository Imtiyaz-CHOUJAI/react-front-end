import React, { Component } from 'react';
import styled from "styled-components";

class CheckLogin extends Component {

    render() {
        const CheckLogin = styled.div`
            line-height: 16px;
            text-align: center;
            padding-top: 20px;
        `;

        return (
            <CheckLogin> {this.props.children} </CheckLogin>
        );
    }
}

export default CheckLogin;
