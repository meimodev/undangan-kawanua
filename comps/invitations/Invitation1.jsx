/* eslint-disable @next/next/no-img-element */
import Meta from "../Meta";
import Image from "next/image";

import CustomGallery from "../CustomGallery";
import Wishes from "../Wishes";
import BottomNavBar from "../BottomNavBar";
import OpenInvitation from "../OpenInvitation";
import Countdown from "../Countdown";
import Photo from "../Photo";
import Footer from "../Footer";

const Top = () => {
    return (
        <div className="h-screen w-screen">
            <Image
                className="opacity-75"
                src="https://i.ibb.co/zbwGh8N/image-3.jpg"
                layout="fill"
                alt="Cover Image"
            />
            <div className="absolute bottom-32 left-0 right-0 mt-10">
                <div className="flex-row text-center">
                    <div className="text-3xl">Jhon &amp; Manembo</div>
                    <div className="mt-5">
                        <Countdown/>
                    </div>
                    <div className="mt-10">
                        <button
                            className="border border-gray-400 p-4 rounded-md font-bold text-gray-300 bg-opacity-50 bg-gray-400">
                            Save Date
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Quotes = ({quotes}) => {
    return (
        <div>
            {quotes.map((e, idx) => (
                <>
                    <div key={idx} className="mx-9 my-5">
                        <div className="flex gap-1">
                            <p className="text-3xl">&quot;</p>
                            <div>
                                <p className="text-sm pt-2 text-justify">{e.quote}</p>
                                <span className="text-xs">{e.author} </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-200 mt-5 h-64">
                        <Photo useDiv alt={"Image " + (idx + 1)} link={e.photo}/>
                    </div>
                </>
            ))}
        </div>
    );
};

const Hosts = ({hosts}) => {
    return (
        <div>
            {hosts.map((e, idx) => {
                const align = (idx + 1) % 2 !== 0 ? "left" : "right";
                return (
                    <div
                        key={idx}
                        className={
                            (align === "right" ? "ml-auto mr-4 " : "ml-4 mr-auto ") +
                            " text-sm my-10 "
                        }
                    >
                        <div className={`text-${align} font-bold text-2xl`}>
                            {e.nickname}
                        </div>
                        <div
                            className={
                                (align === "right" ? "justify-end" : "justify-start") +
                                " flex gap-3 mt-2"
                            }
                        >
                            <div
                                className={
                                    (align === "right" ? "order-last" : "") +
                                    " flex-none self-center  border border-gray-400 bg-blue-500 rounded-full w-24 h-24 "
                                }
                            />
                            <div className={`order text-${align}`}>
                                <p className="text-md font-medium">{e.name}</p>
                                <div className="text-xs font-light">{e.desc}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Invitation1 = () => {
    return (
        <div>
            <Meta title="This is Invitation 1">
                <link
                    rel="stylesheet"
                    href={
                        "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
                    }
                />
            </Meta>
            <div>
                <OpenInvitation/>
                <BottomNavBar
                    music={{
                        title: "Some song Title",
                        artist: "Jhonxzc",
                        src: "https://something-something.com/thatsong.mp3",
                    }}
                    links={[
                        {title: "Home", href: "#home"},
                        {title: "About", href: "#about"},
                        {title: "Something", href: "#about"},
                    ]}
                />
                <Top/>
                <Quotes
                    quotes={[
                        {
                            quote: "Something something this is a quote",
                            author: "Somebody that used to quote things",
                            photo: "https://i.ibb.co/zbwGh8N/image-3.jpg",
                        },
                        {
                            quote: "Second Quote that supposedly to be inspiring to read to",
                            author: "Also someone that supposedly inspiring",
                            photo: "https://i.ibb.co/zbwGh8N/image-3.jpg",
                        },
                    ]}
                />
                <Hosts
                    hosts={[
                        {
                            nickname: "The Majembax",
                            name: "Jhonny Frieger Khrusxk Maraoke Majhemba, M.Eng",
                            desc: (
                                <p>
                                    Putra Pertama
                                    <br/> Bpk. Fredy Marhambe Rukuruwewe Hyucko Majhemba
                                    <br/> Ibu. Runkuruwrack Jhon Membe Drogba
                                </p>
                            ),
                        },
                        {
                            nickname: "The Ulukeke",
                            name: "Marshanda Wakaltambu Banjempe Ukulala, M.Eng",
                            desc: (
                                <p>
                                    Putri Pertama
                                    <br/> Bpk. Takalamau Hambaremparembe ukulala
                                    <br/> Ibu. Jhon Petruci Uzkurmauasdmv
                                </p>
                            ),
                        },
                    ]}
                />
                <CustomGallery
                    images={[
                        {
                            src: "https://i.ibb.co/zbwGh8N/image-3.jpg",
                            thumbnail: "",
                            width: "1024",
                            height: "768",
                        },
                        {
                            src: "https://i.ibb.co/0hNznGf/image-1.jpg",
                            thumbnail: "",
                            width: "1024",
                            height: "768",
                        },
                        {
                            src: "https://i.ibb.co/4JdDtt5/test-image-potrait-2.jpg",
                            thumbnail: "",
                            width: "2911",
                            height: "3884",
                        },

                        {
                            src: "divider",
                            divider: (
                                <div className="col-span-full text-center">
                                    This is a dividezzzr
                                </div>
                            ),
                        },
                        {
                            src: "https://i.ibb.co/wYBCG6b/image-4.jpg",
                            thumbnail: "",
                            width: "1024",
                            height: "768",
                        },
                        {
                            src: "https://i.ibb.co/Svzfzrw/image-2.jpgg",
                            thumbnail: "",
                            width: "1024",
                            height: "768",
                        },
                        {
                            src: "https://i.ibb.co/wYBCG6b/image-4.jpg",
                            thumbnail: "",
                            width: "1024",
                            height: "768",
                        },
                        {
                            src: "https://i.ibb.co/Svzfzrw/image-2.jpgg",
                            thumbnail: "",
                            width: "1024",
                            height: "768",
                        },
                    ]}
                />
                <Wishes
                    sectionPadding="px-4"
                    wishes={[
                        {
                            from: "Jhonny Estelle",
                            message:
                                "Good job on finding each other, wishes you all the best",
                            confirm: -1,
                        },
                        {
                            from: "Utu Manembox",
                            message: "I wish i had one with you all",
                            confirm: 0,
                        },
                        {
                            from: "Some Alien",
                            message: "Just go to F*cking mars after this crap",
                            confirm: 1,
                        },
                    ]}
                />
                <Footer menuPadding/>
            </div>
        </div>
    );
};

export default Invitation1;
