import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ComponenList = ({ children }) => {
    console.log(children);
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            numberOfList: children.indexOf(child) + 1
        };

        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponenList>
                <Component />
                <Component />
                <Component />
            </ComponenList>
        </CollapseWrapper>
    );
};

const Component = ({ numberOfList }) => {
    return <div>{numberOfList}: Компонент списка</div>;
};
Component.propTypes = {
    numberOfList: PropTypes.number
};

export default ChildrenExercise;
