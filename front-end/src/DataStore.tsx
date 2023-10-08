import React, { createContext, useRef } from 'react';
export const CurrentUserContext = createContext<any>({})

export default function Store(props: any) {
	const localStorageUser : string | null = localStorage.getItem('betaUser');
    const defaultUser = { 
		userName: "Username",
		email: 'Email',
		phoneNumber: 'Phonenumber'
	}
	const currentUser = useRef<any>(localStorageUser == null ?  defaultUser : JSON.parse(localStorageUser!));

	return (
		<CurrentUserContext.Provider value={{ currentUser }}>
			{props.children}
		</CurrentUserContext.Provider>
	);
};