import React from 'react';

function Typewriter({
    className = "",
    content = "Sample content",
}) {

    return (
        <p className={`text-gray-600 font-sans mb-6 animate-typewriter overflow-hidden whitespace-nowrap ${className}`}>
            {content}
        </p>
    );
}

export default Typewriter;
