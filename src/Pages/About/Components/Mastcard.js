import "./Mastcard.css";
import { Link } from "react-router-dom";

export const Mastcard = ({ name, role, link, image }) => {
  return (
    <>
      <Link className="card" to={link}>
        <div
          className="card__background"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
        <div className="card__content">
          <p className="card__category">{role}</p>
          <h3 className="card__heading">{name}</h3>
        </div>
      </Link>
    </>
  );
};
