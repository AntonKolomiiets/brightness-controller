package expo.modules.brightnesscontroller

import android.content.Context
import android.view.WindowManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class BrightnessControllerModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("BrightnessController")

        Function("setBrightness") { brightness: Float ->
            val activity = appContext.currentActivity
            if (activity != null) {
                val window = activity.window
                val layoutParams = window.attributes
                layoutParams.screenBrightness = brightness
                window.attributes = layoutParams
            }
        }
    }
}
