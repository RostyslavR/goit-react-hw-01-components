import { StatisticItem } from './StatisticItem';

export const Statistics = ({ title = '', data }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {data.map(item => (
          <li className="item" key={item.id}>
            <StatisticItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
