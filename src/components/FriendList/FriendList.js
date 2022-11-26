import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { FriendStyle, FriendListStyle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendStyle key={friend.id}>
          <Friend friend={friend} />
        </FriendStyle>
      ))}
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
