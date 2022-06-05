import Notiffication from "./components/Notification";
import { useState } from "react";
import Statistics from "./components/Statistics";
import Container from "./components/Container";
import Controls from "./components/Controls";
import Section from "./components/Section";

function App() {
  const [good, setState] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = Object.keys({ good, neutral, bad });

  const handleChange = (event) => {
    switch (event) {
      case "good":
        setState((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <Controls options={buttons} onLeaveFeedback={handleChange} />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notiffication message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}

export default App;
