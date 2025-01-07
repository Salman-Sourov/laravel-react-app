import{ BrowserRouter as Router , Routes,Route } from 'react-react-dom';

import App from './App';
import Home from './Home';
import Home from './components/home';

function RouterComponent(){
     return (
          <Router>
               <Routes>
                    <Route path="/" element={<App />} /> 
               </Routes>
          </Router>
     )
}

export default RouterComponent;