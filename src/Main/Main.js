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
                             src='https://sun1-96.userapi.com/impg/yugNyCAYo7g10TQSpDqgx2hhsVpmjWaYB2k_oQ/ubLCa5HnfCc.jpg?size=670x1080&quality=96&sign=27224cb53b615e507cc41daafde2d32a&type=album'/>
                    </div>
                </Tilt>

            </div>
            </Zoom >
        </div>
    )
}