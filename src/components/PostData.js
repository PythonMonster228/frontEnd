import axios from "axios";
import { useState } from "react";

function PostData(){
    const [formData, setFormData] = useState({
        title: '',
        price: ''
    });
    const {title, price} = formData
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}) 
    const onSubmit = e => {
        e.preventDefault();
        const options = {
            // headers: {
            //     'Accept':'application/json',
            //     'Content-Type': 'application/json'
            // },
            // method: 'POST',
            // withCredentials: 'true',
        }
        const body = JSON.stringify({title, price})
        axios.post('https://656b455bdac3630cf727ee53.mockapi.io/products', {
            title, price
        })
    };
    return(
        <div>
        <h1 className='content p-50'>Форма добавления нового предмета в каталог</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <label className='form-label'>Цена:</label>
                    <input
                        className='form-group textarea'
                        type='text'
                        placeholder='название'
                        name='title'
                        onChange={e => onChange(e)}
                        value={title}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Цена:</label>
                    <input
                        className='form-group textarea'
                        type='text'
                        placeholder='цена'
                        name='price'
                        onChange={e => onChange(e)}
                        value={price}
                        required
                    />
                </div>
                <button className='btn btn-primary mt-3' type='submit'>Добавить</button>
            </form>
        </div>
    );
}

export default PostData;