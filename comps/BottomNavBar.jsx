import {useState} from "react";
import Link from "next/link";

const BottomNavBar = ({music, links}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);


    return (
        <div className="fixed bottom-5 left-0 right-0 z-20  mx-2">
            <div className={isOpen ? "animate-fade-in-bottom" : "hidden"}>
                <div
                    onClick={() => setIsOpen(false)}
                    className=" bg-white opacity-80 z-10 h-screen"
                />
                <div
                    className="bg-white mb-2 border-gray-500 border rounded-md ml-auto font-light text-sm items-stretch">
                    {links.map((e, index) => (
                        <Link href={e.href} key={index}>
                            <a className="flex py-2 px-4 justify-end">
                                {e.title}
                            </a>
                        </Link>
                    ))}

                </div>
            </div>

            <div className="border  shadow-lg  rounded-md border-gray-400 font-light text-sm flex flex-row gap-2">
                <button onClick={() => setIsPlaying(!isPlaying)} className=" p-3">
                    {isPlaying ? (
                        <i className="las text-3xl text-center la-pause-circle animate-fade-in-fwd"/>
                    ) : (
                        <i className="las text-3xl text-center la-play-circle animate-fade-in-bck "/>
                    )}
                </button>

                <div className="flex-auto text-left text-xs self-center">
                    {`${music.artist} - ${music.title}`}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className=" text-left p-3">
                    <i className="las la-bars text-3xl text-center"/>
                </button>
            </div>
        </div>
    );
};

export default BottomNavBar;
