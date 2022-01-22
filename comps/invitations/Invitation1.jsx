/* eslint-disable @next/next/no-img-element */
import Meta from "../Meta";

import Wishes from "../Wishes";
import BottomNavBar from "../BottomNavBar";
import OpenInvitation from "../OpenInvitation";
import Footer from "../Footer";
import Top from "../Top";
import Quotes from "../Quotes";
import Hosts from "../Hosts";
import CustomGallery from "../CustomGallery";
import {useState} from "react";

const Invitation1 = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                <OpenInvitation
                    isDefault
                    onClickOpenInvitation={() => {
                        setIsOpen(true);
                    }}
                />
                <BottomNavBar
                    isOpen={isOpen}
                    music={{
                        artist: "Westlife",
                        title: "Beautiful in White",
                        src: "https://dl.dropbox.com/s/hef6qkdizpr4fzs/Westlife%20-%20Beautiful%20in%20White%20%28320%20kbps%29.mp3?dl=1",
                    }}
                    links={[
                        {title: "Home", href: "#home"},
                        {title: "About", href: "#about"},
                        {title: "Something", href: "#about"},
                    ]}
                />
                <Top
                    topImage="https://i.ibb.co/zbwGh8N/image-3.jpg"
                    eventDate={"04/22/2022"}
                />
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
                <Footer isMenuPadding/>
            </div>
        </div>
    );
};

export default Invitation1;
