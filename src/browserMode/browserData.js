const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;
    let browserName = '';
    let browserVersion = '';

    const chromeMatch = userAgent.match(/Chrome\/(\S+)/);
    const firefoxMatch = userAgent.match(/Firefox\/(\S+)/);
    const safariMatch = userAgent.match(/Version\/(\S+).*Safari/);
    const edgeMatch = userAgent.match(/Edge\/(\S+)/);
    const ieMatch = userAgent.match(/MSIE (\S+);/);

    if (chromeMatch !== null) {
        browserName = 'Chrome';
        browserVersion = chromeMatch[1];
    } else if (firefoxMatch !== null) {
        browserName = 'Firefox';
        browserVersion = firefoxMatch[1];
    } else if (safariMatch !== null) {
        browserName = 'Safari';
        browserVersion = safariMatch[1];
    } else if (edgeMatch !== null) {
        browserName = 'Edge';
        browserVersion = edgeMatch[1];
    } else if (ieMatch !== null) {
        browserName = 'Internet Explorer';
        browserVersion = ieMatch[1];
    }

    return { name: browserName, version: browserVersion };
}

// Get operating system
function getOperatingSystem() {
    return navigator.platform;
}

// Get screen resolution
// function getScreenResolution() {
//     return `${screen.width}x${screen.height}`;
// }

// Example usage
const browserInfo = getBrowserInfo();
console.log('Browser name:', browserInfo.name);
console.log('Browser version:', browserInfo.version);


const operatingSystem = getOperatingSystem();
console.log('Operating system:', operatingSystem);

// const screenResolution = getScreenResolution();
// console.log('Screen resolution:', screenResolution);

export default getBrowserInfo;