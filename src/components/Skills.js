import React from 'react';
import {connect} from 'react-redux';
import './style.css';

class Skills extends React.Component{
    renderList(){
        return this.props.skills.map((el, key)=>{
            return(
                <li key={key}>{el}</li>
            )
        })
    }
    render(){
        return(
            <div className="skill-div">
                <div className="skill-title">
                    Skills
                </div>
                <div className="skill-content">
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return({
        skills: state.Skills
    })
}

export default connect(mapStateToProps)(Skills);