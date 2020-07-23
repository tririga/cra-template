import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "carbon-components-react";
import { Routes, AppMsg } from "../../utils";

const cssBase = "currentUserPage";

class CurrentUserPage extends React.PureComponent {
  static propTypes = {
    currentUser: PropTypes.object,
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className={cssBase}>
        <div className={`${cssBase}__header`}>
          {AppMsg.getMessage(AppMsg.MESSAGES.CURRENT_HEADER)}
        </div>
        <div className={`${cssBase}__details`}>
          First Name: {currentUser?.firstName}
        </div>
        <div className={`${cssBase}__details`}>
          Last Name: {currentUser?.lastName}
        </div>
        <div className={`${cssBase}__details`}>
          Language: {currentUser?._Language}
        </div>
        <div className={`${cssBase}__details`}>
          Timezone: {currentUser?._TimeZoneId}
        </div>
        <Button kind="secondary" as={Link} to={Routes.HOME}>
          {AppMsg.getMessage(AppMsg.BUTTONS.HOME)}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(CurrentUserPage);
