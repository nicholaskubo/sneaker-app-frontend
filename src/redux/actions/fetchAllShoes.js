export const fetchAllShoes = () => {
    return (dispatch) => {
        dispatch({ type: "START_GETTING_ALL_SHOES_REQUEST" });
        fetch("http://localhost:3000/shoes", {
            method: "GET",
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(shoes => dispatch({ type: "GET_ALL_SHOES", shoes }));
    }
}