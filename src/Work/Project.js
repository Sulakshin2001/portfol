import s from './Project.module.scss'

export const Project = (props) => {
    return (
        <div id="Project" className={s.all}>
            <div className={s.project} style={props.style}>
                <button className={s.viewButton}>Смотреть</button>
            </div>
            <div className={s.name}>{props.name}</div>
            <div className={s.discription}>{props.disription}</div>
        </div>
    )
}