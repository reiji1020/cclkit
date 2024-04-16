import { DateTime } from 'luxon';

/**
 * アクセス時点での年データ(西暦)をnumber型で返却する
 * @return number
 */
const getYear = (): number => {
	return DateTime.now().year;
};

export { getYear };
