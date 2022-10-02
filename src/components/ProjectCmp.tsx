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
		margin: "0  auto",
		transform: "translate(-50%, -50%)",
		width: "60%",
	},
};

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

	let subtitle: any;

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.backgroundColor = "blue";
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
				// contentLabel="Example Modal"
			>
				<Box>
					<Image
						src={img}
						alt="project"
						boxSize="20rem"
						objectFit={"contain"}
					/>
					<Text
						fontSize="3.2rem"
						textTransform="uppercase"
						fontWeight="500"
						letterSpacing="150%"
						color="green"
					>
						{title}
					</Text>
					<Text color="black">{desc}</Text>
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
