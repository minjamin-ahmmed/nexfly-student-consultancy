const UploadFiles = () => {
  return (
    <div className="lg:px-10">
      <h1 className="text-3xl font-medium text-slate-900 mb-4">Files</h1>
      <p className="text-slate-700 font-medium lg:w-3/4 mb-8">
        Provide your details, and our expert counselors will reach out to
        connect you with the ideal course, country, university, and scholarship
        opportunities!
      </p>

      <h1 className="text-xl font-medium text-slate-900 mb-4">Identity</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
        <div className="bg-indigo-50 p-4 lg:p-6 rounded-2xl">
          <p className="text-slate-900 text-[16px]  font-semibold mb-4">
            Passport
          </p>
          <button className="bg-indigo-500 text-white font-semibold rounded-[100px] px-12 py-4 w-full">
            Download File
          </button>
        </div>

        <div className="bg-indigo-50 p-4 lg:p-6 rounded-2xl">
          <p className="text-slate-900 text-[16px]  font-semibold mb-4">NID</p>
          <button className="text-indigo-500 bg-transparent border border-indigo-500 font-semibold rounded-[100px] px-12 py-4 w-full">
            Upload File
          </button>
        </div>
      </div>

      <h1 className="text-xl font-medium text-slate-900 mb-4 mt-8">
        Academic Certificate
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
        <div className="bg-indigo-50 p-4 lg:p-6 rounded-2xl">
          <p className="text-slate-900 text-[16px] font-semibold mb-4">
            SSC Marksheet
          </p>
          <button className="text-indigo-500 bg-transparent border border-indigo-500 font-semibold rounded-[100px] px-12 py-4 w-full">
            Upload File
          </button>
        </div>

        <div className="bg-indigo-50 p-4 lg:p-6 rounded-2xl">
          <p className="text-slate-900 text-[16px] font-semibold mb-4">
            HSC Marksheet
          </p>
          <button className="text-indigo-500 bg-transparent border border-indigo-500 font-semibold rounded-[100px] px-12 py-4 w-full">
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadFiles;
