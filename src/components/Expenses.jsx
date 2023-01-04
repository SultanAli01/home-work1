import ExpenseItem from "./ExpenseItem";
function Expenses() {
    const expense = [
      {
        id: 'el1',
        title: 'Toilet Paper',
        date: new Date(2023, 4, 12),
        amount: 1.5
      },
      {
        id: 'el1',
        title: 'Car Insurance',
        date: new Date(2023, 2, 20),
        amount: 1.5
      },
      {
        id: 'el1',
        title: 'iphone 14',
        date: new Date(2023, 3, 23),
        amount: 1000
      },
    ]
    return (
        <div className="App">
         <ExpenseItem
         title={expense[0].title}
         date={expense[0].date}
         amount={expense[0].amount}
         />
          <ExpenseItem
         title={expense[1].title}
         date={expense[1].date}
         amount={expense[1].amount}
         />
           <ExpenseItem
         title={expense[2].title}
         date={expense[2].date}
         amount={expense[2].amount}
         />
        </div>
      );
  }


  export default Expenses