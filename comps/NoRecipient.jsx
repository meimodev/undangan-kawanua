const NoRecipient = () => {
    return (
        <div
            className={`absolute right-0 bottom-0 left-0 top-0 bg-gray-200 text-blue-900`}
        >
            <div className={`  flex flex-col h-full justify-center items-center`}>
                <div className="text-center">
                    <div className="text-3xl mb-4">No Recepient specified</div>
                    <div className="font-thin ">
                        Contact
                        <a
                            className=" text-red-500 mx-2"
                            href="https://www.undangankawanua.com"
                        >
                            undangankawanua.com
                        </a>
                        for further assistance
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoRecipient;
