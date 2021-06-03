export const deleteComment= (comment) => {
    return (dispatch) => {
        dispatch({ type: "START_DELETING_COMMENT_REQUEST" });
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(() => dispatch({ type: "DELETE_COMMENT", comment}));
    }
}