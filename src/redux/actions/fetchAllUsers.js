export const fetchAllUsers = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_ALL_USERS_REQUEST" });
        fetch("http://localhost:3000/users", {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(users => dispatch({ type: "GET_ALL_USERS", users }));
    }
}