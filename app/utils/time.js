

export const getDate = (epochTime) => {
    d = new Date(0);
    d.setUTCSeconds(epochTime);
    return d.toLocaleDateString()
}

export const getTime = (epochTime) => {
    d = new Date(0);
    d.setUTCSeconds(epochTime);
    return d.toLocaleString()
}
