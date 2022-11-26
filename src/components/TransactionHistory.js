import { TransactionsItem } from './TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
          <tr key={item.id}>
            <TransactionsItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
