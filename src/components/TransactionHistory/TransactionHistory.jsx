import css from "./TransactionHistory.module.css"
export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr>
      <th> Type </th>
      <th> Amount </th>
      <th> Currency </th>
    </tr>
  </thead>
            {items.map(({ id, type, currency, amount })  => {
                return (
                        <tbody key={id}>
                            <tr >
                                <td> {type} </td>
                                <td> {amount} </td>
                                <td> {currency} </td>
                            </tr>
                        </tbody>
    )
})}
   
</table>
    )
}
