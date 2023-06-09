import React from 'react';
import Thumbnail from './Thumbnail';


const Results = ({ results }) => {
    return (
        <div className='px-5 my-10 sm:grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
            {
                results.map((result) => (
                    <Thumbnail key={result.id} result={result} />
                ))
            }
        </div>
    )
}

export default Results