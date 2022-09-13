import { Box } from "@chakra-ui/react";
import Navbar from "layouts/Navbar";
import ColorToggler from "../../components/ColorToggler";

const Home = () => {
	return (
		<Box minHeight={"100vh"}>
			<ColorToggler />
			<Navbar />
			Home
		</Box>
	);
};
export default Home;
