// import ExpoModulesCore

// public class BrightnessControllerModule: Module {
//     public func definition() -> ModuleDefinition {
//         Name("BrightnessController")

//         Function("setBrightness") { (brightness: Float) in
//             UIScreen.main.brightness = CGFloat(brightness)
//         }
//     }
// }

import ExpoModulesCore

public class BrightnessControllerModule: Module {
    public func definition() -> ModuleDefinition {
        Name("BrightnessController")

        AsyncFunction("setBrightness") { (brightness: Float, promise: Promise) in
            DispatchQueue.main.async {
                UIScreen.main.brightness = CGFloat(brightness)
                promise.resolve(nil)
            }
        }
    }
}
