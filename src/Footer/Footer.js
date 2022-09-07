import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <div><h1>Nikita Sulakshin</h1></div>
                <div className={s.href}>
                    <a href='https://vk.com/id662888517'><img
                        src={'https://gbouoosh5oktb.minobr63.ru/wp-content/uploads/2021/02/2000px-VKcom-logosvg.png'}
                        className={s.gray}></img> </a>
                    <a href='https://t.me/Nikita20012704'><img
                        src={'https://avatars.mds.yandex.net/i?id=56ed1977c165b290273ff8dc66227663-5442367-images-thumbs&n=13'}
                        className={s.gray}></img></a>
                    <a href='https://github.com/Sulakshin2001'><img
                        src={'https://www.seonews.ru/upload/iblock/a5b/a5bca6110d2c6c8f8e0ab44675750a7c.jpg'}
                        className={s.gray}></img></a>

                </div>
                <div className={s.author}><h3> © 2022 Все права защищены </h3></div>
            </div>

        </div>
    )
}