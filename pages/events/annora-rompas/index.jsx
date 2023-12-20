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
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-1.jpg?updatedAt=1702972804894",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-2.jpg?updatedAt=1702972808468",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-3.jpeg?updatedAt=1702972811124",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-4.jpg?updatedAt=1702972813427",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-5.jpeg?updatedAt=1702972813471",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-6.jpg?updatedAt=1702972813501",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-7.jpeg?updatedAt=1702972813531",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-8.jpg?updatedAt=1702972813877",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-9.jpeg?updatedAt=1702972814339",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-10.jpeg?updatedAt=1702972804583",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-11.jpeg?updatedAt=1702972804969",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-12.jpeg?updatedAt=1702972805018",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-13.jpeg?updatedAt=1702972805843",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-14.jpeg?updatedAt=1702972806147",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-15.jpeg?updatedAt=1702972806505",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-16.jpeg?updatedAt=1702972806562",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-17.jpeg?updatedAt=1702972806555",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-18.jpeg?updatedAt=1702972807216",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-19.jpeg?updatedAt=1702972807877",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-20.jpeg?updatedAt=1702972808351",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-21.jpg?updatedAt=1702972808886",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-24.jpg?updatedAt=1702972809261",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-25.jpg?updatedAt=1702972809897",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-26.jpg?updatedAt=1702972810146",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-27.jpg?updatedAt=1702972810128",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-28.jpeg?updatedAt=1702972810197",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-29.jpeg?updatedAt=1702972810455",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-30.jpg?updatedAt=1702972812061",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-31.jpeg?updatedAt=1702972811960",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-32.jpg?updatedAt=1702972812426",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/gallery-33.jpg?updatedAt=1702972812667",
    ];

    const imageAssets = [
        // "https://i.ibb.co/FXYSmkV/divider.png",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/divider.png?updatedAt=1702972782890",
        // "https://i.ibb.co/4f8N62k/background.png",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/background.png?updatedAt=1702972785823",
        // "https://i.ibb.co/Ph0pNdq/opener-clean.png",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/opener_clean.png?updatedAt=1702972792267",
        // "https://i.ibb.co/C5Vq0G9/anim2.gif",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/anim2.gif?updatedAt=1702972786664",
        // "https://i.ibb.co/hgrVkX3/center-photo-1.png",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/center-photo-1.png?updatedAt=1702972783102",
        // "https://i.ibb.co/BVKjsKR/anim3.gif",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/anim3.gif?updatedAt=1702972795184",
        // "https://i.ibb.co/2czMvvQ/center-photo-2.png",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/center-photo-2.png?updatedAt=1702972783159",
        // "https://i.ibb.co/G5t4bwj/anim1.gif",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/anim1.gif?updatedAt=1702972785677",
        // "https://i.ibb.co/0B5VqzV/parent.jpg",
      "https://ik.imagekit.io/zwwatezewlj/annora-rompas/Photos/tinified/parent.jpg?updatedAt=1702972815457"
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
            src: imageList[30],
            thumbnail: "",
            thumbnailHeight: "128",
            oriWidth: "4961",
            oriHeight: "4134",
        },
        {
            src: imageList[0],
            thumbnail: "",
            thumbnailHeight: "128",
            oriWidth: "4090",
            oriHeight: "3272",
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
            src: imageList[4],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "720",
            oriHeight: "1280",
        },
        {
            src: imageList[3],
            thumbnail: "",
            thumbnailHeight: "128",
            hide: true,
            oriWidth: "2024",
            oriHeight: "3442",
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
            src: imageList[15],
            thumbnail: "",
            hide: true,
            thumbnailHeight: "128",
            oriWidth: "640",
            oriHeight: "480",
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
        src={imageAssets[0]}
        alt="divider"
        className="w-48 py-4"
    />

    return (
        <div>
            <_BuildHead/>
            <div
                style={secondaryFontFamily}
                className={"cursor-default scroll-smooth bg-[url(" + imageAssets[1] + ")] bg-repeat-y bg-contain"}
            >
                <OpenInvitation
                    onClickOpenInvitation={() => {
                        setIsOpen(true);
                    }}
                    builder={({onClose}) => {
                        return (
                            <div
                                className={"text-white h-screen flex flex-col justify-end items-center overflow-hidden bg-[url(" + imageAssets[2] + ")] bg-contain bg-center relative"}>

                                <div className="z-50 h-1/3 text-center">

                                    <div
                                        className="mb-3 "
                                        style={secondaryFontFamily}
                                    >
                                        <div className="text-xs text-left pb-2">Kepada Yth:</div>
                                        <div
                                            className="text-2xl pt-1 font-bold"
                                        >
                                            {to || "No Name"}
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
                                src={imageAssets[3]}
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
                                    src={imageAssets[4]}
                                    alt="assets 4"
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
                                        src={imageAssets[5]}
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
                                            src={imageAssets[6]}
                                            alt="assets 6"
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
                                    src={imageAssets[7]}
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
                                    src={imageAssets[8]}
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
