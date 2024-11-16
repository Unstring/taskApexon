import React from 'react'

function Buttons() {
    const buttons = Array(8).fill("Button");
    return (
        <div className="flex flex-wrap gap-4 p-4">
            {buttons.map((label, index) => (
                <button
                    key={index}
                    type="button"
                    className="py-[0.3em] px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                    {label} {index + 1}
                </button>
            ))}
        </div>
    )
}

export default Buttons