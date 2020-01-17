let store = {
    _state: {
        
    },

    getState() {
        return this._state
    },

    _callObserver() {},

    subscribe(observer) {
        this._callObserver = observer;
    }
}

export default store;