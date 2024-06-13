import { useState } from 'react';

export const useInput = (initalState) => {
    const [value, setValue] = useState(initalState);

    const handler = (e) => {
        const { name, value, files, type } = e.target;

        if (type === 'file') {
            setValue((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            console.log('xxx');
            setValue((prev) => ({ ...prev, [name]: value }));
        }
    };

    console.log(value);

    return [value, handler];
};
