import React from "react";
import { Link } from "react-router-dom";
import { Button } from "carbon-components-react";
import { Routes, AppMsg } from "../../utils";

const cssBase = "homePage";

export default class ReservationListPage extends React.PureComponent {
  render() {
    return (
      <div className={cssBase}>
        <div className={`${cssBase}__header`}>
          {AppMsg.getMessage(AppMsg.MESSAGES.HOME_HEADER)}
        </div>
        <Button kind="secondary" as={Link} to={Routes.CURRENT_USER}>
          {AppMsg.getMessage(AppMsg.BUTTONS.CURRENT_USER)}
        </Button>
      </div>
    );
  }
}
