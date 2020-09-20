import firebase from "firebase/app";
export const GET_USERS = 'GET_USERS';



export const getUsers = () => async (dispatch) => {
    try {
        //tries to access Users Collection and storing users Array in the Store.
        firebase
            .firestore()
            .collection(`users`)
            .get()
            .then(function (doc) {
                let userArr = doc.docs.map(user => user.data());
                dispatch({ type: GET_USERS, payload: userArr });
            })
            .catch(function (error) {
                console.log("Error getting document:", error);
            })
    }
    catch (error) {
        console.log(error);
    }

}
