import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function setTitle(title) {
    React.useEffect(() => {
        const prevTitle = document.title;
        document.title = title;

        return () => {
            document.title = prevTitle;
        };
    }, []);
}
