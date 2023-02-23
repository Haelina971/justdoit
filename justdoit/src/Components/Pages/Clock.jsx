import React from "react";

const Clock = () => {

    return (
        <div>
            <h4>
                {new Date().toLocaleTimeString()}
            </h4>
        </div>
    );
}

export default Clock;