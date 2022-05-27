import PropTypes from "prop-types"
import s from './Statistics.module.css'

function Statistics({good, neutral, bad, total, positivePercentage,}) {
    return (
        <ul className={s.list}>
          <li valu="Good" className={s.item}>Good:{good}</li>
          <li valu="Neutral" className={s.item}>Neutral:{neutral}</li>
          <li valu="Bad" className={s.item}>Bad:{bad}</li>
          <li valu="Total" className={s.item}>Total:{total}</li>
          <li valu="Positive" className={s.item}>Positive Feedback:{positivePercentage} %</li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;