import React, { useState, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

let reRendered = 0;

export function Assignment2() {
    const [count, setCount] = useState(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count + 1);
    };
    reRendered = reRendered + 1;

    return (
        <div>
            <p>This component has rendered {reRendered} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};