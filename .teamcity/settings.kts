import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs

version = "2020.2"

project {
    buildType(BuildAndTest)
}

object BuildAndTest : BuildType({
    name = "Build and Test"

    vcs {
        root(DslContext.settingsRoot)
    }

    steps {
        script {
            name = "Install npm packages"
            scriptContent = """ npm install """
        }

        script {
            name = "Run tests"
            scriptContent = """ npm test """
        }
    }

    triggers {
        vcs {
        }
    }
})
