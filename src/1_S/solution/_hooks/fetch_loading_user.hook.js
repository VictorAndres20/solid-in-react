import React from "react";
import { findAllUserEvent } from "../_events/user/find.event";

export const useFetchLoadingUser = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        findAllUserEvent()
        .then(json => {
            setLoading(false);
            setData(json.list);
        })
        .catch(err => {
            setLoading(false);
            alert(err.message);
        })
    }, []);

    return { data, loading };
}