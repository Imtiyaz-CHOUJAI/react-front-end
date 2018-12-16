import React, { Component } from 'react';
import styled from "styled-components";

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkbox: props.checkbox,
        }
    }

    onFieldChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    render() {
        const { checkbox } = this.state

        const Input = styled.input`
            border: 1px solid #ddd;	
            border-radius: 3px;	
            background-color: #fff;
            width: ${checkbox ? '' : '-webkit-fill-available'};
            padding: 15px;
            margin-top: 7px;
            opacity: ${checkbox ? '0' : '1'};
            display: ${checkbox ? 'none' : 'block'};

            ${checkbox && `
                & + label {
                    position: relative;
                    cursor: pointer;
                    padding: 0;
                }

                & + label:before {
                    content: '';
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: text-top;
                    width: 15px;
                    height: 15px;
                    background: #047CBD;
                }

                &:hover + label:before {
                    background: #047CBD;
                }
                
                &:focus + label:before {
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
                }

                &:checked + label:before {
                    background: #047CBD;
                }

                &:checked + label:after {
                    content: '';
                    position: absolute;
                    left: 2px;
                    top: 7px;
                    background: white;
                    width: 2px;
                    height: 2px;
                    box-shadow: 
                    2px 0 0 white,
                    4px 0 0 white,
                    4px -2px 0 white,
                    4px -4px 0 white,
                    4px -6px 0 white,
                    4px -8px 0 white;
                    transform: rotate(45deg);
                }
            `}
        `;


        return (
            <Input id={this.props.id} type={this.props.type} name={this.props.name} onChange={this.props.onChange} value={this.props.value} />
        );
    }
}

export default Input;
