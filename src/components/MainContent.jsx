import React from 'react';
import '../styles/ProfilePhoto.css';
import profileImg from '../assets/profile.jpg';

function MainContent() {
  return (
    <div className="d-flex h-100 w-100">
      {/* Left - 20% */}
      <div className="bg-light border-end" style={{ width: '20%' }}>
        {/* Left panel content (optional) */}
      </div>

      {/* Right - 80% */}
      <div className="p-3 flex-grow-1">
        {/* Your Name */}
        <h4 className="mb-4" class="text-center text-wrap">Hi, I am Anurag Bachheti {<br/>} Software Developer</h4>

        {/* Discord-like layout */}
        <div className="d-flex">
          {/* Left side: Profile pictures stacked vertically */}
          <div className="d-flex flex-column align-items-start">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
          </div>

          {/* Right side: Messages, slightly offset */}
          <div className="flex-grow-1 ms-4 d-flex flex-column">
            <div className="mb-2 p-2 bg-light rounded">First Item</div>
            <div className="mb-2 p-2 bg-light rounded">Second Item</div>
            <div className="mb-2 p-2 bg-light rounded">Third Item</div>
            <div className="mb-2 p-2 bg-light rounded">Forth Item</div>
            <div className="mb-2 p-2 bg-light rounded">Fifth Item</div>
            <div className="mb-2 p-2 bg-light rounded">Sixth Item</div>
            <div className="mb-2 p-2 bg-light rounded">Seventh Item</div>
            <div className="mb-2 p-2 bg-light rounded">Eigth Item</div>
          </div>
        </div>

        <div className="d-flex">
          {/* Left side: Profile pictures stacked vertically */}
          <div className="d-flex flex-column align-items-start">
            <img src={profileImg} alt="Profile" className="rounded-circle mb-3"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div className="flex-grow-1 ms-4 d-flex flex-column">
              <p>Welcome to my Server!!..</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export default MainContent