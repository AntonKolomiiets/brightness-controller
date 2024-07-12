package expo.modules.brightnesscontroller

// import android.content.Context
import android.view.WindowManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

// class BrightnessControllerModule : Module() {
//     override fun definition() = ModuleDefinition {
//         Name("BrightnessController")

//         Function("setBrightness") { brightness: Float ->
//             val activity = appContext.currentActivity
//             if (activity != null) {
//                 val window = activity.window
//                 val layoutParams = window.attributes
//                 layoutParams.screenBrightness = brightness
//                 window.attributes = layoutParams
//             }
//         }
//     }
// }

class BrightnessControllerModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("BrightnessController")

        AsyncFunction("setBrightness") { brightness: Float ->
            GlobalScope.launch {
                setScreenBrightness(brightness)
            }
        }
    }

    private suspend fun setScreenBrightness(brightness: Float) {
        withContext(Dispatchers.Main) {
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



