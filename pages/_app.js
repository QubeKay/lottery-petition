import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js'

const LotteryApp = ({ Component, appProps }) => {

  return <Component {...appProps} />
}

export default appWithTranslation(LotteryApp, nextI18NextConfig); 

