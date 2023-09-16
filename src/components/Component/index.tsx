import { FC, useEffect, useRef, useState } from 'react';

import { useLetterQuery } from './useLetterQuery';

interface Props {
  index: number;
}

const MAX_LETTERS = 30;

const Component: FC<Props> = ({ index }) => {
  const data = useRef<string[]>([]);
  const [, forceRender] = useState(false);

  const { data: datum, isLoading, isError } = useLetterQuery(index);

  useEffect(() => {
    if (data.current.length < MAX_LETTERS) {
      data.current.push(datum as string);
    } else {
      data.current.shift();
      data.current.push(datum as string);
    }
    forceRender((prev) => !prev); // While no state is being updated, this will force a re-render
  }, [data, datum]);

  if (isLoading) {
    // TODO: handle loading state if needed
  }

  if (isError) {
    // TODO: handle error
  }

  return (
    <div className="rounded-md overflow-hidden drop-shadow-md bg-slate-300 h-60 w-60" data-testid="component">
      <p className="text-sm text-gray-800/50 p-2" data-testid="component-letters">
        {data.current.join('')}
      </p>
    </div>
  );

  return null;
};

export default Component;
