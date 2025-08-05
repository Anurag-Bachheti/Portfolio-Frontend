import React from 'react'

const Header = ({pageTitle}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      backgroundColor: '#2c2f33',
      color: 'white',
      alignItems: 'center',
      padding: '0 5%',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    }}>

      {/* left side 20% */}
      <div style={{ width: '20%', fontWeight: 'bold', fontSize: '18px' }}>
        Know Anurag
      </div>

      {/* right side 80% */}
      <div style={{ width: '80%', textAlign: 'right', fontSize: '16px' }}>
        {pageTitle}
      </div>
    </div>
  )
}

export default Header