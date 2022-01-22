import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import dayjs from "dayjs";

const Wishes = ({wishes, inviteeName, onNewWishes}) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    // const [date, setDate] = useState("");

    const [_wishes, _setWishes] = useState([]);

    const [canSendMessage, setCanSendMessage] = useState(true);

    const onClickSend = (e) => {
        e.preventDefault();

        if (!message || !name) {
            return;
        }

        const newDate = dayjs().format("D MMM YYYY, HH:mm");
        const newWishes = {from: name, message, date: newDate, confirm: 0};
        // setDate(newDate);
        _setWishes([newWishes, ..._wishes]);
        setCanSendMessage(false);
        onNewWishes([newWishes, ...wishes]);
    };

    useEffect(() => {
        _setWishes(wishes);

        setName(inviteeName);
        checkIfNameAlreadyCommented();
    }, [inviteeName, wishes]);

    const checkIfNameAlreadyCommented = () => {
        const res = wishes.find((e) => e.from == inviteeName);
        if (res) {
            setCanSendMessage(false);
        }
    };

    return (
        <div className="">
            {canSendMessage ? (
                <div>
                    <div className="pt-10">
                        <label htmlFor="price" className="block text-xs text-gray-500">
                            Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm ">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className=" px-4 block w-full border text-sm border-gray-500 rounded-sm p-2 font-thin"
                                value={name}
                                readOnly={false}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mt-2">
                        <label htmlFor="message" className="block text-xs text-gray-500">
                            Wishes
                        </label>
                        <div className="mt-1">
                            <div className="mt-1 relative rounded-md shadow-sm">
								<textarea
                                    type="text"
                                    name="name"
                                    id="name"
                                    rows="5"
                                    className=" px-4 block w-full border text-xs border-gray-500 rounded-sm p-2 "
                                    placeholder="Message goes here ..."
                                    readOnly={false}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        {/* <p className="mt-1 text-xs font-light text-gray-200">
					Be brief, be kind, be bold
				</p> */}
                        <button
                            type="submit"
                            className={
                                "mt-3 p-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white " +
                                (message && name
                                    ? "bg-purple-500 opacity-100"
                                    : "bg-gray-500 opacity-75")
                            }
                            onClick={onClickSend}
                        >
                            Kirim
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className="text-4xl text-center"
                    style={{fontFamily: "Meow Script"}}
                >
                    Wishes
                </div>
            )}

            <hr className="my-4"/>
            {_wishes.map((e, index) => (
                <div
                    key={index}
                    className="border border-purple-500 px-3  py-3 my-2 rounded-md"
                >
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            <p className="text-sm font-thin ">{e.from}</p>
                            {e.confirm > 0 ? (
                                <i className="las la-check-circle text-md text-purple-400"/>
                            ) : null}
                        </div>
                        <div className="text-xs font-thin">{e.date}</div>
                    </div>

                    <p className="text-xs ">{e.message}</p>
                </div>
            ))}
        </div>
    );
};

Wishes.propTypes = {
    wishes: PropTypes.array,
};

export default Wishes;
