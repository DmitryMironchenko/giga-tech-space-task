import { FC } from 'react';

import { useCheckboxContext } from './checkbox-context/useCheckboxContext';
import Component from './Component';

const Components: FC = () => {
  const { checkboxIndices } = useCheckboxContext();

  console.log('[INFO] Components render');

  return (
    <div className="py-4 justify-center">
      <div className="flex flex-row flex-wrap gap-4 py-4">
        {checkboxIndices.map((index) => (
          <div key={index} className="">
            <Component index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Components;
