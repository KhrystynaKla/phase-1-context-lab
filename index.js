/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



// My code

function createEmployeeRecord(array){
    let obj = {}
    obj.firstName = array[0];
    obj.familyName = array[1];
    obj.title  = array[2];
    obj.payPerHour = array[3];
    obj.timeInEvents=[]
    obj.timeOutEvents=[]
    return obj
}


function createEmployeeRecords(array){
    return array.map(employee=> createEmployeeRecord(employee))
}


function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: 'TimeIn',
        hour:findHour(dateStamp),
        date: findDate(dateStamp)
    })
    return this
}

function findHour(dateStamp){
    return Number(dateStamp.slice(11,15))
}

function findDate(dateStamp){
    return dateStamp.slice(0,10)
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour:findHour(dateStamp),
        date: findDate(dateStamp)
    })
    return this
}

function hoursWorkedOnDate(spesDate){
    let hoursIn = this.timeInEvents.find(record => record.date===spesDate).hour;
    let hoursOut = this.timeOutEvents.find(record => record.date===spesDate).hour;
    if (hoursIn&&hoursOut){
        return ((hoursOut - hoursIn)/100)
    }
    return 0;
}


function wagesEarnedOnDate (date){
    let hoursCounter = hoursWorkedOnDate.bind(this)
    return (this.payPerHour*hoursCounter(date));
}


function findEmployeeByFirstName (srcArray, firstName){
    return srcArray.find(employeeRecord => (employeeRecord.firstName===firstName))
}


function calculatePayroll(srcArrayarr){
    return srcArrayarr.map(employeeRecord => allWagesFor.bind(employeeRecord)()).reduce((a,b)=> a+b,0)
    
}