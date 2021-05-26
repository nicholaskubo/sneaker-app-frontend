export const deleteUserShoe= (user_shoe) => {
    return (dispatch) => {
        dispatch({ type: "START_DELETING_USER_SHOE_REQUEST" });
        fetch(`http://localhost:3000/user_shoes/${user_shoe.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(() => dispatch({ type: "DELETE_USER_SHOE", user_shoe}));
    }
}