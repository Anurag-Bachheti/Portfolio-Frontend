import React from 'react'

function Links() {
  return (
    <div className="d-flex flex-column bg-dark text-white vh-100 p-3" style={{ width: '60px' }}>

      <nav className="nav nav-pills flex-column mb-auto text-center">
        <button className="btn text-white py-3 w-100 border-0 bg-transparent">
          <i className="bi bi-house">KM</i>
        </button>
        <button className="btn text-white py-3 w-100 border-0 bg-transparent">
          <i className="bi bi-house">S</i>
        </button>
        <button className="btn text-white py-3 w-100 border-0 bg-transparent">
          <i className="bi bi-house">H</i>
        </button>
      </nav>
    </div>
  );
}

export default Links;