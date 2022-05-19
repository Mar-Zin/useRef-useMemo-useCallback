import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWithOutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>{withCallback.current}</p>
            <p>{withOutCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                name="email"
                value={data.email || ""}
                onChange={handleChange}
                type="email"
                id="email"
                className="form-control"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
