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

const Countdown = () => {
    return (
        <div className="flex justify-center gap-10">
            <CircularHolder time="52" title="Hari"/>
            <CircularHolder time="04" title="Jam"/>
            <CircularHolder time="59" title="Menit"/>
        </div>
    );
};

export default Countdown;
