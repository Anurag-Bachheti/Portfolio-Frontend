import React from 'react'

const SubSideBar = ({ mainSection, setActiveSubSection }) => {
  const renderOptions = () => {
    switch (mainSection) {
      case "Know Anurag":
        return (
          <>
            <p className="font-bold">General</p>
            <button onClick={() => setActiveSubSection("Server Map")}>Server Map</button>
            <button onClick={() => setActiveSubSection("About Me")}>About Me</button>
            <button onClick={() => setActiveSubSection("Skills")}>Skills</button>
            <button onClick={() => setActiveSubSection("Projects")}>Projects</button>

            <p className="font-bold mt-4">Professional</p>
            <button onClick={() => setActiveSubSection("Academic")}>Academic</button>
            <button onClick={() => setActiveSubSection("Work Experience")}>Work Experience</button>
            <button onClick={() => setActiveSubSection("Coding Profiles")}>Coding Profiles</button>

            <p className="font-bold mt-4">Documents</p>
            <button onClick={() => setActiveSubSection("Resume")}>Resume</button>
          </>
        );
      case "Social":
        return (
          <>
            <p className="font-bold">Socials</p>
            <button onClick={() => setActiveSubSection("LinkedIn")}>LinkedIn</button>
            <button onClick={() => setActiveSubSection("Instagram")}>Instagram</button>
            <button onClick={() => setActiveSubSection("GitHub")}>GitHub</button>
            <button onClick={() => setActiveSubSection("LeetCode")}>LeetCode</button>

            <p className="font-bold mt-4">Contact</p>
            <button onClick={() => setActiveSubSection("Mail")}>Mail ID</button>
            <button onClick={() => setActiveSubSection("WhatsApp")}>WhatsApp</button>
          </>
        );
      case "Hobbies":
        return (
          <>
            <p className="font-bold">Sports</p>
            <button onClick={() => setActiveSubSection("Indoor")}>Indoor</button>
            <button onClick={() => setActiveSubSection("Outdoor")}>Outdoor</button>

            <p className="font-bold mt-4">Travelling</p>
            <button onClick={() => setActiveSubSection("Travelling")}>Travelling</button>

            <p className="font-bold mt-4">Others</p>
            <button onClick={() => setActiveSubSection("To-Do List")}>To-Do List</button>
          </>
        );
      default:
        return <p>Select a category</p>;
    }
  };

  return (
    <div className="w-1/5 bg-gray-800 text-white p-4 h-full overflow-y-auto">
      {renderOptions()}
    </div>
  );
};

export default SubSideBar;