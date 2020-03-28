import React from 'react';
import './style.css';
import {connect} from 'react-redux';

class Top extends React.Component{
    componentDidMount(){
        var i = 0;
        var txt = 'ReactJS Developer';
        var speed = 200;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }
    render(){
        console.log(this.props);
        return(
            <div className="top-div">
                <div className="logo-div">
                    <img alt="logo" className="logo" src={this.props.details.image}/>
                </div>
                <div className="info-div">
                    <div className="info-name">{this.props.details.name}</div>
                    <div id="demo" className="info-name"></div>
                    {/* <div className="info-pursuing">{this.props.details.pursuing}</div> */}
                    <div>
                        <a href="#about" className="info-btn btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return({
        details: state.Details
    })
}
export default connect(mapStateToProps)(Top);