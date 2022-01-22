import Photo from "./Photo";
import PropTypes from "prop-types";

const Quotes = ({quotes}) => {
    return (
        <div>
            {quotes.map((e, idx) => (
                <div key={idx}>
                    <div className="mx-9 my-5">
                        <div className="flex gap-1">
                            <p className="text-3xl">&quot;</p>
                            <div>
                                <p className="text-sm pt-2 text-justify">{e.quote}</p>
                                <span className="text-xs">{e.author} </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-200 mt-5 h-64">
                        <Photo useDiv alt={"Image " + (idx + 1)} link={e.photo}/>
                    </div>
                </div>
            ))}
        </div>
    );
};

Quotes.propTypes = {
    quotes: PropTypes.array.isRequired,
}

export default Quotes;