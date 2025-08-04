import React, { useState } from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Links from './components/Links';
import MainContent from './components/MainContent';

const App = () => {

  const [data] = useState("")


  return (
    <div className="app d-flex flex-column vh-100">
      {/* Header at the top */}
      <Header />

      {/* Body: horizontal layout */}
      <div className="app-body d-flex flex-grow-1">
        {/* Left icon-only sidebar */}
        <Links />

        {/* Main content area */}
        <div className="flex-grow-1 p-3 overflow-auto">
          <MainContent data={data} />
        </div>

        {/* Optional sidebar on the right */}
        <Sidebar />
      </div>
    </div>
  );
};

export default App