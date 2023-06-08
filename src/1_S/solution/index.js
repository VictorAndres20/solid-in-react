import React from "react";
import { useFetchLoadingUser } from "./_hooks/fetch_loading_user.hook";

export default function SSolution(){

    const { data, loading } = useFetchLoadingUser();

    if(loading) return <>Loading...</>

    return(
        <>{data.length}</>
    );
}