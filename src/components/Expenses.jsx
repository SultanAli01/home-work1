import ExpenseItem from "./ExpenseItem";

const Expense = (props) => {
  return(
  <div>
<ExpenseItem
  title={props.expense[0].title}
  date={props.expense[0].date}
  amount={props.expense[0].amount}
  />
   <ExpenseItem
  title={props.expense[1].title}
  date={props.expense[1].date}
  amount={props.expense[1].amount}
  />
  <ExpenseItem
  title={props.expense[2].title}
  date={props.expense[2].date}
  amount={props.expense[2].amount}
  />
  </div>
  )
}

export default Expense
