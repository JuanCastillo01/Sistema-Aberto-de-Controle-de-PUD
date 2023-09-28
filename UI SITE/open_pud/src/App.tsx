import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import { systemModules } from './constantes/constantesGerais';





const App: React.FC = () => {
  const generateRoutes = () => {
    return systemModules.map((item,index) => (
      <Route path={item.path}  element={<PageLayout>{item.element}</PageLayout>}/>
    ))
  }
  return (
    <Router>
            <Routes>
              {generateRoutes()}
            </Routes>
    </Router>
  );
};

export default App;
