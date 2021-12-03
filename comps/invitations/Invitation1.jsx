import Meta from "../Meta";

import CustomGallery from "../CustomGallery";
import Wishes from "../Wishes";
import BottomNavBar from "../BottomNavBar";

const OpenInvitation = () => {
    return (
        <div className="w-screen h-screen flex justify-center">
            <div className="self-center bg-red-200 w-full py-8 text-center">
                <div className=" text-xl font-semibold pb-6">Wedding</div>
                <div className=" text-3xl font-bold pb-2">Jhonny &amp; Manembo</div>

                <div className=" pb-8">Sabtu, 32 Agustus 1990</div>

                <div className="text-sm font-light ">Untuk:</div>
                <div className=" text-lg font-bold pb-8">Jony Morena & Keluarga</div>

                <div className="">
                    <button className="py-2 px-5 border-blue-400 border border-solid">
                        Buka
                    </button>
                </div>
            </div>
        </div>
    );
};

const Invitation1 = () => (
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
            {/*<h1 className="text-red-700 text-lg font-bold">This is INVITATION 1</h1>*/}
            {/*<OpenInvitation/>*/}
            <BottomNavBar music={
                {
                    title: 'Some song Title',
                    artist: 'Jhonxzc',
                    src: 'https://something-something.com/thatsong.mp3',
                }
            }
                          links={
                              [
                                  {title: 'Home', href: '#home'},
                                  {title: 'About', href: '#about'},
                                  {title: 'Something', href: '#about'},
                              ]
                          }/>
            <CustomGallery
                // images={[
                //     {
                //         src: 'https://i.ibb.co/zbwGh8N/image-3.jpg',
                //         thumbnail: '',
                //         width: '1024',
                //         height: '768',
                //     },
                //     {
                //         src: 'https://i.ibb.co/0hNznGf/image-1.jpg',
                //         thumbnail: '',
                //         width: '1024',
                //         height: '768',
                //     },
                //     {
                //         src: 'divider',
                //         divider: <div className='col-span-full text-center'>This is a dividezzzr</div>
                //     },
                //     {
                //         src: 'https://i.ibb.co/wYBCG6b/image-4.jpg',
                //         thumbnail: '',
                //         width: '1024',
                //         height: '768',
                //     },
                //     {
                //         src: 'https://i.ibb.co/Svzfzrw/image-2.jpgg',
                //         thumbnail: '',
                //         width: '1024',
                //         height: '768',
                //     },
                //     {
                //         src: 'https://i.ibb.co/wYBCG6b/image-4.jpg',
                //         thumbnail: '',
                //         width: '1024',
                //         height: '768',
                //     },
                //     {
                //         src: 'https://i.ibb.co/Svzfzrw/image-2.jpgg',
                //         thumbnail: '',
                //         width: '1024',
                //         height: '768',
                //     },
                //
                // ]}
            />
            <Wishes
                sectionPadding="px-4"
                wishes={[
                    {
                        from: "Jhonny Estelle",
                        message: "Good job on finding each other, wishes you all the best",
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
        </div>
    </div>
);

export default Invitation1;
