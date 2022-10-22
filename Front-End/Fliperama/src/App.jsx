import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Jogos from "./Pages/Jogos";
import JogosCreate from "./Pages/Jogos/Create";
import Salas from "./Pages/Salas";
import SalasCreate from "./Pages/Salas/Create";



function App() {
	return (
		<div ClassName="App">
		<Router>
			<Header />
			<Footer />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jogos" element={<Jogos />} />
        <Route path="/Jogos-Create" element={<JogosCreate />} />
        <Route path="/Jogos-Update/:id" element={<JogosCreate />} />
      	<Route path="/Salas" element={<Salas />} />
        <Route path="/Salas-Create" element={<SalasCreate />} />
        <Route path="/Salas-Update/:id" element={<SalasCreate />} />
      </Routes>
    </Router>
			
				
		
		
		</div>
	)
}

export default App
