#!/usr/bin/env bash

./gradlew clean build
./gradlew buildJar
${JAVA_HOME}/bin/java -jar build/libs/service-all-0.1.0.jar