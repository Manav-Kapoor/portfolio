import React from 'react';
import {connect} from 'react-redux';
import experience from '../images/experience.jpg';
import './style.css';

class Experience extends React.Component{
    renderWork(el){
        return el.work.map((element, key)=>{
            return <li key={key}>{element}</li>
        })
    }
    renderList(){
        return this.props.experience.map((el,key)=>{
            return(
                <li key={key}>
                    <div className="experience-div">
                        <div className="post">{el.post}</div>
                        <div className="company">{el.company}: <span>{el.duration}</span></div>
                        <ul>{this.renderWork(el)}</ul>
                    </div>
                </li>
            )
        })
    }
    render(){
        return(
            <div id="experience">
                <div className="education-title">Work Experience</div>
                <div className="education-div">
                    <div className="education-image">
                        <img alt="#" className="books" src={experience}/>
                    </div>
                    <div className="education-detail">
                        <ul type="square">{this.renderList()}</ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return({
        experience: state.Experience
    })
}
export default connect(mapStateToProps)(Experience);