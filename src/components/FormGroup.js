import React, { Component } from 'react';
import styled from "styled-components";

class FormGroup extends Component {

    render() {
        const FormGroup = styled.div`
            padding-bottom: 20px;
        `;

        return (
            <FormGroup> {this.props.children} </FormGroup>
        );
    }
}

export default FormGroup;
