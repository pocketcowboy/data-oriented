import { useContext } from "preact/hooks";
import { ApplicationState } from "../state";

export const Toolbar = ({ onResetCounters }: { onResetCounters(): void }) => (
  <footer>
    <button onClick={onResetCounters}>Reset counters</button>
  </footer>
);

export default () => {
  const [, { resetCounters }] = useContext(ApplicationState);
  return <Toolbar onResetCounters={resetCounters} />;
};
