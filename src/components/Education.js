import React from 'react';
import {connect} from 'react-redux';
import'./style.css';
import books from '../images/books.jpg';

class Education extends React.Component{
    render(){
        return(
            <div id="education">
                <div className="education-title">Education</div>
                <div className="education-div">
                    <div className="education-detail">
                        <div className="education-school">
                            <div className="college">
                                <p className="institute">B.Tech CSE (pursuing): {this.props.education.college.name}</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Semester</th>
                                            <th>Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{this.props.education.college[1]}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>{this.props.education.college[2]}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>{this.props.education.college[3]}</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>{this.props.education.college[4]}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="school">
                                <p className="institute">{this.props.education.school.name}</p>
                                <div>XII: <span>{this.props.education.school[12]}</span></div>
                                <div>X: <span>{this.props.education.school[10]}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="education-image">
                        <img alt="#" className="books" src={books}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return({
        education : state.Education
    })
}
export default connect(mapStateToProps)(Education);