/**
 * 
 * Inthis example, this component has many responsabilities and thats a problem!
 * It does this things:
 * - Handle Fetch data
 * - Handle useEffect and states
 * - Render html
 */
import React from "react";

export default function SProblem(){

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch(`http://127.0.0.1:8001/user/all`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            setLoading(false);
            if(!json.ok) throw new Error(json.error);
            setData(json.list);
        })
        .catch(err => {
            setLoading(false);
            alert(err.message);
        });
    }, []);

    if(loading) return <>Loading...</>

    return(
        <>{data.length}</>
    );
}