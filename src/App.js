import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournaItem'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import { useState } from 'react'
import JournalForm from './components/JournalForm/JournalForm'

const INITIAL_DATA = [
  {
    id: 1,
    title: 'My first block!',
    text:"This my first project in create app. I am front-end develompment!",
    date:new Date(),
  }
]



function App() {
    const [items, setItems] = useState(INITIAL_DATA)
   
    const addItem = item => {
        setItems(oldItems => [...oldItems, {
          text: item.text,
          title: item.title,
          date: new Date(item.date),
          id: Math.max(...oldItems.map(i => i.id)) + 1,
        }])
    }
    
  return <div className="app">
    <LeftPanel>
      <Header/>
      <JournalAddButton/>
      <JournalList items={items}/>
    </LeftPanel>
    <Body>
      <JournalForm onSubmit={addItem}/>
    
    </Body>

    
    
  </div>
}

export default App
