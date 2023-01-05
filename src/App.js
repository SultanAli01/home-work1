import Expenses from './components/Expenses';
import './App.css';


function App() {
  const expense = [
    {
      id: 'el1',
      title: "Samsung",
      date: new Date(2023, 4, 12),
      amount: 1300
    },
    {
      id: 'el2',
      title: 'Iphine',
      date: new Date(2023, 2, 20),
      amount: 1000
    },
    {
      id: 'el2',
      title: 'RedMi',
      date: new Date(2023, 2, 20),
      amount: 999
    },
  ]



return(
   <div className='App'>
   <h1>Home-work</h1>
   <Expenses expense = {expense}/>
   </div>
)
}



export default App;
