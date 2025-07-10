# Wizecare Extensions

## Few SHA-1 fingerprints for Android

Update the `ext-firebase-flow-links-api` cloud function source according to compiled index.js and index.html files.

In the environment variable `ANDROID_SHA` of the cloud function `ext-firebase-flow-links-api`, set the array:
```json
["b8:9a:...:bb:07", "04:30:...:CE:7E"]
```

## Additional apps

### Prepare the cloud function

Set an environment variable with the name `WIZE_EXTENSION_ADDITIONAL_APPS` and JSON-stringified object implemented the `IWizeExtAdditionalApps` interface:
```json
{
    "additional_app_name": {
        "android": {
            "bundleId": "additional.app.name.first.bundle.id",
            "sha": ["b8:9a:...:bb:07", "04:30:...:CE:7E"]
        },
        "ios": {
            "bundleId": "additional.app.name.first.bundle.id",
            "teamId": "additional.app.name.first.team.id"
        }
    }
}
```

### Prepare redirectUrl

Add into the query string of the `redirectUrl` URL a parameter `wize_ext_additional_apps` and as a value the name of the app.