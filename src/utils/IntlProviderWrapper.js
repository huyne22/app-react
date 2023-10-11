import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/locale-data/vi";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/vi";
import LanguageUtils from "../utils/LanguageUtils";

const IntlProviderWrapper = ({ children }) => {
  const language = useSelector((state) => state?.user?.language);
  const messages = LanguageUtils.getFlattenedMessages();

  useEffect(() => {
    // Perform any side effects or setup you need when the component mounts
    // This is equivalent to componentDidMount in a class component
    // In this case, there's no specific setup needed, so this can be empty
  }, []); // Empty dependency array means this effect runs once (equivalent to componentDidMount)

  return (
    <IntlProvider
      locale={language}
      messages={messages[language]}
      defaultLocale="vi"
    >
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;
