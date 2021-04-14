import './ChartBar.css';

const ChartBar = ({ label, value, max }) => {
    const barFillHeight = Math.round(100 * value / max) || 0;

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: `${barFillHeight}%` }}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;
