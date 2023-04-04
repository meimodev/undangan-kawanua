import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Wishes = ({
	wishes,
	inviteeName,
	enable,
	onNewWishes,
	title,
	sendButtonClassName = "",
	textAreaClassName = "",
	wishesBoxClassName = "",
					fromTextClassName = "",
}) => {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	// const [date, setDate] = useState("");

	const [_wishes, _setWishes] = useState([]);

	const [canSendMessage, setCanSendMessage] = useState(true);
	const [isAlreadyCommented, setIsAlreadyCommented] = useState(false);

	const onClickSend = (e) => {
		e.preventDefault();

		if (!message || !name) {
			return;
		}

		const newDate = dayjs().format("D MMM YYYY, HH:mm");
		const newWishes = { from: name, message, date: newDate, confirm: 0 };
		// setDate(newDate);
		_setWishes([newWishes, ..._wishes]);
		setCanSendMessage(false);
		onNewWishes([newWishes, ...wishes]);
	};

	useEffect(() => {
		_setWishes(wishes);

		setName(inviteeName);
		checkIfNameAlreadyCommented();
	}, [inviteeName, wishes, enable]);

	const checkIfNameAlreadyCommented = () => {
		if (!enable) {
			setCanSendMessage(false);
			return;
		}
		const res = wishes.find((e) => e.from === inviteeName);
		if (res) {
			setCanSendMessage(false);
			setIsAlreadyCommented(true);
		}
	};

	return (
		<div className="mb-24">
			{title ? title : null}
			{canSendMessage ? (
				<div>
					<div className="">
						<label htmlFor="price" className="block text-xs text-gray-500">
							Dari
						</label>

						<div className={`mt-1 relative rounded-md shadow-sm ${fromTextClassName}`}>
							{name ? (
								<div className="px-3 font-bold">{name}</div>
							) : (
								<div className="px-3 font-thin text-xs text-gray-400">
									Nama terisi otomatis dari url
								</div>
							)}
						</div>
					</div>

					<div className="mt-4">
						<label htmlFor="price" className="block text-xs text-gray-500">
							Pesan / Kesan
						</label>
						<div className="mt-1">
							<div className="mt-1 relative rounded-md shadow-sm">
								<textarea
									type="text"
									name="name"
									id="name"
									rows="5"
									className={
										"mt-1 block w-full px-3 py-2 duration-700 bg-white border border-gray-400 rounded-md text-sm placeholder-gray-400 " +
										textAreaClassName
									}
									placeholder="Silahkan masukkan pesan anda..."
									readOnly={false}
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>
						</div>
					</div>

					<div className="flex justify-center">
						<button
							type="submit"
							className={
								"mt-3 p-2 px-4 shadow-lg text-sm rounded-md duration-500 " +
								(message && name
									? "opacity-100 " + sendButtonClassName
									: "text-white bg-gray-500 opacity-75")
							}
							onClick={onClickSend}
						>
							Kirim
						</button>
					</div>
				</div>
			) : null}

			{isAlreadyCommented ? (
				<div className="mx-4 px-2 py-2 mt-2 bg-sky-200 rounded-lg">
					<div className="text-xs font-thin italic">Wish posted! 🎉</div>
				</div>
			) : null}

			<hr className="my-4" />
			{_wishes.map((e, index) => (
				<div
					key={index}
					className={
						wishesBoxClassName
							? wishesBoxClassName
							: "border border-purple-500 px-3  py-3 my-2 rounded-md"
					}
				>
					<div className="flex justify-between">
						<div className="flex gap-1">
							<p className="text-sm font-thin ">{e.from}</p>
							{e.confirm > 0 ? (
								<i className="las la-check-circle text-md text-purple-400" />
							) : null}
						</div>
						<div className="text-xs font-thin text-gray-400">{e.date}</div>
					</div>

					<p className="text-xs font-bold">{e.message}</p>
				</div>
			))}
		</div>
	);
};

Wishes.propTypes = {
	wishes: PropTypes.array,
	title: PropTypes.node,
};

export default Wishes;
