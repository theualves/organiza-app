import ArrowRight from "@heroicons/react/24/solid/ArrowRightIcon";
import Link from "next/link";

export default function UltimasMovimentacoes() {
  return (
      <div className="relative flex flex-col min-w-0 break-words bg-white border-b border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl border-black-125 rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-4">
          <div className="flex justify-between">
            <h6 className="mb-2 text-green-800 font-bold text-xl">
              Últimas movimentações
            </h6>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="items-center w-full mb-4 align-top border-collapse border-gray-800 ">
            <tbody>
              <tr>
                <td className="p-2 align-middle bg-white border-b w-3/10 whitespace-nowrap ">
                  <div className="flex items-center px-2 py-1">
                    <div className="ml-6">
                      <h6 className="mb-0 text-sm leading-normal dark:text-black">
                        01/09/2023
                      </h6>
                    </div>
                  </div>
                </td>
                <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap ">
                  <div className="flex-1 text-center">
                    <h6 className="mb-0 text-sm leading-normal text-red-600">
                      - R$ 2.000,00
                    </h6>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap ">
                  <div className="flex items-center px-2 py-1">
                    <div className="ml-6">
                      <h6 className="mb-0 text-sm leading-normal dark:text-black">
                        01/09/2023
                      </h6>
                    </div>
                  </div>
                </td>
                <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap ">
                  <div className="flex-1 text-center">
                    <h6 className="mb-0 text-sm leading-normal text-green-600">
                      + R$ 4.000,00
                    </h6>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap ">
                  <div className="flex items-center px-2 py-1">
                    <div className="ml-6">
                      <h6 className="mb-0 text-sm leading-normal dark:text-black">
                        01/09/2023
                      </h6>
                    </div>
                  </div>
                </td>
                <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap ">
                  <div className="flex-1 text-center">
                    <h6 className="mb-0 text-sm leading-normal text-red-600">
                      - R$ 2.000,00
                    </h6>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap">
                  <div className="flex items-center px-2 py-1">
                    <div className="ml-6">
                      <h6 className="mb-0 text-sm leading-normal dark:text-black">
                        01/09/2023
                      </h6>
                    </div>
                  </div>
                </td>
                <td className="p-2 text-sm leading-normal align-middle bg-transparent border-b whitespace-nowrap">
                  <div className="flex-1 text-center">
                    <h6 className="mb-0 text-sm leading-normal text-green-600">
                      + R$ 4.000,00
                    </h6>
                  </div>
                </td>
              </tr>
              <tr>
                  <td className="p-2 align-middle bg-transparent border-0 w-3/10 whitespace-nowrap">
                    <div className="flex items-center px-2 py-1">
                      <div className="ml-6 items-center">
                      <Link href={"/receitas-e-despesas"}>
                        <h6 className="mb-0 text-sm leading-normal text-green-500 font-bold">
                          Ir para a receitas e despesas
                        </h6>
                      </Link>
                      </div>
                    </div>
                  </td>
                <td className="p-2 text-sm leading-normal align-middle bg-transparent border-0 whitespace-nowrap">
                  <div className="flex-1 flex justify-end items-center">
                    <h6 className="mb-0 text-sm leading-normal text-green-500 mr-7">
                      <Link href={"/receitas-e-despesas"}>
                        <ArrowRight height={24} />
                      </Link>
                    </h6>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}
