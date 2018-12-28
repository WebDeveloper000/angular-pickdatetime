import {DlDateAdapterString} from '../../dl-date-adapter-string';
import {DlDateAdapter} from '../../dl-date-adapter';

import * as _moment from 'moment';
import {Moment} from 'moment';

const moment = _moment;


describe('DlDateAdapterString', () => {

  describe('default configuration', () => {
    let dateAdapter: DlDateAdapterString;
    let testMoment: Moment;
    beforeEach(() => {
      testMoment = moment(1523077200000);
      dateAdapter = new DlDateAdapterString([
          moment.localeData().longDateFormat('lll'),
          'YYYY-MM-DDTHH:mm',
          'YYYY-MM-DDTHH:mm:ss',
          'YYYY-MM-DDTHH:mm:ss.SSS',
          'YYYY-MM-DD',
          'YYYY-MM-DDTHH:mm:ss.SSS[Z]' // ISO_8601
        ],
        moment.localeData().longDateFormat('lll')
      );
    });

    describe('fromMilliseconds', () => {
      it('should return "lll" moment format', () => {
        expect(dateAdapter.fromMilliseconds(1523077200000)).toEqual(testMoment.format('lll'));
      });
    });

    describe('toMilliseconds', () => {
      it('should accept "lll" moment format', () => {
        expect(dateAdapter.toMilliseconds(testMoment.format('lll'))).toEqual(1523077200000);
      });
      it('should return undefined for invalid date value', () => {
        expect(dateAdapter.toMilliseconds('Aor 7, 2018 12:00 AM')).toBeUndefined();
      });
    });
  });
});
