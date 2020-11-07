class Storage {

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    get(key, value = null) {
        const data =  localStorage.getItem(key)
        if (!data) return value
        return JSON.parse(data)
    }

}

export default new Storage()