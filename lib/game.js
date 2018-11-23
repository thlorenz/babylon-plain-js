import {
    Engine
  , FreeCamera
  , HemisphericLight
  , MeshBuilder
  , Scene
  , Vector3
} from 'babylonjs'

export default class Game {
  constructor(canvas) {
    this._canvas = canvas
    this._engine = new Engine(this._canvas, true)

    this._scene = null
    this._camera = null
    this._light = null
  }

  createScene() {
    this._scene = new Scene(this._engine)

    const cameraPos = new Vector3(0, 5, -10)
    this._camera = new FreeCamera('maincam', cameraPos, this._scene)
    this._camera.setTarget(Vector3.Zero())
    this._camera.attachControl(this._canvas, false)

    const lightPos = new Vector3(0, 1, 0)
    this._light = new HemisphericLight('hemlight', lightPos, this._scene)

    const sphereOpts = { segments: 16, diameter: 2 }
    const sphere = MeshBuilder.CreateSphere('mainsphere', sphereOpts, this._scene)
    sphere.position.y = 1

    const groundOpts = { width: 6, height: 6, subdividions: 2 }
    MeshBuilder.CreateGround('mainground', groundOpts, this._scene)
    return this
  }

  animate() {
    this._engine.runRenderLoop(() => this._scene.render())
    return this
  }
}
