import Card from './Card';
import './ErrorModal.css';

const ErrorModal = ({ title, message, onClose }) => {
    return (
        <>
            <div className="backdrop" onClick={onClose} />
            <Card className="modal">
                <header className="header">
                    <h2>{title}</h2>
                </header>
                <div className="content">
                    <p>{message}</p>
                </div>
                <footer className="actions">
                    <button onClick={onClose}>Close</button>
                </footer>
            </Card>
        </>
    );
};

export default ErrorModal;
