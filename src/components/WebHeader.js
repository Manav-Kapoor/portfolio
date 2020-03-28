import React from 'react';

class WebHeader extends React.Component{
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    render(){
        return(
            <div className="header" id="navbar">
                <div className="header-item">
                    <a href="#root">Home</a>
                </div>
                <div className="header-item">
                    <a href="#about">About</a>
                </div>
                <div className="header-item">
                    <a href="#education">Education</a>
                </div>
                <div className="header-item">
                    <a href="#skills">Skills</a>
                </div>
                <div className="header-item">
                    <a href="#experience">Experience</a>
                </div>
            </div>
        )
    }
}
export default WebHeader;