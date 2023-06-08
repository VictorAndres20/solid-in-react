/**
 * 
 * This component has the problem that if you want to add a new type of button in the TitleButton component
 * you will need to Modify TitleButton component and maybe crash all implementation of it
 * 
 * OCP says you need to Extend not Modify
 * 
 * Solution, play with children prop
 * 
 */

import React from "react";

function TitleButton({ title, type, label, href, onClick }){
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{title}</span>

            {
                type === "link" && (
                    <div> 
                        <a href={href}>{label}</a>
                    </div>
                )
            }

            {
                type === "btn" && (
                    <button onClick={() => onClick()}>{label}</button>
                )
            }

        </div>
    );
}

export default function OProblem(){
    return(
        <div>
            <TitleButton  
                title="Open Clouse Principle Problem"
                type=""
                label=""
                href=""
                onClick={() => {}}
            />
            <TitleButton  
                title="Open Clouse Principle Problem"
                type="link"
                label="Click me"
                href="https://koalas.com.co"
                onClick={() => {}}
            />
            <TitleButton  
                title="Open Clouse Principle Problem"
                type="btn"
                label="Click me"
                href=""
                onClick={() => {alert("Hi")}}
            />
        </div>
    );
}