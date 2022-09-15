import { Box, Text } from "@chakra-ui/react";
import TypeWriter from "typewriter-effect";

const Home = () => {
	return (
		<Box fontSize="1.6rem">
			<Text>
				I consider myself an extraordinary react developer with an eye
				for a pixel-perfect and bug free production-level development.
			</Text>
			<Text>
				Every web application should be
				<Box color="red.500" fontSize="2rem" as="span">
					<TypeWriter
						options={{
							strings: [
								"functional,",
								"aesthetically pleasing,",
								"responsive,",
								"and optimized for performance.",
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</Box>
			</Text>
		</Box>
	);
};
export default Home;
