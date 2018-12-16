import React, { Component } from 'react';
import styled from "styled-components";

class Link extends Component {

    render() {
        const Link = styled.a`
            color: #047CBD;
            cursor: pointer;
            
            &:hover {
                text-decoration: underline;
            }
        `;

        return (
            <Link onClick={this.props.onClick}> {this.props.children} </Link>
        );
    }
}

export default Link;
