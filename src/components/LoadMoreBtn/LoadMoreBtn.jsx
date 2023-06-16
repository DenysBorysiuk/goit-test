import PropTypes from "prop-types";
import { Button } from "./LoadMoreBtn.styled";
import { ImPlus } from "react-icons/im";

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <Button onClick={loadMore}>
      <ImPlus color="#5CD3A8" /> load more
    </Button>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
