import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedModule, setSelectedScopeArea, setSelectedPRI } from '../features/scopePriMaping/ListingsSlice';
import useCurrentUserAccess from '../hooks/useCurrentUserAccess';
import { selectSelectedModule, selectSelectedScopeArea, selectSelectedPRI } from '../features/scopePriMaping/ListingsSlice';

function Tabs({ modules }) {
    const [activeTab, setActiveTab] = useState(0);
    const [activeScope, setActiveScope] = useState(0);
    const dispatch = useDispatch();
    const currentUserAccess = useCurrentUserAccess();

    // Retrieve the current selected PRI from the Redux store
    const selectedPRI = useSelector(selectSelectedPRI);

    // Helper functions to check if the user has access to a given Scope Area and PRI
    const hasScopeAccess = (scopeAreaName) => {
        return currentUserAccess.some((scope) => scope['Scope Area'] === scopeAreaName);
    };

    const hasPriAccess = (scopeAreaName, priName) => {
        const scope = currentUserAccess.find((scope) => scope['Scope Area'] === scopeAreaName);
        return scope?.PRIs.some((pri) => pri['PRI Name'] === priName);
    };

    // Set the default PRI and dispatch the selection actions on component mount and when activeTab or activeScope changes
    useEffect(() => {
        const defaultPRI = modules[activeTab]?.['Scope Areas'][activeScope]?.PRIs[0] || '';
        dispatch(setSelectedModule(modules[activeTab].Module));
        dispatch(setSelectedScopeArea(modules[activeTab]['Scope Areas'][activeScope]['Scope Area']));
        dispatch(setSelectedPRI(defaultPRI));
    }, [activeTab, activeScope, modules, dispatch]);

    return (
        <>
            <div className="border-b border-gray-200 dark:border-neutral-700">
                <nav className="flex gap-x-8" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    {modules.map((module, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-500 ${
                                activeTab === index ? 'border-blue-600 text-blue-600 font-semibold' : ''
                            }`}
                            onClick={() => {
                                setActiveTab(index);
                                setActiveScope(0); // Reset to the first scope area when switching modules
                                dispatch(setSelectedModule(module.Module));
                            }}
                            aria-selected={activeTab === index}
                            role="tab"
                        >
                            {module.Module}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="mt-3">
                {modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} role="tabpanel" className={activeTab === moduleIndex ? '' : 'hidden'}>
                        <div className="mt-2 flex flex-wrap gap-4">
                            {module['Scope Areas'].map((scope, scopeIndex) => (
                                <button
                                    key={scopeIndex}
                                    type="button"
                                    onClick={() => {
                                        setActiveScope(scopeIndex);
                                        dispatch(setSelectedScopeArea(scope['Scope Area']));
                                    }}
                                    className={`py-2 px-8 text-sm font-medium rounded-2xl  border ${
                                        activeScope === scopeIndex ? 'bg-blue-500 text-white' : 'border-gray-200 bg-blue-200'
                                    } ${hasScopeAccess(scope['Scope Area']) ? '' : 'cursor-not-allowed bg-gray-200'} focus:outline-none`}
                                    disabled={!hasScopeAccess(scope['Scope Area'])}
                                >
                                    {scope['Scope Area']}
                                </button>
                            ))}
                        </div>

                        <div className="mt-4">
                            <div className="flex gap-2  flex-wrap mt-2 ">
                                {module['Scope Areas'][activeScope].PRIs.map((pri, priIndex) => (
                                    <button
                                        key={priIndex}
                                        type="button"
                                        onClick={() => {
                                            dispatch(setSelectedPRI(pri));
                                        }}
                                        className={`py-2 px-8 text-sm font-medium rounded-2xl border ${
                                            pri === selectedPRI ? 'bg-blue-500 text-white' : 'border-gray-200 bg-blue-200'
                                        } ${hasPriAccess(module['Scope Areas'][activeScope]['Scope Area'], pri) ? '' : 'cursor-not-allowed bg-gray-200'} focus:outline-none`}
                                        disabled={!hasPriAccess(module['Scope Areas'][activeScope]['Scope Area'], pri)}
                                    >
                                        {pri}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Tabs;
