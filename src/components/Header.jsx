import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAccess, setCurrentUserAccess } from '../features/users/UsersSlice.js';
import { selectUserAccess } from '../features/users/UsersSlice.js';

const Header = () => {

    const dispatch = useDispatch();
    const userAccess = useSelector(selectUserAccess);
    const [selectedUser, setSelectedUser] = useState('');

    const users = useSelector(state => state.users.accessData);

    useEffect(() => {
        if (users.length > 0) {
            const firstUser = users[0].User;
            setSelectedUser(firstUser);
            dispatch(fetchUserAccess(firstUser));
        }
    }, [dispatch, users]);

    const handleUserSelection = (userName) => {
        setSelectedUser(userName);

        dispatch(fetchUserAccess(userName));
    };



    return (

        <>
            <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px] dark:bg-neutral-800 dark:border-neutral-700">
                <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
                    <div className="me-5 lg:me-0 lg:hidden">
                        {/* Logo */}
                        <a
                            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
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
                    <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
                        <div className="hidden md:block">
                        </div>
                        <div className="flex flex-row items-center justify-end gap-1">
                            {/* Dropdown */}
                            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                <div className="flex items-center gap-x-2">
                                <div className="h-10 border-l-2 border-gray-300 dark:border-gray-600"></div>
                                    <button
                                        id="hs-dropdown-account"
                                        type="button"
                                        className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        aria-label="Dropdown"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-circle-user-round w-8 h-auto text-blue-500"
                                        >
                                            <path d="M18 20a6 6 0 0 0-12 0" />
                                            <circle cx={12} cy={10} r={4} />
                                            <circle cx={12} cy={12} r={10} />
                                        </svg>
                                    </button>
                                    {/* New div for name and role */}
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-gray-800 dark:text-white">{selectedUser}</span>
                                        <span className="text-xs text-gray-500 dark:text-neutral-400">as a controller</span>
                                    </div>
                                </div>

                                <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-dropdown-account"
                                >
                                    <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700">
                                        <p className="text-sm text-gray-500 dark:text-neutral-500">Signed in as</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">{selectedUser}</p>
                                    </div>
                                    <div className="p-1.5 space-y-0.5">
                                        {users.map((user) => (
                                            <a
                                                key={user.User}
                                                onClick={() => handleUserSelection(user.User)} // Set user on click
                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                            >
                                                {user.User}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End Dropdown */}
                        </div>
                    </div>
                </nav>
            </header>
            {/* ========== END HEADER ========== */}
            {/* ========== MAIN CONTENT ========== */}
            <div className="-mt-px">
                {/* Breadcrumb */}
                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
                    <div className="flex items-center py-2">
                        {/* Navigation Toggle */}
                        <button
                            type="button"
                            className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="hs-application-sidebar"
                            aria-label="Toggle navigation"
                            data-hs-overlay="#hs-application-sidebar"
                        >
                            <span className="sr-only">Toggle Navigation</span>
                            <svg
                                className="shrink-0 size-4 text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width={18} height={18} x={3} y={3} rx={2} />
                                <path d="M15 3v18" />
                                <path d="m8 9 3 3-3 3" />
                            </svg>
                        </button>
                        {/* End Navigation Toggle */}
                        {/* Breadcrumb */}
                        {/* <ol className="ms-3 flex items-center whitespace-nowrap">
                            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                                Application Layout
                                <svg
                                    className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </li>
                            <li
                                className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
                                aria-current="page"
                            >
                                Dashboard
                            </li>
                        </ol> */}
                        {/* End Breadcrumb */}
                    </div>
                </div>
                {/* End Breadcrumb */}
            </div>
        </>

    );
};

export default Header;