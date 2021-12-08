/* eslint-disable @next/next/no-img-element */
const FooterItem = ({icon, title}) => (
    <div className="flex gap-1 ">
        <div>{icon}</div>
        <p>{title}</p>
    </div>
);

const Footer = ({menuPadding}) => {
    return (
        <div className={(menuPadding ? "pb-24 " : "") + "pt-2 text-xs bg-gray-100"}>
            <div className="text-center ">
                <a href="#">
                    <div className="flex gap-1 justify-center">
                        <div className="self-end flex-none bg-red-400 w-8 h-8"/>
                        <h5 className="self-end">
                            &copy;2021
                            <strong className="pl-1 font-bold text-black text-base">
                                undangankawanua.com
                            </strong>
                        </h5>
                    </div>
                </a>
            </div>
            <div className="border border-gray-400 w-4/5 mx-auto my-2 h-0.5"/>
            <div>
                <div className="flex justify-around text-xs  gap-1">
                    <div>
                        <FooterItem
                            title="Kompleks pasar bawah, Wawalintouan, Tondano."
                            icon={<i className="las la-map self-start pt-0.5"/>}
                        />

                        <FooterItem
                            title="+62 895 2569 9078 (WA, Telegram)"
                            icon={<i className="las la-phone self-start pt-0.5"/>}
                        />

                        <FooterItem
                            title="undangan@meimodev.com"
                            icon={<i className="las la-envelope self-start pt-0.5"/>}
                        />

                        <FooterItem
                            title="@undangankawanua"
                            icon={<i className="lab la-instagram self-start pt-0.5"/>}
                        />
                    </div>
                    <div className="self-center">
                        <div className="text-center">
                            With <span className="text-red-500 text-md">♥ </span>
                            {new Date().getFullYear()}
                            <a target="_blank" href="https://meimodev.com" rel="noreferrer">
                                <img
                                    src="/img/logo-meimo-192.png"
                                    alt="meimo logo"
                                    className="mt-1 object-cover w-20 h-10 ml-auto px-2 py-1 mr-auto bg-gray-500 rounded-md"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
