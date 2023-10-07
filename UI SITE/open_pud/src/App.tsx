import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageLayout from './pages/PageLayout';
import { startPage, systemModules } from './constantes/constantesGerais';





const App: React.FC = () => {
  const generateRoutes = () => {
    return systemModules.map((item,index) => (
      <Route path={item.path}  element={<PageLayout  headerText={item.name}>{item.element}</PageLayout>}/>
    ))
  }
  return (
    <Router>
            <Routes>
              <Route path={startPage.path} element={startPage.element}></Route>
              {generateRoutes()}
            </Routes>
    </Router>
  );
};

export default App;
