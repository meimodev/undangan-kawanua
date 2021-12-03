const Wishes = ({wishes, sectionPadding}) => {
    return (
        <div className={sectionPadding}>
            <div className="text-center font-bold my-2">Wishes</div>
            <div className="">
                <label
                    htmlFor="price"
                    className="block text-xs font-medium text-gray-700"
                >
                    Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="px-4 block w-full border text-sm text-gray-400 border-gray-50 rounded-sm p-2 bg-gray-100 cursor-not-allowed"
                        value="Jhonny Goodie"
                        readOnly={true}
                    />
                </div>
            </div>

            <div className="mt-2">
                <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-700"
                >
                    Wishes
                </label>
                <div className="mt-1">
                    <div className="mt-1 relative rounded-md shadow-sm">
            <textarea
                type="text"
                name="name"
                id="name"
                rows="5"
                className=" px-4 block w-full border text-sm border-gray-700 rounded-sm p-2"
                placeholder="Message goes here ..."
            />
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <p className="mt-1 text-xs font-light text-gray-200">
                    Be brief, be kind, be bold
                </p>
                <button
                    type="submit"
                    className="mt-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600"
                >
                    Send
                </button>
            </div>

            <hr className="my-4"/>
            {wishes.map((e, index) => (
                <div
                    key={index}
                    className="border border-blue-400 px-4 py-3 my-2 rounded-md"
                >
                    <div className="flex gap-1">
                        <p className="text-sm font-light ">{e.from}</p>
                        {e.confirm > 0 ? (
                            <i className="las la-check-circle text-xs text-blue-700"/>
                        ) : (
                            <></>
                        )}
                    </div>
                    <p className="text-xs">{e.message}</p>
                </div>
            ))}
        </div>
    );
};
export default Wishes;
