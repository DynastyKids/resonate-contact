// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import TheNavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftNavList from './components/leftnav';

function App() {
  const [rawData, setRawData] = React.useState([]);
  

  const defaulturl = 'https://jsonplaceholder.typicode.com/users'

  const getJson = async () => {
    try {
      const response = await fetch(defaulturl);
      const json = await response.json();
      setRawData(json);
    } catch (e) {
      console.error(e)
    }
  }
  React.useEffect(() => {
    getJson()
  }, []);

  return (
    <>
      <TheNavBar></TheNavBar>
      <LeftNavList data={rawData}></LeftNavList>
    </>
  );
}

export default App;
