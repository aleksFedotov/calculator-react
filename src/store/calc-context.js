import { createContext } from 'react';

const CaclContext = createContext({
  currentVal: '',
  prevdVal: '',
  result: '',
  storedOperator: '',
  numberClick: () => {},
  operatorClick: () => {},
  equalClick: () => {},
  resetClick: () => {},
  deleteClick: () => {},
});

export default CaclContext;
