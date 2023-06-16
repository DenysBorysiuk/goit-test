import { useNavigate } from "react-router-dom";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { Container, BackBtn, Filter } from "./ControlsBar.styled";

const ControlsBar = () => {
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <Container>
      <BackBtn onClick={handleCancel}>
        <TbArrowBigLeftFilled size={32} />
      </BackBtn>
      <Filter>filter</Filter>
    </Container>
  );
};

export default ControlsBar;
