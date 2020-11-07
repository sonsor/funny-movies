import storage from "./storage";
import {TOKEN_KEY} from "../constants";

/**
 * @description modify request header with authorization token/ client-id
 * @param {*} request {HttpRequest}
 * @return {null}
 */
const tokenInterceptor = request => {
    const token = storage.get(TOKEN_KEY)
    if (token && request.url.indexOf('youtube') < 0) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
}

/**
 * @description get response
 * @param {*} response {HttpResponse}
 * @return {null}
 */
const successInterceptor = response => console.log(`Success Interceptor:: ${response}`);


/**
 * @description get error
 * @param {*} response {HttpResponse}
 * @return {null}
 */
const errorInterceptor = error => console.error(error);

export {
    tokenInterceptor,
    successInterceptor,
    errorInterceptor
};