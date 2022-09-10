import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import Home from "./views/Home";

function App() {
	return (
		<Box>
			<BrowserRouter>
				<Routes>
					<Route path={ROUTES.home} element={<Home />} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
}

export default App;
