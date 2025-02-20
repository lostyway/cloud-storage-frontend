import {API_LOGIN} from "../../../UrlConstants.jsx";
import {throwSpecifyException} from "../../../exception/ThrowSpecifyException.jsx";


export const sendLoginForm = async (registrationData) => {

    const response = await fetch(API_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',

        body: JSON.stringify(registrationData),
    });


    console.log(response);
    if (!response.ok) {
        const errorMessage = await response.json();

        throwSpecifyException(response.status, errorMessage);
    }

    return await response.json(response);
}