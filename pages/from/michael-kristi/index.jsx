/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */

import Meta from "../../../comps/Meta";

import OpenInvitation from "../../../comps/OpenInvitation";
import BottomNavBar from "../../../comps/BottomNavBar";
import CustomGallery from "../../../comps/CustomGallery";
import Wishes from "../../../comps/Wishes";
import Footer from "../../../comps/Footer";
import EventInfo from "../../../comps/EventInfo";
import Countdown from "../../../comps/Countdown";

import { useRouter } from "next/router";

import { firestoreGetDocData, firestoreUpdateDocData } from "../../../firebase";
import { useState, useEffect } from "react";

import { Fade } from "react-awesome-reveal";
import { Howl } from "howler";

const MichaelKristi = () => {
	const { to } = useRouter().query;
	const envHost = "michael-kristi-wedding";

	const handleOnMainClick = (e) => {
		e.preventDefault();

		openLink(
			`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230323%2F20230324&details=https%3A%2F%2Fwww.undangankawanua.com%2Ffrom%2Fmichael-kristi%3Fto%3D${to}&location=Tounsewer&text=Wedding%20Michael%20%26%20Kristi`
		);
	};

	let scrollerID;
	let shouldStopScrolling;
	const startScroll = () => {
		let id = setInterval(function () {
			window.scrollBy(0, 1);
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				// end of page?
				stopScroll();
			}
		}, 10);

		document.body.addEventListener(
			"mousemove",
			() => {
				stopScroll();
			},
			true
		);
		// window.onscroll = () => {
		// 	if (shouldStopScrolling) {
		// 		stopScroll();
		// 	} else {
		// 		shouldStopScrolling = false;
		// 	}
		// };

		return id;
	};

	const stopScroll = () => {
		clearInterval(scrollerID);
	};

	const openLink = (url) => {
		window.open(url, "_blank");
	};

	const openBboldLink = () => {
		const bboldPhone = "+6285756681077";
		const name = to;
		const url = `https://api.whatsapp.com/send?phone=${bboldPhone}&text=undangankawanua.com%2Ffrom%2F${envHost}%3Ffrom%3D${name}%26bbold_token%3DeyJe45JiIiaWFE2MjM5MDIyfQ`;

		openLink(url);
	};

	const handleOnNewWishes = async (wishes) => {
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
		const envHost = "michael-kristi-wedding";
		const invitationData = await firestoreGetDocData(`${envHost}/invitation`);
		const photosData = await firestoreGetDocData(`${envHost}/photos`);
		const _wishesData = await firestoreGetDocData(`${envHost}/wishes`);

		setMusic(invitationData.music);
		// noinspection JSCheckFunctionSignatures
		setWishesData(_wishesData);
	};

	const imageList = [
		"https://i.ibb.co/vHvqHq8/DSC-0018-min.jpg",
		"https://i.ibb.co/X4v6Y2q/DSC-0082-min.jpg",
		"https://i.ibb.co/3dq692y/DSC-0195-min.jpg",
		"https://i.ibb.co/PrBpQtw/DSC-0452-min.jpg",
		"https://i.ibb.co/BL5MdcJ/DSC-0614-min.jpg",
		"https://i.ibb.co/WndczLK/DSC-0750-min.jpg",
	];

	const _BuildHead = () => (
		<Meta title="Michael & Kristi | 23 Maret 2023" image={imageList[0]}>
			<link
				rel="stylesheet"
				href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Montez&display=swap"
				rel="stylesheet"
			/>
		</Meta>
	);

	const primaryFontFamily = { fontFamily: "Montez" };
	const secondaryFontFamily = { fontFamily: "Josefin Sans" };
	const thirdFontFamily = { fontFamily: "Parisienne" };

	const galleryHead = [
		{
			src: imageList[0],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "2848",
			oriHeight: "4288",
		},
		{
			src: imageList[1],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "2848",
			oriHeight: "4288",
		},
		{
			src: imageList[2],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "2848",
			oriHeight: "4288",
		},
		{
			src: imageList[3],
			thumbnail: "",
			thumbnailHeight: "128",
			oriWidth: "2848",
			oriHeight: "4288",
		},
	];
	const galleryBody = [
		{
			src: imageList[4],
			thumbnail: "",
			hide: true,
			thumbnailHeight: "128",
			oriWidth: "4288",
			oriHeight: "2848",
		},
		{
			src: imageList[5],
			thumbnail: "",
			hide: true,
			thumbnailHeight: "128",
			oriWidth: "4288",
			oriHeight: "2848",
		},
	];

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
		<div className="flex w-full z-10 gap-4 ">
			{isLeft ? (
				<i className="las la-glass-cheers text-6xl self-center"></i>
			) : null}
			<div className="text-gray-400 px-1">
				<h2
					className="font-bold text-3xl pb-2 text-rose-400"
					style={primaryFontFamily}
				>
					{title}
				</h2>
				<div className="text-sm pb-2">
					<div>
						{date}
						<span className="font-bold text-rose-400 px-1">{time}</span>
					</div>
					<div className="">{location}</div>
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
			{isLeft ? null : <i className="las la-church text-6xl self-center"></i>}
		</div>
	);

	const HostsSection = ({ title, subTitle, caption, isLeft = false }) => (
		<div className="flex gap-5">
			{isLeft ? (
				<img
					src="https://i.ibb.co/Nnvx5pL/photo-2.png"
					alt="groom-close-up"
					className="h-28 self-center"
				/>
			) : null}

			<div
				className={
					"flex flex-col flex-1 " + (isLeft ? "text-left" : "text-right")
				}
			>
				<div
					style={primaryFontFamily}
					className="text-3xl font-bold text-rose-400 pb-1"
				>
					{title}
				</div>
				<div className="text-xs font-thin italic pb-1">{subTitle}</div>
				<div className="text-xs font-thin">{caption}</div>
			</div>
			{isLeft ? null : (
				<img
					src="https://i.ibb.co/v185W19/photo-1.png"
					alt="groom-close-up"
					className="h-28  self-center"
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
				className="cursor-default scroll-smooth bg-[url(https://i.ibb.co/FbJT13r/BG.jpg)] bg-repeat-y  overflow-hidden"
			>
				<OpenInvitation
					onClickOpenInvitation={() => {
						setIsOpen(true);
						setTimeout(() => {
							scrollerID = startScroll();
						}, 800);
					}}
					builder={({ onClose }) => {
						return (
							<div className="text-center h-screen flex flex-col overflow-hidden justify-center items-center bg-cover bg-[url(https://i.ibb.co/FbJT13r/BG.jpg)] relative">
								<img
									className="absolute z-10 -left-16 bottom-0  h-80"
									src="https://i.ibb.co/ZVZWg4J/f-7.png"
									alt="frame"
								/>
								<img
									className="absolute z-10 right-0 bottom-0  h-64"
									src="https://i.ibb.co/C2X0cMc/f-8.png"
									alt="frame"
								/>
								<img
									className="absolute z-10 -right-10 top-0  h-80"
									src="https://i.ibb.co/VvQ17Tz/f-5.png"
									alt="frame"
								/>
								<div className="z-50">
									<div className="text-3xl text-gray-600 font-thin pb-6">
										Save The Date
									</div>

									<div
										style={primaryFontFamily}
										className="text-7xl font-bold text-rose-400 flex flex-col z-20"
									>
										<div>Michael</div>
										<div>&</div>
										<div>Kristi</div>
									</div>

									<div
										className="my-6 pt-6 text-gray-400"
										style={secondaryFontFamily}
									>
										<div className="text-sm">Kepada Yth</div>
										<div
											className="text-3xl text-rose-400 pt-3 font-thin"
											style={primaryFontFamily}
										>
											{to ? to.toString().replaceAll("_", " ") : null}
										</div>
									</div>

									<button
										aria-label="close envelope button"
										className="shadow-xl px-3 py-1 rounded-lg bg-rose-400 text-gray-100 font-bold z-10 animate-pulse"
										onClick={() => onClose()}
									>
										<i className="las la-envelope-open text-lg font-bold"></i>
									</button>
								</div>
							</div>
						);
					}}
				/>
				<div className="max-w-lg mx-auto" id="main">
					<div className="section mb-32 px-4" id="countdown">
						<div className="flex flex-col items-center">
							<div className="section relative bg-[url(https://i.ibb.co/vHvqHq8/DSC-0018-min.jpg)] h-screen w-screen bg-cover bg-center bg-no-repeat">
								<div className="absolute bottom-0 left-0 right-0 h-3/4 w-full bg-gradient-to-b from-transparent via-gray-300/20 to-white/100" />

								<div
									style={primaryFontFamily}
									className="absolute top-8 w-full text-5xl text-white flex flex-col items-center"
								>
									Michael & Kristi
								</div>
								<div className="absolute bottom-0 w-full flex flex-col items-center h-1/3">
									<Countdown
										eventDate={"03/23/2023"}
										builder={({ timeLeft }) => (
											<div
												style={secondaryFontFamily}
												className="mb-5 font-thin"
											>
												<div className="flex text-sm text-gray-500">
													<div className="w-16 h-16 flex flex-col justify-center border-x-rose-300 border-x-[1px] items-center">
														<div className="font-bold text-md">
															{timeLeft.days}
														</div>
														<div className="text-xs">hari</div>
													</div>
													<div className="w-16 h-16 flex flex-col justify-center border-x-rose-300 border-x-[1px] items-center">
														<div className="font-bold text-md">
															{timeLeft.hours}
														</div>
														<div className="text-xs">jam</div>
													</div>
													<div className="w-16 h-16 flex flex-col justify-center border-x-rose-300 border-x-[1px] items-center">
														<div className="font-bold text-md">
															{timeLeft.minutes}
														</div>
														<div className="text-xs">menit</div>
													</div>
												</div>
											</div>
										)}
									/>
									<button
										className="bg-rose-400 px-4 py-1 rounded-lg text-white text-xs shadow-lg"
										onClick={handleOnMainClick}
									>
										<div className="flex justify-center items-center">
											<i className="las la-bell text-xl pr-0.5"></i>
											<span className="text-xs">Buat Pengingat</span>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="section mb-32" id="events">
						<EventInfo
							builder={() => (
								<div className="h-full flex flex-col items-center justify-center text-center relative gap-12">
									<img
										className="absolute z-0 right-0 top-0 opacity-60"
										src="https://i.ibb.co/jLjbRvP/f-1.png"
										alt="frame"
									/>
									<img
										className="absolute z-0 -bottom-48 -left-20   rotate-180 opacity-50"
										src="https://i.ibb.co/W60W4wD/glitter-1.png"
										alt="glitter"
									/>
									<Fade cascade>
										<EventsSection
											title="Pemberkatan Nikah"
											date="Kamis, 23 Maret 2023"
											time="12:00 WITA"
											location="KGPM Anugrah Tonsewer"
											mapLink="https://goo.gl/maps/CkynuSrSDtYegtet6"
										/>
										<EventsSection
											title="Resepsi Nikah"
											date="Kamis, 23 Maret 2023"
											time="15:00 WITA"
											location="Rumah Keluarga Sepang - Raranta"
											mapLink="https://goo.gl/maps/WqVoKFyNhEdmuiK5A"
											isLeft
										/>
									</Fade>
								</div>
							)}
						/>
					</div>

					<div className="section px-4 mb-32" id="quote">
						<div className="text-center">
							<Fade cascade>
								<div className="px-4 py-1 text-gray-400 text-sm italic">
									&quot;Kasih TUHAN membuat segala sesuatu indah pada waktu-Nya
									Ia yang mempertemukan dan akan menyatukan kami dalam ikatan
									pernikahan yang kudus&quot;
								</div>
							</Fade>
						</div>
					</div>

					<div className="section mb-32" id="hosts">
						<EventInfo
							builder={() => (
								<div className="flex flex-col relative">
									<img
										className="absolute z-0 h-[30rem]"
										src="https://i.ibb.co/HVTN6Jk/f-2.png"
										alt="frame"
									/>
									<img
										className="absolute z-0 -top-72  right-0 h-[25rem]"
										src="https://i.ibb.co/C2X0cMc/f-8.png"
										alt="frame"
									/>

									<div className="px-4 ">
										<Fade cascade>
											<HostsSection
												title="Michael Timoty Naftaly Sigarlaki"
												subTitle="Anak Tunggal"
												caption="Bpk. Daniel Timotius Sigarlaki & Ibu. Julita Mareyke Tumonggor"
												isLeft
											/>
											<div
												style={primaryFontFamily}
												className="text-5xl w-full text-center my-4 text-rose-400"
											>
												&
											</div>
											<HostsSection
												title="Kristi Resti Sepang, S.E"
												subTitle="Anak Pertama"
												caption="Bpk. Reky Sepang & (almh) Ibu. Yetti Maritje Raranta "
											/>
										</Fade>
									</div>
								</div>
							)}
						/>
					</div>

					<div className=" section mb-32" id="gallery">
						<div className="relative h-full ">
							<img
								className="absolute z-0 right-0 bottom-2 opacity-50"
								src="https://i.ibb.co/W60W4wD/glitter-1.png"
								alt="grass 1"
							/>
							<img
								className="absolute z-0 top-1 opacity-50"
								src="https://i.ibb.co/4pjd22P/glitter-2.png"
								alt="grass 2"
							/>

							<Fade>
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
							</Fade>
						</div>
					</div>

					<div className="section mb-32" id="wishes">
						<div className="relative">
							<img
								className="absolute z-0 -top-80 -right-10 opacity-50"
								src="https://i.ibb.co/W60W4wD/glitter-1.png"
								alt="grass 1"
							/>
							<img
								className="absolute z-0 -left-24 top-1 bottom-1 opacity-50"
								src="https://i.ibb.co/1Mrpgyb/f-3.png"
								alt="grass 2"
							/>
							<Fade cascade className="px-4">
								<Wishes
									inviteeName={to ? to.toString().replaceAll("_", " ") : null}
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
							</Fade>
						</div>
					</div>

					<div className="section px-4 mb-32" id="guests">
						<div className="text-center">
							<Fade>
								<div
									className="text-6xl pb-4 text-center text-rose-400"
									style={primaryFontFamily}
								>
									Special Guests
								</div>
								<div className=" text-gray-400 flex flex-col text-left">
									<div>Keluarga Besar Sigarlaki-Turangan</div>
									<div>Keluarga Besar Komimbin-Tumonggor</div>
									<div>Keluarga Christoffel-Tummonggor</div>
									<div>Keluarga Manongko Raranta Sonly</div>
									<div>Ibu Sonya Raranta Manongko</div>
									<div>Keluarga Sumilat Raranta Oldi</div>
									<div>Keluarga Raranta Kolopita Alvian</div>
									<div>Keluarga Manorek Devi</div>
									<div>Keluarga Sepang Sumilat Djhoni</div>
									<div>Keluarga Sepang Rori Desbi</div>
									<div>Keluarga Rori Sepang Jerri</div>
									<div>Keluarga Sepang Raranta</div>
									<div>Keluarga Sigarlaki Kaeng</div>
									<div>Keluarga Walangare Tumonggor</div>
								</div>
							</Fade>
						</div>
					</div>

					<div className="section px-4" id="footer">
						<div className="h-full flex flex-col justify-center text-center text-gray-500 pb-20">
							<Fade cascade>
								<h1 className="text-4xl pb-8 " style={secondaryFontFamily}>
									Happy Wedding
								</h1>
								<h1
									className="text-5xl pb-24 text-rose-400 drop-shadow-2xl  font-thin"
									style={primaryFontFamily}
								>
									Michael & Kristi
								</h1>
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
					className="fixed bottom-3 right-3 z-40 mx-2"
					classNamePlayer="bg-rose-400 p-2 flex rounded-xl mb-4 text-white "
				/>
			</div>
		</div>
	);
};

export default MichaelKristi;
