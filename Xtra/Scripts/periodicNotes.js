const FORMAT_DAY = "DD.MM.YYYY";
const FORMAT_DAY_SORTABLE = "YYYY-MM-DD";
const FORMAT_WEEKDAY = "dddd";
const FORMAT_WEEK = "GGGG-[KW]WW";
const FORMAT_WEEK_NUMBER = "WW";
const FORMAT_MONTH = "YYYY-MM MMMM";
const FORMAT_MONTH_NUMBER = "MM";
const FORMAT_MONTH_NAME = "MMMM";
const FORMAT_QUARTER = "YYYY-[Q]Q";
const FORMAT_QUARTER_NUMBER = "Q";
const FORMAT_YEAR = "YYYY";

function getFormat(type) {
	switch (type) {
		case "week":
			return FORMAT_WEEK;
		case "month":
			return FORMAT_MONTH;
		case "quarter":
			return FORMAT_QUARTER;
		case "year":
			return FORMAT_YEAR;
		case "day":
		default:
			return FORMAT_DAY_SORTABLE;
	}	
}


function getStartOf(dateString, type, sortable) {
	const formatDateString = getFormat(type);
	const formatValue = sortable ? FORMAT_DAY_SORTABLE : FORMAT_DAY;
	
	const value = moment(dateString, formatDateString).startOf(type).format(formatValue);
	return value;
}

function getEndOf(dateString, type, sortable) {
	const formatDateString = getFormat(type);
	const formatValue = sortable ? FORMAT_DAY_SORTABLE : FORMAT_DAY;
	
	const value = moment(dateString, formatDateString).endOf(type).format(formatValue);
	return value;
}



function getDateFormatted(dateString, valueFormat, dateStringType) {
	const dateStringFormat = getFormat(dateStringType);
	const date = moment(dateString, dateStringFormat);
	const value = date.format(valueFormat);
	return value;
}

function getWeekDay(dateString, type) {
	return getDateFormatted(dateString, FORMAT_WEEKDAY, type);
}

function getDay(dateString, type, sortable) {
	const valueFormat = sortable ? FORMAT_DAY_SORTABLE : FORMAT_DAY;
	const value = getDateFormatted(dateString, valueFormat, type);
	return value;
}

function getWeek(dateString, type) {
	return getDateFormatted(dateString, FORMAT_WEEK, type);
}

function getWeekNumber(dateString, type) {
	return getDateFormatted(dateString, FORMAT_WEEK_NUMBER, type);
}

function getMonth(dateString, type) {
	return getDateFormatted(dateString, FORMAT_MONTH, type);
}

function getMonthName(dateString, type) {
	return getDateFormatted(dateString, FORMAT_MONTH_NAME, type);
}

function getMonthNumber(dateString, type) {
	return getDateFormatted(dateString, FORMAT_MONTH_NUMBER, type);
}

function getQuarter(dateString, type) {
	return getDateFormatted(dateString, FORMAT_QUARTER, type);
}

function getQuarterNumber(dateString, type) {
	return getDateFormatted(dateString, FORMAT_QUARTER_NUMBER, type);
}

function getYear(dateString, type) {
	return getDateFormatted(dateString, FORMAT_YEAR, type);
}



function getLink(dateString, linkType, dateType) {
	let linkTo = "";
	switch(linkType) {
		case "week":
			linkTo = getWeek(dateString, dateType);
			break;
		case "month":
			linkTo = getMonth(dateString, dateType);
			break;
		case "quarter":
			linkTo = getQuarter(dateString, dateType);
			break;
		case "year":
			linkTo = getYear(dateString, dateType);
			break;
		case "day":
		default:
			linkTo = getWeekDay(dateString, dateType);
			break;
	}
	
	const value = "'[[" + linkTo + "]]'";
	return value;
}



function getNoteList(dateString, noteType, dateType) {
	const formatDate = getFormat(dateType);
	const formatNote = getFormat(noteType);
	
	const startDate = moment(dateString, formatDate).startOf(dateType);
	const endDate = startDate.clone().endOf(dateType);
	
	let value = "[";
		
	let current = startDate.clone().startOf(noteType);
	while (current <= endDate) {
		if (value.length > 1) value += ", ";
		value += "'[[" + current.format(formatNote) + "]]'";
		current.add(1, noteType + "s");
	}
		
	value += "]";
	
	return value;
}




function getBannerLink(dateString, type) {
	let value = "'[[Banner";
	
	switch(type) {
		case "week":
			value += "KW" + getWeekNumber(dateString, type);
			break;
		case "month":
			value += "Monat" + getMonthNumber(dateString, type);
			break;
		case "quarter":
			value += "Quartal" + getQuarterNumber(dateString, type);
			break;
		case "year":
			value += "Jahr" + getYear(dateString, type);
			break;
		case "day":
		default:
			value += "Wochentag" + getWeekDay(dateString, type);
			break;
	}
	
	value += ".jpg]]'";
	return value;
}


function getIconLink(dateString, type) {
	let value = "'[[Icon";
	
	switch(type) {
		case "week":
			value += "Woche";
			break;
		case "month":
			value += "Monat" + getMonthNumber(dateString, type);
			break;
		case "quarter":
			value += "Quartal" + getQuarterNumber(dateString, type);
			break;
		case "year":
			value += "Jahr";
			break;
		case "day":
		default:
			value += "Wochentag" + getWeekDay(dateString, type);
			break;
	}
	
	value += ".png]]'";
	return value;
}






/**
 * Gibt eine Liste von Links zu den DailyNotes eines Monats aus.
 */
module.exports = {
	getDay: (dateString, type = "day", sortable = true) => getDay(dateString, type, sortable),
	getStartOf: (dateString, type = "day", sortable = true) => getStartOf(dateString, type, sortable),
	getEndOf: (dateString, type = "day", sortable = true) => getEndOf(dateString, type, sortable),
	getWeekDay: (dateString, type = "day") => getWeekDay(dateString, type),
	getWeek: (dateString, type = "day") => getWeek(dateString, type),
	getMonth: (dateString, type = "day") => getMonth(dateString, type),
	getMonthName: (dateString, type = "day") => getMonthName(dateString, type),
	getMonthNumber: (dateString, type = "day") => getMonthNumber(dateString, type),
	getQuarter: (dateString, type = "day") => getQuarter(dateString, type),
	getYear: (dateString, type = "day") => getYear(dateString, type),
	getNoteList: (dateString, noteType = "day", dateType = "week") => getNoteList(dateString, noteType, dateType),
	getWeeklyList: (dateString, type = "day") => getWeeklyNoteList(dateString, type),
	getLink: (dateString, linkType = "day", type = "day") => getLink(dateString, linkType, type),
	getBannerLink: (dateString, type = "day") => getBannerLink(dateString, type),
	getIconLink: (dateString, type = "day") => getIconLink(dateString, type),
}
