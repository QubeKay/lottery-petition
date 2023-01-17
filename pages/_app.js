import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js'

const LotteryApp = ({ Component, appProps }) => {
  console.log("appProps: ");
  console.log(appProps);
//   const { t } = useTranslation('common');

  return <Component {...appProps} />
}

export default appWithTranslation(LotteryApp, nextI18NextConfig); 

