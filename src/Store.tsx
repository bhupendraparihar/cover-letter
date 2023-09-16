import { createContext } from 'react';

// const initialState = {
//   state: {
//     orgName: 'Orgnization Name',
//     role: 'Role Name',
//   },
//   setAppState: () => {},
// };

const AppContext = createContext({
  orgName: '',
  role: '',
  setOrgName: (value: string) => {
    console.log(value);
  },
  setRole: (value: string) => {
    console.log(value);
  },
});

export default AppContext;
