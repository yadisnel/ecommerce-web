import React from 'react';
import { useSelector } from "react-redux";

//Local
import { selectLanguage } from "../Translation/redux/translationSelectors";
import Span from "../../common/components/Span";

const Buy = () => {
  const language = useSelector(selectLanguage)

  return (
    <Span text={language.CUBANS} />
  );
};

export default Buy;
