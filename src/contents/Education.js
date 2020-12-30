import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Software Engineering" where="OU University" from="July 2012" to="Present"/>
            <Widecard title="SSC | INTERMEDIATE" where="Board of Intermediate Higher Secondary School" />
            </div>
            )
        }
    }
    
export default Education
    