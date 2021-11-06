import { createContext, useState } from 'react';

export const DataContext = createContext({});

export const DataProvider = ( {children} ) => {
    const [value, setValue] = useState({});

    return(
        <DataContext.Provider value={[value, setValue]}>
            {children}
        </DataContext.Provider>
    );
};
