import { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import Display from './components/display/Display';
import ButtonPad from './components/buttons/ButtonPad';

function App() {
  return (
    <Fragment>
      <div className="calc">
        <Header />
        <Display />
        <ButtonPad />
      </div>
    </Fragment>
  );
}

export default App;
