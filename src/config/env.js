import {DEV_BACKEND_URL, PROD_BACKED_URL} from '@env';
const devEnvairomentVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};
const prodEnvairomentVariables = {
  BACKEND_URL: PROD_BACKED_URL,
};

export default __DEV__ ? devEnvairomentVariables : prodEnvairomentVariables;
