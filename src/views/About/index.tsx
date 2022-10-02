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
			<Heading
				fontSize={{ base: "2rem", sm: "2.4rem" }}
				lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
			>
				Let's Talk?
			</Heading>
			<Box
				mx="auto"
				fontSize="2rem"
				p={2}
				mb="4rem"
				bg={cLightBlue}
				display="inline-block"
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
					<Box key={idx} mb="2rem">
						<Text
							fontSize={{ base: "1.6rem", sm: "1.8rem" }}
							lineHeight={{ base: "2.4rem", sm: "2.6rem" }}
							letterSpacing="150%"
							data-aos="fade-right"
						>
							{item.love}
						</Text>
						<Text
							fontSize={{ base: "1.2rem", sm: "1.4rem" }}
							fontWeight="300"
							lineHeight={{ base: "1.8rem", sm: "2.2rem" }}
							letterSpacing="150%"
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
				fontSize={{ base: "3.2rem", sm: "4.4rem" }}
				lineHeight={{ base: "3.6rem", sm: "5rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
				textAlign="center"
			>
				Hire Me?
				<Box
					color={colorMode === "dark" ? cLightBlue : cBlue}
					as="span"
				>
					💙
				</Box>
			</Heading>
			<Box>
				<Text
					fontSize={{ base: "2rem", sm: "2.4rem" }}
					lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
					letterSpacing="150%"
					textAlign="center"
					mb="1rem"
				>
					Send me a mail 👇
				</Text>
				<Text
					fontSize={{ base: "2rem", sm: "2.4rem" }}
					lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
					letterSpacing="150%"
					textAlign="center"
					mb="1rem"
				>
					ojorechris@gmail.com 💬
				</Text>
			</Box>
		</Box>
	);
};
export default About;
