import { Box, Heading, Image, Text, Flex, Badge } from "@chakra-ui/react";
import { useState } from "react";
import ReactModal from "react-modal";
import Button from "./Button";

interface IProjectCmp {
	id: number;
	img: string;
	title: string;
	desc: string;
	role?: string;
	stack: string[];
	link: string;
	key: string | number;
	type?: string;
	openModal?: () => void;
}

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

const ProjectCmp: React.FC<IProjectCmp> = ({
	id,
	img,
	title,
	link,
	desc,
	role,
	stack,
	type,
	key,
	// openModal,
}) => {
	console.log({
		id,
		img,
		title,
		link,
		desc,
		role,
		stack,
		type,
		key,
		openModal,
	});

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
			<Box key={key}>
				<Image src={img} alt="project" onClick={openModal} />
				<Box>
					<Heading>{title}</Heading>
					<Text>{desc}</Text>
				</Box>
			</Box>
			<ReactModal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Project Modal"
			>
				<Box>
					<Heading>{title}</Heading>
					<Text>{desc}</Text>
					{role && <Text>{role}</Text>}
					<Flex justifyContent="spaceBetween">
						<Box>
							{stack.map((data) => (
								<Badge>{data}</Badge>
							))}
						</Box>
						<Button>
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Project
							</a>
						</Button>
					</Flex>
				</Box>
			</ReactModal>
		</>
	);
};
export default ProjectCmp;
