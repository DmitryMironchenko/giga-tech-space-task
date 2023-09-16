import { FC } from 'react';

import { useCheckboxContext } from './checkbox-context/useCheckboxContext';

const Checkboxes: FC<{ amount?: number }> = ({ amount = 7 }) => {
  const { checkboxIndices, onCheckboxToggle } = useCheckboxContext();
  const onChange: (checkboxIndex: number) => React.ChangeEventHandler<HTMLInputElement> = (checkboxIndex) => () => {
    onCheckboxToggle(checkboxIndex);
  };

  return (
    <div className="py-4">
      {[...Array(amount).keys()].map((checkboxIndex) => (
        <div key={checkboxIndex}>
          <label className="inline-flex items-center cursor-pointer">
            <input
              checked={checkboxIndices.includes(checkboxIndex)}
              onChange={onChange(checkboxIndex)}
              type="checkbox"
              className="rounded"
            />
            <span className="ml-2">Component {checkboxIndex + 1}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
