/*!
* Notiflix React ('https://www.notiflix.com/react')
* Version: 1.3.1
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2019 Notiflix, MIT Licence ('https://opensource.org/licenses/MIT')
*/

// Notiflix: Extend on
const extendNotiflix = function () {
    let extended = {};
    let deep = false;
    let i = 0;
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }
    let merge = function (obj) {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                // If property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extendNotiflix(extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };
    for (; i < arguments.length; i++) {
        merge(arguments[i]);
    }
    return extended;
};
// Notiflix: Extend off

// Notiflix: Plaintext on
const notiflixPlaintext = function (html) {
    const htmlPool = document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
}
// Notiflix: Plaintext off

// Notiflix: GoogleFont on
const notiflixGoogleFont = function () {
    if (!document.getElementById('NotiflixQuicksand')) {

        // google fonts dns prefetch on
        const dns = '<link id="NotiflixGoogleDNS" rel="dns-prefetch" href="//fonts.googleapis.com">';
        const dnsRange = document.createRange();
        dnsRange.selectNode(document.head);
        const dnsFragment = dnsRange.createContextualFragment(dns);
        document.head.appendChild(dnsFragment);
        // google fonts dns prefetch off

        // google fonts style on
        const font = '<link id="NotiflixQuicksand" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;subset=latin-ext" rel="stylesheet" />';
        const fontRange = document.createRange();
        fontRange.selectNode(document.head);
        const fontFragment = fontRange.createContextualFragment(font);
        document.head.appendChild(fontFragment);
        // google fonts style off

    }
}
// Notiflix: GoogleFont off

// Notiflix: Console Error on
const notiflixConsoleError = function (title, message) {
    return console.error('%c ' + title + ' ', 'padding:2px;border-radius:20px;color:#fff;background:#f44336', '\n' + message + '\nVisit documentation page to learn more: https://www.notiflix.com/documentation');
}
// Notiflix: Console Error off


// Notiflix: Notify Default Settings on
let notifySettings = {
    wrapID: 'NotiflixNotifyWrap', // can not customizable
    width: '280px',
    position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom'
    distance: '10px',
    opacity: 1,
    borderRadius: '5px',
    rtl: false,
    timeout: 3000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: 'rgba(0,0,0,0.5)',

    ID: 'NotiflixNotify',
    className: 'notiflix-notify',
    zindex: 4001,
    useGoogleFont: true,
    fontFamily: 'Quicksand',
    fontSize: '13px',
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
    fontAwesomeIconSize: '34px',

    plainText: true,

    success: {
        background: '#00b462',
        textColor: '#fff',
        childClassName: 'success',
        notiflixIconColor: 'rgba(0, 0, 0, 0.25)',
        fontAwesomeClassName: 'fas fa-check-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },

    failure: {
        background: '#f44336',
        textColor: '#fff',
        childClassName: 'failure',
        notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
        fontAwesomeClassName: 'fas fa-times-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },

    warning: {
        background: '#f2bd1d',
        textColor: '#fff',
        childClassName: 'warning',
        notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
        fontAwesomeClassName: 'fas fa-exclamation-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },

    info: {
        background: '#00bcd4',
        textColor: '#fff',
        childClassName: 'info',
        notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
        fontAwesomeClassName: 'fas fa-info-circle',
        fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
    },
};
// Notiflix: Notify Default Settings off

// Notiflix: Report Default Settings on
let reportSettings = {
    ID: 'NotiflixReportWrap', // can not customizable
    className: 'notiflix-report',
    width: '320px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    rtl: false,
    zindex: 4002,
    backOverlay: true,
    backOverlayColor: 'rgba(0, 0, 0, 0.5)',
    useGoogleFont: true,
    fontFamily: 'Quicksand',
    svgSize: '110px',
    plainText: true,
    titleFontSize: '16px',
    titleMaxLength: 34,
    messageFontSize: '13px',
    messageMaxLength: 400,
    buttonFontSize: '14px',
    buttonMaxLength: 34,
    cssAnimation: true,
    cssAnimationDuration: 360,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom'

    success: {
        svgColor: '#00b462',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#00b462',
        buttonColor: '#fff',
    },

    failure: {
        svgColor: '#f44336',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#f44336',
        buttonColor: '#fff',
    },

    warning: {
        svgColor: '#f2bd1d',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#f2bd1d',
        buttonColor: '#fff',
    },

    info: {
        svgColor: '#00bcd4',
        titleColor: '#1e1e1e',
        messageColor: '#242424',
        buttonBackground: '#00bcd4',
        buttonColor: '#fff',
    },

};
// Notiflix: Report Default Settings off

// Notiflix: Confirm Default Settings on
let confirmSettings = {
    ID: 'NotiflixConfirmWrap', // can not customizable
    className: 'notiflix-confirm',
    width: '280px',
    zindex: 4003,
    position: 'center', // 'center' - 'center-top' -  'right-top' - 'right-bottom' - 'left-top' - 'left-bottom'
    distance: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    rtl: false,
    useGoogleFont: true,
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationStyle: 'fade', // 'zoom' - 'fade'
    cssAnimationDuration: 300,

    titleColor: '#00b462',
    titleFontSize: '16px',
    titleMaxLength: 34,

    messageColor: '#1e1e1e',
    messageFontSize: '14px',
    messageMaxLength: 110,

    buttonsFontSize: '15px',
    buttonsMaxLength: 34,
    okButtonColor: '#f8f8f8',
    okButtonBackground: '#00b462',
    cancelButtonColor: '#f8f8f8',
    cancelButtonBackground: '#a9a9a9',

    plainText: true,
}
// Notiflix: Confirm Default Settings off

// Notiflix: Loading Default Settings on
let loadingSettings = {
    ID: 'NotiflixLoadingWrap', // can not customizable
    className: 'notiflix-loading',
    zindex: 4000,
    backgroundColor: 'rgba(0,0,0,0.8)',
    rtl: false,
    useGoogleFont: true,
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 400,
    clickToClose: false,
    customSvgUrl: null,
    svgSize: '80px',
    svgColor: '#00b462',
    messageID: 'NotiflixLoadingMessage',
    messageFontSize: '15px',
    messageMaxLength: 34,
    messageColor: '#dcdcdc',
};
// Notiflix: Loading Default Settings off

// Notiflix: NX React on
let newNotifySettings;
let newReportSettings;
let newConfirmSettings;
let newLoadingSettings;
const Notiflix = {

    // Notify on
    Notify: {

        // Init
        Init: function (userNotifyOpt) {
            newNotifySettings = extendNotiflix(true, notifySettings, userNotifyOpt);

            // use GoogleFonts if "Quicksand" on
            if (newNotifySettings.useGoogleFont && newNotifySettings.fontFamily === 'Quicksand') {
                notiflixGoogleFont();
            }
            // use GoogleFonts if "Quicksand" off

        },

        // Merge First Init
        Merge: function (userNotifyExtend) {

            if (newNotifySettings) { // if initialized already
                newNotifySettings = extendNotiflix(true, newNotifySettings, userNotifyExtend);
            } else { // error
                notiflixConsoleError('Notiflix Error', 'You have to initialize the Notify module before call Merge function.');
                return;
            }
        },

        // Display Notification: Success
        Success: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            if (!callback) {
                callback = undefined;
            }

            const theType = newNotifySettings.success;
            NotiflixNotify(message, callback, theType, 'Success');
        },

        // Display Notification: Failure
        Failure: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            if (!callback) {
                callback = undefined;
            }

            const theType = newNotifySettings.failure;
            NotiflixNotify(message, callback, theType, 'Failure');

        },

        // Display Notification: Warning
        Warning: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            if (!callback) {
                callback = undefined;
            }

            const theType = newNotifySettings.warning;
            NotiflixNotify(message, callback, theType, 'Warning');

        },

        // Display Notification: Info
        Info: function (message, callback) {

            // if not initialized pretend like init
            if (!newNotifySettings) {
                Notiflix.Notify.Init({});
            }

            if (!callback) {
                callback = undefined;
            }

            const theType = newNotifySettings.info;
            NotiflixNotify(message, callback, theType, 'Info');

        },

    },
    // Notify off

    // Report on
    Report: {

        // Init
        Init: function (userReportOpt) {
            newReportSettings = extendNotiflix(true, reportSettings, userReportOpt);

            // use GoogleFonts if "Quicksand" on
            if (newReportSettings.useGoogleFont && newReportSettings.fontFamily === 'Quicksand') {
                notiflixGoogleFont();
            }
            // use GoogleFonts if "Quicksand" off

        },

        // Merge First Init
        Merge: function (userReportExtend) {

            if (newReportSettings) { // if initialized already
                newReportSettings = extendNotiflix(true, newReportSettings, userReportExtend);
            } else { // error
                notiflixConsoleError('Notiflix Error', 'You have to initialize the Report module before call Merge function.');
                return;
            }
        },

        // Display Report: Success
        Success: function (title, message, buttonText, buttonCallback) {

            // if not initialized pretend like init
            if (!newReportSettings) {
                Notiflix.Report.Init({});
            }

            if (arguments.length > 4) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (arguments[0] === undefined || arguments[0].length <= 0) { // title
                arguments[0] = 'Notiflix Success';
            }

            if (arguments[1] === undefined || arguments[1].length <= 0) { // message
                arguments[1] = `"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein`;
            }

            if (arguments[2] === undefined || arguments[2].length <= 0) { // buttonText
                arguments[2] = 'Okay';
            }

            if (arguments[3] === undefined) { // buttonCallback
                arguments[3] = undefined;
            }

            const theType = newReportSettings.success;
            NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3], theType, 'success');
        },

        // Display Report: Failure
        Failure: function (title, message, buttonText, buttonCallback) {

            // if not initialized pretend like init
            if (!newReportSettings) {
                Notiflix.Report.Init({});
            }

            if (arguments.length > 4) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (arguments[0] === undefined || arguments[0].length <= 0) { // title
                arguments[0] = 'Notiflix Failure';
            }

            if (arguments[1] === undefined || arguments[1].length <= 0) { // message
                arguments[1] = `"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford`;
            }

            if (arguments[2] === undefined || arguments[2].length <= 0) { // buttonText
                arguments[2] = 'Okay';
            }

            if (arguments[3] === undefined) { // buttonCallback
                arguments[3] = undefined;
            }

            const theType = newReportSettings.failure;
            NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3], theType, 'failure');

        },

        // Display Report: Warning
        Warning: function (title, message, buttonText, buttonCallback) {

            // if not initialized pretend like init
            if (!newReportSettings) {
                Notiflix.Report.Init({});
            }

            if (arguments.length > 4) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (arguments[0] === undefined || arguments[0].length <= 0) { // title
                arguments[0] = 'Notiflix Warning';
            }

            if (arguments[1] === undefined || arguments[1].length <= 0) { // message
                arguments[1] = `"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk`;
            }

            if (arguments[2] === undefined || arguments[2].length <= 0) { // buttonText
                arguments[2] = 'Okay';
            }

            if (arguments[3] === undefined) { // buttonCallback
                arguments[3] = undefined;
            }

            const theType = newReportSettings.warning;
            NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3], theType, 'warning');

        },

        // Display Report: Info
        Info: function (title, message, buttonText, buttonCallback) {

            // if not initialized pretend like init
            if (!newReportSettings) {
                Notiflix.Report.Init({});
            }

            if (arguments.length > 4) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (arguments[0] === undefined || arguments[0].length <= 0) { // title
                arguments[0] = 'Notiflix Info';
            }

            if (arguments[1] === undefined || arguments[1].length <= 0) { // message
                arguments[1] = `"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung`;
            }

            if (arguments[2] === undefined || arguments[2].length <= 0) { // buttonText
                arguments[2] = 'Okay';
            }

            if (arguments[3] === undefined) { // buttonCallback
                arguments[3] = undefined;
            }

            const theType = newReportSettings.info;
            NotiflixReport(arguments[0], arguments[1], arguments[2], arguments[3], theType, 'info');
        },

    },
    // Report off

    // Confirm on
    Confirm: {

        // Init
        Init: function (userConfirmOpt) {
            newConfirmSettings = extendNotiflix(true, confirmSettings, userConfirmOpt);

            // use GoogleFonts if "Quicksand" on
            if (newConfirmSettings.useGoogleFont && newConfirmSettings.fontFamily === 'Quicksand') {
                notiflixGoogleFont();
            }
            // use GoogleFonts if "Quicksand" off

        },

        // Merge First Init
        Merge: function (userConfirmExtend) {

            if (newConfirmSettings) { // if initialized already
                newConfirmSettings = extendNotiflix(true, newConfirmSettings, userConfirmExtend);
            } else { // error
                notiflixConsoleError('Notiflix Error', 'You have to initialize the Confirm module before call Merge function.');
                return;
            }
        },

        // Display Confirm: Show
        Show: function (title, message, okText, cancelText, okCallback, cancelCallback) {

            // if not initialized pretend like init
            if (!newConfirmSettings) {
                Notiflix.Confirm.Init({});
            }

            if (arguments.length > 6) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (arguments[0] === undefined || arguments[0].length <= 0) { // title
                arguments[0] = 'Notiflix Confirm';
            }

            if (arguments[1] === undefined || arguments[1].length <= 0) { // message
                arguments[1] = 'Do you agree with me?';
            }

            if (arguments[2] === undefined || arguments[2].length <= 0) { // ok buttonText
                arguments[2] = 'Yes';
            }

            if (arguments[3] === undefined || arguments[3].length <= 0) { // cancel buttonText
                arguments[3] = 'No';
            }

            if (arguments[4] === undefined) { // okCallback
                arguments[4] = undefined;
            }

            if (arguments[5] === undefined) { // cancelCallback
                arguments[5] = undefined;
            }

            NotiflixConfirm(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        },
    },
    // Confirm off

    // Loading on
    Loading: {

        // Init
        Init: function (userLoadingOpt) {
            newLoadingSettings = extendNotiflix(true, loadingSettings, userLoadingOpt);

            // use GoogleFonts if "Quicksand" on
            if (newLoadingSettings.useGoogleFont && newLoadingSettings.fontFamily === 'Quicksand') {
                notiflixGoogleFont();
            }
            // use GoogleFonts if "Quicksand" off

        },

        // Merge First Init
        Merge: function (userLoadingExtend) {

            if (newLoadingSettings) { // if initialized already
                newLoadingSettings = extendNotiflix(true, newLoadingSettings, userLoadingExtend);
            } else { // error
                notiflixConsoleError('Notiflix Error', 'You have to initialize the Loading module before call Merge function.');
                return;
            }
        },

        // Display Loading: Standard
        Standard: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'standard', true, 0); // true = display

        },

        // Display Loading: Hourglass
        Hourglass: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'hourglass', true, 0); // true = display

        },

        // Display Loading: Circle
        Circle: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'circle', true, 0); // true = display

        },

        // Display Loading: Arrows
        Arrows: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'arrows', true, 0); // true = display

        },

        // Display Loading: Dots
        Dots: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'dots', true, 0); // true = display

        },

        // Display Loading: Pulse
        Pulse: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'pulse', true, 0); // true = display

        },

        // Display Loading: Custom
        Custom: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'custom', true, 0); // true = display

        },

        // Display Loading: Notiflix
        Notiflix: function (message) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!message) {
                message = '';
            }

            NotiflixLoading(message, 'notiflix', true, 0); // true = display

        },

        // Remove Loading
        Remove: function (theDelay) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!theDelay) {
                theDelay = 0;
            }

            NotiflixLoading(false, false, false, theDelay); // false = Remove
        },

        // Change The Message
        Change: function (newMessage) {

            // if not initialized pretend like init
            if (!newLoadingSettings) {
                Notiflix.Loading.Init({});
            }

            if (arguments.length > 1) { // More parameters than allowed
                notiflixConsoleError('Notiflix Error', 'More parameters than allowed.');
                return;
            }

            if (!newMessage) {
                newMessage = '';
            }

            NotiflixLoadingChange(newMessage);
        },

    },
    // Loading off

}
export default Notiflix;
// Notiflix: NX React off


// Notiflix: Notify Single on
let notiflixNotifyCount = 0;
const NotiflixNotify = function (message, callback, theType, staticType) {

    if (arguments !== undefined && arguments.length === 4) {

        // no message on
        if (!message) {
            message = `Notiflix ${staticType}`;
        }
        // no message off

        // FontAwesome if Shadow on
        if (newNotifySettings.fontAwesomeIconStyle === 'shadow') {
            theType.fontAwesomeIconColor = theType.background;
        }
        // FontAwesome if Shadow off

        // if plainText true = HTML tags not allowed on      
        if (newNotifySettings.plainText) {
            message = notiflixPlaintext(message); // message plain text
        }
        // if plainText true = HTML tags not allowed off

        // if plainText false but the message length more than messageMaxLength = HTML tags error on
        if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
            Notiflix.Notify.Merge({ closeButton: true, });
            message = `<b>HTML Tags Error:</b> Your content length is more than "messageMaxLength" option.`; // message html error
        }
        // if plainText false but the message length more than messageMaxLength = HTML tags error off


        if (message.length > newNotifySettings.messageMaxLength) {
            message = `${message.substring(0, newNotifySettings.messageMaxLength)}...`;
        }

        // notify counter on
        notiflixNotifyCount++;
        // notify counter off

        // if cssAnimaion false -> duration on
        if (!newNotifySettings.cssAnimation) {
            newNotifySettings.cssAnimationDuration = 0;
        }
        // if cssAnimaion false -> duration off

        // notify wrap on
        let docBody = document.body;

        let ntflxNotifyWrap = document.createElement('div');
        ntflxNotifyWrap.id = notifySettings.wrapID;
        ntflxNotifyWrap.style.width = newNotifySettings.width;
        ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
        ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;

        // wrap position on
        if (newNotifySettings.position === 'right-bottom') {

            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = 'auto';
            ntflxNotifyWrap.style.left = 'auto';

        } else if (newNotifySettings.position === 'left-top') {

            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = 'auto';
            ntflxNotifyWrap.style.bottom = 'auto';

        } else if (newNotifySettings.position === 'left-bottom') {

            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = 'auto';
            ntflxNotifyWrap.style.right = 'auto';

        } else { // 'right-top' or else

            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.left = 'auto';
            ntflxNotifyWrap.style.bottom = 'auto';
        }
        // wrap position off

        // if background overlay true on
        let notifyOverlay;
        if (newNotifySettings.backOverlay) {

            notifyOverlay = document.createElement('div');
            notifyOverlay.id = `${newNotifySettings.ID}Overlay`;
            notifyOverlay.style.width = '100%';
            notifyOverlay.style.height = '100%';
            notifyOverlay.style.position = 'fixed';
            notifyOverlay.style.zIndex = newNotifySettings.zindex;
            notifyOverlay.style.left = 0;
            notifyOverlay.style.top = 0;
            notifyOverlay.style.right = 0;
            notifyOverlay.style.bottom = 0;
            notifyOverlay.style.background = newNotifySettings.backOverlayColor;
            notifyOverlay.className = (newNotifySettings.cssAnimation ? 'with-animation' : '');
            notifyOverlay.style.animationDuration = (newNotifySettings.cssAnimation) ? `${newNotifySettings.cssAnimationDuration}ms` : '';

            if (!document.getElementById(notifyOverlay.id)) {
                docBody.appendChild(notifyOverlay);
            }

        }
        // if background overlay true off

        if (!document.getElementById(ntflxNotifyWrap.id)) {
            docBody.appendChild(ntflxNotifyWrap);
        }
        // notify wrap off


        // notify content on
        let ntflxNotify = document.createElement('div');
        ntflxNotify.id = `${newNotifySettings.ID}-${notiflixNotifyCount}`;
        ntflxNotify.className = `${newNotifySettings.className} ${theType.childClassName} ${(newNotifySettings.cssAnimation ? 'with-animation' : '')} ${(newNotifySettings.useIcon ? 'with-icon' : '')} nx-${newNotifySettings.cssAnimationStyle} ${(newNotifySettings.closeButton && !callback ? 'with-close' : '')} ${(callback ? 'with-callback' : '')}`;
        ntflxNotify.style.fontSize = newNotifySettings.fontSize;
        ntflxNotify.style.color = theType.textColor;
        ntflxNotify.style.background = theType.background;
        ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;

        // rtl on
        if (newNotifySettings.rtl) {
            ntflxNotify.setAttribute('dir', 'rtl');
            ntflxNotify.classList.add('rtl-on');
        }
        // rtl off

        // font-family on
        ntflxNotify.style.fontFamily = `"${newNotifySettings.fontFamily}", sans-serif`;
        // font-family off

        // use css animation on
        if (newNotifySettings.cssAnimation) {
            ntflxNotify.style.animationDuration = `${newNotifySettings.cssAnimationDuration}ms`;
        }
        // use css animation off

        // click to close on
        let closeButtonHTML = '';
        if (newNotifySettings.closeButton && !callback) {
            closeButtonHTML = `<span class="click-to-close"><svg class="clck2cls" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 20 20"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.click2close{fill:${theType.notiflixIconColor};}</style></defs><g><path class="click2close" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>`;
        }
        // click to close off

        // use icon on
        if (newNotifySettings.useIcon) {

            if (newNotifySettings.useFontAwesome) { // use font awesome

                ntflxNotify.innerHTML = `<i style="color:${theType.fontAwesomeIconColor}; font-size:${newNotifySettings.fontAwesomeIconSize};" class="nmi wfa ${theType.fontAwesomeClassName} ${(newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'shadow' : 'basic')}"></i><span class="the-message with-icon">${message}</span>${(newNotifySettings.closeButton ? closeButtonHTML : '')}`;

            } else { // use notiflix icon

                let svgIcon = '';

                if (staticType === 'Success') {  // success

                    svgIcon = `<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Success{fill:${theType.notiflixIconColor};}</style></defs><g><path id="Notiflix-Icon-Success" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>`;

                } else if (staticType === 'Failure') { // failure

                    svgIcon = `<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Failure{fill:${theType.notiflixIconColor};}</style></defs><g><path id="Notiflix-Icon-Failure" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>`;

                } else if (staticType === 'Warning') { // warning

                    svgIcon = `<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Warning{fill:${theType.notiflixIconColor};}</style></defs><g><path id="Notiflix-Icon-Warning" class="fil0" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>`;

                } else if (staticType === 'Info') { // info

                    svgIcon = `<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Info{fill:${theType.notiflixIconColor};}</style></defs><g><path id="Notiflix-Icon-Info" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>`;

                }

                ntflxNotify.innerHTML = `${svgIcon}<span class="the-message with-icon">${message}</span>${(newNotifySettings.closeButton ? closeButtonHTML : '')}`;

            }

        } else { // without icon

            ntflxNotify.innerHTML = `<span class="the-message">${message}</span> ${(newNotifySettings.closeButton ? closeButtonHTML : '')}`;
        }
        // use icon off
        // notify content off


        // notify append or prepend on
        const notifyWrapElement = document.getElementById(ntflxNotifyWrap.id);
        if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') { // the new one will be first

            notifyWrapElement.insertBefore(ntflxNotify, notifyWrapElement.firstChild);
        } else {

            notifyWrapElement.appendChild(ntflxNotify);
        }

        if (newNotifySettings.useIcon) { // if useIcon, dynamically vertical align the contents

            let messageIcon = document.getElementById(ntflxNotify.id).querySelectorAll('.nmi')[0];
            let messageIconH = 40;

            if (newNotifySettings.useFontAwesome) { // if font awesome

                messageIconH = Math.round(parseInt(messageIcon.offsetHeight));

            } else { // if notiflix SVG

                let SvgBBox = messageIcon.getBBox();
                messageIconH = Math.round(parseInt(SvgBBox.width));

            }

            let messageText = document.getElementById(ntflxNotify.id).querySelectorAll('span')[0];
            let messageTextH = Math.round(messageText.offsetHeight);

            if (messageTextH <= messageIconH) {
                let paddingVal = `${parseInt((messageIconH - messageTextH) / 2).toString()}px`;
                messageText.style.paddingTop = paddingVal;
                messageText.style.paddingBottom = paddingVal;
            }

        }
        // notify append or prepend off


        // remove by timeout or click on
        if (document.getElementById(ntflxNotify.id)) {

            // set elements on
            let removeDiv = document.getElementById(ntflxNotify.id);
            let removeWrap = document.getElementById(ntflxNotifyWrap.id);
            let removeOverlay;
            if (newNotifySettings.backOverlay) {
                removeOverlay = document.getElementById(notifyOverlay.id);
            }
            // set elements on

            // timeout vars on
            let timeoutAddClass;
            let timeoutRemove;
            // timeout vars off

            // timeout if click to close false and callback undefined on
            if (!newNotifySettings.closeButton && !callback) {
                timeoutAddClass = setTimeout(function () {

                    removeDiv.classList.add('remove');

                    if (newNotifySettings.backOverlay && removeWrap.childElementCount <= 0) {
                        removeOverlay.classList.add('remove');
                    }

                }, newNotifySettings.timeout);

                timeoutRemove = setTimeout(function () {
                    removeDiv.parentNode.removeChild(removeDiv);
                    if (removeWrap.childElementCount <= 0) { // if childs count === 0 remove wrap
                        removeWrap.parentNode.removeChild(removeWrap);

                        if (newNotifySettings.backOverlay) {
                            removeOverlay.parentNode.removeChild(removeOverlay);
                        }
                    }
                }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
            }
            // timeout if click to close false and callback undefined off

            // if click to close on            
            if (newNotifySettings.closeButton && !callback) {

                let closeButtonElm = document.getElementById(ntflxNotify.id).querySelectorAll('span.click-to-close')[0];

                closeButtonElm.addEventListener('click', function () {

                    removeDiv.classList.add('remove');
                    clearTimeout(timeoutAddClass);

                    if (newNotifySettings.backOverlay && removeWrap.childElementCount <= 1) { // if last child - addClass Remove to Overlay
                        removeOverlay.classList.add('remove');
                    }

                    setTimeout(function () {
                        removeDiv.parentNode.removeChild(removeDiv);
                        clearTimeout(timeoutRemove);

                        if (removeWrap.childElementCount <= 0) { // if childs count === 0 remove wrap
                            removeWrap.parentNode.removeChild(removeWrap); // remove wrap

                            if (newNotifySettings.backOverlay) {
                                removeOverlay.parentNode.removeChild(removeOverlay);
                            }
                        }

                    }, newNotifySettings.cssAnimationDuration);

                });

            }
            // if click to close off


            // callback on
            if (callback) {

                removeDiv.addEventListener('click', function (e) {

                    callback(); // callback

                    // remove element on
                    removeDiv.classList.add('remove');

                    if (newNotifySettings.backOverlay && removeWrap.childElementCount <= 0) {
                        removeOverlay.classList.add('remove');
                    }

                    clearTimeout(timeoutAddClass);

                    setTimeout(function () {

                        removeDiv.parentNode.removeChild(removeDiv);

                        if (removeWrap.childElementCount <= 0) { // if childs count === 0 remove wrap
                            removeWrap.parentNode.removeChild(removeWrap);

                            if (newNotifySettings.backOverlay) {
                                removeOverlay.parentNode.removeChild(removeOverlay);
                            }
                        }
                        clearTimeout(timeoutRemove);
                    }, newNotifySettings.cssAnimationDuration);
                    // remove element off

                });

            }
            // callback off

        }
        // remove by timeout or click off

    } else {
        notiflixConsoleError('Notiflix Error', 'Where is the arguments?');
    }

}
// Notiflix: Notify Single off


// Notiflix: Report Single on
const NotiflixReport = function (title, message, buttonText, buttonCallback, theType, staticType) {

    // if plainText true = HTML tags not allowed on
    if (newReportSettings.plainText) {
        title = notiflixPlaintext(title);
        message = notiflixPlaintext(message);
        buttonText = notiflixPlaintext(buttonText);
    }
    // if plainText true = HTML tags not allowed off

    // if plainText false but the contents length more than *MaxLength = HTML tags error on
    if (!newReportSettings.plainText) {
        if (title.length > newReportSettings.titleMaxLength) {
            title = 'HTML Tags Error'; // title html error
            message = 'Your Title content length is more than "titleMaxLength" option.'; // message html error
            buttonText = 'Okay'; // button html error
        }

        if (message.length > newReportSettings.messageMaxLength) {
            title = 'HTML Tags Error'; // title html error
            message = 'Your Message content length is more than "messageMaxLength" option.'; // message html error
            buttonText = 'Okay'; // button html error
        }

        if (buttonText.length > newReportSettings.buttonMaxLength) {
            title = 'HTML Tags Error'; // title html error
            message = 'Your Button content length is more than "buttonMaxLength" option.'; // message html error
            buttonText = 'Okay'; // button html error
        }
    }
    // if plainText false but the contents length more than *MaxLength = HTML tags error off


    // max length on
    if (title.length > newReportSettings.titleMaxLength) {
        title = `${title.substring(0, newReportSettings.titleMaxLength)}...`;
    }

    if (message.length > newReportSettings.messageMaxLength) {
        message = `${message.substring(0, newReportSettings.messageMaxLength)}...`;
    }

    if (buttonText.length > newReportSettings.buttonMaxLength) {
        buttonText = `${buttonText.substring(0, newReportSettings.buttonMaxLength)}...`;
    }
    // max length off

    // if cssAnimaion false -> duration on
    if (!newReportSettings.cssAnimation) {
        newReportSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion false -> duration off

    // report wrap on
    const docBody = document.body;

    const ntflxReportWrap = document.createElement('div');
    ntflxReportWrap.id = reportSettings.ID;
    ntflxReportWrap.className = newReportSettings.className;
    ntflxReportWrap.style.width = newReportSettings.width;
    ntflxReportWrap.style.zIndex = newReportSettings.zindex;
    ntflxReportWrap.style.borderRadius = newReportSettings.borderRadius;

    // font-family on
    ntflxReportWrap.style.fontFamily = `"${newReportSettings.fontFamily}", sans-serif`;
    // font-family off

    // rtl on
    if (newReportSettings.rtl) {
        ntflxReportWrap.setAttribute('dir', 'rtl');
        ntflxReportWrap.classList.add('rtl-on');
    }
    // rtl off

    // overlay on
    let reportOverlay = '';
    if (newReportSettings.backOverlay) {
        reportOverlay = `<div class="${newReportSettings.className}-overlay ${(newReportSettings.cssAnimation ? 'with-animation' : '')}" style="background:${newReportSettings.backOverlayColor}; animation-duration:${newReportSettings.cssAnimationDuration}ms;"></div>`;
    }
    // overlay off


    // svg icon on
    let svgIcon = '';
    if (staticType === 'success') {
        svgIcon = notiflixReportSvgSuccess(newReportSettings.svgSize, theType.svgColor);
    } else if (staticType === 'failure') {
        svgIcon = notiflixReportSvgFailure(newReportSettings.svgSize, theType.svgColor);
    } else if (staticType === 'warning') {
        svgIcon = notiflixReportSvgWarning(newReportSettings.svgSize, theType.svgColor);
    } else if (staticType === 'info') {
        svgIcon = notiflixReportSvgInfo(newReportSettings.svgSize, theType.svgColor);
    }
    // svg icon off

    // report html on
    ntflxReportWrap.innerHTML = `${reportOverlay}
    <div class="${newReportSettings.className}-content ${(newReportSettings.cssAnimation ? 'with-animation' : '')} nx-${newReportSettings.cssAnimationStyle}" style="background:${newReportSettings.backgroundColor}; animation-duration:${newReportSettings.cssAnimationDuration}ms;">
    <div style="width:${newReportSettings.svgSize}; height:${newReportSettings.svgSize};" class="${newReportSettings.className}-icon">${svgIcon}</div>
    <h5 class="${newReportSettings.className}-title" style="font-weight:500; font-size:${newReportSettings.titleFontSize}; color:${theType.titleColor};">${title}</h5>
    <p class="${newReportSettings.className}-message" style="font-size:${newReportSettings.messageFontSize}; color:${theType.messageColor};">${message}</p>
    <a id="NXReportButton" class="${newReportSettings.className}-button" style="font-weight:500; font-size:${newReportSettings.buttonFontSize}; background:${theType.buttonBackground}; color:${theType.buttonColor};">${buttonText}</a>
    </div>`;
    // report html off

    if (!document.getElementById(ntflxReportWrap.id)) { // if no report

        docBody.appendChild(ntflxReportWrap); // append

        // vertical align on            
        let windowH = Math.round(window.innerHeight);
        let reportH = Math.round(document.getElementById(ntflxReportWrap.id).offsetHeight);
        ntflxReportWrap.style.top = `${parseInt((windowH - reportH) / 2).toString()}px`;
        // vertical align off

        // callback on
        let getReportWrap = document.getElementById(ntflxReportWrap.id);
        let reportButton = document.getElementById('NXReportButton');
        reportButton.addEventListener('click', function () {

            // if callback on
            if (buttonCallback) {
                buttonCallback();
            }
            // if callback off

            // remove element on
            getReportWrap.classList.add('remove');

            setTimeout(function () {
                getReportWrap.parentNode.removeChild(getReportWrap);
            }, newReportSettings.cssAnimationDuration);
            // remove element off

        });
        // callback off

    }
    // report wrap off

}
// Notiflix: Report Single off

// Notiflix: Report SVG Success on
const notiflixReportSvgSuccess = function (width, color) {

    if (!width) { width = '110px'; }
    if (!color) { color = '#00b462'; }

    const reportSvgSuccess = `<svg id="NXReportSuccess" fill="${color}" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@-webkit-keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportSuccess *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportSuccess4{fill: inherit;-webkit-animation-name: NXReportSuccess4-animation;animation-name: NXReportSuccess4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportSuccess6{fill: inherit;-webkit-animation-name: NXReportSuccess6-animation;animation-name: NXReportSuccess6-animation;opacity: 1;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess3{-webkit-animation-name: NXReportSuccess3-animation;animation-name: NXReportSuccess3-animation;-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess5{-webkit-animation-name: NXReportSuccess5-animation;animation-name: NXReportSuccess5-animation;-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}</style><g id="NXReportSuccess1"><g id="NXReportSuccess2"><g id="NXReportSuccess3" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportSuccess4"/></g><g id="NXReportSuccess5" data-animator-group="true" data-animator-type="2"><path d="M88.27 35.39l-35.47 39.9 -21.37 -17.09c-0.98,-0.81 -2.44,-0.63 -3.24,0.36 -0.79,0.99 -0.63,2.44 0.36,3.24l23.08 18.46c0.43,0.34 0.93,0.51 1.44,0.51 0.64,0 1.27,-0.26 1.74,-0.78l36.91 -41.53c0.86,-0.96 0.76,-2.42 -0.19,-3.26 -0.95,-0.86 -2.41,-0.77 -3.26,0.19z" id="NXReportSuccess6"/></g></g></g></svg>`;

    return reportSvgSuccess;

}
// Notiflix: Report SVG Success off

// Notiflix: Report SVG Failure on
const notiflixReportSvgFailure = function (width, color) {

    if (!width) { width = '110px'; }
    if (!color) { color = '#f44336'; }

    const reportSvgFailure = `<svg id="NXReportFailure" fill="${color}" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportFailure *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportFailure6{fill:inherit;-webkit-animation-name: NXReportFailure6-animation;animation-name: NXReportFailure6-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportFailure5{-webkit-animation-name: NXReportFailure5-animation;animation-name: NXReportFailure5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure3{-webkit-animation-name: NXReportFailure3-animation;animation-name: NXReportFailure3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure4{fill:inherit;-webkit-animation-name: NXReportFailure4-animation;animation-name: NXReportFailure4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}</style><g id="NXReportFailure1"><g id="NXReportFailure2"><g id="NXReportFailure3" data-animator-group="true" data-animator-type="2"><path d="M4.35 34.95c0,-16.82 13.78,-30.6 30.6,-30.6l50.1 0c16.82,0 30.6,13.78 30.6,30.6l0 50.1c0,16.82 -13.78,30.6 -30.6,30.6l-50.1 0c-16.82,0 -30.6,-13.78 -30.6,-30.6l0 -50.1zm30.6 85.05l50.1 0c19.22,0 34.95,-15.73 34.95,-34.95l0 -50.1c0,-19.22 -15.73,-34.95 -34.95,-34.95l-50.1 0c-19.22,0 -34.95,15.73 -34.95,34.95l0 50.1c0,19.22 15.73,34.95 34.95,34.95z" id="NXReportFailure4"/></g><g id="NXReportFailure5" data-animator-group="true" data-animator-type="2"><path d="M82.4 37.6c-0.9,-0.9 -2.37,-0.9 -3.27,0l-19.13 19.13 -19.14 -19.13c-0.9,-0.9 -2.36,-0.9 -3.26,0 -0.9,0.9 -0.9,2.35 0,3.26l19.13 19.14 -19.13 19.13c-0.9,0.9 -0.9,2.37 0,3.27 0.45,0.45 1.04,0.68 1.63,0.68 0.59,0 1.18,-0.23 1.63,-0.68l19.14 -19.14 19.13 19.14c0.45,0.45 1.05,0.68 1.64,0.68 0.58,0 1.18,-0.23 1.63,-0.68 0.9,-0.9 0.9,-2.37 0,-3.27l-19.14 -19.13 19.14 -19.14c0.9,-0.91 0.9,-2.36 0,-3.26z" id="NXReportFailure6"/></g></g></g></svg>`;

    return reportSvgFailure;
}
// Notiflix: Report SVG Failure off

// Notiflix: Report SVG Warning on
const notiflixReportSvgWarning = function (width, color) {

    if (!width) { width = '110px'; }
    if (!color) { color = '#f2bd1d'; }

    const reportSvgWarning = `<svg id="NXReportWarning" fill="${color}" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@-webkit-keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportWarning *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportWarning3{fill: inherit;-webkit-animation-name: NXReportWarning3-animation;animation-name: NXReportWarning3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning5{fill: inherit;-webkit-animation-name: NXReportWarning5-animation;animation-name: NXReportWarning5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning4{-webkit-animation-name: NXReportWarning4-animation;animation-name: NXReportWarning4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}#NXReportWarning2{-webkit-animation-name: NXReportWarning2-animation;animation-name: NXReportWarning2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportWarning1"><g id="NXReportWarning2" data-animator-group="true" data-animator-type="2"><path d="M115.46 106.15l-54.04 -93.8c-0.61,-1.06 -2.23,-1.06 -2.84,0l-54.04 93.8c-0.62,1.07 0.21,2.29 1.42,2.29l108.08 0c1.21,0 2.04,-1.22 1.42,-2.29zm-50.29 -95.95l54.04 93.8c2.28,3.96 -0.65,8.78 -5.17,8.78l-108.08 0c-4.52,0 -7.45,-4.82 -5.17,-8.78l54.04 -93.8c2.28,-3.95 8.03,-4 10.34,0z" id="NXReportWarning3"/></g><g id="NXReportWarning4" data-animator-group="true" data-animator-type="2"><path d="M57.83 94.01c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -3.2c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 3.2zm0 -14.15c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -40.65c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 40.65z" id="NXReportWarning5"/></g></g></svg>`;

    return reportSvgWarning;
}
// Notiflix: Report SVG Warning off

// Notiflix: Report SVG Info on
const notiflixReportSvgInfo = function (width, color) {

    if (!width) { width = '110px'; }
    if (!color) { color = '#00bcd4'; }

    const reportSvgInfo = `<svg id="NXReportInfo" fill="${color}" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportInfo *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportInfo3{fill:inherit;-webkit-animation-name: NXReportInfo3-animation;animation-name: NXReportInfo3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo5{fill:inherit;-webkit-animation-name: NXReportInfo5-animation;animation-name: NXReportInfo5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo2{-webkit-animation-name: NXReportInfo2-animation;animation-name: NXReportInfo2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportInfo4{-webkit-animation-name: NXReportInfo4-animation;animation-name: NXReportInfo4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportInfo1"><g id="NXReportInfo2" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportInfo3"/></g><g id="NXReportInfo4" data-animator-group="true" data-animator-type="2"><path d="M57.75 43.85c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 48.18c0,1.24 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1.01 -2.25,-2.25l0 -48.18zm0 -15.88c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 3.32c0,1.25 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1 -2.25,-2.25l0 -3.32z" id="NXReportInfo5"/></g></g></svg>`;

    return reportSvgInfo;

}
// Notiflix: Report SVG Info off


// Notiflix: Confirm Single on
const NotiflixConfirm = function (title, message, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback) {

    // if plainText true = HTML tags not allowed on
    if (newConfirmSettings.plainText) {
        title = notiflixPlaintext(title);
        message = notiflixPlaintext(message);
        okButtonText = notiflixPlaintext(okButtonText);
        cancelButtonText = notiflixPlaintext(cancelButtonText);
    }
    // if plainText true = HTML tags not allowed off

    // if plainText false but the contents length more than *MaxLength = HTML tags error on
    if (!newConfirmSettings.plainText) {
        if (title.length > newConfirmSettings.titleMaxLength) {
            title = 'HTML Tags Error'; // title html error
            message = 'Your Title content length is more than "titleMaxLength" option.'; // message html error
            okButtonText = 'Okay'; // button html error
            cancelButtonText = '...'; // button html error
        }

        if (message.length > newConfirmSettings.messageMaxLength) {
            title = 'HTML Tags Error'; // title html error
            message = 'Your Message content length is more than "messageMaxLength" option.'; // message html error
            okButtonText = 'Okay'; // button html error
            cancelButtonText = '...'; // button html error
        }

        if ((okButtonText.length || cancelButtonText.length) > newConfirmSettings.buttonsMaxLength) {
            title = 'HTML Tags Error'; // title html error
            message = 'Your Buttons contents length is more than "buttonsMaxLength" option.'; // message html error
            okButtonText = 'Okay'; // button html error
            cancelButtonText = '...'; // button html error
        }
    }
    // if plainText false but the contents length more than *MaxLength = HTML tags error off


    // max length on
    if (title.length > newConfirmSettings.titleMaxLength) {
        title = `${title.substring(0, newConfirmSettings.titleMaxLength)}...`;
    }

    if (message.length > newConfirmSettings.messageMaxLength) {
        message = `${message.substring(0, newConfirmSettings.messageMaxLength)}...`;
    }

    if (okButtonText.length > newConfirmSettings.buttonsMaxLength) {
        okButtonText = `${okButtonText.substring(0, newConfirmSettings.buttonsMaxLength)}...`;
    }

    if (cancelButtonText.length > newConfirmSettings.buttonsMaxLength) {
        cancelButtonText = `${cancelButtonText.substring(0, newConfirmSettings.buttonsMaxLength)}...`;
    }
    // max length off


    // if cssAnimaion false -> duration on
    if (!newConfirmSettings.cssAnimation) {
        newConfirmSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion false -> duration off


    // confirm wrap on
    const docBody = document.body;

    const ntflxConfirmWrap = document.createElement('div');
    ntflxConfirmWrap.id = confirmSettings.ID;
    ntflxConfirmWrap.className = `${newConfirmSettings.className} ${(newConfirmSettings.cssAnimation ? 'with-animation nx-' + newConfirmSettings.cssAnimationStyle : '')}`;
    ntflxConfirmWrap.style.width = newConfirmSettings.width;
    ntflxConfirmWrap.style.zIndex = newConfirmSettings.zindex;
    ntflxConfirmWrap.style.margin = 'auto';

    // rtl on
    if (newConfirmSettings.rtl) {
        ntflxConfirmWrap.setAttribute('dir', 'rtl');
        ntflxConfirmWrap.classList.add('rtl-on');
    }
    // rtl off

    // font-family on
    ntflxConfirmWrap.style.fontFamily = `"${newConfirmSettings.fontFamily}", sans-serif`;
    // font-family off

    // if background overlay true on
    let confirmOverlay = '';
    if (newConfirmSettings.backOverlay) {
        confirmOverlay = `<div class="${newConfirmSettings.className}-overlay ${(newConfirmSettings.cssAnimation ? 'with-animation' : '')}" style="background:${newConfirmSettings.backOverlayColor};animation-duration:${newConfirmSettings.cssAnimationDuration}ms;"></div>`;
    }
    // if background overlay true off


    // if have a callback - cancel button on
    let cancelButtonHTML = '';
    if (okButtonCallback) {
        cancelButtonHTML = `<a id="NXConfirmButtonCancel" class="confirm-button-cancel" style="color:${newConfirmSettings.cancelButtonColor};background:${newConfirmSettings.cancelButtonBackground};font-size:${newConfirmSettings.buttonsFontSize};">${cancelButtonText}</a>`;
    }
    // if have a callback - cancel button off

    ntflxConfirmWrap.innerHTML = `${confirmOverlay}
        <div class="${newConfirmSettings.className}-content" style="background:${newConfirmSettings.backgroundColor}; animation-duration:${newConfirmSettings.cssAnimationDuration}ms; border-radius:${newConfirmSettings.borderRadius};">
            <div class="${newConfirmSettings.className}-head">
                <h5 style="color:${newConfirmSettings.titleColor};font-size:${newConfirmSettings.titleFontSize};">${title}</h5>
                <p style="color:${newConfirmSettings.messageColor};font-size:${newConfirmSettings.messageFontSize};">${message}</p>
            </div>
            <div class="${newConfirmSettings.className}-buttons">
                <a id="NXConfirmButtonOk" class="confirm-button-ok ${(okButtonCallback ? '' : 'full')}" style="color:${newConfirmSettings.okButtonColor};background:${newConfirmSettings.okButtonBackground};font-size:${newConfirmSettings.buttonsFontSize};">${okButtonText}</a>
                ${cancelButtonHTML}
            </div>
        </div>`;
    // confirm wrap off

    // if there is no confirm box on
    if (!document.getElementById(ntflxConfirmWrap.id)) {
        docBody.appendChild(ntflxConfirmWrap);

        // position on                  
        if (newConfirmSettings.position === 'center') { // if center

            let windowH = Math.round(window.innerHeight);
            let confirmH = Math.round(document.getElementById(ntflxConfirmWrap.id).offsetHeight);

            ntflxConfirmWrap.style.top = `${parseInt((windowH - confirmH) / 2)}px`;
            ntflxConfirmWrap.style.left = newConfirmSettings.distance;
            ntflxConfirmWrap.style.right = newConfirmSettings.distance;
            ntflxConfirmWrap.style.bottom = 'auto';

        } else if (newConfirmSettings.position === 'right-top') { // if right-top

            ntflxConfirmWrap.style.right = newConfirmSettings.distance;
            ntflxConfirmWrap.style.top = newConfirmSettings.distance;
            ntflxConfirmWrap.style.bottom = 'auto';
            ntflxConfirmWrap.style.left = 'auto';

        } else if (newConfirmSettings.position === 'right-bottom') { // if right-bottom

            ntflxConfirmWrap.style.right = newConfirmSettings.distance;
            ntflxConfirmWrap.style.bottom = newConfirmSettings.distance;
            ntflxConfirmWrap.style.top = 'auto';
            ntflxConfirmWrap.style.left = 'auto';

        } else if (newConfirmSettings.position === 'left-top') { // if left-top

            ntflxConfirmWrap.style.left = newConfirmSettings.distance;
            ntflxConfirmWrap.style.top = newConfirmSettings.distance;
            ntflxConfirmWrap.style.right = 'auto';
            ntflxConfirmWrap.style.bottom = 'auto';

        } else if (newConfirmSettings.position === 'left-bottom') { // if left-bottom

            ntflxConfirmWrap.style.left = newConfirmSettings.distance;
            ntflxConfirmWrap.style.bottom = newConfirmSettings.distance;
            ntflxConfirmWrap.style.top = 'auto';
            ntflxConfirmWrap.style.right = 'auto';

        } else { // if center-top or else

            ntflxConfirmWrap.style.top = newConfirmSettings.distance;
            ntflxConfirmWrap.style.left = 0;
            ntflxConfirmWrap.style.right = 0;
            ntflxConfirmWrap.style.bottom = 'auto';
        }
        // position off

        // buttons listener on
        const confirmCloseWrap = document.getElementById(ntflxConfirmWrap.id);
        const okButton = document.getElementById('NXConfirmButtonOk');

        // ok button listener on
        okButton.addEventListener('click', function () {

            // if ok callback && if ok callback is a function
            if (okButtonCallback && typeof okButtonCallback === 'function') {
                okButtonCallback();
            }

            confirmCloseWrap.classList.add('remove');

            setTimeout(function () {
                confirmCloseWrap.parentNode.removeChild(confirmCloseWrap);
            }, newConfirmSettings.cssAnimationDuration);

        });
        // ok button listener off

        // if ok callback && if ok callback a function => add Cancel Button listener on
        if (okButtonCallback && typeof okButtonCallback === 'function') {

            // cancel button listener on
            const cancelButton = document.getElementById('NXConfirmButtonCancel');
            cancelButton.addEventListener('click', function () {

                // if cancel callback && if cancel callback a function
                if (cancelButtonCallback && typeof cancelButtonCallback === 'function') {
                    cancelButtonCallback();
                }

                confirmCloseWrap.classList.add('remove');

                setTimeout(function () {
                    confirmCloseWrap.parentNode.removeChild(confirmCloseWrap);
                }, newConfirmSettings.cssAnimationDuration);

            });
            // cancel button listener off

        }
        // if ok callback && if ok callback a function => add Cancel Button listener off
        // buttons listener off

    }
    // if there is no confirm box off

}
// Notiflix: Confirm Single off


// Notiflix: Loading Single on
const NotiflixLoading = function (message, iconType, display, theDelay) {

    if (display) { // show it

        // if message settings on
        if (message.toString().length > newLoadingSettings.messageMaxLength) {
            message = `${notiflixPlaintext(message).toString().substring(0, newLoadingSettings.messageMaxLength)}...`;
        } else {
            message = `${notiflixPlaintext(message).toString()}`;
        }

        let intSvgSize = parseInt(newLoadingSettings.svgSize.slice(0, -2));
        let messageHTML = '';
        if (message.length > 0) {

            let messagePosTop = `${parseInt(Math.round(intSvgSize - (intSvgSize / 3))).toString()}px`;
            let messageHeight = `${(parseInt(newLoadingSettings.messageFontSize.slice(0, 2)) * 1.2).toString()}px`;

            messageHTML = `<p id="${newLoadingSettings.messageID}" class="loading-message" style="color:${newLoadingSettings.messageColor};font-size:${newLoadingSettings.messageFontSize};height:${messageHeight}; top:${messagePosTop};">${message}</p>`;

        }
        // if message settings off

        // if cssAnimaion false -> duration on
        if (!newLoadingSettings.cssAnimation) {
            newLoadingSettings.cssAnimationDuration = 0;
        }
        // if cssAnimaion false -> duration off

        // svgIcon on
        let svgIcon = '';
        if (iconType === 'standard') {
            svgIcon = notiflixLoadingSvgStandard(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
        } else if (iconType === 'hourglass') {
            svgIcon = notiflixLoadingSvgHourglass(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
        } else if (iconType === 'circle') {
            svgIcon = notiflixLoadingSvgCircle(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
        } else if (iconType === 'arrows') {
            svgIcon = notiflixLoadingSvgArrows(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
        } else if (iconType === 'dots') {
            svgIcon = notiflixLoadingSvgDots(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
        } else if (iconType === 'pulse') {
            svgIcon = notiflixLoadingSvgPulse(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
        } else if (iconType === 'custom' && newLoadingSettings.customSvgUrl !== null) {
            svgIcon = `<img class="custom-loading-icon" width="${newLoadingSettings.svgSize}" height="${newLoadingSettings.svgSize}" src="${newLoadingSettings.customSvgUrl}" alt="Notiflix">`;
        } else if (iconType === 'custom' && newLoadingSettings.customSvgUrl == null) {
            notiflixConsoleError('Notiflix Error', 'You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.');
            return false;
        } else if (iconType === 'notiflix') {
            svgIcon = notiflixLoadingSvgNotiflix(newLoadingSettings.svgSize, '#f8f8f8', '#00b462');
        }

        let svgPosTop = 0;
        if (message.length > 0) {
            svgPosTop = `-${parseInt(Math.round(intSvgSize - (intSvgSize / 3))).toString()}px`;
        }

        let svgIconHTML = `<div style="top:${svgPosTop}; width:${newLoadingSettings.svgSize}; height:${newLoadingSettings.svgSize};" class="${newLoadingSettings.className}-icon ${(message.length > 0 ? 'with-message' : '')}">${svgIcon}</div>`;
        // svgIcon off


        // loading wrap on
        const docBody = document.body;

        const ntflxLoadingWrap = document.createElement('div');
        ntflxLoadingWrap.id = loadingSettings.ID;
        ntflxLoadingWrap.className = `${newLoadingSettings.className} ${(newLoadingSettings.cssAnimation ? 'with-animation' : '')} ${(newLoadingSettings.clickToClose ? 'click-to-close' : '')}`;
        ntflxLoadingWrap.style.zIndex = newLoadingSettings.zindex;
        ntflxLoadingWrap.style.background = newLoadingSettings.backgroundColor;
        ntflxLoadingWrap.style.animationDuration = `${newLoadingSettings.cssAnimationDuration}ms`;

        // font-family on
        ntflxLoadingWrap.style.fontFamily = `"${newLoadingSettings.fontFamily}", sans-serif`;
        // font-family off

        // rtl on
        if (newLoadingSettings.rtl) {
            ntflxLoadingWrap.setAttribute('dir', 'rtl');
            ntflxLoadingWrap.classList.add('rtl-on');
        }
        // rtl off

        // append on
        ntflxLoadingWrap.innerHTML = `${svgIconHTML} ${messageHTML}`; // inner html

        if (!document.getElementById(ntflxLoadingWrap.id)) { // if not loading

            docBody.appendChild(ntflxLoadingWrap); // append

            // if click to close on            
            if (newLoadingSettings.clickToClose) {

                const loadingWrapElm = document.getElementById(ntflxLoadingWrap.id);

                loadingWrapElm.addEventListener('click', function () {

                    ntflxLoadingWrap.classList.add('remove');

                    setTimeout(function () {
                        ntflxLoadingWrap.parentNode.removeChild(ntflxLoadingWrap);
                    }, newLoadingSettings.cssAnimationDuration);

                });

            }
            // if click to close off
        }
        // append off

    } else { // Remove

        if (document.getElementById(loadingSettings.ID)) { // if has any loading

            const loadingElm = document.getElementById(loadingSettings.ID);

            setTimeout(function () {

                loadingElm.classList.add('remove');

                setTimeout(function () {
                    loadingElm.parentNode.removeChild(loadingElm);
                }, newLoadingSettings.cssAnimationDuration);

            }, theDelay);

        }

    }

}
// Notiflix: Loading Single off

// Notiflix: Loading Change Message on
const NotiflixLoadingChange = function (newMessage) {

    if (document.getElementById(loadingSettings.ID)) { // if has any loading

        if (newMessage.toString().length > newLoadingSettings.messageMaxLength) {
            newMessage = `${notiflixPlaintext(newMessage).toString().substring(0, newLoadingSettings.messageMaxLength)}...`;
        } else {
            newMessage = notiflixPlaintext(newMessage).toString();
        }

        if (newMessage.length > 0) { // if has any message

            let oldMessageElm = document.getElementById(loadingSettings.ID).getElementsByTagName('p')[0];

            if (oldMessageElm !== undefined) { // there is a message element

                oldMessageElm.innerHTML = newMessage; // change the message

            } else { // there is no message element

                // create a new message element on
                const newMessageHTML = document.createElement('p');
                newMessageHTML.id = newLoadingSettings.messageID;
                newMessageHTML.className = 'loading-message new';

                newMessageHTML.style.color = newLoadingSettings.messageColor;
                newMessageHTML.style.fontSize = newLoadingSettings.messageFontSize;

                const intSvgSize = parseInt(newLoadingSettings.svgSize.slice(0, -2));
                const messagePosTop = `${parseInt(Math.round(intSvgSize - (intSvgSize / 3))).toString()}px`;
                newMessageHTML.style.top = messagePosTop;

                const messageHeight = `${(parseInt(newLoadingSettings.messageFontSize.slice(0, 2)) * 1.2).toString()}px`;
                newMessageHTML.style.height = messageHeight;

                newMessageHTML.innerHTML = newMessage;

                const messageWrap = document.getElementById(loadingSettings.ID);
                messageWrap.appendChild(newMessageHTML);
                // create a new message element off

                // vertical align svg on
                const svgDivElm = document.getElementById(loadingSettings.ID).getElementsByTagName('div')[0];
                const svgNewPosTop = `-${parseInt(Math.round(intSvgSize - (intSvgSize / 3))).toString()}px`;
                svgDivElm.style.top = svgNewPosTop;
                // vertical align svg off

            }

        } else { // if no message
            notiflixConsoleError('Notiflix Error', 'Where is the new message?');
        }

    }

}
// Notiflix: Loading Change Message off


// Notiflix: Loading SVG standard on
const notiflixLoadingSvgStandard = (width, color) => {
    if (!width) { width = '60px'; }
    if (!color) { color = '#00b462'; }
    const standard = `<svg stroke="${color}" width="${width}" height="${width}" viewBox="0 0 38 38" style="transform:scale(0.8);" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>`;
    return standard;
}
// Notiflix: Loading SVG standard off

// Notiflix: Loading SVG hourglass on
const notiflixLoadingSvgHourglass = (width, color) => {
    if (!width) { width = '60px'; }
    if (!color) { color = '#00b462'; }
    const hourglass = `<svg id="NXLoadingHourglass" fill="${color}" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@-webkit-keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}@keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}#NXLoadingHourglass *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXhourglass7{fill: inherit;}#NXhourglass1{-webkit-animation-name: NXhourglass1-animation;animation-name: NXhourglass1-animation;-webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;transform-box: fill-box;}#NXhourglass3{-webkit-animation-name: NXhourglass3-animation;animation-name: NXhourglass3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}#NXhourglass5{-webkit-animation-name: NXhourglass5-animation;animation-name: NXhourglass5-animation;-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}g#NXhourglass5,#NXhourglass3{fill: inherit;opacity: .4;}</style><g id="NXhourglass1" data-animator-group="true" data-animator-type="1"><g id="NXhourglass2"><g id="NXhourglass3" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,132.08 65.62,163.22 134.38,163.22 134.38,132.08 " id="NXhourglass4"/></g><g id="NXhourglass5" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,67.92 65.62,36.78 134.38,36.78 134.38,67.92" id="NXhourglass6"/></g> <path d="M51.14 38.89l8.33 0 0 14.93c0,15.1 8.29,28.99 23.34,39.1 1.88,1.25 3.04,3.97 3.04,7.08 0,3.11 -1.16,5.83 -3.04,7.09 -15.05,10.1 -23.34,23.99 -23.34,39.09l0 14.93 -8.33 0c-2.68,0 -4.86,2.18 -4.86,4.86 0,2.69 2.18,4.86 4.86,4.86l97.72 0c2.68,0 4.86,-2.17 4.86,-4.86 0,-2.68 -2.18,-4.86 -4.86,-4.86l-8.33 0 0 -14.93c0,-15.1 -8.29,-28.99 -23.34,-39.09 -1.88,-1.26 -3.04,-3.98 -3.04,-7.09 0,-3.11 1.16,-5.83 3.04,-7.08 15.05,-10.11 23.34,-24 23.34,-39.1l0 -14.93 8.33 0c2.68,0 4.86,-2.18 4.86,-4.86 0,-2.69 -2.18,-4.86 -4.86,-4.86l-97.72 0c-2.68,0 -4.86,2.17 -4.86,4.86 0,2.68 2.18,4.86 4.86,4.86zm79.67 14.93c0,15.87 -11.93,26.25 -19.04,31.03 -4.6,3.08 -7.34,8.75 -7.34,15.15 0,6.41 2.74,12.07 7.34,15.15 7.11,4.78 19.04,15.16 19.04,31.03l0 14.93 -61.62 0 0 -14.93c0,-15.87 11.93,-26.25 19.04,-31.02 4.6,-3.09 7.34,-8.75 7.34,-15.16 0,-6.4 -2.74,-12.07 -7.34,-15.15 -7.11,-4.78 -19.04,-15.16 -19.04,-31.03l0 -14.93 61.62 0 0 14.93z" id="NXhourglass7"/></g></g></svg>`;
    return hourglass;
}
// Notiflix: Loading SVG hourglass off

// Notiflix: Loading SVG circle on
const notiflixLoadingSvgCircle = (width, color) => {
    if (!width) { width = '60px'; }
    if (!color) { color = '#00b462'; }
    const circle = `<svg id="NXLoadingCircle" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50" xml:space="preserve" version="1.1"><style>#NXLoadingCircle{-webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: ${width}; -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center; width: ${width}; position: absolute; top: 0; left: 0; margin: auto;}.notiflix-loader-circle-path{stroke-dasharray: 150,200; stroke-dashoffset: -10; -webkit-animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; stroke-linecap: round;}@-webkit-keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@-webkit-keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}@keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}</style><circle class="notiflix-loader-circle-path" cx="50" cy="50" r="20" fill="none" stroke="${color}" stroke-width="2"/></svg>`;
    return circle;
}
// Notiflix: Loading SVG circle off

// Notiflix: Loading SVG arrows on
const notiflixLoadingSvgArrows = (width, color) => {
    if (!width) { width = '60px'; }
    if (!color) { color = '#00b462'; }
    const arrows = `<svg id="NXLoadingArrows" fill="${color}" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 128 128" xml:space="preserve"><g><path fill="inherit" fill-opacity="1" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1.5s" repeatCount="indefinite"></animateTransform></g></svg>`;
    return arrows;
}
// Notiflix: Loading SVG arrows off

// Notiflix: Loading SVG dots on
const notiflixLoadingSvgDots = (width, color) => {
    if (!width) { width = '60px'; }
    if (!color) { color = '#00b462'; }
    const dots = `<svg id="NXLoadingDots" fill="${color}" width="${width}" height="${width}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(25 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.239 0.239)"><animateTransform attributeName="transform" type="scale" begin="-0.266s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(50 50)"> <circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.00152 0.00152)"><animateTransform attributeName="transform" type="scale" begin="-0.133s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(75 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.299 0.299)"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g></svg>`;
    return dots;
}
// Notiflix: Loading SVG dots off

// Notiflix: Loading SVG pulse on
const notiflixLoadingSvgPulse = (width, color) => {
    if (!width) { width = '60px'; }
    if (!color) { color = '#00b462'; }
    const pulse = `<svg stroke="${color}" width="${width}" height="${width}" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>`;
    return pulse;
}
// Notiflix: Loading SVG pulse off

// Notiflix: Loading SVG notiflix on
const notiflixLoadingSvgNotiflix = (width, white, green) => {
    if (!width) { width = '60px'; }
    if (!white) { white = '#f8f8f8'; }
    if (!green) { green = '#00b462'; }
    const notiflixIcon = `<svg id="NXLoadingNotiflixLib" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="${width}" height="${width}" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.line{stroke:${white};stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.line{fill:none;}.dot{fill:${green};stroke:${green};stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.n{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-n;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:0s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-n{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.x2,.x1{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-x;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:.2s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-x{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.dot{animation-name: notiflix-dot;animation-timing-function: ease-in-out;animation-duration: 1.25s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-dot{0%{stroke-width: 0;}50%{stroke-width: 12;}100%{stroke-width: 0;}}</style></defs><g><path class="dot" d="M47.97 135.05c3.59,0 6.5,2.91 6.5,6.5 0,3.59 -2.91,6.5 -6.5,6.5 -3.59,0 -6.5,-2.91 -6.5,-6.5 0,-3.59 2.91,-6.5 6.5,-6.5z"/><path class="line n" d="M10.14 144.76l0 -0.22 0 -0.96 0 -56.03c0,-5.68 -4.54,-41.36 37.83,-41.36 42.36,0 37.82,35.68 37.82,41.36l0 57.21"/><path class="line x1" d="M115.06 144.49c24.98,-32.68 49.96,-65.35 74.94,-98.03"/><path class="line x2" d="M114.89 46.6c25.09,32.58 50.19,65.17 75.29,97.75"/></g></svg>`;
    return notiflixIcon;
}
// Notiflix: Loading SVG notiflix off