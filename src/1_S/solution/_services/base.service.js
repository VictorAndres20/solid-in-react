export const HEADERS_OPTIONS = {
    'Content-Type': 'application/json',
};

export const GET_OPTIONS = {
    method: "GET",
    headers: HEADERS_OPTIONS
};

export const POST_OPTIONS = {
    method: "POST",
    headers: HEADERS_OPTIONS
};

export const sendFetch = (path, options, body=null) => {
    if(body !== null) options.body = JSON.stringify(body);
    return new Promise((resolve, reject) => {
        fetch(`http://127.0.0.1:8001${path}`,options)
        .then(res => {
            // console.log("Response: " + res);
            return res.json();
        })
        .then(json => resolve(json))
        .catch(err => reject(err));
    });
}

export const handleFetch = async (path, options, body=null) => {
    let json = await sendFetch(path, options, body);
    if(! json.ok) throw new Error(json.error);
    return json;
}