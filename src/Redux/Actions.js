import { HANDLEADD, INPTLIST, RATELIST} from "./Typeactions"

export const handleadd = (payload1,payload2,payload3,payload4) => {
    return {
        type : HANDLEADD,
        payload1,
        payload2,
        payload3,
        payload4
    }
}

export const inptlist = (payload) => {
    return {
        type : INPTLIST,
        payload
    }
}

export const ratelist = (payload) => {
    return {
        type : RATELIST,
        payload
    }
}