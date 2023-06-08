import React from "react";

/** 
 * Component that can be extended to create many others components 
 * Extend component, not Modify
*/
function TitleButton({ title, children }){
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{title}</span>
            {children}
        </div>
    );
}

function TitleLink({ title, label, href }){
    return(
        <TitleButton title={title}>
            <div>
                <a href={href}>{label}</a>
            </div>
        </TitleButton>
    );
}

export default function OSolution(){
    return(
        <div>
            <TitleButton title="Open Clouse Principle Solution" />
            <TitleLink title="Open Clouse Principle Solution" label="Click me" href="https://koalas.com.co" />
            <TitleButton title="Open Clouse Principle Solution">
                <button onClick={() => alert("hi")}>Click me</button>
            </TitleButton>
        </div>
    );
}