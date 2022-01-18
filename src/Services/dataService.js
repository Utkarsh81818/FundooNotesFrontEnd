import axios from 'axios';

const config = {
    headers: {
        "authorization": localStorage.getItem("token"),
    }
}

export function noteAdd(obj)
{
    let response=axios.post("http://localhost:3000/note",obj, config)
    return response;
}