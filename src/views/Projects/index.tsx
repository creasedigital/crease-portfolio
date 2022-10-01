import { useState } from "react";
import ReactDOM from "react-dom";
import { Flex, Box, Image, Heading, useColorMode } from "@chakra-ui/react";
import { liveProjects, sideProjects } from "data";
import ReactModal from "react-modal";
import MAINSTACK from "assets/imgs/1_mainstack.jpg";
import FIXAM from "assets/imgs/2_fixam.jpg";
import UNBOXD from "assets/imgs/3_unboxd.jpg";
import GACA from "assets/imgs/4_gaca.jpg";
import ADROSOL from "assets/imgs/s1_adrosol.jpg";
import DASHBOARD from "assets/imgs/s2_dashboard.jpg";
import CLOUDBANK from "assets/imgs/s3_cloudbank.jpg";
import GITHUBUSER from "assets/imgs/s4_github.jpg";
import Colors from "constants/Colors";
import "./styles.css";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement("#root");

const Projects = () => {
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

	let subtitle: any;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.backgroundColor = cDarkGrey;
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<Heading
				fontSize={{ base: "2rem", sm: "2.4rem" }}
				lineHeight={{ base: "2.4rem", sm: "3.2rem" }}
				letterSpacing="150%"
				mb={{ base: "2rem", md: "3.2rem" }}
			>
				Live Projects
			</Heading>
			<Flex
				alignItems="center"
				flexDir={{ base: "column", md: "row" }}
				gap="2rem"
			>
				<Box>
					<Image src={MAINSTACK} alt="project" onClick={openModal} />
				</Box>
				<Box>
					<Image src={FIXAM} alt="project" />
				</Box>
				<Box>
					<Image src={UNBOXD} alt="project" />
				</Box>
				<Box>
					<Image src={GACA} alt="project" />
				</Box>
			</Flex>
			<ReactModal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Project Modal"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
				<Box>
					<Heading color="black">Project Name</Heading>
				</Box>
			</ReactModal>
		</>
	);
};
export default Projects;
