export  const getDateFromTimestamp = (timeStamp) => {
    const date = new Date(timeStamp*1000);
    const getHour = `${date.getHours()}:00:00`;
    const getDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    return [getDate, getHour];
}