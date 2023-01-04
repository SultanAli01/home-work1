import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props){
   console.log(props);
    const expenseTitle = props.title
 
    const expenseAmount = props.amount
    return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        {/* Java scriptти чакырыш учун */}
           
             {/* себеби домдо объекти рендер кыла албайбыз  */}
        <h2 className='expense-item__description'>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
    </div>
    )
}

export default ExpenseItem