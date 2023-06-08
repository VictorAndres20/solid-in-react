import React from "react";
import { Link, Outlet } from "react-router-dom";
import { path_modules } from "./app_modules";

const AppTemplate = () => {

    return(
        <>
            <ul>
            {
                Object.entries(path_modules.app.children).map((module, key) => {
                    if(module[1].children){
                        return(
                            <div key={`nav_key_${module[1].path}_${key}`} >
                                {module[1].label}
                                <ul>
                                    {
                                        Object.entries(module[1].children).map((m, key) => (
                                            <li key={`nav_key_${m[1].path}_${key}`} >
                                                <Link to={`${m[1].fullPath}`}>
                                                    {m[1].label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        );
                    }
                    return(
                        <li key={`nav_key_${module[1].path}_${key}`} >
                            <Link to={`${module[1].fullPath}`}>
                                {module[1].label}
                            </Link>
                        </li>
                    );
                })
            }
            </ul>
            <Outlet />
        </>
    );
};

export default AppTemplate;