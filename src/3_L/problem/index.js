import React from "react";

const MyButton = ({ color, size, children }) => {
    return(
        <button style={{ color, fontSize: size === 'sm' ? '10px' : size === 'xl' ? '19px' : '12px' }}>{children}</button>
    );
}

/** The error here is that you cant change supertype properties with other and dont use supertype property*/
const MyRedButton = ({ isBig, children }) => {
    return(
        <MyButton color = 'red' size = { isBig ? 'xl' : null }>
            {children}
        </MyButton>
    );
}

export default function LProblem(){
    return(
        <div>
            <MyButton color="red" size="sm">
                Click me
            </MyButton>

            <MyRedButton isBig={true}>
                Click me
            </MyRedButton>
            {/** If you substitute this subtype with its supertype occurs a problem, the size is not consistent */}
            <MyButton isBig={true}>
                Click me
            </MyButton>
        </div>
    );
}