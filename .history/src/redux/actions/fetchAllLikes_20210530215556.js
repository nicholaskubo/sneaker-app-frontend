export const fetchAllLikes = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_ALL_LIKES_REQUEST" });
        fetch("http://localhost:3000/likes", {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(likes => dispatch({ type: "GET_ALL_LIKES", likes }));
    }
}