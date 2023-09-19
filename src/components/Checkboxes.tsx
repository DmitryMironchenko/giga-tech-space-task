import { FC } from 'react';

import { useCheckboxContext } from './checkbox-context/useCheckboxContext';

const Checkboxes: FC<{ amount?: number }> = ({ amount = 7 }) => {
  const { checkboxIndices, onCheckboxToggle, isSpecialShown, toggleSpecial } = useCheckboxContext();

  const onChange: (checkboxIndex: number, isSpecialChecked: boolean) => React.ChangeEventHandler<HTMLInputElement> =
    (checkboxIndex) => () => {
      onCheckboxToggle(checkboxIndex);
    };

  const onSpecialChange: React.ChangeEventHandler<HTMLInputElement> = () => {
    toggleSpecial();
  };

  return (
    <div className="py-4">
      {[...Array(amount).keys()].map((checkboxIndex) => (
        <div key={checkboxIndex}>
          <label className="inline-flex items-center cursor-pointer">
            <input
              checked={checkboxIndices.includes(checkboxIndex)}
              onChange={onChange(checkboxIndex, false)}
              type="checkbox"
              className="rounded"
            />
            <span className="ml-2">Component {checkboxIndex + 1}</span>
          </label>
        </div>
      ))}
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input checked={!!isSpecialShown} onChange={onSpecialChange} type="checkbox" className="rounded" />
          <span className="ml-2">= Special Component = </span>
        </label>
      </div>
    </div>
  );
};

export default Checkboxes;
