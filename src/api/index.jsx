import axios from "axios";

export const baseURL = 'https://ecommerce-api.yadisnel.com'

//auth
export const loginURL = baseURL + '/token';

export const fetchLogin = (username, password) => {
    const params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    return axios.post(loginURL, params, config)
}

export const fetchProductApi = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/product.json`);
};

export const fetchChatApi1 = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/chatMember.json`);
};

export const fetchChatApi2 = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/chat.chats.json`);
};

export const fetchEmailApi = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/email.json`);
};

export const fetchBookmaekApi = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/bookmark.json`);
};

export const fetchTodoApi = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/todo.json`);
};

export const fetchTaskApi = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/task.json`);
};

export const fetchProjectApi = () => {
    return axios.get(`${process.env.PUBLIC_URL}/api/project.json`);
};
