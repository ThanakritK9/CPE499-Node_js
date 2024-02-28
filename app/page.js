/* eslint-disable react/jsx-key */
import React from 'react'
import Car from '@/components/Cars';
import style from './page.module.css';

export default function page() {
  return (
    <div className={style.page}>
        <div className={style.head}>
            <img src="/logo.png"/>
            <h1>LAMBORGHINI</h1>
        </div>
        <div className={style.main}>
            <div className={style.container}>
            <Car
                name= {'Lamborghini Revuelto'}
                picture={'l1.jpg'}
            />
            </div>
            <div className={style.container}>
            <Car
                name= {'Lamborghini Huracán Tecnica'}
                picture={'l2.jpg'}
            />
            </div>
            <div className={style.container}>
            <Car
                name= {'Lamborghini Aventador'}
                picture={'l3.jpg'}
            />
            </div>
            <div className={style.container}>
            <Car
                name= {'Lamborghini Huracán STO'}
                picture={'l4.jpg'}
            />
            </div>
            <div className={style.container}>
            <Car
                name= {'Lamborghini Urus'}
                picture={'l5.jpg'}
            />
            </div>
            <div className={style.container}>
            <Car
                name= {'Lamborghini SC18 Alston'}
                picture={'l6.jpg'}
            />
            </div>
            
        </div>
    </div>
  )
}
