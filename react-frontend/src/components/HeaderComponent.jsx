import React, { Component } from 'react';
import '../../src/App.css';
class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href='https://www.google.com' className='navbar-brand'>Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;