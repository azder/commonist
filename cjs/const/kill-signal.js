module.exports = Object.freeze({

    // @see http://man7.org/linux/man-pages/man7/signal.7.html
    // Signals described in the original POSIX.1-1990 standard.

    sighup:  1, // Hangup detected on controlling terminal or death of controlling process
    sigint:  2, // Interrupt from keyboard
    sigquit: 3, //  Quit from keyboard
    sigill:  4, //  Illegal Instruction
    sigabrt: 6, //  Abort signal from abort(3)
    sigfpe:  8, //  Floating-point exception
    sigkill: 9, //  Kill signal
    sigsegv: 11, //  Invalid memory reference
    sigpipe: 13, //  Broken pipe: write to pipe with no readers; see pipe(7)
    sigalrm: 14, //  Timer signal from alarm(2)
    sigterm: 15, //  Termination signal

    // SIGUSR1   30,10,16    Term    User-defined signal 1
    // SIGUSR2   31,12,17    Term    User-defined signal 2
    // SIGCHLD   20,17,18    Ign     Child stopped or terminated
    // SIGCONT   19,18,25    Cont    Continue if stopped
    // SIGSTOP   17,19,23    Stop    Stop process
    // SIGTSTP   18,20,24    Stop    Stop typed at terminal
    // SIGTTIN   21,21,26    Stop    Terminal input for background process
    // SIGTTOU   22,22,27    Stop    Terminal output for background process

});

