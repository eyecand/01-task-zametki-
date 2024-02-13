import Button from '../Button/Button'
import styles from './JournalForm.module.css'
import { useState } from 'react'
import cn from 'classnames'

function JournalForm({onSubmit}) {
    const [formValiedState, setFormValiedState] = useState({
        title: true,
        post: true,
        date: true,
    })
    const addJournalItem = (e) => {
        e.preventDefault()
        const formData =new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        let isFormValied = true
        if(!formProps.title?.trim().length){
            setFormValiedState(state => ({...state, title:false}))
            isFormValied = false
        } else{
            setFormValiedState(state => ({...state, title:true}))
        }
        if(!formProps.post.trim().length){
            setFormValiedState(state => ({...state, post:false}))
            isFormValied = false
        } else{
            setFormValiedState(state => ({...state, post:true}))
        }
        if(!formProps.date){
            setFormValiedState(state => ({...state, date:false}))
            isFormValied = false
        } else{
            setFormValiedState(state => ({...state, date:true}))
        }
        if(!isFormValied){
            return
        }
        onSubmit(formProps)

    }

    return(
        
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <input type='text' name='title' className={cn(styles['input'],{
                    [styles['invalid']]:!formValiedState.title,
                })}></input>
                <input type='date' name='date' className={`${styles['input']} ${formValiedState.date ? '': styles.invalid}`}/>
                <input type='text' name='tag'></input>
                <textarea name='post' id='' cols="30" rows="10" className={`${styles['input']} ${formValiedState.post ? '': styles.invalid}`}></textarea>
                <Button text="Сохранить"/>
            </form>
        
    )

}

export default JournalForm