import without from 'lodash/without';
import { FC, PropsWithChildren, useState } from 'react';

import { CheckboxContext, CheckboxContextType } from './context';

const CheckboxContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [checkboxIndices, setCheckboxIndices] = useState<number[]>([]);
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

  return <CheckboxContext.Provider value={{ checkboxIndices, onCheckboxToggle }}>{children}</CheckboxContext.Provider>;
};

export default CheckboxContextProvider;
