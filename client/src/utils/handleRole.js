const handleRole = (token) => {
    if (!token) {
        return false;
    } else {
        const tokenParts = token?.split(".");
        const decoded = JSON.parse(atob(tokenParts[1]));

        if (decoded.role != "admin") {
            return false;
        }
    }
    return true;
};
export default handleRole;
