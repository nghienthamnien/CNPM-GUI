import React, { useState } from 'react';
import { Steps } from 'antd';

const App = ({ instructions }) => {
    console.log(instructions);
    const [current, setCurrent] = useState(0);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    return (
        <div className=" instruction">
            <h2>Cách làm</h2>
            <Steps
                current={current}
                onChange={onChange}
                direction="vertical"
                items={instructions.map((value, index) => ({
                    title: (
                        <p style={{ fontSize: '24px', margin: '0px' }}>{`Bước ${
                            index + 1
                        }`}</p>
                    ),
                    description: (
                        <p style={{ fontSize: '20px', margin: '4px' }}>
                            {value}
                        </p>
                    ),
                }))}
            />
        </div>
    );
};
export default App;
