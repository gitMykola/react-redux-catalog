export const isPromise = (payload) => {
    return payload && typeof payload.then === 'function';
};
export const setActionError = (message) => {
    return {
        state: !!message,
        message: ( message ? message : '')
    };
};
export const sendData = (data, url) => {
    return fetch("/echo/json/",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
};
