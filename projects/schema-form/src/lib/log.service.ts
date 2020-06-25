import { InjectionToken, Inject, Injectable, Optional } from "@angular/core";

export const LOG_LEVEL = new InjectionToken<LogLevel>('Logging level');

/**
 * Represents the different logging levels of the `console` output.
 */
export const enum LogLevel {
    log,
    warn,
    error,
    off,
    all
}

export abstract class LogService {
    public logLevel = LogLevel.off;
    constructor(@Optional() @Inject(LOG_LEVEL) public level: any /* should be of type `LogLevel` but AOT fails with : 'Error encountered in metadata generated for exported symbol 'DefaultLogService':"Could not resolve type LogLevel." */) {
        this.logLevel = level as LogLevel
    }
    /**
     * Equals `console.warn`
     * @param message 
     * @param optionalParams 
     */
    public abstract warn(message?: any, ...optionalParams: any[]): void
    /**
     * Equals `console.error`
     * @param message 
     * @param optionalParams 
     */
    public abstract error(message?: any, ...optionalParams: any[]): void
    /**
     * Equals `console.log`
     * @param message 
     * @param optionalParams 
     */
    public abstract log(message?: any, ...optionalParams: any[]): void

    isWarnEnabled() {
        return LogLevel.all === this.logLevel || LogLevel.warn === this.logLevel
    }

    isErrorEnabled() {
        return LogLevel.all === this.logLevel || LogLevel.error === this.logLevel
    }

    isLogEnabled() {
        return LogLevel.all === this.logLevel || LogLevel.log === this.logLevel
    }
}

/**
 * Very simple abstraction of logging
 */
@Injectable()
export class DefaultLogService extends LogService {

    constructor(@Optional() @Inject(LOG_LEVEL) public logLevel: any /* should be of type `LogLevel` but AOT fails with : 'Error encountered in metadata generated for exported symbol 'DefaultLogService':"Could not resolve type LogLevel." */) {
        super(logLevel)
        this.logLevel = logLevel as LogLevel
    }
    warn = (!this.isWarnEnabled() ? () => { } : console.warn)
    error = (!this.isErrorEnabled() ? () => { } : console.error)
    log = (!this.isLogEnabled() ? () => { } : console.log)
}