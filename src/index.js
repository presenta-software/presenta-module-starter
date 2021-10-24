
const module = function (sceneElement, modConfig, sceneConfig) {
  console.log('do something with this scene:', sceneConfig)
}

module.install = Presenta => {
  Presenta.addModule('starter', module)
}

export default module

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(module)
}
