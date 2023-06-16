import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import { List } from "./UserList.styled";

const UserList = ({ tweets }) => {
  return (
    <List>
      {tweets.map(({ id, tweets, followers, avatar }) => (
        <UserItem
          key={id}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </List>
  );
};

export default UserList;

UserList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};
