import styles from './Main.module.css'
import Zoom from 'react-reveal/Zoom';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


export const Main = () => {
    return (
        <div id='main' className={styles.mainBlock}>
            <Zoom  left>
            <div className={styles.container}>
                <div className={styles.text}>

                    <h1 className={styles.name}>Hello I am <span className={styles.Nikita}>Nikita Sulakshin</span>
                     <p> <ReactTypingEffect
                            text={["Frontend Developer"]}
                        /></p>
                    </h1>

                </div>
                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <div>

                        <img className={styles.photo}
                             src='https://sun9-57.userapi.com/impg/Xrsnqb3OM9UCbRJJZ14K7WORHL3o868yteGI1Q/s82TLmUVRwY.jpg?size=1197x1600&quality=96&sign=929ed3dcfc4d90fddeb2c67917b4e8db&type=album '/>
                    </div>
                </Tilt>

            </div>
            </Zoom >
        </div>
    )
}