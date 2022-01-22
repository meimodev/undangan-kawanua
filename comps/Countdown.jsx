// noinspection ES6CheckImport

import {useEffect, useState} from "react";
import {PropTypes} from "prop-types";

const CircularHolder = ({time, title}) => {
    return (
        <div
            className=" border-gray-200 border-opacity-50 border-2 bg-gray-300 text-gray-100 bg-opacity-25 rounded-full h-20 w-20 pt-4  ">
            <div>
                <p className="font-bold">{time}</p>
                <p className="text-xs font-light">{title}</p>
            </div>
        </div>
    );
};

const Countdown = ({eventDate, builder}) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(eventDate) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                // seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 60000);

        return () => clearTimeout(timer);
    });

    if (builder) {
        return builder({eventDate, timeLeft});
    }

    return (
        <div className="flex justify-center gap-10">
            {Object.keys(timeLeft).length === 0 ? (
                <div>_EVENT_TYPE_ Just Happened in _EVENT_TIME_</div>
            ) : (
                <></>
            )}

            {Object.keys(timeLeft).map((e) => (
                <CircularHolder key={e} time={timeLeft[e]} title={e}/>
            ))}
        </div>
    );
};

Countdown.propTypes = {
    eventDate: PropTypes.string.isRequired,
};

export default Countdown;
