const DEVE_BASE_URL = import.meta.env.VITE_DEVE_BASE_URL

const PROD_BASE_URL = import.meta.env.VITE_PROD_BASE_URL

export const BASE_URL = import.meta.env.DEV ? DEVE_BASE_URL : PROD_BASE_URL

export const TIME_OUT = 10000
