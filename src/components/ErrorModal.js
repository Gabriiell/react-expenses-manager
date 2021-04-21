import ReactDOM from 'react-dom';
import Card from './Card';
import './ErrorModal.css';

const Backdrop = ({ onClose }) => ReactDOM.createPortal(
    <div className="backdrop" onClick={onClose} />,
    document.getElementById('backdrop-root')
);

const ModalOverlay = ({ children }) => ReactDOM.createPortal(
    <Card className="modal">{children}</Card>,
    document.getElementById('overlay-root')
);

const ErrorModal = ({ title, message, onClose }) => {
    return (
        <>
            <Backdrop onClick={onClose} />
            <ModalOverlay>
                <header className="header">
                    <h2>{title}</h2>
                </header>
                <div className="content">
                    <p>{message}</p>
                </div>
                <footer className="actions">
                    <button onClick={onClose}>Close</button>
                </footer>
            </ModalOverlay>
        </>
    );
};

export default ErrorModal;
