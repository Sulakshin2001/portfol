import './App.module.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./skills/Skills";
import {Work} from "./Work/Work";
import {Contact} from "./contact/Contact";
import {Footer} from "./Footer/Footer";
import s from './App.module.css'

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Work/>
            <Contact/>
            <Footer/>


        </div>
    );
}

export default App;
