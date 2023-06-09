import { getUserData } from "../util.js";

const host = 'https://parseapi.back4app.com';

const applicationId = '5pxuukklCveHW67o6JkWQHeTWHYQXxLQEgLHLDzQ';
const apiId = '3L7lEIBfIAuuoJhJLDBrAFp4KL6KMcrJQvfSSvkB';

async function request(method, url = '/', data){
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': applicationId,
            'X-Parse-JavaScript-Key': apiId
        }
    }

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if(userData){
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if(response.status == 204){
            return response;
        }

        const result = await response.json();

        if(response.ok != true){

            console.log(result);
            throw new Error(result.message || result.error);
        }

        return result;
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');