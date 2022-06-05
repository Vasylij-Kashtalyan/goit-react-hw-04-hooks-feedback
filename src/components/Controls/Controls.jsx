import PropTypes from "prop-types";
import s from "./Controls.module.css";

function Controls({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map((option) => {
        return (
          <button
            value={option}
            key={option}
            className={s.button}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </ul>
  );
}

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;
