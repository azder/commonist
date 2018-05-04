/* eslint-disable no-magic-numbers */

const {SIGHUP, SIGINT, SIGKILL, SIGTERM} = require('./kill-signal');

const SIGNALS_BASE = 128;

module.exports = Object.freeze({


    XCODE_SUCCESS:            0,
    XCODE_GENERIC_ERROR:      1,
    XCODE_SHELL_MISUSE:       2,
    XCODE_CANT_EXECUTE:       126,
    XCODE_CMD_NOT_FOUND:      127,
    XCODE_INVALID_EXIT_ARG:   128,
    XCODE_OUT_OF_RANGE_XCODE: 255,


    XCODE_FATAL_ERROR_SIGHUP:  SIGNALS_BASE + SIGHUP,
    XCODE_FATAL_ERROR_SIGINT:  SIGNALS_BASE + SIGINT,
    XCODE_FATAL_ERROR_SIGKILL: SIGNALS_BASE + SIGKILL,
    XCODE_FATAL_ERROR_SIGTERM: SIGNALS_BASE + SIGTERM,


});