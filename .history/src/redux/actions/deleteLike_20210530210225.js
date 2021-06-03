export const deleteLike= (like) => {
    return (dispatch) => {
        dispatch({ type: "START_DELETING_LIKE_REQUEST" });
        fetch(`http://localhost:3000/likes/${like.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(() => dispatch({ type: "DELETE_LIKE", like}));
    }
}