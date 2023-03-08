import { useState } from 'react';
import React from 'react';
import {
    FaChevronDown,
    FaChevronUp,
  } from 'react-icons/fa';

function Question ({question, answer}) {
    const [expand, setExpand] = useState(false);

    return (
        <div className="shadow rounded border border-gray-100 border-t-8">
        <div className="p-4 text-xl relative font-medium bg-white">
            <div className="w-5/6">
                {question}
            </div>
            <button aria-label='question-expand-arrow' onClick={() => setExpand(!expand)} className="text-xl absolute right-0 top-0 p-4 focus:outline-none">
                {
                    expand ?  <FaChevronUp size={30} /> : <FaChevronDown size={30} />
                }
            </button>
        </div>
        <div className={expand ? 'display p-4 text-xl bg-white whitespace-pre-wrap' : 'hidden p-4'}>
            {
                answer.split('#').map(line => {
                    return <React.Fragment>{line}<br /></React.Fragment>
                            }
                )
            }

        </div>
    </div>
    )
}

export default Question;