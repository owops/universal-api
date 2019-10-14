import {LONG_DELAY, SHORT_DELAY} from '../../utils';
import { ToastOption } from '../../types';

declare const wx: any;

let Toast: ToastOption = {
  SHORT: SHORT_DELAY,
  LONG: LONG_DELAY,

  /*
   * @param message {String}
   * @param duration {Number}
   * @param userStyle {Object} user defined style
   */
  show(message: string = '', duration: number = SHORT_DELAY): void {
    wx.showToast({
      title: message,
      duration
    });
  },
};

export default Toast;
