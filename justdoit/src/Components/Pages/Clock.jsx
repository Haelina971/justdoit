import React from "react";

const Clock = () => {

    return (
        <div>
            <h4>
                {new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
            </h4>
        </div>
    );
}

export default Clock;