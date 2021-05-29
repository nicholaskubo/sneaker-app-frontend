export const addUserShoe = (user_shoe) => {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_USER_SHOE_REQUEST" });
        fetch("http://localhost:3000/user_shoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ user_shoe: user_shoe })
        })
            .then(res => res.json())
            .then(user_shoe => dispatch({ type: "ADD_USER_SHOE", user_shoe }));
    }
}