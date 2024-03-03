import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function MyTooltip({ myButton, message, position }) {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {message}
        </Tooltip>
    );

    return (
        <OverlayTrigger placement={position} overlay={renderTooltip}>
            {myButton}
        </OverlayTrigger>
    );
}

export default MyTooltip;