import {
     Route,
     BrowserRouter as Router,
     Routes,
     useLocation,
} from 'react-router-dom';
import React from 'react';
import { Home, Projects, Contact, Project, Error } from './pages';
import Navbar from './components/NavBar/Navbar';
import { ThemeProvider } from './utils/context/context';

function ScrollToTop() {
     const { pathname } = useLocation();

     // always return at the top when you change page
     React.useEffect(() => {
          window.scrollTo(0, 0);
     }, [pathname]);

     return null;
}

const App = () => {
     return (
          <div>
               <Router>
                    <ThemeProvider>
                         <ScrollToTop />
                         <Navbar />
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/profil" element={<Home />} />
                              <Route path="/projects" element={<Projects />} />
                              <Route
                                   path="/project/:projectId"
                                   element={<Project />}
                                   errorElement={<Error />}
                              />
                              <Route path="/contact" element={<Contact />} />
                         </Routes>
                    </ThemeProvider>
               </Router>
          </div>
     );
};

export default App;
