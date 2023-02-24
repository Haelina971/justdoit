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
// [], {hour: '2-digit', minute: '2-digit'}
export default Clock;