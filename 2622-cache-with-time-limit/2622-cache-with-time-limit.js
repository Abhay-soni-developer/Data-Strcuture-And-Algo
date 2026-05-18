var TimeLimitedCache = function () {
    this.cache = new Map();
    this.activeKeys = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const data = this.cache.get(key);
    let flag = false;

    if (data && data[1] !== null) {
        this._remove(key);
        flag = true;
    }

    const timeout = setTimeout(() => this._remove(key), duration)
    this.cache.set(key, [value, timeout]);
    this.activeKeys++;

    return flag;
};

TimeLimitedCache.prototype._remove = function (key) {
    const data = this.cache.get(key);
    clearTimeout(data[1]);
    this.cache.set(key, [false, null])
    this.activeKeys--;
}

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const data = this.cache.get(key);
    if(data) {
        return data[1] ? data[0] : -1;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.activeKeys;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */