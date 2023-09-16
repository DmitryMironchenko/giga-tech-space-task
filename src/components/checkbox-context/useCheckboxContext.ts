import { useContext } from 'react';

import { CheckboxContext } from './context';

export const useCheckboxContext = () => {
  const ctx = useContext(CheckboxContext);

  if (!ctx) {
    throw new Error(
      'No appropriate context found! useCheckboxContext() should be called within CheckboxContextProvider',
    );
  }

  return {
    ...ctx,
  };
};
