import './app.sass'
import {Routes,Route} from "react-router-dom";
import AllNotes from './Pages/AllNotes';
import Home from './Pages/Home';
import NoteItem from './Components/NoteItem';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/allnotes' element={<AllNotes />}/>
				<Route path='/note' element={<NoteItem />}/>
            </Routes>
		</div>
	);
}

export default App;
