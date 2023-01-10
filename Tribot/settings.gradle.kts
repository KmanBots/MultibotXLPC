rootProject.name = "tribot-script-template"

include("libraries:my-library")
include("libraries:framework")

include("scripts:TheRaven")
include("scripts:my-script")
include("scripts")

pluginManagement {
    repositories {
        gradlePluginPortal()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    }
}