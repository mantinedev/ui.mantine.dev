import { createContext } from 'react';

export const DirectionContext = createContext<'rtl' | 'ltr'>('rtl');
