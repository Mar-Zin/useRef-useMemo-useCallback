import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [toggle, setToggle] = useState(true);
    const blockRef = useRef();

    const sizeChange = () => {
        if (toggle) {
            blockRef.current.style.height = "150px";
            blockRef.current.style.width = "80px";
        } else {
            blockRef.current.style.height = "40px";
            blockRef.current.style.width = "60px";
        }
        setToggle((prevState) => !prevState);
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                role="button"
                ref={blockRef}
                onClick={sizeChange}
            >
                <small>Блок</small>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
