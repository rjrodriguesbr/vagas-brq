export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {

    config.headers.common['Authorization'] = `Basic WVp4THBIOVR2dnlWQ2Fjc2hLNHB3amtzR1VVbTlHdUE6VlFSRFEzMllFUURSSVMzNlhNWDZBUzVWRk0xRTBGSE8=`;

    config.headers.common['Atend-Token'] = 'BRQV';

    config.headers.common['Access-Control-Allow-Origin'] = '*';
    config.headers.common['Access-Control-Allow-Credentials'] = true;
    config.headers.common['Access-Control-Allow-Methods'] = 'GET,OPTIONS,POST,DELETE,PUT,PATCH';

    config.headers.common['Content-Type'] = 'application/json';
    
  })

}