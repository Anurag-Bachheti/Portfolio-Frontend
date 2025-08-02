import React, { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChannelList from './components/ChannelList';
import MainContent from './components/MainContent';

const App = () => {

  const [data] = useState("")


  return (
    <div className="app" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <div className="app-body" style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex' }}>
          <ChannelList />
          <MainContent data={data} />
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default App