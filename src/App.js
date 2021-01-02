import { useDispatch } from "react-redux";

import logo from './logo.svg';
import './App.css';
import Buy from "./modules/Buy/Buy";
import { translations } from "./modules/Translation/translations";
import {changeLanguage, changeLanguageENAsync} from "./modules/Translation/redux/translationActions";

function App() {
  const dispatch = useDispatch()

  const changeLanguagePressHandler = (lang) => {
    if(lang === 'es'){
      dispatch(changeLanguage(translations.es))
      return;
    }
    if(lang === 'en'){
      dispatch(changeLanguage(translations.en))
      return;
    }
    if(lang === 'sr'){
      dispatch(changeLanguage(translations.sr))
      return;
    }
    if(lang === 'en async'){
      dispatch(changeLanguageENAsync())
      return;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Buy/>
        <br/><br/>
        <button onClick={() => changeLanguagePressHandler('es')}> ES </button><br/>
        <button onClick={() => changeLanguagePressHandler('en')}> EN </button><br/>
        <button onClick={() => changeLanguagePressHandler('sr')}> SR </button><br/>
        <button onClick={() => changeLanguagePressHandler('en async')}> EN ASYNC </button><br/>
      </header>
    </div>
  );
}

export default App;
