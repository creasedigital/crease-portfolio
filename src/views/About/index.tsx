import { Box, Heading, Text } from "@chakra-ui/react";
import { loveStatements } from "data";

const About = () => {
	return (
		<Box>
			<Heading>
				I will tell you an open secret <Box as="span">about me.</Box>I
				am all about <Box as="span">LOVE</Box>
			</Heading>
			<Box>
				{loveStatements.map((item, idx) => (
					<Box key={idx}>
						<Text>{item.love}</Text>
						<Text>{item.reason}</Text>
					</Box>
				))}
			</Box>
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
