/* eslint-disable @next/next/no-page-custom-font */
import Meta from "../../../comps/Meta";
import Top from "../../../comps/Top";
import Hosts from "../../../comps/Hosts";
import OpenInvitation from "../../../comps/OpenInvitation";
import BottomNavBar from "../../../comps/BottomNavBar";
import CustomGallery from "../../../comps/CustomGallery";
// import ReactFullpage from "@fullpage/react-fullpage";
import Wishes from "../../../comps/Wishes";
import Footer from "../../../comps/Footer";
import { useRouter } from "next/router";
import EventInfo from "../../../comps/EventInfo";
import Countdown from "../../../comps/Countdown";

import { useEffect } from "react";
import { firestoreGetDocData, firestoreUpdateDocData } from "../../../firebase";
import { useState } from "react";

const CelineRuntu = () => {
	const { to } = useRouter().query;

	const handleOnMainClick = (e) => {
		e.preventDefault();
		window.open(
			"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bayu%20-%20Egi%20Wedding&dates=20220202T060000Z/20220202T100000Z&details=Pemberkatan%20%20@GMIM%20Paulus%20Tounsaru%2014:00%20WITA,%20Resepsi%20%20@Pusgiat%20Tondano%2018:00%20WITA&location=Tondano&trp=true",
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
		const url = `https://api.whatsapp.com/send?phone=${bboldPhone}&text=undangankawanua.com%2Ffrom%2F${host}%3Ffrom%3D${name}%26bbold_token%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ`;

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

	const _BuildHead = () => (
		<Meta
			title="Celine Runtu | 6 November 2022"
			image="https://i.ibb.co/27CTnXk/IMG-8537.jpg"
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
				href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Meow+Script&display=swap"
				rel="stylesheet"
			/>
		</Meta>
	);

	const imageList = [
		// "https://i.ibb.co/hLnJqKF/IMG-8393.jpg 3648x5472",
		// "https://i.ibb.co/D1x0CVn/IMG-8427.jpg 3457x5185",
		// "https://i.ibb.co/Fxg4Q6S/IMG-8523.jpg 3000x4500",
		// "https://i.ibb.co/8Bt4RN7/IMG-8623.jpg 3585x5377",
		"https://i.ibb.co/JBvDxjV/IMG-8377.jpg 5009x3339",
		"https://i.ibb.co/6BXyCFJ/IMG-8400.jpg 3648x5472",
		"https://i.ibb.co/7jCmwpr/IMG-8454.jpg 3648x5472",
		"https://i.ibb.co/6tx2gJ7/IMG-8456.jpg 3515x5272",
		"https://i.ibb.co/1J8Z7GK/IMG-8458.jpg 3648x5472",
		"https://i.ibb.co/jfP2W7s/IMG-8461.jpg 3648x5472",
		"https://i.ibb.co/S3m37FB/IMG-8464.jpg 5472x3648",
		"https://i.ibb.co/c1BF1tv/IMG-8476-r.jpg 5472x3648",
		"https://i.ibb.co/3v98g1M/IMG-8478-r.jpg 5472x3648",
		"https://i.ibb.co/DKQdBgM/IMG-8505.jpg 3648x5472",
		"https://i.ibb.co/Qd6XGT6/IMG-8507.jpg 3648x5472",
		"https://i.ibb.co/BrzP7S5/IMG-8525.jpg 3300x4950",
		"https://i.ibb.co/27CTnXk/IMG-8537.jpg 3648x5472",
		"https://i.ibb.co/Z2X35ND/IMG-8550.jpg 3648x5472",
		"https://i.ibb.co/x2BTD4Q/IMG-8560.jpg 4935x3290",
		"https://i.ibb.co/qkQWkJm/IMG-8620.jpg 3648x5472",
		"https://i.ibb.co/Qv17SLr/IMG-8639.jpg 3300x4950",
		"https://i.ibb.co/bbFVpPd/IMG-8646.jpg 3648x5472",
		"https://i.ibb.co/H2CndjC/IMG-8648.jpg 3648x5472",
		"https://i.ibb.co/Bcy289H/IMG-8651.jpg 3537x5303",
		"https://i.ibb.co/fpnnn9N/IMG-8653.jpg 3445x5167",
		"https://i.ibb.co/28drHGs/IMG-8655.jpg 3648x5472",
		"https://i.ibb.co/VC6rr6k/IMG-8659.jpg 3648x5472",
	];

	const galleryHead = [
		{
			src: "https://i.ibb.co/Fxg4Q6S/IMG-8523.jpg",
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3000",
			oriHeight: "4500",
		},
		{
			src: "https://i.ibb.co/hLnJqKF/IMG-8393.jpg",
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/8Bt4RN7/IMG-8623.jpg",
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3585",
			oriHeight: "5377",
		},
		{
			src: "https://i.ibb.co/D1x0CVn/IMG-8427.jpg",
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "3457",
			oriHeight: "5185",
		},
	];
	const galleryBody = [
		{
			src: "https://i.ibb.co/Bcy289H/IMG-8651.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3537",
			oriHeight: "5303",
		},
		{
			src: "https://i.ibb.co/S3m37FB/IMG-8464.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "5472",
			oriHeight: "3648",
		},
		{
			src: "https://i.ibb.co/c1BF1tv/IMG-8476-r.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "5472",
			oriHeight: "3648",
		},
		{
			src: "https://i.ibb.co/Z2X35ND/IMG-8550.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/DKQdBgM/IMG-8505.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/H2CndjC/IMG-8648.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/BrzP7S5/IMG-8525.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3300",
			oriHeight: "4950",
		},
		{
			src: "https://i.ibb.co/1J8Z7GK/IMG-8458.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/Qd6XGT6/IMG-8507.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/bbFVpPd/IMG-8646.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/fpnnn9N/IMG-8653.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3445",
			oriHeight: "5167",
		},
		{
			src: "https://i.ibb.co/6tx2gJ7/IMG-8456.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3515",
			oriHeight: "5272",
		},

		{
			src: "https://i.ibb.co/x2BTD4Q/IMG-8560.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "4935",
			oriHeight: "3290",
		},
		{
			src: "https://i.ibb.co/JBvDxjV/IMG-8377.jpg",
			thumbnail: "",
			hide: true,
			oriWidth: "5009",
			oriHeight: "3339",
		},
		{
			src: "https://i.ibb.co/27CTnXk/IMG-8537.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/6BXyCFJ/IMG-8400.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},

		{
			src: "https://i.ibb.co/3v98g1M/IMG-8478-r.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "5472",
			oriHeight: "3648",
		},
		{
			src: "https://i.ibb.co/jfP2W7s/IMG-8461.jpg ",
			thumbnail: "",
			oriWidth: "3648",
			hide: true,
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/Qv17SLr/IMG-8639.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3300",
			oriHeight: "4950",
		},
		{
			src: "https://i.ibb.co/7jCmwpr/IMG-8454.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/VC6rr6k/IMG-8659.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "https://i.ibb.co/28drHGs/IMG-8655.jpg ",
			thumbnail: "",
			hide: true,
			oriWidth: "3648",
			oriHeight: "5472",
		},
		{
			src: "divider",
			divider: (
				<div
					key="divider1"
					className="col-span-full text-center text-xs font-thin "
				>
					<button
						onClick={openBboldLink}
						className="rounded-md text-gray-100 bg-purple-400 bg-opacity-75 px-4 pt-1 pb-2 mb-16"
					>
						<div className="flex gap-2 items-baseline">
							<div className="las la-gift text-lg"></div>
							<span>Gift photos with bbold™ 15% off</span>
						</div>
					</button>
				</div>
			),
		},
	];
	const galleryPhotos = [...galleryHead, ...galleryBody];

	return (
		<div>
			<_BuildHead />
			<div style={{ fontFamily: "Josefin Sans" }} className="cursor-default">
				{/* <OpenInvitation
					onClickOpenInvitation={() => {
						setIsOpen(true);
					}}
					builder={({ onClose }) => {
						return (
							<div className="">
								<div className="">
									<div
										className=""
										// style={{
										// 	backgroundImage:
										// 		"url(https://i.ibb.co/CKW5Qp7/web-top-1.png)",
										// 	backgroundRepeat: "no-repeat",
										// 	backgroundSize: "contain",
										// 	backgroundPosition: "center",
										// 	width: "600px",
										// 	height: "400px",
										// 	zIndex: "-10",
										// }}
									>
										<div
											style={{ fontFamily: "Josefin Sans" }}
											className=" text-center"
										>
											<h3 className="text-md font-thin pt-10">Save The Date</h3>
											<h3
												className="text-purple-400 text-5xl text-center pr-8"
												style={{ fontFamily: "Meow Script" }}
											>
												Bayu &amp; Egi
											</h3>
											<h3 className="text-xs text-purple-400 font-thin pb-4">
												02 Februari 2022
											</h3>

											<div className="text-md font-normal pb-2">{to}</div>

											<button
												className="shadow-md p-1 px-5 rounded-lg bg-purple-400 text-gray-100 text-xs z-10"
												onClick={() => onClose()}
											>
												<i className="las la-envelope-open text-xl"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				/> */}
				<BottomNavBar
					isOpen={isOpen}
					music={{
						artist: music[0],
						title: music[1],
						src: music[2],
					}}
					links={[]}
				/>
				<div className="mx-auto max-w-xl">
					<div className="h-screen min-h-screen section" id="top">
						<Top
							eventDate={"12/12/2022"}
							className="h-full flex items-center flex-col justify-center"
						>
							<h3
								className="text-purple-400 text-center text-6xl mb-8"
								style={{ fontFamily: "" }}
							>
								Celine Gracella Runtu
							</h3>
							<Countdown
								eventDate={"11/06/2022"}
								builder={({ timeLeft }) => (
									<div className="mb-10 font-thin">
										<div className="flex gap-5 text-sm">
											<div className="bg-transparent w-16 h-16 rounded-lg flex flex-col justify-center border-b-2 text-gray-500 bg-gray-100 bg-opacity-50 border-purple-400 items-center">
												<div>{timeLeft.days}</div>
												<div>Hari</div>
											</div>
											<div className="bg-transparent w-16 h-16 rounded-lg flex flex-col justify-center text-gray-500 bg-gray-100 bg-opacity-50  border-b-2 border-purple-400 items-center">
												<div>{timeLeft.hours}</div>
												<div>Jam</div>
											</div>
											<div className="bg-transparent w-16 h-16 rounded-lg flex flex-col justify-center text-gray-500 bg-gray-100 bg-opacity-50 border-b-2 border-purple-400 items-center">
												<div>{timeLeft.minutes}</div>
												<div>Menit</div>
											</div>
										</div>
									</div>
								)}
							/>
							<button
								className=" bg-gray-100 bg-opacity-75 border-2 border-purple-400 border-opacity-50 p-4 rounded-lg text-purple-400 font-thin z-10"
								onClick={handleOnMainClick}
							>
								Buat Pengingat
							</button>
							{/* <div className="absolute top-0 left-0 right-0 bottom-0">
								<div
									style={{
										backgroundImage:
											"url(https://i.ibb.co/27CTnXk/IMG-8537.jpg)",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										zIndex: "-50",
									}}
									className="w-full h-full opacity-50 "
								></div>
							</div>
							<div
								style={{
									backgroundImage:
										"url(https://i.ibb.co/GM66QM2/web-info-1.png)",
									backgroundRepeat: "no-repeat",
									backgroundSize: "contain",
									backgroundPosition: "center",
									width: "400px",
									height: "400px",
									zIndex: "0",
								}}
								className="absolute bottom-0 -right-8 transform translate-y-60"
							></div> */}
						</Top>
					</div>

					<div className=" section px-4 " id="event">
						<EventInfo
							builder={() => (
								<div>
									<div className="flex flex-col gap-12 text-center ">
										<div>
											<h2
												className="text-4xl"
												style={{ fontFamily: "Meow Script" }}
											>
												Ibadah Baptisan &amp; Ibadah Anak
											</h2>
											<i className="las la-glass-cheers text-7xl text-purple-400"></i>
											<div className="py-2 font-thin">
												<div>6 November 2022</div>
												<div className="font-bold text-purple-400">
													15 : 00 WITA
												</div>
												<div>
													Kel. Runtu - Mamesah Linkungan IV Kel. Rinegetan, Kec.
													Tondano Barat
												</div>
											</div>
											<button
												className=" border border-purple-400 p-1 px-3 rounded-lg text-purple-400 font-thin z-10"
												onClick={() =>
													openLink("https://goo.gl/maps/3fmTWvCvS4rdEdcJ9")
												}
											>
												<div className="flex justify-center items-center">
													<i className="las la-map-marker text-xl pr-0.5"></i>
													<span className="text-sm">Maps</span>
												</div>
											</button>
										</div>
									</div>
								</div>
							)}
						/>
						{/* <div
							style={{
								backgroundImage:
									"url(https://i.ibb.co/C24Txnp/web-event-1.png)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
								backgroundPosition: "center",
								width: "350px",
								height: "350px",
								zIndex: "-10",
							}}
							className="absolute bottom-0 -right-8 transform translate-y-32 "
						>

						</div> */}
					</div>

					<div className=" section px-4 bg-yellow-100" id="gallery">
						<CustomGallery isTitleDisabled images={galleryPhotos} />
						{/* <div
							style={{
								backgroundImage: "url(https://i.ibb.co/HdTXy1J/gallery-1.png)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
								backgroundPosition: "center",
								width: "500px",
								height: "500px",
								zIndex: "-10",
							}}
							className="absolute bottom-0 -right-14 transform translate-y-32"
						></div> */}
					</div>

					<div className=" section px-4 flex flex-col bg-blue-100" id="wishes">
						<Wishes
							inviteeName={to}
							onNewWishes={handleOnNewWishes}
							wishes={wishesData.wishes}
							enable={wishesData.enable}
						/>
					</div>

					<div className=" section px-4 bg-red-100" id="footer">
						{/* <div
							style={{
								backgroundImage: "url(https://i.ibb.co/GM66QM2/web-info-1.png)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
								backgroundPosition: "center",
								width: "400px",
								height: "400px",
								zIndex: "-10",
							}}
							className=" top-0 -left-8 transform -translate-y-96 opacity-30 rotate-180"
						/> */}

						<div className=" text-center">
							<h1 className="text-5xl font-thin">Happy Birthday</h1>
							<h1 className="text-xl mt-5 mb-5 font-thin">
								Celine Gracela Runtu
							</h1>
							<Footer isMinimalist />
						</div>

						{/* <div
							style={{
								backgroundImage:
									"url(https://i.ibb.co/QrRRRsd/info-dash-1.png)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
								backgroundPosition: "center",
								width: "500px",
								height: "800px",
								zIndex: "-20",
							}}
							className="absolute -top-10 -left-0   transform translate-x-20 opacity-75"
						/>
						<div
							style={{
								backgroundImage: "url(https://i.ibb.co/v3vtFxF/web-info-2.png)",
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
								backgroundPosition: "center",
								width: "500px",
								height: "500px",
								zIndex: "-10",
							}}
							className="absolute -bottom-10 -left-20   transform "
						/> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CelineRuntu;
