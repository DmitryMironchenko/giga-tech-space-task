import React, { FC } from 'react';

import { useCheckboxContext } from './checkbox-context/useCheckboxContext';
import Component from './Component';
import SpecialComponent from './SpecialComponent';

const Components: FC = () => {
  const { checkboxIndices, isSpecialShown } = useCheckboxContext();

  return (
    <div className="py-4 justify-center">
      <div className="flex flex-row flex-wrap gap-4 py-4">
        {checkboxIndices.map((index) => (
          <React.Fragment key={index}>
            <Component index={index} />
          </React.Fragment>
        ))}
        {isSpecialShown && <SpecialComponent />}
      </div>
    </div>
  );
};

export default Components;
