export const INCREMENT = 'INCREMENT'

function action(type: string, payload = {}) {
    return {type, ...payload}
}

export const update = () => action(INCREMENT)