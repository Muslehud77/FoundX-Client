
type TDate = {
    calendar: {
        identifier: string,
    };
    day : number;
    era: string;
    month: number;
    year: number;
}



const dateToISO = (date:TDate)=>{

    if(!date){
        return new Date().toISOString();
    }

    return new Date(date.year, date.month, date.day).toISOString();
}

export default dateToISO;