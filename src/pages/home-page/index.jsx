import React, { useState, useEffect } from 'react';
import { Divider, Button, Popover } from 'antd';
import DishList from '../../components/dish-list';
import './index.css';
import BlogList from '../../components/blog';
import Chart from '../../components/tracking';
import TrackingForm from '../../components/tracking/TrackingForm';
import callAPI from '../../util/callAPI';

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({});
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    useEffect(() => {
        callAPI.get('/tracking?limit=10').then((res) => setData(res.data.data));
    }, []);
    console.log(data);
    let mealName = 'Breakfast Ideas';
    const hour = new Date().getHours();
    if (hour > 14) mealName = 'Dinner Ideas';
    else if (hour > 10) mealName = 'Lunch Ideas';
    return (
        <div className="main">
            <Divider orientation="left">
                <h1 style={{ color: '#0066CC', margin: '0px' }}>{mealName}</h1>
            </Divider>
            <DishList />
            <Divider orientation="center">
                <div className="tracking-title">
                    <h1 style={{ color: '#0066CC', margin: '0px' }}>
                        Biểu đồ chiều cao, cân nặng
                    </h1>
                    <Popover
                        content={<TrackingForm hide={hide} />}
                        title="Cập nhật chiều cao, cân nặng"
                        trigger="click"
                        placement="bottom"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        <Button type="primary">Cập nhật</Button>
                    </Popover>
                </div>
            </Divider>

            <Chart
                name="Chiều cao (cm)"
                x={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                y={[
                    179.5, 171.5, 173.5, 174.0, 173.0, 171.0, 170.0, 172.0,
                    170.5, 172.5,
                ]}
            />
            <Chart
                name="Cân nặng (kg)"
                x={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                y={[
                    65.0, 68.95, 71.15, 69.13, 71.02, 69.11, 70.0, 69.16, 69.59,
                    67.67,
                ]}
            />
            <BlogList />
        </div>
    );
};

export default HomePage;
