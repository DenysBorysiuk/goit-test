import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { Container, BackBtn } from "./ControlsBar.styled";
import Select from "react-select";

const options = [
  { value: "show all", label: "show all" },
  { value: "following", label: "following" },
  { value: "not following", label: "not following" },
];

const ControlsBar = ({ selectedOption, setSelectedOption }) => {
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
      <Select
        options={options}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#5735a3",
            borderRadius: 10,
            width: 196,
            height: 48,
            cursor: "pointer",
          }),
          singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#ebd8ff",
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: 16,
            textTransform: "uppercase",
          }),
          option: (baseStyles, { isSelected }) => ({
            ...baseStyles,
            backgroundColor: isSelected ? "#5CD3A8" : "#fff",
            color: "#373737",
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: 16,
            textTransform: "uppercase",
            cursor: "pointer",
          }),
        }}
      />
    </Container>
  );
};

export default ControlsBar;

ControlsBar.propTypes = {
  selectedOption: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  setSelectedOption: PropTypes.func.isRequired,
};
