import { useContext } from "preact/hooks";
import { ApplicationContext } from "../state";

export const Toolbar = ({ onResetCounters }) => (
  <footer>
    <button onclick={onResetCounters}>Reset counters</button>
  </footer>
);

export default () => {
  const { resetCounters } = useContext(ApplicationContext);
  return <Toolbar onResetCounters={resetCounters} />;
};
