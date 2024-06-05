import React, { Component } from 'react';
import '../../src/App.css';
class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentYear: new Date().getFullYear()
        };
    }

    render() {
        return (
            <div>
                <footer className='footer'>
                    <span>All Rights Reserved, {this.state.currentYear} Sai Jayanth</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;
