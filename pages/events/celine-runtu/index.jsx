/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import Meta from "../../../comps/Meta";
import Top from "../../../comps/Top";
import OpenInvitation from "../../../comps/OpenInvitation";
import BottomNavBar from "../../../comps/BottomNavBar";
import CustomGallery from "../../../comps/CustomGallery";
import Wishes from "../../../comps/Wishes";
import Footer from "../../../comps/Footer";
import { useRouter } from "next/router";
import EventInfo from "../../../comps/EventInfo";
import Countdown from "../../../comps/Countdown";

import { firestoreGetDocData, firestoreUpdateDocData } from "../../../firebase";
import { useState, useRef, useEffect } from "react";

import { Fade } from "react-awesome-reveal";
import { Howl } from "howler";

const CelineRuntu = () => {
	const { to } = useRouter().query;

	const handleOnMainClick = (e) => {
		e.preventDefault();
		window.open(
			"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Celine%20Runtu%20Ibadah%20Baptis%20dan%20Ibadah%20Anak&dates=20221106/20221106&details=Ibadah%20Baptisan%20Pukul%2012:00,%20Ibadah%20Anak%20Pukul%2015:00&location=1.300046,%20124.906259&trp=true",
			"_blank"
		);
	};

	const openLink = (url) => {
		window.open(url, "_blank");
	};

	const openBboldLink = () => {
		const bboldPhone = "+6285756681077";
		const host = "celine-runtu-birthday";
		const name = to;
		const url = `https://api.whatsapp.com/send?phone=${bboldPhone}&text=undangankawanua.com%2Ffrom%2F${host}%3Ffrom%3D${name}%26bbold_token%3DeyJe45JiIiaWFE2MjM5MDIyfQ`;

		openLink(url);
	};

	const handleOnNewWishes = async (wishes) => {
		const envHost = "celine-runtu-birthday";
		const updateResult = await firestoreUpdateDocData(
			`${envHost}/wishes`,
			"wishes",
			wishes
		);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [wishesData, setWishesData] = useState({
		wishes: [],
		enable: true,
	});
	const [music, setMusic] = useState([]);
	const [photos, setPhotos] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const fetchData = async () => {
		const envHost = "celine-runtu-birthday";
		const invitationData = await firestoreGetDocData(`${envHost}/invitation`);
		const photosData = await firestoreGetDocData(`${envHost}/photos`);
		const _wishesData = await firestoreGetDocData(`${envHost}/wishes`);

		setMusic(invitationData.music);
		// noinspection JSCheckFunctionSignatures
		setWishesData(_wishesData);
	};

	const imageList = [
		"https://i.ibb.co/1KLXNLH/celine-runtu-1.jpg",
		"https://i.ibb.co/NNCBTrL/celine-runtu-2.jpg",
		"https://i.ibb.co/fvdRh1D/celine-runtu-3.jpg",
		"https://i.ibb.co/ZxWBC0m/celine-runtu-4.jpg",
		"https://i.ibb.co/4PzkLBR/celine-runtu-5.jpg",
		"https://i.ibb.co/VmX5Lxx/celine-runtu-6.jpg",
		"https://i.ibb.co/Bw91XcM/celine-runtu-7.jpg",
		"https://i.ibb.co/n68LLxx/celine-runtu-8.jpg",
		"https://i.ibb.co/2S1p0XQ/celine-runtu-9.jpg",
		"https://i.ibb.co/f0WY2Zy/celine-runtu-10.jpg",
		"https://i.ibb.co/XSxTbQj/celine-runtu-11.jpg",
		"https://i.ibb.co/Q9MKYcF/celine-runtu-12.jpg",
		"https://i.ibb.co/2PRJr4m/celine-runtu-13.jpg",
		"https://i.ibb.co/c1Bfm63/celine-runtu-14.jpg",
		"https://i.ibb.co/k2s4QN8/celine-runtu-15.jpg",
		"https://i.ibb.co/ZJ3FNDc/celine-runtu-16.jpg",
		"https://i.ibb.co/RQCCtN6/celine-runtu-17.jpg",
	];

	const _BuildHead = () => (
		<Meta
			title="Celine Runtu | 6 November 2022"
			image={imageList[Math.floor(Math.random() * imageList.length)]}
		>
			<link
				rel="stylesheet"
				href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin={"true"}
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Montez&family=Parisienne&family=Zen+Maru+Gothic:wght@400;700&display=swap"
				rel="stylesheet"
			/>
		</Meta>
	);

	const primaryFontFamily = { fontFamily: "Montez" };
	const secondaryFontFamily = { fontFamily: "Zen Maru Gothic" };
	const thirdFontFamily = { fontFamily: "Parisienne" };

	const galleryHead = [
		{
			src: imageList[0],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3024",
			oriHeight: "4032",
		},
		{
			src: imageList[12],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3024",
			oriHeight: "4032",
		},
		{
			src: imageList[1],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3024",
			oriHeight: "4032",
		},
		{
			src: imageList[3],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3024",
			oriHeight: "4032",
		},
	];
	const galleryBody = imageList.map((e) => ({
		src: e,
		thumbnail: "",
		hide: true,
		oriWidth: "3024",
		oriHeight: "4032",
	}));

	const bboldButton = [
		{
			src: "divider",
			divider: (
				<div
					key="divider1"
					className="col-span-full text-center text-xs font-thin "
				>
					<button
						onClick={openBboldLink}
						className="rounded-md text-gray-100 bg-rose-400 bg-opacity-75 px-4 pt-1 pb-2 mb-16 shadow-md"
					>
						<div className="flex gap-2 items-baseline">
							<div className="las la-gift text-xl"></div>
							<span>Gift bbold™ 10% off</span>
						</div>
					</button>
				</div>
			),
		},
	];

	const EventsSection = ({
		title,
		date,
		time,
		location,
		mapLink,
		isLeft = false,
	}) => (
		<div className="flex flex-col w-full z-10">
			{isLeft ? (
				<img
					src="https://i.ibb.co/48p3QdF/photo-left.png"
					alt="photo-left"
					className="mb-16"
				/>
			) : null}
			<div className="text-gray-500 px-1">
				<h2
					className="font-bold text-2xl text-rose-400"
					style={primaryFontFamily}
				>
					{title}
				</h2>
				<div className="text-xs pb-2">
					<div>
						{date} {" | "}
						<span className="font-bold text-rose-400">{time}</span>
					</div>
					<div>{location}</div>
				</div>
				<button
					className="border bg-rose-400 p-1.5 px-3 rounded-lg text-white font-thin z-10 shadow-lg"
					onClick={() => openLink(mapLink)}
				>
					<div className="flex justify-center items-center">
						<i className="las la-map-marker text-sm pr-0.5"></i>
						<span className="text-xs">Maps</span>
					</div>
				</button>
			</div>
			{isLeft ? null : (
				<img
					src="https://i.ibb.co/qmGvjWm/photo-right.png"
					alt="photo-right"
					className="mt-16"
				/>
			)}
		</div>
	);

	const galleryPhotos = [...galleryHead, ...galleryBody, ...bboldButton];

	const howl = new Howl({
		src: [music[2]],
		html5: true,
		preload: true,
		loop: true,
		// autoplay: true,
	});
	return (
		<div>
			<_BuildHead />
			<div
				style={secondaryFontFamily}
				className="cursor-default scroll-smooth bg-[url(https://i.ibb.co/M1jwdK1/background.png)] bg-repeat-y bg-sky-100/75 lg:bg-cover "
			>
				<OpenInvitation
					onClickOpenInvitation={() => {
						setIsOpen(true);
					}}
					builder={({ onClose }) => {
						return (
							<div className="text-center h-screen flex flex-col justify-center items-center bg-[url(https://i.ibb.co/M1jwdK1/background.png)] bg-cover bg-sky-100/75 relative">
								<img
									className="absolute z-10 sm:max-w-lg"
									src="https://i.ibb.co/RQDZ4Bf/event-butterfly.png"
									alt="frame"
								/>
								<div className="z-50">
									<div
										style={primaryFontFamily}
										className="text-4xl font-thin text-rose-400 flex flex-col pb-2 z-20"
									>
										<div>Ibadah Baptisan</div>
										<div className="">&</div>
										<div>Ibadah Anak</div>
									</div>

									<div className="text-xl text-gray-600 font-thin">
										Celine Gracela Runtu
									</div>

									<div
										className="my-6 text-gray-400"
										style={secondaryFontFamily}
									>
										<div className="text-sm">Kepada Yth:</div>
										<div
											className="text-5xl text-rose-400 pt-1 font-bold"
											style={primaryFontFamily}
										>
											{to}
										</div>
									</div>

									<button
										className="shadow-xl px-4 py-2 rounded-lg bg-rose-400 text-gray-100 font-bold z-10 animate-pulse"
										onClick={() => onClose()}
									>
										<i className="las la-envelope-open text-2xl font-bold"></i>
									</button>
								</div>
							</div>
						);
					}}
				/>
				<div className="max-w-lg mx-auto">
					<div className="h-screen section " id="top">
						<Top
							eventDate={"12/12/2022"}
							className="h-full flex items-center flex-col justify-center relative"
						>
							<img
								className="absolute z-10 px-2 sm:p-20"
								src="https://i.ibb.co/YdB9nzr/frame.png"
								alt="frame"
							/>
							<img
								className="absolute z-20  sm:p-24"
								src="https://i.ibb.co/3ND7Jfy/top-butterfly.png"
								alt="frame butterfly"
							/>
							<Fade cascade>
								<div
									className="text-rose-400 text-center text-2xl font-thin "
									style={thirdFontFamily}
								>
									<div>Ibadah Baptisan</div>
									<div className="text-lg">dan</div>
									<div> Ibadah Anak</div>
								</div>
								<img
									src="https://i.ibb.co/tZ01HTW/divider.png"
									alt="divider"
									className="w-44 py-2"
								/>
								<h3
									className="text-rose-400 text-center text-[2.5rem] mb-4 font-bold drop-shadow-[0_3px_0.5px_rgba(254,205,211,1)] "
									style={primaryFontFamily}
								>
									Celine Gracella Runtu
								</h3>
								<img
									src="https://i.ibb.co/vj0yc3j/photo.png"
									alt="photo"
									className="h-44"
								/>
							</Fade>
						</Top>
					</div>

					<div className="section my-4 sm:mt-10" id="countdown">
						<div className="flex flex-col items-center">
							<Fade cascade>
								<Countdown
									eventDate={"11/06/2022"}
									builder={({ timeLeft }) => (
										<div className="mb-5 font-thin">
											<div className="flex text-sm text-gray-500">
												<div className="w-16 h-16 flex flex-col justify-center border-x-rose-400 border-x-[0.5px] items-center">
													<div className="font-bold">{timeLeft.days}</div>
													<div className="text-xs">HARI</div>
												</div>
												<div className="w-16 h-16 flex flex-col justify-center border-x-rose-400  items-center">
													<div className="font-bold">{timeLeft.hours}</div>
													<div className="text-xs">JAM</div>
												</div>
												<div className="w-16 h-16 flex flex-col justify-center border-x-rose-400 border-x-[0.5px] items-center">
													<div className="font-bold">{timeLeft.minutes}</div>
													<div className="text-xs">MENIT</div>
												</div>
											</div>
										</div>
									)}
								/>
								<button
									className="bg-rose-400 px-4 py-2 rounded-lg text-white text-xs shadow-lg"
									onClick={handleOnMainClick}
								>
									<div className="flex justify-center items-center">
										<i className="las la-bell text-xl pr-0.5"></i>
										<span className="text-xs">Buat Pengingat</span>
									</div>
								</button>
							</Fade>
						</div>
					</div>

					<div className="h-screen section sm:mt-10" id="event">
						<EventInfo
							builder={() => (
								<div className="h-full flex items-center justify-center text-center relative">
									<Fade cascade>
										<img
											className="absolute z-0 p-10"
											src="https://i.ibb.co/RQDZ4Bf/event-butterfly.png"
											alt="frame"
										/>
										<EventsSection
											title="Ibadah Anak"
											date="6 NOV 2022"
											time="PUKUL 15:00 WITA"
											location="KEL. RUNTU - MAMESAH, LINKUNGAN IV"
											mapLink="https://goo.gl/maps/7e321rNrrrpToLmC6"
											isLeft
										/>
										<EventsSection
											title="Ibadah Baptisan"
											date="6 NOV 2022"
											time="PUKUL 12:00 WITA"
											location="KEL. RUNTU - MAMESAH, LINKUNGAN IV"
											mapLink="https://goo.gl/maps/7e321rNrrrpToLmC6"
										/>
									</Fade>
								</div>
							)}
						/>
					</div>

					<div className="section my-6" id="quote">
						<div className="text-center">
							<Fade cascade>
								<div
									className="text-rose-400 text-2xl"
									style={primaryFontFamily}
								>
									Mazmur 91 : 11
								</div>
								<div className="px-4 py-1 text-gray-500 text-sm italic">
									&quot;Sebab malaikat-malaikat-Nya akan diperintahkan-Nya
									kepadamu untuk menjaga engkau di segala jalanmu.&quot;
								</div>
							</Fade>
						</div>
					</div>

					<Fade cascade>
						<div className=" section px-4 sm:px-20 sm:mt-10 " id="gallery">
							<div className="relative h-full">
								<img
									className="absolute -z-10 p-0 -left-24 -top-10"
									src="https://i.ibb.co/WDKLzpZ/grass-1.png"
									alt="grass 1"
								/>
								<CustomGallery
									images={galleryPhotos}
									title={
										<div
											className="text-6xl py-4 text-center text-rose-400"
											style={primaryFontFamily}
										>
											Gallery
										</div>
									}
								/>
							</div>
						</div>
					</Fade>

					<Fade cascade>
						<div
							className="section px-4 flex flex-col mt-10 sm:mt-16"
							id="wishes"
						>
							<div className="relative">
								<img
									className="absolute -z-10 p-0  -top-10"
									src="https://i.ibb.co/3ND7Jfy/top-butterfly.png"
									alt="butterfly"
								/>
								<Wishes
									inviteeName={to}
									onNewWishes={handleOnNewWishes}
									wishes={wishesData.wishes}
									enable={wishesData.enable}
									sendButtonClassName=" text-white bg-rose-400"
									textAreaClassName="focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"
									wishesBoxClassName="border-b-[1px] border-rose-400 p-3 rounded-md my-4"
									title={
										<div
											className="text-6xl pt-4 text-center text-rose-400"
											style={primaryFontFamily}
										>
											Wishes
										</div>
									}
								/>
							</div>
						</div>
					</Fade>

					<div
						className="section px-4 bg-gradient-to-b from-transparent via-rose-300/50 to-rose-300/75"
						id="footer"
					>
						<div className="h-full flex flex-col justify-center text-center text-gray-500 pb-10">
							<Fade cascade>
								<h1
									className="text-4xl text-rose-400 font-bold"
									style={primaryFontFamily}
								>
									Celine Gracela Runtu
								</h1>
								<h1 className="text-xl mt-4" style={secondaryFontFamily}>
									Blessed Parents
								</h1>
								<h1
									className="text-4xl text-rose-400 font-thin"
									style={primaryFontFamily}
								>
									Randy & Gisela
								</h1>

								<img
									className="py-2 pt-4"
									src="https://i.ibb.co/ggynKn3/parents.jpg"
									alt="parents"
								/>

								<Footer isMinimalist />
							</Fade>
						</div>
					</div>
				</div>
				<BottomNavBar
					isOpen={isOpen}
					artist={""}
					title={""}
					howl={howl}
					links={[]}
					className="fixed -bottom-1 right-0 z-40 mx-2"
					classNamePlayer="bg-rose-400 p-2 flex gap-1 rounded-xl mb-4 text-gray-100 "
				/>
			</div>
		</div>
	);
};

export default CelineRuntu;
