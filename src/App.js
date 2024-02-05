import './App.css'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournaItem'

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
  return <div className="App">
    <Button/>
    <CardButton>
      <JournalItem
      title={data[0].title}
      text={data[0].text}
      date={data[0].date} />
    </CardButton>
    
       <JournalItem
    title={data[1].title}
    text={data[1].text}
     date={data[1].date}
      />
  </div>
}

export default App
