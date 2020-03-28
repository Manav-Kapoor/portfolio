import React from 'react';
import mobileHeaderIcon from '../images/mobile-header-icon.PNG';
import close from '../images/close.PNG';
import './style.css';

class MobileHeader extends React.Component{
    display() {
        var x = document.getElementById('mobile-header-content');
        if(x.style.display === 'block'){
            x.style.display = 'none';
        }else{
            x.style.display = 'block';
        }
    }
    render(){
        return(
            <div className="mobile-header">
                <div className="mobile-header-icon-div">
                    <img alt="open" onClick={this.display} className="mobile-img-open" src={mobileHeaderIcon}/>
                </div>
                <div className="mobile-header-content" id="mobile-header-content">
                    <img alt="close" onClick={this.display} className="mobile-img-close" src={close}/>
                    <div className="mobile-header-item">
                        <a href="#root">Home</a>
                    </div>
                    <div className="mobile-header-item">
                        <a href="#about">About</a>
                    </div>
                    <div className="mobile-header-item">
                        <a href="#education">Education</a>
                    </div>
                    <div className="mobile-header-item">
                        <a href="#skills">Skills</a>
                    </div>
                    <div className="mobile-header-item">
                        <a href="#experience">Experience</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHeader;