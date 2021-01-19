import React from 'react';

export const themes = {
	dark: {
		foreground: '#00ee00',
		background: '#000000',
	},
	light: {
		foreground: '#000080',
		background: '#eeee00'		
	}
}

export const ThemeContext = React.createContext(
    themes.dark //default value
);
