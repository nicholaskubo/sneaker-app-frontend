export const addShoe = (shoe) => {
    return (dispatch) => {
        dispatch({ type: "START_ADDING_SHOE" });
        fetch("http://localhost:3000/user_shoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ shoe: shoe })
        })
            .then(res => res.json())
            .then(shoe => dispatch({ type: "ADD_SHOE", shoe }));
    }
}