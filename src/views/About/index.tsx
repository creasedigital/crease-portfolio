import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
	return (
		<Box>
			<Heading>
				I will tell you an open secret <Box as="span">about me.</Box>I
				am all about <Box as="span">LOVE</Box>
			</Heading>
			<Box></Box>
			<Heading>
				What do you <Box as="span">LOVE?</Box>
			</Heading>
			<Box>
				<Text>Send me a mail</Text>
				<Text>ojorechris@gmail.com</Text>
				<Text>I'd love to work with you!</Text>
			</Box>
		</Box>
	);
};
export default About;
