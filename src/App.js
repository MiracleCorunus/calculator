import SetFirstOperand from './components/SetFirstOperand';
import Operation from './components/Operation';

import { useState } from 'react';
function App() {

  const [firstOperand, setFirstOperand] = useState('');
  const [pageFlg, setPageFlg] = useState(0);

  const changeFirstOperand = (newFirstOperand) => {
    console.log(newFirstOperand);
    setFirstOperand(newFirstOperand);
  }

  const onChangeFlg = (flg) => {
    setPageFlg(flg);
  }

  return (
    <div>
      {pageFlg == 0 ? <SetFirstOperand changeFirst={changeFirstOperand} firstOperand={firstOperand} onChangeFlg={onChangeFlg} /> : <Operation firstOperand={firstOperand} onChangeFlog={onChangeFlg} />}
    </div>

  );
}



export default App;
