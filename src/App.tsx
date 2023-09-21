import { useState } from 'react';
import './App.css';
import CoverLetter from './components/CoverLetter';
import Settings from './components/Settings';
import AppContext from './Store';
import Summary from './components/Summary';
import GenericCoverLetter from './components/GenericCoverLetter';

function App() {
  const [orgName, setOrgName] = useState('JP Morgan Chase');
  const [role, setRole] = useState('Engineering Manager');

  return (
    <>
      <AppContext.Provider
        value={{
          orgName,
          role,
          setOrgName,
          setRole,
        }}
      >
        <div className="container">
          <div className="left">
            <Settings />
          </div>
          <div className="right">
            <GenericCoverLetter />
            <Summary />
            <CoverLetter />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
