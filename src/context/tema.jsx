import React from 'react';

export const themes = {
	light: {
		foreground: '#00ee00',
		background: '#eeeeee'
	},
	dark: {
		foreground: '#00EE00',
		background: '#000000'		
	}
}

export const ThemeContext = React.createContext(
    themes.dark //default value
);
