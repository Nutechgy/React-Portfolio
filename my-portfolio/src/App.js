import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
      <Router>
          <div className="app">
              <Header />
              <main>
                  <Switch>
                      <Route path="/portfolio" component={Portfolio} />
                      <Route path="/contact" component={Contact} />
                      <Route path="/resume" component={Resume} />
                      <Route path="/" component={AboutMe} />
                  </Switch>
              </main>
              <Footer />
          </div>
      </Router>
  );
};
const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <div>
                <p>Download my resume <a href="/path/to/resume.pdf" download>here</a>.</p>
                <h3>Proficiencies:</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    {/* Add more proficiencies */}
                </ul>
            </div>
        </section>
    );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
