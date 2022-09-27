import {
	Box,
	Flex,
	Image,
	Text,
	useColorModeValue,
	useColorMode,
	Heading,
} from "@chakra-ui/react";
import TypeWriter from "typewriter-effect";
import CHRIS from "assets/imgs/crease.png";
import CHRISBW from "assets/imgs/creasebw.png";
import Colors from "constants/Colors";

const Home = () => {
	const { cLightBg, cLightBlue, cDarkBg, cDarkGrey, cBlue } = Colors;
	const color = useColorModeValue("cDarkGrey", "cBlue");
	const { colorMode } = useColorMode();

	return (
		<Flex alignItems="center" flexDir={{ base: "column", md: "row" }}>
			<Box
				fontSize="1.6rem"
				width={{ base: "100%", md: "40rem" }}
				flex={"1"}
				p={"4rem"}
			>
				<Heading
					fontSize={{ base: "4rem", sm: "6.4rem" }}
					lineHeight={{ base: "4.4rem", sm: "7.2rem" }}
					letterSpacing="150%"
					mb={{ base: "2rem", md: "3.2rem" }}
				>
					Frontend Developer
				</Heading>
				<Text
					fontSize={{ base: "1.4rem", sm: "1.6rem" }}
					lineHeight={{ base: "1.8rem", sm: "2rem" }}
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
						<Box
							// color={colorMode === "light" ? "cDarkBg" : "cBlue"}
							fontSize="2rem"
							as="span"
						>
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
			{colorMode === "dark" ? (
				<Box
					w="100%"
					h="auto"
					flex={"1"}
					bg={cLightBg}
					borderRadius="50%"
					outline={`10px solid ${cLightBlue}`}
					outlineOffset="2rem"
					clipPath={{
						base: "circle(120px at center)",
						sm: "circle(180px at center)",
						md: "circle(160px at center)",
						lg: "circle(200px at center)",
					}}
				>
					<Image src={CHRIS} alt="user image" />
				</Box>
			) : (
				<Box
					w="100%"
					h="auto"
					flex={"1"}
					bg={cDarkBg}
					borderRadius="50%"
					clipPath={{
						base: "circle(120px at center)",
						sm: "circle(180px at center)",
						md: "circle(160px at center)",
						lg: "circle(200px at center)",
					}}
				>
					<Image src={CHRISBW} alt="user image" />
				</Box>
			)}
		</Flex>
	);
};
export default Home;
