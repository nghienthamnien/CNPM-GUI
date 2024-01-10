import React from 'react';
import { List, Button, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addIngredient } from '../../slice/shoppingListSlice';
import randomString from '../../util/randomString';

const App = ({ ingredients }) => {
    const dispatch = useDispatch();
    const handleAddInredient = () => {
        const shoppingList = ingredients.map((element) => ({
            id: randomString(8),
            name: element,
            isbought: false,
        }));
        dispatch(addIngredient(shoppingList));
        notification.success({
            message: 'Thêm thành công',
        });
    };

    return (
        <div className="ingredient-list">
            <h2>Nguyên liệu</h2>
            <List
                size="large"
                itemLayout="horizontal"
                dataSource={ingredients}
                split={false}
                renderItem={(item) => (
                    <List.Item>
                        <p>{item}</p>
                    </List.Item>
                )}
            />
            <Button
                shape="round"
                icon={<PlusOutlined />}
                size="large"
                className="add-ingredient-button"
                onClick={handleAddInredient}
            >
                Add to Shopping List
            </Button>
        </div>
    );
};
export default App;
