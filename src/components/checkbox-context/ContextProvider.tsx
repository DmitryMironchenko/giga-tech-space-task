import without from 'lodash/without';
import { FC, PropsWithChildren, useState } from 'react';

import { CheckboxContext, CheckboxContextType } from './context';

const CheckboxContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [checkboxIndices, setCheckboxIndices] = useState<number[]>([]);
  const [isSpecialShown, setIsSpecialShown] = useState<boolean>(false);

  const onCheckboxToggle: CheckboxContextType['onCheckboxToggle'] = (checkboxIndex) => {
    // if already in array - remove it
    // if not in array - add it at the bottom

    if (checkboxIndices.includes(checkboxIndex)) {
      setCheckboxIndices((prevCheckboxIndices) => {
        return without(prevCheckboxIndices, checkboxIndex);
      });
    } else {
      setCheckboxIndices((prevCheckboxIndices) => {
        const newCheckboxValueMap = [...prevCheckboxIndices];
        newCheckboxValueMap.push(checkboxIndex);
        return newCheckboxValueMap;
      });
    }
  };

  const toggleSpecial: CheckboxContextType['toggleSpecial'] = () => {
    setIsSpecialShown((prev) => !prev);
  };

  return (
    <CheckboxContext.Provider value={{ checkboxIndices, onCheckboxToggle, isSpecialShown, toggleSpecial }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export default CheckboxContextProvider;
