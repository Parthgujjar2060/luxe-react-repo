class BrowserInfoModel {

    constructor() {
        this.browserName = this.generateBrowserInfo().name;
        this.browserVersion = this.generateBrowserInfo().version;
        this.osName = this.getOperatingSystem();
        this.screenRes = this.getScreenResolution();
    }
  
    generateBrowserInfo() {
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

    getOperatingSystem() {
        return navigator.platform;
    }

    getScreenResolution() {
        return window.screen ? `${window.screen.width}x${window.screen.height}` : 'N/A';
      }

  }
  
  module.exports ={ BrowserInfoModel };