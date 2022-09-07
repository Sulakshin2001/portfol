import Fade from 'react-reveal/Fade';
import s from './Contact.module.css'


export const Contact = () =>{
    return(
        <div id='contact' className={s.contact}>
            <div className={s.container}>
            <h1>Contact</h1>
                <Fade left>
            <form className={s.form}>
                <input placeholder={'Your name'} className={s.input}/>
                <input placeholder={'Your email'} className={s.input}/>
                <textarea placeholder={'Your message'} className={s.textarea}/>
                <button  className={s.button}><h1>Send</h1></button>

            </form>
                </Fade>

        </div>
        </div>
    )
}