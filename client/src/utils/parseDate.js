const parseDate = (originalTimestamp) => {
    const dateObject = new Date(originalTimestamp);
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = dateObject.toLocaleDateString(undefined, options);
    return formattedDate;
};
export default parseDate;
