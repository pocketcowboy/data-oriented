import { useContext } from "preact/hooks";
import { ApplicationState } from "../state";

export const Toolbar = ({
  onResetCounters,
  epochTime,
}: {
  onResetCounters(): void;
  epochTime?: number;
}) => (
  <footer>
    <button onClick={onResetCounters}>Reset counters</button>
    {epochTime && <p>Epoch time: {epochTime}</p>}
  </footer>
);

export default () => {
  const [state, { resetCounters }] = useContext(ApplicationState);
  return (
    <Toolbar epochTime={state.epochTime} onResetCounters={resetCounters} />
  );
};
