import React from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Loading } from "carbon-components-react";
import PropTypes from "prop-types";
import { HomePage, CurrentUserPage } from "../pages";
import { Routes } from "../utils";
import { LoadingSelectors, MessageSelectors, MessageActions } from "../store";
import ShowAppMessages from "./ShowAppMessages";

const cssBase = "tririgaUXNextApp";

class TririgaUXNextApp extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    message: PropTypes.object,
    clearMessage: PropTypes.func,
  };

  static defaultProps = {
    loading: false,
  };

  render() {
    const { loading, message, clearMessage } = this.props;
    return (
      <div className={cssBase}>
        <Switch>
          <Route path={Routes.CURRENT_USER}>
            <CurrentUserPage />
          </Route>
          <Route path={Routes.HOME}>
            <HomePage />
          </Route>
        </Switch>
        <ShowAppMessages message={message} clearMessage={clearMessage} />
        {createPortal(<Loading active={loading} withOverlay />, document.body)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: LoadingSelectors.mainLoadingSelector(state),
    message: MessageSelectors.messageSelector(state),
  };
};

const { clearMessage } = MessageActions;

export default connect(mapStateToProps, {
  clearMessage,
})(TririgaUXNextApp);
