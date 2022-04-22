/* eslint-disable @next/next/no-img-element */

import Meta from "../../../comps/Meta";

const KyrieSambur = () => {
	return (
		<div>
			<Meta title="Birthday Party | Kyrie Sambur">
				<link
					rel="stylesheet"
					href={
						"https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
					}
				/>
			</Meta>
			<div>
				<img src="https://i.ibb.co/Th2L2HF/Kyrie.jpg" alt="background image" />
				<div className="relative">
					<div className="fixed right-1 bottom-6  left-1 ">
						<div className="text-center">
							<a
								href="https://goo.gl/maps/GFwY7TgzbKssZKVA9"
								target="_blank"
								rel="noreferrer"
								className="bg-blue-500 p-4 rounded-md font-poppins text-md font-bold text-gray-100 shadow-lg"
							>
								<i
									className="las la-map-marker
                                 text-lg font-bold"
								/>{" "}
								<span className="">MAPS</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KyrieSambur;
