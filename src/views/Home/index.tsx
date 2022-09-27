import {
	Box,
	Flex,
	Image,
	Text,
	useColorModeValue,
	Heading,
} from "@chakra-ui/react";
import TypeWriter from "typewriter-effect";
import CHRIS from "assets/imgs/crease.png";

const Home = () => {
	const bg = useColorModeValue("red.500", "red.200");
	const color = useColorModeValue("gray.500", "green.800");

	return (
		<Flex alignItems="center">
			<Box
				fontSize="1.6rem"
				width={{ base: "100%", md: "40rem" }}
				flex={"1"}
				p={"4rem"}
			>
				<Heading
					fontSize="6.4rem"
					lineHeight="7.2rem"
					letterSpacing="150%"
					mb={"2rem"}
				>
					Frontend Developer
				</Heading>
				<Text
					fontSize="1.6rem"
					lineHeight="2.0rem"
					letterSpacing="150%"
				>
					I consider myself an extraordinary react developer with an
					eye for a pixel-perfect and bug free production-level
					development.
				</Text>
				<Text>
					Every web application should be
					<Heading
						fontSize="2.4rem"
						lineHeight="3.2rem"
						letterSpacing="120%"
					>
						<Box color={color} fontSize="2rem" as="span">
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
					</Heading>
				</Text>
			</Box>
			<Box w="100%" h="auto" flex={"1"} border={`2px solid brandOrange`}>
				<Image src={CHRIS} alt="user image" />
			</Box>
		</Flex>
	);
};
export default Home;
