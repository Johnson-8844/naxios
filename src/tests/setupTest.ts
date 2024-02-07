const localStorageMock = (function () {
  let store: Record<string, any> = {}

  return {
    getItem(key: string) {
      return store[key]
    },

    setItem(key: string, value: any) {
      store[key] = value
    },

    clear() {
      store = {}
    },

    removeItem(key: string) {
      delete store[key]
    },

    getAll() {
      return store
    },

    length: Object.keys(store).length,

    key: () => '',
  }
})()
global.localStorage = localStorageMock
