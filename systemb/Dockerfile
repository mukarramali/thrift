FROM openjdk:8
EXPOSE 9092
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
RUN ./gradlew clean build
RUN ./gradlew buildJar
CMD [`${JAVA_HOME}/bin/java -jar build/libs/service-all-0.1.0.jar`]