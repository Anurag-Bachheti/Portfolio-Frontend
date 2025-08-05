import React, { useState } from 'react'
import Header from './components/Header';
import MainContent from './components/MainContent';
import LeftSideBar from './components/LeftSideBar';
import SubSideBar from './components/SubSideBar';
import RightSideBar from './components/RightSideBar';

const App = () => {

  const [mainSection, setMainSection] = useState("Know Anurag") //SideBar
  const [activeSubSection, setActiveSubSection] = useState("About Me") //SubSideBar


  return (
    <div className="container-fluid" style={{ padding: 0, margin: 0 }}>

      {/* HEADER */}
      <div className="row">
        <div className="col-12" style={{ margin: 0, padding: 0 }}>
          <Header />
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="d-flex" style={{ height: 'calc(100vh - 80px)', width: '100%' }}>
        {/* Left Sidebar */}
        <div style={{ width: '60px' }}>
          <LeftSideBar setMainSection={setMainSection} />
        </div>

        <div style={{ width: '15%' }}>
          <SubSideBar mainSection={mainSection} setActiveSubSection={setActiveSubSection} />
        </div>

         {/* Main Content */}
        <div style={{ flex: 1 }}>
          <MainContent activeSubSection={activeSubSection} />
        </div>

        {/* Right Sidebar */}
        <div style={{ width: '250px' }}>
          <RightSideBar />
        </div>

      </div>
    </div>
  );
};

export default App