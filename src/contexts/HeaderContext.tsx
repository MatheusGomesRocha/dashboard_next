import { createContext, ReactNode, useState } from 'react';

type HeaderContextProviderProps = {
    children: ReactNode
}

type HeaderContextData = {
    page: string;
    togglePage: (value: string) => void;
}

export const HeaderContext = createContext({} as HeaderContextData);

export function HeaderContextProvider({children}: HeaderContextProviderProps) {
    const [page, setPage] = useState('Dashboard');

    function togglePage (value: string) {
        setPage(value);
    }
    
    return(
        <HeaderContext.Provider value={{
            page,
            togglePage
        }}
        >
            {children}
        </HeaderContext.Provider>
    )
} 