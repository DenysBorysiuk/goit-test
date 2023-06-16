import PropTypes from "prop-types";
import { Item, ImgThumb, Logo, Avatar, Text, Button } from "./UserItem.styled";
import picture from "../../assets/picture.png";
import logo from "../../assets/logo.svg";

const UserItem = ({ avatar, tweets, followers }) => {
  return (
    <Item>
      <Logo src={logo} alt="logo" />
      <ImgThumb>
        <img src={picture} alt="picture" />
      </ImgThumb>
      <Avatar>
        <img src={avatar} alt="" />
      </Avatar>
      <Text>{tweets} tweets</Text>
      <Text>{followers.toLocaleString("en-US")} followers</Text>
      <Button>Follow</Button>
    </Item>
  );
};

export default UserItem;

UserItem.propTypes = {
  //   id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
