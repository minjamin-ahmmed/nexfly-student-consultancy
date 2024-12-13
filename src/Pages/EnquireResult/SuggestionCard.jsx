
const SuggestionCard = ({ suggestion }) => {
    const { image, course, country, description } = suggestion
    return (
        <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/3">
                <img src={image} alt="{course}" />
            </div>

            <div className="lg:w-2/3 space-y-2">
                <h1 className="text-2xl font-medium"> {course} </h1>
                <p className="text-indigo-500 font-medium text-[16px]"> {country} </p>
                <p className="text-sm text-slate-700"> {description} </p>
            </div>
        </div>
    );
};

export default SuggestionCard;