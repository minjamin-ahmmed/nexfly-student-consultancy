const Transaction = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-slate-900 mb-4">Transaction</h1>
      <p className="text-slate-700 font-medium lg:w-3/4 mb-8">
        Provide your details, and our expert counselors will reach out to
        connect you with the ideal course, country, university, and scholarship
        opportunities!
      </p>

      <div className="bg-white shadow rounded-lg overflow-x-auto overflow-y-scroll mt-8">
        <div className="mb-4 p-4 flex flex-wrap items-center gap-2">
          <h2 className="text-lg text-slate-900 font-semibold">
            Transaction List
          </h2>
          <p className="text-indigo-500 text-sm font-normal px-2 py-1 bg-indigo-50 rounded-3xl">
            No. Transaction
          </p>
        </div>

        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-200">
            <tr className="text-xs lg:text-sm font-semibold text-gray-600 border-b">
              <th className="py-4 px-6 text-center">SL</th>
              <th className="py-4 px-6 text-center">Transaction</th>
              <th className="py-4 px-6 text-center">Date</th>
              <th className="py-4 px-6 text-center">Time</th>
              <th className="py-4 px-6 text-center">Method</th>
              <th className="py-4 px-6 text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">1</td>
              <td className="py-4 px-6 text-center">79116801</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">12.01 PM</td>
              <td className="py-4 px-6 text-center">NAGAD</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
            </tr>

            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">2</td>
              <td className="py-4 px-6 text-center">79116801</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">12.01 PM</td>
              <td className="py-4 px-6 text-center">NAGAD</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
            </tr>

            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">3</td>
              <td className="py-4 px-6 text-center">79116801</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">12.01 PM</td>
              <td className="py-4 px-6 text-center">NAGAD</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
            </tr>

            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">4</td>
              <td className="py-4 px-6 text-center">79116801</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">12.01 PM</td>
              <td className="py-4 px-6 text-center">NAGAD</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
            </tr>

            <tr className="text-xs lg:text-sm text-slate-500 border-b">
              <td className="py-4 px-6 text-center">5</td>
              <td className="py-4 px-6 text-center">79116801</td>
              <td className="py-4 px-6 text-center">September 31, 2015</td>
              <td className="py-4 px-6 text-center">12.01 PM</td>
              <td className="py-4 px-6 text-center">NAGAD</td>
              <td className="py-4 px-6 text-center">10,000 BDT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
