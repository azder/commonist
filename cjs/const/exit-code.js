/* eslint-disable no-magic-numbers */

const KILL = require('./kill-signal');

const signalsBase = 128;

module.exports = Object.freeze({


    success:         0,
    genericError:    1,
    shellMisuse:     2,
    cantExecute:     126,
    cmdNotFound:     127,
    invalidExitArg:  128,
    outOfRangeXcode: 255,

    signalsBase,

    fatalErrorSighup:  signalsBase + KILL.sighup,
    fatalErrorSigint:  signalsBase + KILL.sigint,
    fatalErrorSigkill: signalsBase + KILL.sigkill,
    fatalErrorSigterm: signalsBase + KILL.sigterm,


});
