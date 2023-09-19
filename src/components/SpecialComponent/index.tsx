import { FC, useEffect, useRef, useState } from 'react';

import { useCheckboxContext } from '../checkbox-context/useCheckboxContext';
import { useLetterSpecialQuery } from './useLetterSpecialQuery';

const MAX_LETTERS = 300;

const SpecialComponent: FC = () => {
  const { checkboxIndices } = useCheckboxContext();
  const indicesToRequest = checkboxIndices;

  const data = useRef<string[]>([]);
  const [, forceRender] = useState(false);

  const { data: datum } = useLetterSpecialQuery(indicesToRequest);

  useEffect(() => {
    if (data.current.length < MAX_LETTERS) {
      data.current.push(datum as string);
    } else {
      data.current.shift();
      data.current.push(datum as string);
    }
    forceRender((prev) => !prev); // While no state is being updated, this will force a re-render
  }, [data, datum]);

  return (
    <div className="rounded-md overflow-hidden drop-shadow-md bg-slate-400 h-60 w-60" data-testid="component">
      <p className="text-sm text-gray-800/50 p-2" data-testid="component-letters">
        {data.current}
      </p>
    </div>
  );

  return null;
};

export default SpecialComponent;
