import React from "react";

const MyButton = ({ color, size, children }) => {
    return(
        <button style={{ color, fontSize: size === 'sm' ? '10px' : size === 'xl' ? '19px' : '12px' }}>{children}</button>
    );
}

/** Use same supertype properties in subtype*/
const MyRedButton = ({ size, children }) => {
    return(
        <MyButton color = 'red' size = {size}>
            {children}
        </MyButton>
    );
}

export default function LSolution(){
    return(
        <div>
            <MyButton color="red" size="sm">
                Click me
            </MyButton>

            <MyRedButton size="xl">
                Click me
            </MyRedButton>
            {/** If you substitute this subtype with its supertype the size is consistent */}
            <MyButton size="xl">
                Click me
            </MyButton>
        </div>
    );
}