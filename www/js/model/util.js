/**
 * Debounce function calls
 * @param func Function to execute and throttle
 * @param wait Time in milliseconds
 * @param immediate Ignore constraints and execute immediately
 */
export function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(this, arguments);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait || 200);

        if (callNow) func.apply(this, arguments);
    };
}