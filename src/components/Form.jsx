import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import axios from 'axios'
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    Tooltip,
    CircleMarker,
    Polygon
} from 'react-leaflet'

const colorOptions={color:'red'}
const centerPolygon=[
    [
        [59.881302,30.213217],
        [59.885444,30.275015],
        [59.868875,30.279135],
        [59.858515,30.242056],
        [59.881302,30.213217]
    ]
]
const center=[59.881302,30.213217]

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('https://64467a30ee791e1e29004acb.mockapi.io/form', data)
        alert('Заявка отправлена')
        console.log(data);

    }
  
  return (
    <div>
        <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Заполните заявку на обратную связь</h1>
        <div className='input-group mb-3'>
            <input
            {...register('lastName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.lastName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.lastName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

        <div className='input-group mb-3'>
            <input
            {...register('firstName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.firstName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.firstName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}


        <div className='input-group mb-3'>
            <input
            {...register('middleName', {
                required: true,
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Отчество'/>
        </div>
        {errors?.middleName?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.middleName?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.middleName?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}

        <div className='input-group mb-3'>
            <input
            {...register('email', {
                required: true,
                maxLength:50,
                pattern: /^[A-Za-z@._-]+$/i
            })}
            type="text"
            className='form-control'
            placeholder='Email'/>
        </div>
        {errors?.email?.type === 'required'&&(
            <p>Поле обязательно для заполнения</p>
        )}

        {errors?.email?.type === 'maxLength'&&(
            <p>Поле не может содержать более 50 символов</p>
        )}

        {errors?.email?.type === 'pattern'&&(
            <p>Поле заполненно некорректно</p>
        )}
        <div>
          <input className='btn btn-outline-primary' type="submit" />
        </div>
        </form>
<br></br>
        <MapContainer
        center={center}
        zoom={10}
        style={{
            width:'100vw',
            height:"500px"
        }}
        >
            <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baBC3t9J46G3egoyg6Rg'
           attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           />

            <CircleMarker
            center={center}
            pathOptions={{color:'black'}}
            radius={10}
            />

           <Marker position={center}>
            <Popup>
                Мы находимся тут 
            </Popup>
            <Tooltip>При наведении</Tooltip>
           </Marker>

           <Polygon positions={centerPolygon} pathOptions={colorOptions}/>
        </MapContainer>
    </div>
  )
}

export default Form