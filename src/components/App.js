import React from 'react';
import Top from './Top';
import Navigation from './Navigation';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

class App extends React.Component{
    render(){
        return(
            <div>
                <div className="main">
                    <Top />
                </div>
                <Navigation />
                <About />
                <Education />
                <Skills />
                <Experience />
            </div>
        )
    }
}
export default App;