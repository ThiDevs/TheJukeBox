import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        {/* {!data ? "Loading..." : data.arquivos.map(function(item){
            <img src={!data ? "Loading..." : item.thumbnail} className="App-logo" alt="logo" />;
            <br></br>
        })} */}
      
        <p>{!data ? "Loading..." : data.message}</p>  
     
      </header>
    </div>
  );
}

export default App;
