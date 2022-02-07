const listHandler = (arr) => {
    return [... new Set(arr.sort((a, b) => {
        return a - b;
    }))];
}

module.exports = {listHandler}