import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExtra } from '../../slice/shoppingListSlice';

const AddIngredientForm = () => {
    const [extra, setExtra] = useState('');
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        e.preventDefault();
        if (extra) dispatch(addExtra(extra));
        setExtra('');
    };
    const handleChange = (e) => {
        setExtra(e.target.value);
    };
    return (
        <section>
            <form
                onSubmit={handleAdd}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    minWidth: '300px',
                    marginTop: '16px',
                }}
            >
                <div>
                    <input
                        type="text"
                        id="extra"
                        onChange={handleChange}
                        value={extra}
                        placeholder="Thêm nguyên liệu"
                    />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Thêm"
                        style={{ backgroundColor: '#00994C', color: '#e0e0e0' }}
                    />
                </div>
            </form>
        </section>
    );
};

export default AddIngredientForm;
