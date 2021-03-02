import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from "./sections/main/Main";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Osher from './sections/osher/osher';
import {useProgress, OrbitControls } from "drei";
import { a, useTransition} from "@react-spring/web";



function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}
function App() {
  return (
       <>
        <Loader/>
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        </Route>
        <Route exact path="/osh">
        <Osher />
        </Route>
        </Switch>
        <Footer />
        </BrowserRouter>
   
    
    </>
  );
}

export default App;
