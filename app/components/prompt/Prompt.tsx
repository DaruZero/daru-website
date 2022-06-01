import React, { useEffect, useState } from 'react';

export const Prompt = () => {
    const [hostname, setHostname] = useState('');

    useEffect(() =>  {
        if (typeof window !== undefined) {
            setHostname(window.location.hostname)
        }
    }, []);

    return (
        <div>
            <span>
                guest
            </span>
            <span>
                @
            </span>
            <span>
                {hostname}
            </span>
            <span>
                :$ ~
            </span>
        </div>
    )
}

export default Prompt;