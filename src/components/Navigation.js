import React from 'react';
import WebHeader from './WebHeader';
import MobileHeader from './MobileHeader';

class Navigation extends React.Component{
    render(){
        return(
            <div>
                <WebHeader />
                <MobileHeader />
            </div>
        )
    }
}
export default Navigation;