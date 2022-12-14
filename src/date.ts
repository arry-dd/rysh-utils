/**
 * @description 格式化日期
 * @param value 指定日期
 * @param format 返回的日期样式模板
 * @param defaultRes 假如日期格式错误，则返回这个值
 * @return {string}
 * @example
 * formatDate();
 * formatDate(1666064012000) => 2022-10-18 11:33:32
 * formatDate(1666064012000, "h:m:s") => 11:33:32
 * formatDate(1666064012000, "Y年M月D日") => 2022年10月18日
 * formatDate('Tue Oct 18 2022 14:08:59 GMT+0800 (中国标准时间)', 'Y/M/D h:m:s') => 2022/10/18 14:08:59
 * formatDate(new Date(1666064012000), 'Y/M/D h:m:s') => 2022/10/18 11:33:32
 * new Date('错误的日期', "h:m:s", '-') => '-'
 */
export function formatDate(
	value: string | number | Date = Date.now(),
	format = 'Y-M-D h:m:s',
	defaultRes = ''
): string {
	const formatNumber = (n: number): string => `0${n}`.slice(-2);
	const date = new Date(value);
	if (isNaN(date.getSeconds())) {
		return defaultRes;
	}
	const formatList = ['Y', 'M', 'D', 'h', 'm', 's'];
	const resultList = [];
	resultList.push(date.getFullYear().toString());
	resultList.push(formatNumber(date.getMonth() + 1));
	resultList.push(formatNumber(date.getDate()));
	resultList.push(formatNumber(date.getHours()));
	resultList.push(formatNumber(date.getMinutes()));
	resultList.push(formatNumber(date.getSeconds()));
	let res = format;
	for (let i = 0; i < resultList.length; i += 1) {
		res = res.replace(formatList[i], resultList[i]);
	}
	return res;
}

/**
 * @description 秒数转为显示时间
 * @param  second 秒数
 * @returns xx:xx:xx
 * @example
 * formatSecond(1) => '00:00:01'
 * formatSecond(3600) => '01:00:00'
 */
export function formatSecond(second: number): string {
	const hour = parseInt(`${second / 3600}`, 10);
	const minu = parseInt(`${(second / 60) % 60}`, 10);
	const sec = parseInt(`${second % 60}`, 10);
	return `${String(hour).padStart(2, '0')}:${String(minu).padStart(
		2,
		'0'
	)}:${String(sec).padStart(2, '0')}`;
}
