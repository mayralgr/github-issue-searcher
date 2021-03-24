import React from 'react'

const IssueCard = props => {
    const { title, html_url, state } = props;
    return (
        <div className="inline-block mt-10 justify-center items-center min-w-min max-w-xs">
            <div className='flex max-w-sm w-full h-64 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-1 m-1'>
                <div className="relative h-10 mb-5"> 
                    {title} 
                </div>
                <div className="relative h-10 mb-5"> 
                    <p className="card-text">{state}</p>
                    <a href={html_url} className="p-3 bg-blue-500 text-white mg-black font-bold py-2 px-4 rounded">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    );
}

export default IssueCard;