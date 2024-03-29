import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import {ComicsPages, MainPages, Page404, SingleComicPage} from "../pages";

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPages />}/>
                        <Route path="/comics" element={<ComicsPages />}/>
                        <Route path="/comics/:comicId" element={<SingleComicPage />}/>
                        <Route path="*" element={<Page404 />}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;