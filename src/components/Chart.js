import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    const max = Math.max(...dataPoints.map(d => d.value));

    return (
        <div className="chart">
            {dataPoints.map(d => (
                <ChartBar
                    key={d.label}
                    max={max}
                    value={d.value}
                    label={d.label}
                />
            ))}
        </div>
    );
};

export default Chart;
