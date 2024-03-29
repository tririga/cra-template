import React from "react";

import { FooterButtons } from "../../components";
import { Paths, AppMsg } from "../../utils";

const cssBase = "homePage";

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className={cssBase}>
        <div className={`${cssBase}__header`}>
          {AppMsg.getMessage(AppMsg.MESSAGES.HOME_HEADER)}
        </div>
        <div className={`${cssBase}__content`} />
        <FooterButtons
          secondaryLabel={AppMsg.getMessage(AppMsg.BUTTONS.CURRENT_USER)}
          secondaryRoute={Paths.CURRENT_USER}
        />
      </div>
    );
  }
}
