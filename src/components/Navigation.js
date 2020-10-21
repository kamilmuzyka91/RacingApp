import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../constans/routes";

const Navigation = () => (
  <>
    <ul className="navigation__list">
    <li className="navigation__list__link">
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li className="navigation__list__link">
        <Link to={ROUTES.SIGN_IN}>Zaloguj się</Link>
      </li>
      <li className="navigation__list__link">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li className="navigation__list__link">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li className="navigation__list__link">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </>
);

export default Navigation;
