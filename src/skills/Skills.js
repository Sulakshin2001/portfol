import styles from './Skills.module.css'
import {Skill} from "./skill/Skill";
export const Skills = () => {
    return (
        <div id='skills' className={styles.skillBlock}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.container}>

               <ul className={styles.ulStyle}>
                <li className={styles.liStyle}><Skill title='React'  url1={'https://camo.githubusercontent.com/4b852202f52f838329a8b433657e44eed91c6a894c9ac8cf0f2682d49345882f/68747470733a2f2f7777772e706e676974656d2e636f6d2f70696d67732f6d2f3636342d363634343530395f69636f6e2d72656163742d6a732d6c6f676f2d68642d706e672d646f776e6c6f61642e706e67'}/></li>
                <li className={styles.liStyle}><Skill title='Typescript'  url1={'https://miro.medium.com/max/1200/1*yv1FPiwQigh_ZPKN7sNNAA.png'}/></li>
                <li className={styles.liStyle}><Skill title='Html'  url1={'https://techmanyata.in/wp-content/uploads/2022/01/html5_logo.png'}/></li>
                <li className={styles.liStyle}><Skill title='Css'  url1={'https://homebusinessmag.com/wp-content/uploads/2015/10/CSS.jpg'}/></li>
                <li className={styles.liStyle}><Skill title='Redux'  url1={'https://miro.medium.com/max/1024/1*oxGOHKM__99W659JhC4neQ.jpeg'}/></li>
                <li className={styles.liStyle}><Skill title='Axios'  url1={'https://i.pinimg.com/originals/7d/38/fa/7d38faaf46481d22a54af5bf07cb3747.png'}/></li>
                <li className={styles.liStyle}><Skill title='Thunk'  url1={'https://avatars.mds.yandex.net/i?id=f3db7c3fb824379271117476c05bc48b-5578507-images-thumbs&n=13'}/></li>
                <li className={styles.liStyle}><Skill title='Storybook'  url1={'https://user-images.githubusercontent.com/18430599/38112659-491f9112-3368-11e8-8b65-1725f19a61fa.png'}/></li>
                <li className={styles.liStyle}><Skill title='Unit tests'  url1={'https://miro.medium.com/max/900/1*UkbEolxD81Tu8QsWAUbcmg.jpeg'}/></li>
                <li className={styles.liStyle}><Skill title='Git'  url1={'https://fuzeservers.ru/wp-content/uploads/e/4/5/e4553ab0cd4508104a3196729458afab.png'}/></li>
               </ul>
            </div>
        </div>
    )
}