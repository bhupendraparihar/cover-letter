import { useContext } from 'react';
import AppState from '../Store';

function Settings() {
  //   const appState = useContext(AppState);
  const { orgName, role, setOrgName, setRole } = useContext(AppState);

  return (
    <div>
      <h1>Cover Letter</h1>
      <div className="input-field">
        <label>Organization Name</label>
        <input
          type="text"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Role</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Settings;
