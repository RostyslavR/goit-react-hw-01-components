import { StatisticItem } from './StatisticItem';
import { StatList, StatSection } from './Statistics.styled';

export const Statistics = ({ title, statistics }) => {
  return (
    <StatSection>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {statistics.map(item => (
          <li className="item" key={item.id}>
            <StatisticItem item={item} />
          </li>
        ))}
      </StatList>
    </StatSection>
  );
};
