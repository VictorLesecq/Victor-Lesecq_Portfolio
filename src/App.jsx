import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
     Home,
     About,
     Projects,
     Contact,
     Project,
     Error,
     Settings,
} from './pages';
import Navbar from './components/NavBar/Navbar';

const App = () => {
     return (
          <main className="bg-slate-500 overflow-hidden">
               <Router>
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/about" element={<About />} />
                         <Route path="/projects" element={<Projects />} />
                         <Route path="/settings" element={<Settings />} />
                         <Route
                              path="/project/:idProject"
                              element={<Project />}
                              errorElement={<Error />}
                         />
                         <Route path="/contact" element={<Contact />} />
                    </Routes>
               </Router>
          </main>
     );
};

export default App;
