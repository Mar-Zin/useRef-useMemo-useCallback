import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const [state, setState] = useState(false);
    const isAuth = localStorage.getItem("user");

    const onLogin = () => {
        localStorage.setItem("user", "smth");
        setState(!state);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setState(!state);
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
