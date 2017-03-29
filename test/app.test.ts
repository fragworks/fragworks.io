import App from '../src/app'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('App is instantiable', () => {
    expect(new App()).toBeInstanceOf(App)
  })
})
