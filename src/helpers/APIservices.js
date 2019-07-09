
export const APIoptions = {

    modes: ['average', 'sum'],
    durations: ['hour', 'month', 'day'],
    limits: [7, 12, 24],
    timers: [30, 60, 3600],
    views: ['area', 'line'],
    locations: [],
    categories: [],

};

export const APIversion = 'v1'
export const timestampKey = 'day';
export const apiEndPoint = `/api/dashboard`;

export const extractDataByKey = (data, key) => {
    const res = data.map(val =>  val[key]);
    return res
}

export const serialData = (data, label, display) => {
    // return list object representation to work with APEX
    return {
        data: data,
        name: label,
        type: display
    }
}

export const extractFromTimestamp = (timestamps, extractKey) => {

    switch(extractKey){
        case 'hour':
            return timestamps.map( time => { 
                var t = new Date(time); 
                return t.getHours()});

        
        case 'day':
            return timestamps.map( time => { 
                var t = new Date(time);
                return t.getDay()});

        
        case 'month':
            return timestamps.map( time => { 
                var t = new Date(time);
                return t.getMonth()});


        default:
            break      
    }
}
