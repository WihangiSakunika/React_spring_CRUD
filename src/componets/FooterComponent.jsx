import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
               <footer className='footer'>
                <span className='text-muted'>All Right Reserved 2023 @YongBunny Development</span>
                </footer> 
            </div>
        );
    }
}
export default FooterComponent;