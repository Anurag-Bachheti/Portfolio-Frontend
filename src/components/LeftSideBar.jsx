import React, { useState } from 'react';

function LeftSideBar() {
  const [mainSection, setMainSection] = useState("Know Anurag");

  return (
    <div 
      className="d-flex flex-column align-items-center bg-dark text-white py-3" 
      style={{ height: '100vh', width: '60px' }}>

      <button 
        className="border-0 bg-transparent text-white my-2" 
        onClick={() => setMainSection("Know Anurag")}
        title="Know Anurag"
        style={{ fontSize: '24px' }}

      >
        📁
      </button>

      <button 
        className="border-0 bg-transparent text-white my-2" 
        onClick={() => setMainSection("Social")}
        title="Social"
        style={{ fontSize: '24px' }}
      >
        🌐
      </button>

      <button 
        className="border-0 bg-transparent text-white my-2" 
        onClick={() => setMainSection("Hobbies")}
        title="Hobbies"
        style={{ fontSize: '24px' }}
      >
        🎮
      </button>
    </div>
  );
}

export default LeftSideBar;