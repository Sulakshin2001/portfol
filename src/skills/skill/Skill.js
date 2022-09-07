import s from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div > <img src={props.url1} className={s.ikon}/></div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>

                {props.description}
            </span>
        </div>


    )
}