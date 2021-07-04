import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatTime', (time, formatter) => {
  return moment(time).format(formatter);
})
