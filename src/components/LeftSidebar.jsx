import React from 'react';

const LeftSidebar = () => {
  return (
    <div
                id="hs-application-sidebar"
                className="hs-overlay  [--auto-close:lg]
                        hs-overlay-open:translate-x-0
                        -translate-x-full transition-all duration-300 transform
                        w-20 h-full
                        hidden
                        fixed inset-y-0 start-0 z-[60]
                        bg-white border-e border-gray-200
                        lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
                        dark:bg-neutral-800 dark:border-neutral-700"
                role="dialog"
                tabIndex={-1}
                aria-label="Sidebar"
            >
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-3">
                        {/* Logo */}
                        <a
                            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                            href="#"
                            aria-label="Preline"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="svg3794"
                                viewBox="0 0 300 300"
                                className="w-10 h-auto"
                                height={300}
                                width={300}
                            >
                                <defs id="defs3796" />

                                <g transform="translate(-318.33375,-439.74274)" id="layer1">
                                    <g transform="matrix(4.579965,0,0,-4.579965,468.34291,456.8459)" id="g3460">
                                        <path
                                            id="path3462"
                                            style={{
                                                fill: "#007db8",
                                                fillOpacity: 1,
                                                fillRule: "nonzero",
                                                stroke: "none"
                                            }}
                                            d="m 0,0 c -8.01,0 -15.264,-3.249 -20.516,-8.505 -5.254,-5.244 -8.501,-12.502 -8.501,-20.516 0,-8.008 3.247,-15.261 8.501,-20.507 5.252,-5.249 12.506,-8.504 20.516,-8.504 8.012,0 15.27,3.255 20.514,8.504 5.252,5.246 8.492,12.499 8.492,20.507 0,8.014 -3.24,15.272 -8.492,20.516 C 15.27,-3.249 8.012,0 0,0 m 0,3.516 c 17.965,0 32.531,-14.568 32.531,-32.537 0,-17.963 -14.566,-32.529 -32.531,-32.529 -17.963,0 -32.535,14.566 -32.535,32.529 0,17.969 14.572,32.537 32.535,32.537"
                                        />
                                    </g>
                                    <g
                                        transform="matrix(4.579965,0,0,-4.579965,397.87238,588.54693)"
                                        id="g3464"
                                    >
                                        <path
                                            id="path3466"
                                            style={{
                                                fill: "#007db8",
                                                fillOpacity: 1,
                                                fillRule: "nonzero",
                                                stroke: "none"
                                            }}
                                            d="m 0,0 c 0,1.896 -1.258,2.973 -3.039,2.973 l -1.09,0 0,-5.948 1.059,0 C -1.414,-2.975 0,-2.075 0,0 M 19.389,-2.14 11.359,-8.463 4.02,-2.685 C 2.961,-5.229 0.402,-6.996 -2.545,-6.996 l -6.281,0 0,13.992 6.281,0 c 3.293,0 5.666,-2.094 6.563,-4.325 l 7.341,5.772 2.719,-2.14 -6.728,-5.288 1.293,-1.012 6.726,5.285 2.723,-2.134 -6.727,-5.294 1.291,-1.014 6.733,5.295 0,4.855 4.881,0 0,-9.908 4.869,0 0,-4.101 -9.75,0 0,4.873 z m 15.933,-0.774 4.867,0 0,-4.099 -9.753,0 0,14.009 4.886,0 0,-9.91 z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </a>
                        {/* End Logo */}
                    </div>
                    {/* Content */}
                    <div className="h-full mt-10  overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <nav
                            className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
                            data-hs-accordion-always-open=""
                        >
                            <ul className="flex flex-col space-y-4">
                                <li>
                                    <a
                                        className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                                        href="#"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-list"
                                        >
                                            <path d="M3 12h.01" />
                                            <path d="M3 18h.01" />
                                            <path d="M3 6h.01" />
                                            <path d="M8 12h13" />
                                            <path d="M8 18h13" />
                                            <path d="M8 6h13" />
                                        </svg>

                                    </a>
                                </li>



                                <li>
                                    <a
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                                        href="#"
                                    >
                                        <svg
                                            data-v-f6279e27=""
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={32}
                                            height={32}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-layout-grid lucide-icon"
                                        >
                                            <rect width={7} height={7} x={3} y={3} rx={1} />
                                            <rect width={7} height={7} x={14} y={3} rx={1} />
                                            <rect width={7} height={7} x={14} y={14} rx={1} />
                                            <rect width={7} height={7} x={3} y={14} rx={1} />
                                        </svg>

                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    {/* End Content */}
                </div>
            </div>
  );
};

export default LeftSidebar;
