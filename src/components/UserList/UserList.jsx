import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import { List } from "./UserList.styled";

const UserList = ({ users }) => {
  return (
    <List>
      {users.map(({ id, tweets, followers, avatar }) => (
        <UserItem
          key={id}
          id={id}
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};
