import s from './Work.module.css'
import {Project} from "./Project";
import socialImage from '../../src/Assets/sotsset-2048x1846.jpg'
import totolistImage from '../../src/Assets/printable-to-do-list-sq.webp'

export const Work = () => {
    const socialNetwork={
        color:'blue',
        backgroundImage:`url(${socialImage})`
    }
    const todolist={
        color:'blue',
        backgroundImage:`url(${totolistImage})`
    }
    return (
        <div className={s.work}>
            <div className={s.container}>
                <div className={s.title} >
                    <h2>
                        My Works
                    </h2>
                </div>


                <div className={s.project}>
                    <Project url={'https://github.com/Sulakshin2001/samurai-way-main'}  title='Project 1' style={socialNetwork} name={'Social Network'} disription={
                        'Project using Typescript,React,Redux,Axios,Thunk,Unit tests,BrowserRouter,Flux,Selector,Hooks,Git '}/>
                    <Project url={'https://github.com/Sulakshin2001/TodDoList'} title='Project 2' style={todolist} name={'ToDoList'} disription={
                        'Project using Typescript,React,Redux,Axios,Thunk,Unit tests,Flux,Hooks,git,Storybook '}/>

                </div>
            </div>
        </div>
    )
}