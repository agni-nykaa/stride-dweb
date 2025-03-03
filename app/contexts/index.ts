import DefaultAuthState from '~/constants/context/auth';
import { createContext } from 'react';
import { AuthState } from '~/types/contexts/auth';

export const ConfigContext = createContext(null);
export const AuthContext = createContext<AuthState>(DefaultAuthState);
