import React from "react";
import './I18N.css';
import A from "../../UI/a/A";

const I18N = (props) => {
    return (
        <div className="lang">
            {
                (props.isLoggedIn === true) ? (<span>Hello, Admin:</span>) : (<span>Google offered in:</span>)
            }
            <A label={"Tiếng Việt"}/>
            <A label={'Fran{&ccedil;}ais'}/>
        </div>
    );
}
export default I18N;