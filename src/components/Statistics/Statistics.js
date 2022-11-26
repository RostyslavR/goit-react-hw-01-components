import { StatisticItem } from './StatisticItem';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {statistics.map(item => (
          <li className="item" key={item.id}>
            <StatisticItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
