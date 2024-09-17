import "./Button.css";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Button({ action, url, text }) {
  const ionName = action === 'download' ? 'document-text' : 'mail';

  return (
    <>
      <a
        href={url}
        download={action === "download" ? "Andres Hernandez CV.pdf" : ""}
        className="button"
      >
       <ion-icon name={`${ionName}-outline`}></ion-icon> {text}
      </a>
    </>
  );
}

Button.PropTypes = {
  action: PropTypes.string.isRequired
}

export default Button;
