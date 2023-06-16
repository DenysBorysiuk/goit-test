import PropTypes from "prop-types";
import { Button } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ loadMore }) => {
  return <Button onClick={loadMore}>load more</Button>;
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
