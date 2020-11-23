import React, { Component } from 'react';
import Cities from './cities';
import {Button, Columns, Column} from 'bloomer';

export class Search extends Component {
    render() {
        return(
            <div>
                <h2>Looking for help? Search for a provider near you</h2>
                <Columns isCentered>
                <Column><Cities/></Column>
                <Column><Button>Go</Button></Column>
                </Columns>
            </div>
        );
    }
}