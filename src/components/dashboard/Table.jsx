const Table = () => {
  return (
    <div className="flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            className="text-lg"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
          </svg>
          <input
            type="text"
            placeholder="Order ID or transactions ID"
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
            Sort
            <img
              src="/images/button-outlined-sort.png"
              alt="button-outlined-sort"
            />
          </button>
          <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead className="text-[#4D4D4D]">
            <tr className="bg-[#F2F2F2] rounded-lg overflow-hidden">
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Order ID
              </th>
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Status
              </th>
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Transaction ID
              </th>
              <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                Refund Date
              </th>
              <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider">
                Order Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281209
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX123456
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 8:45 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹1125.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281210
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-[#999999] w-2 h-2 rounded-full"></span>
                Processing
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX789012
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Tomorrow, 10:00 AM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹950.50
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281211
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX345678
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Yesterday, 3:30 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹750.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281212
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX901234
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 11:20 AM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹2000.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281213
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-[#999999] w-2 h-2 rounded-full"></span>
                Processing
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX567890
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Tomorrow, 9:00 AM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹1800.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281214
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-[#999999] w-2 h-2 rounded-full"></span>
                Processing
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX098765
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Yesterday, 2:00 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹500.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281215
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX456789
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 10:30 AM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹3000.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281216
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-[#999999] w-2 h-2 rounded-full"></span>
                Processing
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX987654
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Tomorrow, 11:30 AM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹1200.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281217
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-[#999999] w-2 h-2 rounded-full"></span>
                Processing
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX654321
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Yesterday, 4:00 PM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹900.00
              </td>
            </tr>
            <tr className="text-sm">
              <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                #281218
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                Successful
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                TRX234567
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                Today, 9:45 AM
              </td>
              <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                ₹1500.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
