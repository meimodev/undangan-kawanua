/* eslint-disable @next/next/no-img-element */
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import PropTypes from "prop-types";

const CustomGallery = ({ images, isTitleDisabled, title }) => {
	if (!images) {
		return <div />;
	}

	return (
		<div>
			{isTitleDisabled ? null : title ? (
				title
			) : (
				<div className="text-center">Gallery</div>
			)}
			<div className="grid grid-cols-2 gap-1">
				<Gallery options={{ modal: false, loop: false, pinchToClose: false }}>
					{images.map((e, idx) => {
						if (e.src === "divider") {
							return e.divider;
						}

						// noinspection JSValidateTypes
						return (
							<Item
								key={idx}
								original={e.src}
								thumbnail={e.thumbnail}
								width={e.oriWidth}
								height={e.oriHeight}
							>
								{({ ref, open }) => (
									<div>
										{e.hide ? (
											<div className="w-0 h-0" ref={ref} key={idx}></div>
										) : (
											<img
												key={idx}
												className="w-full"
												ref={ref}
												height={e.thumbnailHeight}
												onClick={open}
												src={e.thumbnail ? e.thumbnail : e.src}
												alt={e.alt ? e.alt : "images " + idx}
											/>
										)}
									</div>
								)}
							</Item>
						);
					})}
				</Gallery>
			</div>
		</div>
	);
};

CustomGallery.propsType = {
	images: PropTypes.array,
	isTitleDisabled: PropTypes.bool,
	title: PropTypes.node,
};
export default CustomGallery;
