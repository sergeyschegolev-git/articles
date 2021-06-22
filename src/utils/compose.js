export const compose = (...fns) => (value) => fns.reduceRight((data, fn) => fn(data), value);