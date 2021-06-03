export const addComment = (comment) => {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_COMMENT_REQUEST" });
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ comment: comment })
        })
            .then(res => res.json())
            .then(comment => dispatch({ type: "ADD_COMMENT", comment }));
    }
}