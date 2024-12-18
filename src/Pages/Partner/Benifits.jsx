import icon from "../../assets/benifits-Icon.png";
import benifitImg from "../../assets/benefits.png";
const Benifits = () => {
  return (
    <div className="p-5 md:p-10 lg:p-20">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-medium text-slate-900 mb-8">
        Benifits
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
        <div className="lg:w-1/2">
          <div className="flex items-start gap-3 mb-4">
            <div>
              <img className="w-10" src={icon} alt="" />
            </div>
            <p className="font-medium text-slate-900 text-lg">
              Academic Qualification:{" "}
              <span className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur. Viverra interdum at
                elementum adipiscing placerat dignissim sagittis.
              </span>{" "}
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div>
              <img className="w-10" src={icon} alt="" />
            </div>
            <p className="font-medium text-slate-900 text-lg">
              Language Proficiency:{" "}
              <span className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur. Viverra interdum at
                elementum adipiscing placerat dignissim sagittis.
              </span>{" "}
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div>
              <img className="w-10" src={icon} alt="" />
            </div>
            <p className="font-medium text-slate-900 text-lg">
              Entrance:{" "}
              <span className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur. Viverra interdum at
                elementum adipiscing placerat dignissim sagittis.
              </span>{" "}
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div>
              <img className="w-10" src={icon} alt="" />
            </div>
            <p className="font-medium text-slate-900 text-lg">
              Entrance:{" "}
              <span className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur. Viverra interdum at
                elementum adipiscing placerat dignissim sagittis.
              </span>{" "}
            </p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div>
              <img className="w-10" src={icon} alt="" />
            </div>
            <p className="font-medium text-slate-900 text-lg">
              Entrance:{" "}
              <span className="text-sm text-slate-600">
                Lorem ipsum dolor sit amet consectetur. Viverra interdum at
                elementum adipiscing placerat dignissim sagittis.
              </span>{" "}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img src={benifitImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benifits;
