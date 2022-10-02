import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import Colors from "constants/Colors";
import { loveStatements } from "data";
import TypeWriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	const {
		cLightBg,
		cLightBlue,
		cDarkBg,
		cDarkGrey,
		cBlue,
		cGreen,
		cLightGreen,
	} = Colors;
	const { colorMode } = useColorMode();

	return (
		<Box p={"4rem"}>
			<Box
				// color={colorMode === "light" ? "cDarkBg" : "cBlue"}
				fontSize="2rem"
				as="span"
			>
				<TypeWriter
					options={{
						strings: [
							"I will tell you an open secret",
							"about me.",
							"I am all about",
							"💙",
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</Box>

			<Box>
				{loveStatements.map((item, idx) => (
					<Box key={idx}>
						<Text
							fontSize={{ base: "2rem", sm: "2.4rem" }}
							lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
							letterSpacing="150%"
							mb={{ base: "2rem", md: "3.2rem" }}
							data-aos="fade-right"
						>
							{item.love}
						</Text>
						<Text
							fontSize={{ base: "2rem", sm: "2.4rem" }}
							lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
							letterSpacing="150%"
							mb={{ base: "2rem", md: "3.2rem" }}
							data-aos="fade-right"
							data-aos-offset="300"
							data-aos-easing="ease-in-sine"
						>
							{item.reason}
						</Text>
					</Box>
				))}
			</Box>
			<Heading
				fontSize={{ base: "4rem", sm: "6.4rem" }}
				lineHeight={{ base: "4.4rem", sm: "7.2rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
				width="100%"
				maxWidth="1000rem"
				textAlign="center"
			>
				What do you{" "}
				<Box
					color={colorMode === "dark" ? cLightBlue : cBlue}
					as="span"
				>
					LOVE💙?
				</Box>
			</Heading>
			<Box>
				<Text>Send me a mail</Text>
				<Text>ojorechris@gmail.com</Text>
				<Text>I'd love💙 to work with you!</Text>
			</Box>
		</Box>
	);
};
export default About;
