import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Spinner } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { theme } from "./theme/BaseTheme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<Spinner />}>
			<ChakraProvider theme={theme}>
				<ColorModeScript
					initialColorMode={theme.config.initialColorMode}
				/>
				<Global styles={GlobalStyles} />
				<App />
			</ChakraProvider>
		</Suspense>
	</React.StrictMode>,
);
