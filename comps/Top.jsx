import Countdown from "./Countdown";

import Image from "next/image";
import PropTypes from "prop-types";

const Top = ({ eventDate, topImage, className, children }) => {
	return (
		<div className={className}>
			{children ? (
				children
			) : (
				<div className="h-screen w-screen">
					<Image
						className="opacity-75"
						src={topImage}
						layout="fill"
						alt="Cover Image"
					/>
					<div className="absolute bottom-32 left-0 right-0 mt-10">
						<div className="flex-row text-center">
							<div className="text-3xl">Jhon &amp; Manembo</div>
							<div className="mt-5">
								<Countdown eventDate={eventDate} />
							</div>
							<div className="mt-10">
								<button className="border border-gray-400 p-4 rounded-md font-bold text-gray-300 bg-opacity-50 bg-gray-400">
									Save Date
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

Top.propTypes = {
	eventDate: PropTypes.string.isRequired,
	topImage: PropTypes.string,
};

export default Top;
