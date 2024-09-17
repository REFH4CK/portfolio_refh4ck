import "./Button.css";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Button({ action, url, text }) {
  return (
    <>
      <a
        href={url}
        download={action === "download" ? "Andres Hernandez CV.pdf" : ""}
        className="button"
      >
       <ion-icon name={`${action}-outline`}></ion-icon> {text}
      </a>
    </>
  );
}

Button.PropTypes = {
  action: PropTypes.string.isRequired
}

export default Button;
