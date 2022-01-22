import PropTypes from "prop-types";

const Hosts = ({hosts, builder}) => {
    if (builder) {
        return builder(hosts);
    }
    return (
        <div>
            {hosts.map((e, idx) => {
                const align = (idx + 1) % 2 !== 0 ? "left" : "right";
                return (
                    <div
                        key={idx}
                        className={
                            (align === "right" ? "ml-auto mr-4 " : "ml-4 mr-auto ") +
                            " text-sm my-10 z-10"
                        }
                    >
                        <div className={`text-${align} font-bold text-2xl`}>
                            {e.nickname}
                        </div>
                        <div
                            className={
                                (align === "right" ? "justify-end" : "justify-start") +
                                " flex gap-3 mt-2"
                            }
                        >
                            <div
                                className={
                                    (align === "right" ? "order-last" : "") +
                                    " flex-none self-center  border border-gray-400 bg-blue-500 rounded-full w-24 h-24 "
                                }
                            ></div>
                            <div className={`order text-${align}`}>
                                <p className="text-md font-medium">{e.name}</p>
                                <div className="text-xs font-light">{e.desc}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
Hosts.propTypes = {
    hosts: PropTypes.array.isRequired,
};
export default Hosts;
