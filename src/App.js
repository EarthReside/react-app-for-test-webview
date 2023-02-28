import './App.css';
import logo from './logo.svg';
import { useCallback, useState } from 'react';

function App() {
  const [text, setText] = useState('Hello');
  const onChange = useCallback((event) => setText(event.target.value),[]);
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  const onPaste = useCallback(async() => {
    const readText = await navigator.clipboard.readText();
    setText(readText);
  },[]);
  const onNativeCopy = useCallback(() => {
    console.log('onNativeCopy')
    window.ReactNativeWebView.postMessage(text);
  },[text]);
  const onNativePaste = useCallback(async() => {
    const readText = await window.ReactNativeWebView.target.value;
    console.log('readText: ' + readText);
    setText(readText);
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={text} onChange={onChange}></input>
        {/* <button onClick={onCopy}>copy</button> */}
        <button onClick={onNativeCopy}>native copy</button>
        <button onClick={onNativePaste}>native paste</button>
        {/* <button onClick={onPaste}>paste</button> */}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
