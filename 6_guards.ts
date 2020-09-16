import set = Reflect.set;

function strip(x: string | number) {
    if (typeof x === 'number'){
        return x.toFixed(2)
    }
    return x.trim()
}

class myResponse {
    header = 'resp header'
    result = 'resp result'
}

class myError {
    header = 'error header'
    message = 'error message'
}


function handler(res: myError | myResponse) {
    if (res instanceof myError){
        return {
            info: res.message
        }
    }
    return {
        info: res.result
    }
}

//=============

type alertType = 'success' | 'danger' | 'warning'

function setAlertType(type: alertType) {

}

setAlertType('warning')
//setAlertType('default') error
