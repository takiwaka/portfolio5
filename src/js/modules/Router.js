import load from '../pages/load'

export default class Router {
  constructor() {
    this.model = {
      pathName: location.pathname,
    }
    this.initRouting()
  }

  initRouting() {
    const pathName = this.model.pathName
    switch (pathName) {

      case '/load':
        new load()
        break

      default:
        break
    }
  }
}
