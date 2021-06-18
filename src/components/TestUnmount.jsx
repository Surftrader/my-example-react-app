import { useState, useEffect } from "react";

function TestUnmount() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        console.log("Вмонтировано");

        const intervalTimer = setInterval(() => {
            const currentDateTime = new Date();
            console.log(currentDateTime);
            setDateTime(currentDateTime);
        }, 1000);
        return () => {
            console.log("Будет размонтировано");
            clearInterval(intervalTimer);
        };
    }, []);

    return (
        <div>Тестируем Unmount. {dateTime.toISOString()}</div>
    );
}

export default TestUnmount;
