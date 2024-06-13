import { useState } from 'react';

export const useInput = (initalState) => {
    const [value, setValue] = useState(initalState);

    const handler = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({ ...prev, [name]: value }));
    };

    // console.log(value);

    return [value, handler];
};
