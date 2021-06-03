export const fetchAllComments = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_ALL_COMMENTS_REQUEST" });
        fetch("http://localhost:3000/comments", {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(comments => dispatch({ type: "GET_ALL_COMMENTS", comments }));
    }
}