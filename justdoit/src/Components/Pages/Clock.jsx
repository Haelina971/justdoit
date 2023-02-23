import React from "react";

const Clock = () => {

    return (
        <p>
            {new Date().toLocaleTimeString()}
        </p>
    );
}

export default Clock;