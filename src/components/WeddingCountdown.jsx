import Countdown from 'react-countdown';
import '../styles/WeddingCountdown.css'

const WeddingCountdownRenderer = ({ days, hours, minutes, seconds }) => {
  const unitBox = (value, label) => (
    <div className="countdown-unit">
      <div className="countdown-value">{value}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );

  return (
    <div className="wedding-countdown">
      {unitBox(days, 'Days')}
      {unitBox(hours, 'Hours')}
      {unitBox(minutes, 'Minutes')}
      {unitBox(seconds, 'Seconds')}
    </div>
  );
};

export function WeddingCountdown() {
  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-3xl font-semibold text-mauve-800 mb-4">
        Countdown to Our Wedding
      </h2>
      <Countdown
        date={new Date('2026-04-25T17:00:00')}
        renderer={WeddingCountdownRenderer}
      />
    </div>
  );
}
