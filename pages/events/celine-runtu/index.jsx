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
				href="https://fonts.googleapis.com/css2?family=Montez&family=Zen+Maru+Gothic:wght@400;700&display=swap"
				rel="stylesheet"
			/>
		</Meta>
	);

	const primaryFontFamily = { fontFamily: "Montez" };
	const secondaryFontFamily = { fontFamily: "Zen Maru Gothic" };

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
						className="rounded-md text-gray-100 bg-purple-400 bg-opacity-75 px-4 pt-1 pb-2 mb-16"
					>
						<div className="flex gap-2 items-baseline">
							<div className="las la-gift text-lg"></div>
							<span>Gift photos with bbold™ 10% off</span>
						</div>
					</button>
				</div>
			),
		},
	];

	const galleryPhotos = [...galleryHead, ...galleryBody, ...bboldButton];

	return (
		<div>
			<_BuildHead />
			<div
				style={secondaryFontFamily}
				className="cursor-default overflow-hidden"
			>
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
				<div className="max-w-lg mx-auto">
					<div className="min-h-screen h-screen section " id="top">
						<Top
							eventDate={"12/12/2022"}
							className="h-full flex items-center flex-col justify-center"
						>
							<h3
								className="text-rose-400 text-center text-2xl mb-4"
								style={primaryFontFamily}
							>
								Ibadah Baptisan <br /> <span className="text-lg">dan</span>{" "}
								<br /> Ulang Tahun
							</h3>
							<h3
								className="text-rose-400 text-center text-4xl mb-8 font-bold"
								style={primaryFontFamily}
							>
								Celine Gracella Runtu
							</h3>
							<div className="bg-[url('/img/test/top/photo.png')]  w-24 h-36 bg-cover "></div>

							{/* <Countdown
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
								className=" bg-gray-100/75 border-2 border-purple-400 border-opacity-50 p-4 rounded-lg text-purple-400 font-thin z-10"
								onClick={handleOnMainClick}
							>
								Buat Pengingat
							</button> */}

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

					<div className="section px-4 " id="event">
						<EventInfo
							builder={() => (
								<div>
									<div className="flex flex-col gap-12 text-center ">
										<div>
											<h2 className="text-4xl" style={primaryFontFamily}>
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
				{/* <BottomNavBar
					isOpen={isOpen}
					music={{
						artist: music[0],
						title: music[1],
						src: music[2],
					}}
					links={[]}
				/> */}
			</div>
		</div>
	);
};

export default CelineRuntu;
