import React from "react";
import { connect } from "react-redux";
import * as languageActions from "../../store/modules/languageState";
import { InputLanguage } from "./InputLanguage";

const InputLanguageContainer = (props: any) => {
  return <InputLanguage onChange={props.language} />;
};

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => ({
  language: (language: any) =>
    dispatch(languageActions.ChangeLanguage(language))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputLanguageContainer);
