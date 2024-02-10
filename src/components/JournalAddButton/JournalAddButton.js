import CardButton from '../CardButton/CardButton'
import './JournalAddButton.css'

function JournalAddButton () {
    return(
        <CardButton className="journal-add">
            <img className='plus' src='/plus.svg' alt='Logo'></img>
            Новое воспоминание
        </CardButton>
    )

}

export default JournalAddButton