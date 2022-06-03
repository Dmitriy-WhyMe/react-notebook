import './app.sass'
import {Routes,Route} from "react-router-dom";
import AllNotes from './Pages/AllNotes';
import Home from './Pages/Home';
import YouTubeCategory from './Pages/YouTubeCategory';
import TikTokCategory from './Pages/TikTokCategory';
import FigmaCategory from './Pages/FigmaCategory';
import OtherLinksCategory from './Pages/OtherLinksCategory';
import OtherNotesCategory from './Pages/OtherNotesCategory';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/allnotes' element={<AllNotes titlePage={"All Notes"}/>}/>
				<Route path='/youtube' element={<YouTubeCategory titlePage={"YouTube Links"}/>}/>
				<Route path='/tiktok' element={<TikTokCategory titlePage={"TikTok Links"}/>}/>
				<Route path='/figma' element={<FigmaCategory titlePage={"Figma Links"}/>}/>
				<Route path='/otherlinks' element={<OtherLinksCategory titlePage={"Other Links"}/>}/>
				<Route path='/othernotes' element={<OtherNotesCategory titlePage={"Other Notes"}/>}/>
            </Routes>
		</div>
	);
}

export default App;
