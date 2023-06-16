import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Item, ImgThumb, Logo, Avatar, Text, Button } from "./UserItem.styled";
import picture from "../../assets/picture.png";
import logo from "../../assets/logo.svg";

const UserItem = ({ id, avatar, tweets, followers }) => {
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(id)) || false
  );

  useEffect(() => {
    localStorage.setItem(id, isFollowing);
  }, [id, isFollowing]);

  function handleFollow() {
    setIsFollowing(!isFollowing);
  }

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
      <Text>
        {isFollowing
          ? (followers + 1).toLocaleString("en-US")
          : followers.toLocaleString("en-US")}{" "}
        followers
      </Text>
      <Button onClick={handleFollow} isFollowing={isFollowing}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </Item>
  );
};

export default UserItem;

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
