export default function BalancoGeral() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white border-b border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl border-black-125 rounded-lg bg-clip-border">
      <div className="relative flex flex-col min-w-0 break-words bg-white border-b border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl border-black-125 rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-4">
          <div className="flex justify-between">
            <h6 className="mb-2 text-green-800 font-bold text-xl">
              Balanço Geral
            </h6>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="bg-white shadow-md rounded px-8 py-6 flex items-center">
            <div className="w-3/4 pr-4">
              <table className="items-center w-full align-top border-collapse border-gray-800">
                <tbody>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-0 w-1/4 whitespace-nowrap font-bold">
                      Ganhos
                    </td>
                    <td className="p-2 align-middle bg-transparent border-0 w-1/4 whitespace-nowrap"></td>
                    <td className="p-2 text-sm leading-normal align-middle bg-transparent border-0 w-1/4 whitespace-nowrap">
                      <div className="flex-1 text-center">
                        <h6 className="mb-0 text-sm leading-normal text-green-600 font-bold">
                          R$ 6.000,00
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap font-bold">
                      Retiradas
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap "></td>
                    <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap ">
                      <div className="flex-1 text-center">
                        <h6 className="mb-0 text-sm leading-normal text-red-600 font-bold">
                          R$ 2.000,00
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap "></td>
                  </tr>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap font-bold">
                      Balanço
                    </td>
                    <td className="p-2 align-middle bg-transparent border-0 whitespace-nowrap"></td>
                    <td className="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap">
                      <div className="flex-1 text-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold">
                          R$ 4.000,00
                        </h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-1/4">
              <div className="flex items-end ml-8">
                <div
                  className="bg-green-800"
                  style={{ height: `${100}px`, width: "20px" }}
                ></div>
                <div
                  className="bg-green-600 ml-2"
                  style={{ height: `${80}px`, width: "20px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
