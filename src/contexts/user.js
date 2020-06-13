import { createContext } from 'react';

export const UserContext = createContext({ nickname: null });
export const UserProvider = UserContext.Provider;
