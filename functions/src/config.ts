export interface Config {
  projectID: string;
  extensionID: string;
  location: string;
  iosBundleID: string;
  iosTeamID: string;
  androidBundleID: string;
  androidSHA?: string;
  androidScheme?: string;
  domainPostfix: string;
  wizeExtensionAdditionalApps?: IWizeExtAdditionalApps;
}
export interface IWizeExtAndroidAppConfig {
  bundleId: string;
  sha: string[];
}

export interface IWizeExtIosAppConfig {
  bundleId: string;
  teamId: string;
}

export interface IWizeExtAdditionalAppConfig {
  android?: IWizeExtAndroidAppConfig;
  ios?: IWizeExtIosAppConfig;
}


export interface IWizeExtAdditionalApps {
  [appName: string]: IWizeExtAdditionalAppConfig;
}

function parseWizeExtensionAdditionalApps(
  jsonString: string | undefined,
): IWizeExtAdditionalApps | undefined {
  if (!jsonString) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(jsonString);
    // Basic validation to ensure it's an object
    if (typeof parsed === 'object' && parsed !== null) {
      return parsed as IWizeExtAdditionalApps;
    }
  } catch (e) {
    console.error('Error parsing WIZE_EXTENSION_ADDITIONAL_APPS:', e);
  }

  return undefined;
}

const config: Config = {
  projectID: process.env.PROJECT_ID || '',
  extensionID: process.env.EXT_INSTANCE_ID || '',
  location: process.env.LOCATION || 'us-west1',
  iosBundleID: process.env.IOS_BUNDLE_ID || '',
  iosTeamID: process.env.IOS_TEAM_ID || '',
  androidBundleID: process.env.ANDROID_BUNDLE_ID || '',
  androidSHA: process.env.ANDROID_SHA || '',
  androidScheme: process.env.ANDROID_SCHEME || '',
  domainPostfix: process.env.DOMAIN_POSTFIX || 'flowlinks',
  wizeExtensionAdditionalApps: parseWizeExtensionAdditionalApps(process.env.WIZE_EXTENSION_ADDITIONAL_APPS || undefined),
};

export default config;
