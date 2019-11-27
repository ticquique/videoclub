'use strict';

/**
 * Loader interface every loader class must implement
 *
 * @export
 * @interface ILoader
 * @template T
 */
export default interface ILoader<T> {
    /**
     * Load method that returns loaded instance
     *
     * @returns {Promise<T>}
     * @memberof ILoader
     */
    load(): Promise<T>;
}
