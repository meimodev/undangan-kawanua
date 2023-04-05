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
import {useState, useEffect} from "react";

import {Fade} from "react-awesome-reveal";
import {Howl} from "howler";

const AnnoraRompas = () => {
    const {to} = useRouter().query;

    const handleOnMainClick = (e) => {
        e.preventDefault();
        window.open(
            "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Annora%20Rompas%20Ibadah%20Ulang%20Tahun&dates=20230409/20230409&details=Ibadah%20Ulang%20Tahun%20Pukul%2015:00%20WITA&location=1.329281123271697,%20124.8452859565837&trp=true",
            "_blank"
        );
    };

    const openLink = (url) => {
        window.open(url, "_blank");
    };

    const openBboldLink = () => {
        const bboldPhone = "+6285756681077";
        const host = "annora-rompas-birthday";
        const url = `https://api.whatsapp.com/send?phone=${bboldPhone}&text=undangankawanua.com%2Ffrom%2F${host}%3Ffrom%3D${to}%26bbold_token%3ey5V225sjfA5sFG34A9fS7fg`;

        openLink(url);
    };

    const handleOnNewWishes = async (wishes) => {
        const envHost = "annora-rompas-birthday";
        await firestoreUpdateDocData(
            `${envHost}/wishes`,
            "wishes",
            wishes
        );
    };

    const handleOnEventClick = () => {
        openLink("https://goo.gl/maps/FRVTLzw9655tatuU9")
    }

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
        const envHost = "annora-rompas-birthday";
        const invitationData = await firestoreGetDocData(`${envHost}/invitation`);
        // const photosData = await firestoreGetDocData(`${envHost}/photos`);
        const _wishesData = await firestoreGetDocData(`${envHost}/wishes`);

        setMusic(invitationData.music);
        // noinspection JSCheckFunctionSignatures
        setWishesData(_wishesData);
    };

    const imageList = [
        "https://i.ibb.co/SNtdmvK/gallery-1.jpg",
        "https://i.ibb.co/PjmS2sC/gallery-2.jpg",
        "https://i.ibb.co/TLKSfhm/gallery-3.jpg",
        "https://i.ibb.co/0yP0CwB/gallery-4.jpg",
        "https://i.ibb.co/BBpfq6H/gallery-5.jpg",
        "https://i.ibb.co/G9nqtR4/gallery-6.jpg",
        "https://i.ibb.co/jTHn1hX/gallery-7.jpg",
        "https://i.ibb.co/tK0vBJL/gallery-8.jpg",
        "https://i.ibb.co/p2Kwhq7/gallery-9.jpg",
        "https://i.ibb.co/mhKzJC2/gallery-10.jpg",
        "https://i.ibb.co/PcHpQht/gallery-11.jpg",
        "https://i.ibb.co/C8smVP0/gallery-12.jpg",
        "https://i.ibb.co/Ns9vB0H/gallery-13.jpg",
        "https://i.ibb.co/k09cX4V/gallery-14.jpg",
        "https://i.ibb.co/PZjd2FN/gallery-15.jpg",
        "https://i.ibb.co/SNbnxvk/gallery-16.jpg",
        "https://i.ibb.co/pd3SwMD/gallery-17.jpg",
        "https://i.ibb.co/pK6Kfws/gallery-18.jpg",
        "https://i.ibb.co/Hg9Myvz/gallery-19.jpg",
        "https://i.ibb.co/0KgVg7r/gallery-20.jpg",
        "https://i.ibb.co/ZMQHKPB/gallery-21.jpg",
        "https://i.ibb.co/HzNW0Gg/gallery-24.jpg",
        "https://i.ibb.co/1zf5ZHV/gallery-25.jpg",
        "https://i.ibb.co/fHTBjYL/gallery-26.jpg",
        "https://i.ibb.co/NV7tqWg/gallery-27.jpg",
        "https://i.ibb.co/CwQGQkz/gallery-28.jpg",
        "https://i.ibb.co/Kq3SdqL/gallery-29.jpg",
        "https://i.ibb.co/vB7wZZL/gallery-30.jpg",
        "https://i.ibb.co/g4CfgsC/gallery-31.jpg",
        "https://i.ibb.co/BGk269Y/gallery-32.jpg",
        "https://i.ibb.co/MhsGyLx/gallery-33.jpg",
    ];

    const _BuildHead = () => (
        <Meta title="Annora Rompas | 9 April 2023" image={imageList[0]}>
            <link
                rel="stylesheet"
                href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin={"true"}
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=New+Rocker&display=swap"
                rel="stylesheet"
            />
        </Meta>
    );

    const primaryFontFamily = {fontFamily: "New Rocker"};
    const secondaryFontFamily = {fontFamily: "Cinzel Decorative"};

    const galleryHead = [

        {
            src: imageList[0],
            thumbnail: "",
            thumbnailHeight: "128",
            oriWidth: "4090",
            oriHeight: "3272",
        },
        {
            src: imageList[15],
            thumbnail: "",
            thumbnailHeight: "128",
            oriWidth: "640",
            oriHeight: "480",
        },
        {
            src: imageList[1],
            thumbnail: "",
            thumbnailHeight: "128",
            oriWidth: "3987",
            oriHeight: "4984",
        },

        {
            src: imageList[29],
            thumbnail: "",
            thumbnailHeight: "128",
            oriWidth: "3934",
            oriHeight: "4918",
        },
    ];
    const galleryBody = [
        {
            src: imageList[3],
            thumbnail: "",
            thumbnailHeight: "128",
            hide: true,
            oriWidth: "2024",
            oriHeight: "3442",
        },
        {
            src: imageList[4],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "720",
            oriHeight: "1280",
        },

        {
            src: imageList[5],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "1200",
            oriHeight: "1600",
        },
        {
            src: imageList[6],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "640",
            oriHeight: "475",
        },
        {
            src: imageList[7],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "3987",
            oriHeight: "4984",
        },
        {
            src: imageList[8],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "640",
            oriHeight: "480",
        },
        {
            src: imageList[9],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "1029",
            oriHeight: "1280",
        },
        {
            src: imageList[10],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "849",
            oriHeight: "1280",
        },
        {
            src: imageList[11],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "960",
            oriHeight: "1280",
        },
        {
            src: imageList[12],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "640",
            oriHeight: "564",
        },
        {
            src: imageList[13],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "964",
            oriHeight: "1280",
        },
        {
            src: imageList[14],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "853",
            oriHeight: "1280",
        },
        {
            src: imageList[16],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "849",
            oriHeight: "1280",
        },


        {
            src: imageList[17],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "1030",
            oriHeight: "1280",
        },
        {
            src: imageList[18],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "540",
            oriHeight: "960",
        },
        {
            src: imageList[19],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "1080",
            oriHeight: "799",
        },
        {
            src: imageList[20],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "2250",
            oriHeight: "4000",
        },
        {
            src: imageList[21],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "2175",
            oriHeight: "3719",
        },
        {
            src: imageList[22],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "2202",
            oriHeight: "3538",
        },
        {
            src: imageList[23],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "1080",
            oriHeight: "1920",
        },
        {
            src: imageList[24],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "1200",
            oriHeight: "1600",
        },
        {
            src: imageList[25],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "1080",
            oriHeight: "708",
        },
        {
            src: imageList[26],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "818",
            oriHeight: "1280",
        },
        {
            src: imageList[27],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "2250",
            oriHeight: "4000",
        },
        {
            src: imageList[28],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "906",
            oriHeight: "1280",
        },
        {
            src: imageList[2],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "720",
            oriHeight: "1280",
        },
        {
            src: imageList[30],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "4961",
            oriHeight: "4134",
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
                        className="rounded-md text-gray-100 border-[.5px] border-white bg-opacity-50 px-4 pt-1 pb-2 mb-16 shadow-md"
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
    const CustomDivider = () => <img
        src="https://i.ibb.co/FXYSmkV/divider.png"
        alt="divider"
        className="w-48 py-4"
    />;

    return (
        <div>
            <_BuildHead/>
            <div
                style={secondaryFontFamily}
                className="cursor-default scroll-smooth bg-[url(https://i.ibb.co/4f8N62k/background.png)] bg-repeat-y bg-contain  "
            >
                <OpenInvitation
                    onClickOpenInvitation={() => {
                        setIsOpen(true);
                    }}
                    builder={({onClose}) => {
                        return (
                            <div
                                className="text-white h-screen flex flex-col justify-end  items-center overflow-hidden bg-[url(https://i.ibb.co/Ph0pNdq/opener-clean.png)] bg-contain bg-center relative">
                                {/*<img*/}
                                {/*    className="absolute z-10 sm:max-w-lg"*/}
                                {/*    src="https://i.gifer.com/embedded/download/ZJFD.gif"*/}
                                {/*    alt="frame"*/}
                                {/*/>*/}
                                <div className="z-50 h-1/3 text-center">

                                    <div
                                        className="mb-3 "
                                        style={secondaryFontFamily}
                                    >
                                        <div className="text-xs text-left pb-2">Kepada Yth:</div>
                                        <div
                                            className="text-2xl pt-1 font-bold"
                                        >
                                            {to ? to : "No Name"}
                                        </div>
                                    </div>

                                    <button
                                        className="px-10 py-3 rounded-sm bg-transparent border-2 font-bold z-10 animate-pulse"
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
                                className="absolute z-10 h-[30rem] pt-10 top-1/3 opacity-30"
                                src="https://i.ibb.co/C5Vq0G9/anim2.gif"
                                alt="frame"
                            />

                            <Fade cascade className="z-20">
                                <div
                                    className="text-gray-200 text-center text-4xl font-thin "
                                    style={primaryFontFamily}
                                >
                                    <div>Birthday Party</div>

                                </div>
                                <CustomDivider/>

                                <h3
                                    className="text-white text-center font-bold text-3xl pb-8"
                                    style={secondaryFontFamily}
                                >
                                    Annora Azaela Glorielle Rompas
                                </h3>
                                <img
                                    src="https://i.ibb.co/hgrVkX3/center-photo-1.png"
                                    alt="photo"
                                    className="max-h-96"
                                />
                            </Fade>
                        </Top>
                    </div>

                    <div className="section my-4 sm:mt-10" id="countdown">
                        <div className="flex flex-col items-center">
                            <Fade cascade>
                                <Countdown
                                    eventDate={"04/09/2023"}
                                    builder={({timeLeft}) => (
                                        <div className="mb-5 font-thin">
                                            <div className="flex gap-8 text-sm text-white">
                                                <div
                                                    className="text-2xl flex gap-2 justify-center items-center">
                                                    <div className="font-bold">{timeLeft.days}</div>
                                                    <div className="text-xs font-normal text-gray-200">HARI</div>
                                                </div>
                                                <div
                                                    className="text-2xl flex gap-2 justify-center items-center">
                                                    <div className="font-bold">{timeLeft.hours}</div>
                                                    <div className="text-xs text-gray-200">JAM</div>
                                                </div>
                                                <div
                                                    className="text-2xl flex gap-2 justify-center items-center">
                                                    <div className="font-bold">{timeLeft.minutes}</div>
                                                    <div className="text-xs font-normal text-gray-200">MENIT</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                />
                                <button
                                    className="bg-transparent border-[1px] px-4 py-2 rounded-sm text-white text-xs "
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
                                <div
                                    className="h-full flex flex-col items-center justify-center text-center relative text-white">
                                    <img
                                        className="absolute z-10 h-[25rem] top-1/3 opacity-30"
                                        src="https://i.ibb.co/BVKjsKR/anim3.gif"
                                        alt="frame"
                                    />
                                    <Fade cascade className="z-20">


                                        <div
                                            style={primaryFontFamily}
                                            className="font-bold text-4xl ">
                                            Event
                                        </div>
                                        <CustomDivider/>


                                        <div className="pb-4">
                                            <div className="">
                                                Minggu, 9 April 2023
                                            </div>
                                            <div className="">
                                                Pukul 15:00 WITA
                                            </div>
                                        </div>

                                        <img
                                            src="https://i.ibb.co/2czMvvQ/center-photo-2.png"
                                            alt="photo"
                                            className="h-72"
                                        />

                                        <div className="pt-8 pb-4">

                                            <div className="">
                                                Rompas - Palar Residence
                                            </div>

                                            <div className="">
                                                Paslaten I, Tomohon Timur
                                            </div>
                                        </div>

                                        <button
                                            className="bg-transparent border-[1px] px-4 py-2 rounded-sm text-white text-xs "
                                            onClick={handleOnEventClick}
                                        >
                                            <div className="flex justify-center items-center">
                                                <i className="las la-map-marker text-sm pr-1"></i>
                                                <span className="text-xs">Maps</span>
                                            </div>
                                        </button>

                                        {/*<EventsSection*/}
                                        {/*    title="Ibadah Anak"*/}
                                        {/*    date="6 NOV 2022"*/}
                                        {/*    time="PUKUL 15:00 WITA"*/}
                                        {/*    location="KEL. RUNTU - MAMESAH, LINKUNGAN IV"*/}
                                        {/*    mapLink="https://goo.gl/maps/7e321rNrrrpToLmC6"*/}
                                        {/*    isLeft*/}
                                        {/*/>*/}
                                        {/*<EventsSection*/}
                                        {/*    title="Ibadah Baptisan"*/}
                                        {/*    date="6 NOV 2022"*/}
                                        {/*    time="PUKUL 12:00 WITA"*/}
                                        {/*    location="KEL. RUNTU - MAMESAH, LINKUNGAN IV"*/}
                                        {/*    mapLink="https://goo.gl/maps/7e321rNrrrpToLmC6"*/}
                                        {/*/>*/}
                                    </Fade>
                                </div>
                            )}
                        />
                    </div>

                    <div className="section " id="quote">
                        <div className="text-center h-screen flex flex-col justify-center">
                            <Fade cascade>
                                <div
                                    className="text-white text-2xl font-bold"
                                    style={secondaryFontFamily}
                                >
                                    Mazmur 91 : 11
                                </div>
                                <div className="px-4 py-2 text-gray-200 text-sm italic">
                                    Sebab malaikat-malaikat-Nya akan diperintahkan-Nya
                                    kepadamu untuk menjaga engkau di segala jalanmu.
                                </div>
                            </Fade>
                        </div>
                    </div>

                    <div className="section sm:mt-10 h-screen " id="gallery">
                        <div className="relative h-full">
                            <Fade cascade>

                                <CustomGallery
                                    images={galleryPhotos}
                                    title={
                                        <div className="flex flex-col items-center py-4 mb-8">
                                            <div
                                                className="text-6xl  text-center text-white"
                                                style={primaryFontFamily}
                                            >
                                                Gallery
                                            </div>

                                            <CustomDivider/>
                                        </div>
                                    }
                                />
                            </Fade>
                        </div>
                    </div>

                    <div className="section px-4 mt-[27rem] sm:mt-28" id="wishes">
                        <div className="relative">
                            <Fade cascade>
                                <img
                                    className="absolute -z-10 bottom-1/3 opacity-30"
                                    src="https://i.ibb.co/G5t4bwj/anim1.gif"
                                    alt="anim1"
                                />
                                <Wishes
                                    inviteeName={to}
                                    onNewWishes={handleOnNewWishes}
                                    wishes={wishesData.wishes}
                                    enable={wishesData.enable}
                                    sendButtonClassName="text-white bg-transparent border-[1px] "
                                    fromTextClassName="text-white"
                                    textAreaClassName=" bg-transparent text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                                    wishesBoxClassName="text-white border-b-[1px] border-gray-200 p-3 rounded-md my-4"
                                    title={
                                        <div className="flex flex-col items-center py-4 ">
                                            <div
                                                className="text-6xl  text-center text-white"
                                                style={primaryFontFamily}
                                            >
                                                Wishes
                                            </div>
                                            <CustomDivider/>
                                        </div>
                                    }
                                />
                            </Fade>
                        </div>
                    </div>

                    <div
                        className="section px-4 bg-gradient-to-b from-transparent to-fuchsia-900/50"
                        id="footer"
                    >
                        <div className="h-full flex flex-col justify-center items-center text-center pb-10 text-white">
                            <Fade cascade>
                                <h1
                                    className="text-2xl font-bold"
                                    style={secondaryFontFamily}
                                >
                                    Annora Azaela Glorielle Rompas
                                </h1>

                                <CustomDivider/>
                                <h1 className="text-xl mt-4 pt-10 pb-2" style={secondaryFontFamily}>
                                    Blessed Family
                                </h1>
                                <div
                                    className="text-3xl text-white font-thin pb-2"
                                    style={primaryFontFamily}
                                >
                                    <div>
                                        Papa Fano - Mama Glo
                                    </div>
                                    <div>
                                        Kakak Azael
                                    </div>
                                </div>

                                <img
                                    className="py-2 pt-4"
                                    src="https://i.ibb.co/0B5VqzV/parent.jpg"
                                    alt="parents"
                                />

                                <Footer isMinimalist/>
                                <div className="h-10"></div>
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
                    classNamePlayer="bg-black bg-opacity-75 border-[1px] p-2 flex gap-1 rounded-sm mb-4 text-gray-100 "
                />
            </div>
        </div>
    );
};

export default AnnoraRompas;
