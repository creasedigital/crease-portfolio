import { useState } from "react";
import ReactDOM from "react-dom";
import { Flex, Box, Grid, Heading, useColorMode } from "@chakra-ui/react";
import { liveProjects, sideProjects } from "data";
import Colors from "constants/Colors";
import "./styles.css";
import ProjectCmp from "components/ProjectCmp";

const Projects = () => {
	const {
		cBlueHoverTrans,
		cBlue,
		cLightBg,
		cLightBlue,
		cDarkBg,
		cDarkGrey,
		cPrimary,
		cGrey,
		cOrange,
		cOrangeHover,
		OrangeHoverTrans,
		cLightOrange,
		cLightOrangeHover,
	} = Colors;
	const { colorMode } = useColorMode();

	return (
		<>
			<Box>
				<Heading
					fontSize={{ base: "2rem", sm: "2.4rem" }}
					lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
					letterSpacing="150%"
					mb={{ base: "2rem", md: "3.2rem" }}
				>
					Live Projects
				</Heading>

				<Grid templateColumns={{ lg: "repeat(2, 1fr)" }} gap="2rem">
					{liveProjects.map(
						(
							p: {
								id: number;
								img: string;
								title: string;
								desc: string;
								link: string;
								role: string | undefined;
								stack: string[];
							},
							idx: string | number,
						) => (
							<ProjectCmp
								id={p.id}
								img={p.img}
								title={p.title}
								desc={p.desc}
								link={p.link}
								role={p.role}
								stack={p.stack}
								type="live"
								key={idx}
							/>
						),
					)}
				</Grid>
			</Box>
			<>
				<Heading
					fontSize={{ base: "2rem", sm: "2.4rem" }}
					lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
					letterSpacing="150%"
					mb={{ base: "2rem", md: "3.2rem" }}
				>
					Side Projects
				</Heading>

				<Grid templateColumns={{ lg: "repeat(2, 1fr)" }} gap="2rem">
					{sideProjects.map(
						(
							q: {
								id: number;
								img: string;
								title: string;
								desc: string;
								link: string;
								stack: string[];
							},
							idx: string | number,
						) => (
							<ProjectCmp
								id={q.id}
								img={q.img}
								title={q.title}
								desc={q.desc}
								link={q.link}
								stack={q.stack}
								type="side"
								key={idx}
							/>
						),
					)}
				</Grid>
			</>
		</>
	);
};
export default Projects;
