import { extendTheme, type ThemeConfig, theme as baseTheme } from "@chakra-ui/react";
import { ButtonTheme as Button } from "./Components";


const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
  }

export const theme = extendTheme({
	config,
	colors: {
		brandOrange: "#FF5403",
		primaryBlack: "#131316",
		secondaryRed: "#E11900",
		textPrimary: {
			100: "#4D5155",
		},
		brandGray: {
			100: "#E5E8F0",
			200: "#D6D9E0",
			300: "#91989E",
			400: "#4D5760",
		},
		blackGray: "#1F2A35",
	},
	fonts: {
		heading: `Söhne Breit, ${baseTheme.fonts?.heading}`,
		body: `Söhne Breit, ${baseTheme.fonts?.body}`,
	},
	components: {
		Button,
	},
});
