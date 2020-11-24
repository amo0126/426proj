import React, { Component } from 'react';
import Cities from './cities';
import {Button, Columns, Column} from 'bloomer';


export class Search extends Component {
    constructor() {
        super();
        this.state = {
            showHideMap: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
        }
        hideComponent(name) {
        switch (name) {
            case "showHideMap":
            this.setState({ showHideMap: !this.state.showHideMap });
            break;
            default:
            return null;
        }
        }
    submit() {
        this.hideComponent("showHideMap");

    }
    render() {
        const { showHideMap: showHideMap } = this.state;
        return(
            <div>
                <h2>Looking for help? Search for a provider near you</h2>
                <Columns isCentered>
                <Column><Cities/></Column>
                <Column><Button onClick={() => this.submit()}>Go</Button></Column>
                </Columns>
                <div>
        <table>
          {showHideMap && (
            <tr>
            </tr>
          )}
        </table>
      </div>
            </div>
        );
    }
}