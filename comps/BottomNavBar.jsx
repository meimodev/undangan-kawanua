import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Howl } from "howler";

const BottomNavBar = ({
	artist = "",
	title = "",
	links,
	isOpen,
	className = "",
	classNamePlayer = "",
	howl,
}) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (isOpen) {
			playButton.current.click();
			return;
		}
	}, [isOpen]);

	const playButton = useRef();
	const toggleAudio = () => {
		if (isPlaying) {
			// noinspection JSCheckFunctionSignatures
			if (howl.playing()) {
				howl.pause();
			}
		} else {
			// noinspection JSCheckFunctionSignatures
			howl.play();
		}
	};

	const handleAudioPlayPause = () => {
		// console.log("clicked");
		setIsPlaying(!isPlaying);
		toggleAudio();
	};

	return (
		<div
			className={
				className ? className : "fixed -bottom-1 left-0 right-0 z-40 mx-2"
			}
		>
			<div className={isNavOpen ? "animate-fade-in-bottom" : "hidden"}>
				<div
					onClick={() => setIsNavOpen(false)}
					className=" bg-white opacity-80 z-10 h-screen"
				/>
				<div className="bg-white mb-2 border-gray-500 border rounded-md ml-auto font-light text-sm items-stretch">
					{links.map((e, index) => (
						<Link href={e.href} key={index}>
							<a className="flex py-2 px-4 justify-end">{e.title}</a>
						</Link>
					))}
				</div>
			</div>

			<div
				className={
					classNamePlayer
						? classNamePlayer
						: "border bg-white shadow-lg  rounded-md border-gray-400 font-light text-sm flex flex-row gap-2 p-1"
				}
			>
				<button ref={playButton} onClick={handleAudioPlayPause} className="">
					{isPlaying ? (
						<i className="las text-3xl text-center la-pause-circle animate-fade-in-fwd" />
					) : (
						<i className="las text-3xl text-center la-play-circle animate-fade-in-bck " />
					)}
				</button>

				<div className="flex-auto text-left text-xs self-center">
					{`${artist} ${title}`}
				</div>
				{/* <button
					onClick={() => setIsNavOpen(!isNavOpen)}
					className=" text-left p-3"
				>
					<i className="las la-bars text-3xl text-center" />
				</button> */}
			</div>
		</div>
	);
};

export default BottomNavBar;
