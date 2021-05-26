export const fetchAllUserShoes = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_ALL_USER_SHOES_REQUEST" });
        fetch("http://localhost:3000/user_shoes", {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(user_shoes => dispatch({ type: "GET_ALL_USER_SHOES", user_shoes }));
    }
}