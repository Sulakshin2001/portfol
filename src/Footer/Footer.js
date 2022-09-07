import s from './Footer.module.css'
export const Footer = () =>{
    return(
<div className={s.footer}>
    <div className={s.container}>
        <div><h1>Nikita Sulakshin</h1></div>
        <div className={s.href}>
            <img src={'https://gbouoosh5oktb.minobr63.ru/wp-content/uploads/2021/02/2000px-VKcom-logosvg.png'} className={s.gray}></img>
            <img src={'https://avatars.mds.yandex.net/i?id=56ed1977c165b290273ff8dc66227663-5442367-images-thumbs&n=13'} className={s.gray}></img>
            <img src={'https://avatars.mds.yandex.net/i?id=30a71466bf1d8f891873e3da3d9c17c1-4119069-images-thumbs&n=13'}  className={s.gray}></img>

        </div>
        <div className={s.author}><h3 > © 2022 Все права защищены </h3></div>
    </div>

</div>
    )
}