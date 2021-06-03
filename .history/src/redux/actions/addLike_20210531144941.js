export const addLike = (likew) => {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_LIKE_REQUEST" });
        fetch("http://localhost:3000/likes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ like: likew })
        })
            .then(res => res.json())
            .then(like => dispatch({ type: "ADD_LIKE", like }));
    }
}