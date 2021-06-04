export function editUser(user) {
    let user_id = props.location.pathname.split("/")[2]
    return (dispatch) => {
        dispatch({ type: 'START_EDITING_USER_REQUEST' });

        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({user})
        };
        fetch(`http://localhost:3000/users/${user_id}`, configObj)
            .then(response => response.json())
            .then(user => {
                console.log(user)
                dispatch({ type: 'EDIT_USER', user })});
    };
}