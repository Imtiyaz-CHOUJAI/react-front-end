import React, { Component } from 'react';
import styled from "styled-components";

class Button extends Component {

    constructor (props) {
        super(props);
        this.state = {
            prime: props.prime,
            submit: props.submit,
        }
    }
    
    render() {
        const { prime, submit} = this.state;

        const Button = styled.button`
            width: 100%;
            text-aligh: center;
            border-radius: 3px;
            background-color: ${prime ? "#225971" : (submit ? "#157DBB" : "#3B5999")};
            color: #fff;
            padding: 15px;
            border: 0;
            line-height: 16px;	
            text-align: center;
            margin-bottom: 10px;
            position: relative;
            cursor: pointer;
            transition: all ease-in .2s;

            &:hover {
                box-shadow: 0px 5px 20px #a8a8a8;
                transform: translateY(-2px);
            }
        `;
    
        return (
            <Button onClick={this.props.onClick}> {this.props.children} </Button>    
        );
    }
}

export default Button;