function getTime() {
	// 取得当前时间
	var date = new Date();
	var year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		nextday = day + 1;

	if (day < 10) {
		day = "0" + day;
	}
	if (month < 10) {
		month = "0" + month;
	}
	TODAY = year + "-" + month + "-" + day;

	switch (month) {
		case '01':
		case '03':
		case '05':
		case '07':
		case '08':
		case '10':
		case '12':
			if (day == 31) {
				nextday = 1;
				month++;
				if (month < 10) {
					month = "0" + month;
				}
				TOMORROW = year + "-" + month + "-0" + nextday;
			} else {
				if (nextday < 10) {
					nextday = "0" + nextday;
				}
				TOMORROW = year + "-" + month + "-" + nextday;
			}
			break;
		case '04':
		case '06':
		case '09':
		case '11':
			if (day == 30) {
				nextday = 1;
				month++;
				if (month < 10) {
					month = "0" + month;
				}
				TOMORROW = year + "-" + month + "-0" + nextday;
			} else {
				if (nextday < 10) {
					nextday = "0" + nextday;
				}
				TOMORROW = year + "-" + month + "-" + nextday;
			}
			break;
		case '02':
			if ((year % 400 != 0 && year % 4 == 0) || year % 400 == 0) {
				if (day == 29) {
					nextday = 1;
					month++;
					if (month < 10) {
						month = "0" + month;
					}
					TOMORROW = year + "-" + month + "-0" + nextday;
				} else {
					if (nextday < 10) {
						nextday = "0" + nextday;
					}
					TOMORROW = year + "-" + month + "-" + nextday;
				}
			} else {
				if (day == 28) {
					nextday = 1;
					month++;
					if (month < 10) {
						month = "0" + month;
					}
					TOMORROW = year + "-" + month + "-0" + nextday;
				} else {
					if (nextday < 10) {
						nextday = "0" + nextday;
					}
					TOMORROW = year + "-" + month + "-" + nextday;
				}
			}
			break;
	}
}