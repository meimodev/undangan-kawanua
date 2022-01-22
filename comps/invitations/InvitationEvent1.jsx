import Meta from "../Meta";
import BottomNavBar from "../BottomNavBar";
import Top from "../Top";


const backgroundVideoLink = 'https://dl.dropbox.com/s/74sijnyjw9qg98w/natal-background.mp4?dl=1';
const InvitationEvent1 = () => {


    return (
        <div>
            <Meta title="Natal Pemuda Remaja JAOR">
                <link
                    rel="stylesheet"
                    href={
                        "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
                    }
                />
            </Meta>
            <div className="">
                <BottomNavBar
                    isOpen={true}
                    music={{
                        artist: "Westlife",
                        title: "Beautiful in White",
                        src: "https://dl.dropbox.com/s/hef6qkdizpr4fzs/Westlife%20-%20Beautiful%20in%20White%20%28320%20kbps%29.mp3?dl=1",
                    }}
                    links={[
                        // { title: "Home", href: "#home" },
                        // { title: "About", href: "#about" },
                        // { title: "Something", href: "#about" },
                    ]}
                />
                <Top
                    // topImage="https://i.ibb.co/zbwGh8N/image-3.jpg"
                    eventDate={"04/22/2022"}>

                    <div>This Should be INVITATION EVENT</div>
                </Top>
            </div>
        </div>
    );
};

export default InvitationEvent1;
