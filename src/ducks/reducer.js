const initialState = {
    propertyName: '',
    address: '',
    city: '',
    states: '',
    zipcode: '',
    imgUrl: '',
    monMortAmount: 0,
    desMonRent: 0
}

const ADD_PROPERTY = 'ADD_PROPERTY'
const ADD_IMGURL = 'ADD_IMGURL'
const ADD_MORTRENT = 'ADD_MORTRENT'
const CANCEL_ENTRY = 'CANCEL_ENTRY'

export function addProperty(propertyName, address, city, states, zipcode) {
    return {
        type: ADD_PROPERTY,
        payload: { propertyName, address, city, states, zipcode }
    }
}

export function addImgUrl(imgUrl) {
    return {
        type: ADD_IMGURL,
        payload: imgUrl
    }
}

export function addMortRent(monMortAmount, desMonRent) {
    return {
        type: ADD_MORTRENT,
        payload: { monMortAmount, desMonRent }
    }
}

export function cancelEntry() {
    return {
        type: CANCEL_ENTRY,
        payload: {
            propertyName: '',
            address: '',
            city: '',
            states: '',
            zipcode: '',
            imgUrl: '',
            monMortAmount: 0,
            desMonRent: 0
        }
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PROPERTY:
            return Object.assign({}, state, {
                propertyName: action.payload.propertyName,
                address: action.payload.address,
                city: action.payload.city,
                states: action.payload.states,
                zipcode: action.payload.zipcode
            })

        case ADD_IMGURL:
            return Object.assign({}, state, { imgUrl: action.payload })

        case ADD_MORTRENT:
            return Object.assign({}, state, { monMortAmount: action.payload.monMortAmount, desMonRent: action.payload.desMonRent })

        case CANCEL_ENTRY:
            return Object.assign({}, state, {
                propertyName: action.payload.propertyName,
                address: action.payload.address,
                city: action.payload.city,
                states: action.payload.states,
                zipcode: action.payload.zipcode,
                imgUrl: action.payload.imgUrl,
                monMortAmount: action.payload.monMortAmount,
                desMonRent: action.payload.desMonRent
            })

        default: return state
    }
}


export default reducer;