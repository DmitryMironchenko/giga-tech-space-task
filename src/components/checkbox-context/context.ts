import { createContext } from 'react';

export type CheckboxContextType = {
  checkboxIndices: number[];
  onCheckboxToggle: (checkboxIndex: number) => void;
  isSpecialShown?: boolean;
  toggleSpecial: () => void;
};

export const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);
