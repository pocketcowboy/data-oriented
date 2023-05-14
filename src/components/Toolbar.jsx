import { useContext } from "preact/hooks";
import { ApplicationState } from "../state";

export const Toolbar = ({ onResetCounters }) => (
  <footer>
    <button onclick={onResetCounters}>Reset counters</button>
  </footer>
);

export default () => {
  const [, { resetCounters }] = useContext(ApplicationState);
  return <Toolbar onResetCounters={resetCounters} />;
};
