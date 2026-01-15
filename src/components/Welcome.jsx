
import Icon from '@mdi/react';
import { mdiStoreOutline, mdiArrowLeftRightBold, mdiAccountOutline } from '@mdi/js';

import "../styles/welcome.css";

const Welcome = () => {
    return (
        <div className="welcomeSquare">
            <h1>Welcome To Azamon!</h1>
            <div className="icons">             
                <Icon  path={mdiStoreOutline} size={10} />
                <Icon path={mdiArrowLeftRightBold} size={5} />
                <Icon path={mdiAccountOutline} size={10} />
            </div>
        </div>
    )
}

export default Welcome;