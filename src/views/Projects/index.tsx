import { Flex, Box, Image, Heading } from "@chakra-ui/react";

const Projects = () => {
	return (
		<Flex alignItems="center" flexDir={{ base: "column", md: "row" }}>
			<Heading
				fontSize={{ base: "2rem", sm: "2.4rem" }}
				lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
			>
				Live Projects
			</Heading>
			<Box>{}</Box>
		</Flex>
	);
};
export default Projects;
