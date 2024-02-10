import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournaItem'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'


function App() {
    const data = [
      {
      title: 'My first block!',
      text:"This my first project in create app. I am front-end develompment!",
      date:new Date(),
    },
    {
      title: "My second block!",
      text: "This my first project in create app. I am front-end develompment!",
      date:new Date()
    }
    ]
  return <div className="app">
    <LeftPanel>
      <Header/>
      <JournalAddButton/>
      <JournalList>
        <CardButton>
          <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date} />
         </CardButton>
    
         <CardButton>
           <JournalItem
            title={data[1].title}
            text={data[1].text}
            date={data[1].date} />
          </CardButton>
      </JournalList>
    </LeftPanel>
    <Body>Body</Body>

    
    
  </div>
}

export default App
