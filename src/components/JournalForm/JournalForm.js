import Button from '../Button/Button'
import './JournalForm.css'
import { useState } from 'react'

function JournalForm({onSubmit}) {
    const addJournalItem = (e) => {
        e.preventDefault()
        const formData =new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        onSubmit(formProps)

    }

    return(
        
            <form className='journal-form' onSubmit={addJournalItem}>
                <input type='text' name='title'></input>
                <input type='date' name='date'/>
                <input type='text' name='tag'></input>
                <textarea name='text' id='' cols="30" rows="10"></textarea>
                <Button text="Сохранить"/>
            </form>
        
    )

}

export default JournalForm