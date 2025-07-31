import React, {useState, useEffect} from 'react'
import Axios from 'axios';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChannelList from './components/ChannelList';
import MainContent from './components/MainContent';

const App = () => {
  
  const [data, setData] = useState("")

  const getData = async()=> {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }

  useEffect(()=> {
    getData()
  }, []);

  return (
    <div className="app">
      <Header/>

      <div className='app-body'>
        <Sidebar/>  
        <ChannelList/>  
        <MainContent data={data}/>  
      </div>
    </div>
  )
}

export default App