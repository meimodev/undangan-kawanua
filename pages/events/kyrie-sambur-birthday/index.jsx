/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-page-custom-font */
import Meta from "../../../comps/Meta";
import Top from "../../../comps/Top";
import OpenInvitation from "../../../comps/OpenInvitation";
import BottomNavBar from "../../../comps/BottomNavBar";
import CustomGallery from "../../../comps/CustomGallery";
import Wishes from "../../../comps/Wishes";
import Footer from "../../../comps/Footer";
import {useRouter} from "next/router";
import EventInfo from "../../../comps/EventInfo";
import Countdown from "../../../comps/Countdown";

import {firestoreGetDocData, firestoreUpdateDocData} from "../../../firebase";
import {useEffect, useState} from "react";

import {Fade} from "react-awesome-reveal";
import {Howl} from "howler";

const Page = () => {
    const {to} = useRouter().query;
    const envHost = "kyrie-sambur-birthday";

    const handleOnMainClick = (e) => {
        e.preventDefault();
        window.open(
            "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kyrie%20Sambur%20Ibadah%20HUT&dates=20230430/20230430&details=Ibadah%20Hari%20Ulang%20Tahun%20Pukul%2014:00&location=1.3005765896069097,%20124.91208605179345&trp=true",
            "_blank"
        );
    };

    const openLink = (url) => {
        window.open(url, "_blank");
    };

    const openBboldLink = () => {
        const bboldPhone = "+6285756681077";
        const token = "ejY221Asdkf24few42";
        const url = `https://api.whatsapp.com/send?phone=${bboldPhone}&text=undangankawanuaxbbold10%off-${envHost}-token-${token}`;

        openLink(url);
    };

    const handleOnNewWishes = async (wishes) => {
        await firestoreUpdateDocData(
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
    const [isOpen, setIsOpen] = useState(false);

    const fetchData = async () => {
        const invitationData = await firestoreGetDocData(`${envHost}/invitation`);
        const _wishesData = await firestoreGetDocData(`${envHost}/wishes`);

        setMusic(invitationData.music);
        // noinspection JSCheckFunctionSignatures
        setWishesData(_wishesData);
    };

    const imageList = [
        "https://i.ibb.co/p3XHMYw/1.jpg",
        "https://i.ibb.co/tbKb13p/10.jpg",
        "https://i.ibb.co/JBKNwbC/12.jpg",
        "https://i.ibb.co/NpZRN1n/13.jpg",
        "https://i.ibb.co/tJ8tPLn/2.jpg",
        "https://i.ibb.co/2FQ3njM/3.jpg",
        "https://i.ibb.co/Hr61jxC/4.jpg",
        "https://i.ibb.co/bBdgvzf/5.jpg",
        "https://i.ibb.co/NZXfknJ/6.jpg",
        "https://i.ibb.co/gPzFDRp/7.jpg",
        "https://i.ibb.co/P99H6GT/8.jpg",
        "https://i.ibb.co/k3fH7MT/9.jpg",
    ];

    const imageAssetList = [
        "https://i.ibb.co/k85qdZD/char-1.png",
        "https://i.ibb.co/MV303qz/char-2.png",
        "https://i.ibb.co/ZMTQkxK/char-3.png",
        "https://i.ibb.co/XkJ2BqG/web-1.png",
        "https://i.ibb.co/hg5jc9d/web-2.png",
        "https://i.ibb.co/D5vjm9j/web-3.png",
        "https://i.ibb.co/0C99Jcr/web-4.png",
        "https://i.ibb.co/r0v8q5g/web-5.png",
        "https://i.ibb.co/4sZ5ZJ2/web-6.png",
        "https://i.ibb.co/9w4400S/web-7.png",
        "https://i.ibb.co/w6ZZ09V/web-8.png",
    ];

    const _BuildHead = () => (
        <Meta title="Kyrie Sambur | 30 Apri 2023" image={imageList[0]}>
            <link
                rel="stylesheet"
                href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Bruno+Ace&family=Comfortaa:wght@400;700&family=Zen+Maru+Gothic:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </Meta>
    );

    const primaryFontFamily = {fontFamily: "'Bruno Ace', cursive"};
    const secondaryFontFamily = {fontFamily: "'Zen Maru Gothic', sans-serif"};
    const thirdFontFamily = {fontFamily: "'Comfortaa', cursive"};

    const galleryHead = [
        {
            src: imageList[0],
            thumbnail: "",
            hide: false,
            thumbnailHeight: "128",
            oriWidth: "864",
            oriHeight: "1152",
        },
        {
            src: imageList[1],
            thumbnail: "",
            hide: false,
            thumbnailHeight: "128",
            oriWidth: "3024",
            oriHeight: "4032",
        },
        {
            src: imageList[6],
            thumbnail: "",
            hide: false,
            thumbnailHeight: "128",
            oriWidth: "2000",
            oriHeight: "2667",
        },
        {
            src: imageList[4],
            thumbnail: "",
            hide: false,
            thumbnailHeight: "128",
            oriWidth: "480",
            oriHeight: "640",
        },
    ];
    const galleryBody = [

        {
            src: imageList[2],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "3024",
            oriHeight: "4032",
        },
        {
            src: imageList[3],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "2667",
            oriHeight: "2000",
        },
        {
            src: imageList[5],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "720",
            oriHeight: "960",
        },
        {
            src: imageList[7],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "864",
            oriHeight: "1152",
        },
        {
            src: imageList[8],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "3024",
            oriHeight: "4032",
        },
        {
            src: imageList[9],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "2000",
            oriHeight: "2667",
        },
        {
            src: imageList[10],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "864",
            oriHeight: "1152",
        },
        {
            src: imageList[11],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "2000",
            oriHeight: "2667",
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
                        className="rounded-md text-gray-100 bg-indigo-400 bg-opacity-75 px-4 mt-8 pt-1 pb-2 mb-16 shadow-md"
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
            <_BuildHead/>
            <div
                style={secondaryFontFamily}
                className="cursor-default scroll-smooth bg-[url(https://i.ibb.co/M1jwdK1/background.png)] bg-repeat-y bg-sky-100/75 lg:bg-cover overflow-hidden"
            >
                <OpenInvitation
                    onClickOpenInvitation={() => {
                        setIsOpen(true);
                    }}
                    builder={({onClose}) => {
                        return (
                            <div
                                className="text-center h-screen flex flex-col justify-center items-center bg-[url(https://i.ibb.co/M1jwdK1/background.png)] bg-cover  bg-sky-100/75">
                                <img
                                    className="absolute z-0 w-36 left-16 top-44 opacity-50"
                                    src={imageAssetList[1]}
                                    alt="frame"
                                />

                                <img
                                    className="absolute z-0 w-36 right-10 bottom-1/3 opacity-50"
                                    src={imageAssetList[5]}
                                    alt="frame"
                                />

                                <div className="relative">

                                    <div className="text-xl text-gray-600 ">
                                        Ibadah HUT
                                    </div>

                                    <div
                                        style={primaryFontFamily}
                                        className="text-4xl font-thin text-indigo-500 flex flex-col pb-2 z-20"
                                    >
                                        <div>Kyrie Glorious Deo Sambur</div>
                                    </div>

                                    <div
                                        className="my-6 text-gray-400"
                                        style={secondaryFontFamily}
                                    >
                                        <div className="text-sm">Kepada Yth:</div>
                                        <div
                                            className="text-2xl text-indigo-400 4pt-1 font-bold"
                                            style={secondaryFontFamily}
                                        >
                                            {to}
                                        </div>
                                    </div>

                                    <button
                                        className="shadow-xl px-4 py-2 rounded-lg bg-indigo-400 text-gray-100 font-bold z-10 animate-pulse"
                                        onClick={() => onClose()}
                                    >
                                        <i className="las la-envelope-open text-2xl font-bold"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    }}
                />

                <main className="max-w-lg mx-auto">
                    <section className="h-screen section " id="top">
                        <Top
                            eventDate={"12/12/2022"}
                            className="h-full flex items-center flex-col justify-center relative"
                        >
                            <img
                                className="absolute z-0 opacity-20"
                                src={imageAssetList[5]}
                                alt="Spiderweb background"
                            />
                            <img
                                className="absolute z-0 w-64 -left-20 top-28 opacity-20"
                                src={imageAssetList[0]}
                                alt="character top left"
                            />
                            <Fade cascade>
                                <div
                                    className="text-slate-500 text-center text-4xl pt-20"
                                    style={secondaryFontFamily}
                                >
                                    <div className="text-xl">Ibadah</div>
                                    <div className="font-bold">Hari Ulang Tahun</div>
                                </div>
                                <div
                                    className="h-0.5 w-36 mb-10 mt-4 bg-indigo-400 "
                                />
                                <h3
                                    className="text-indigo-400 text-center text-[2.5rem] mb-4 font-bold"
                                    style={primaryFontFamily}
                                >
                                    Kyrie Glorius Deo Sambur
                                </h3>

                                <div className="pt-28">

                                    <div className="flex flex-col items-center">
                                        <Fade cascade>
                                            <Countdown
                                                eventDate={"04/30/2023"}
                                                builder={({timeLeft}) => (
                                                    <div className="mb-5 font-thin">
                                                        <div className="flex text-sm text-gray-500">
                                                            <div
                                                                className="w-16 h-16 flex flex-col justify-center border-x-indigo-500 border-x-[0.5px] items-center">
                                                                <div className="font-bold">{timeLeft.days}</div>
                                                                <div className="text-xs">HARI</div>
                                                            </div>
                                                            <div
                                                                className="w-16 h-16 flex flex-col justify-center border-x-indigo-500  items-center">
                                                                <div className="font-bold">{timeLeft.hours}</div>
                                                                <div className="text-xs">JAM</div>
                                                            </div>
                                                            <div
                                                                className="w-16 h-16 flex flex-col justify-center border-x-indigo-500 border-x-[0.5px] items-center">
                                                                <div className="font-bold">{timeLeft.minutes}</div>
                                                                <div className="text-xs">MENIT</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            />
                                            <button
                                                className="bg-indigo-500 px-4 py-2 rounded-lg text-white text-xs shadow-lg"
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

                            </Fade>
                        </Top>
                    </section>

                    <section className="h-screen section sm:mt-10" id="event">
                        <EventInfo
                            builder={() => (
                                <div className="h-full flex items-center justify-center text-center relative">
                                    <Fade cascade>

                                        <div className="flex flex-col w-full z-10">

                                            <img
                                                src={imageList[0]}
                                                alt="Photo center"
                                                className="mb-16 w-1/2 sm:w-1/4 mx-auto rounded-full"
                                            />

                                            <div className="text-gray-500 px-1 relative">

                                                <img
                                                    className="absolute z-0 w-36 -left-8 top-12 opacity-20 rotate-6"
                                                    src={imageAssetList[8]}
                                                    alt="frame"
                                                />

                                                <img
                                                    className="absolute z-0 w-36 -right-20 top-28 opacity-20 rotate-6"
                                                    src={imageAssetList[9]}
                                                    alt="frame"
                                                />

                                                <h2
                                                    className="font-bold text-2xl text-indigo-400"
                                                    style={primaryFontFamily}
                                                >
                                                    Ibadah HUT
                                                </h2>
                                                <div className="pt-4">
                                                    <div>
                                                        Minggu 30 April 2023

                                                    </div>
                                                    <div className="pt-2 text-xl font-bold text-indigo-400">15:00 WITA
                                                    </div>
                                                    <div className="pt-2">@ KFC Tondano</div>
                                                </div>
                                                <button
                                                    className="mt-8 border bg-indigo-400 p-2 px-3 rounded-lg text-white font-thin shadow-lg"
                                                    onClick={() => openLink("https://goo.gl/maps/JVQ2jVRrnVX4C8Jy8")}
                                                >
                                                    <div className="flex justify-center items-center">
                                                        <i className="las la-map-marker text-sm pr-0.5"></i>
                                                        <span className="text-xs">Maps</span>
                                                    </div>
                                                </button>
                                            </div>

                                        </div>

                                    </Fade>
                                </div>
                            )}
                        />
                    </section>

                    <section className="section my-24" id="quote">
                        <div className="text-center">
                            <Fade cascade>
                                <div
                                    className="text-indigo-400 text-2xl"
                                    style={primaryFontFamily}
                                >
                                    Amsal 3 : 16
                                </div>
                                <div className="px-4 py-1 text-gray-500 text-sm italic">
                                    &quot;Umur panjang ada di tangan kanan-Nya, di tangan kiri-Nya kekayaan dan
                                    kehormatan&quot;
                                </div>
                            </Fade>
                        </div>
                    </section>

                    <div className="section sm:mt-10 h-screen " id="gallery">
                        <div className="relative h-full">
                            <Fade cascade>

                                <CustomGallery
                                    images={galleryPhotos}
                                    title={
                                        <div className="flex flex-col items-center py-4 mb-8">
                                            <div
                                                className="text-6xl text-center text-indigo-500"
                                                style={primaryFontFamily}
                                            >
                                                Gallery
                                            </div>

                                        </div>
                                    }
                                />
                            </Fade>
                        </div>
                    </div>

                    <Fade cascade>
                        <div
                            className="section px-4 flex flex-col mt-10 sm:mt-16"
                            id="wishes"
                        >
                            <div className="relative">
                                <img
                                    className="absolute -z-10 w-[15rem] opacity-20 -right-32 top-10"
                                    src={imageAssetList[9]}
                                    alt="web"
                                />

                                <img
                                    className="absolute -z-10 w-[40rem] opacity-30 -left-36 -bottom-32 rotate-45"
                                    src={imageAssetList[2]}
                                    alt="web"
                                />
                                <Wishes
                                    inviteeName={to}
                                    onNewWishes={handleOnNewWishes}
                                    wishes={wishesData.wishes}
                                    enable={wishesData.enable}
                                    sendButtonClassName="text-white bg-indigo-400"
                                    textAreaClassName="focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                                    wishesBoxClassName="border-b-[1px] border-indigo-400 p-3 rounded-md my-4"
                                    title={
                                        <div
                                            className="text-6xl pt-4 text-center text-indigo-500"
                                            style={primaryFontFamily}
                                        >
                                            Wishes
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </Fade>

                    <section
                        className="section px-4 bg-gradient-to-b from-transparent via-indigo-300/50 to-indigo-400/75"
                        id="footer"
                    >
                        <div className="h-full flex flex-col justify-center text-center text-gray-500 pb-10">
                            <Fade cascade>
                                <h1
                                    className="text-4xl text-indigo-500 font-bold"
                                    style={primaryFontFamily}
                                >
                                    Kyrie Glorius Deo Sambur
                                </h1>
                                <h1 className="text-xl mt-16" style={secondaryFontFamily}>
                                    Blessed Parents
                                </h1>
                                <h1
                                    className="text-4xl text-indigo-500 font-bold text-small pb-20"
                                    style={secondaryFontFamily}
                                >
                                    Joiner & Susan
                                </h1>

                                {/*<img*/}
                                {/*    className="py-2 pt-4"*/}
                                {/*    src="https://i.ibb.co/ggynKn3/parents.jpg"*/}
                                {/*    alt="parents"*/}
                                {/*/>*/}

                                <Footer isMinimalist/>
                            </Fade>
                        </div>
                    </section>
                </main>
                <BottomNavBar
                    isOpen={isOpen}
                    artist={""}
                    title={""}
                    howl={howl}
                    links={[]}
                    className="fixed -bottom-1 right-0 z-40 mx-2"
                    classNamePlayer="bg-indigo-500 p-2 flex gap-1 rounded-xl mb-4 text-gray-100 "
                />
            </div>
        </div>
    );
};

export default Page;
