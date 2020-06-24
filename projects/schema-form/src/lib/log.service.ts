import { InjectionToken, Inject, Injectable, Optional } from "@angular/core";

export const LOG_LEVEL = new InjectionToken<LogLevel>('Logging level');

/**
 * Represents the different logging levels of the `console` output.
 */
export const enum LogLevel {
    log,
    warn,
    error,
    off
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
        return LogLevel.warn === this.logLevel
    }

    isErrorEnabled() {
        return LogLevel.error === this.logLevel
    }

    isLogEnabled() {
        return LogLevel.log === this.logLevel
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

    /**
     * Equals `console.warn`
     * @param message 
     * @param optionalParams 
     */
    warn(message?: any, ...optionalParams: any[]): void {
        if (!this.isWarnEnabled())
            return
        console.warn(message, optionalParams)
    }
    /**
     * Equals `console.error`
     * @param message 
     * @param optionalParams 
     */
    error(message?: any, ...optionalParams: any[]): void {
        if (!this.isErrorEnabled())
            return
        console.error(message, optionalParams)
    }
    /**
     * Equals `console.log`
     * @param message 
     * @param optionalParams 
     */
    log(message?: any, ...optionalParams: any[]): void {
        if (!this.isLogEnabled())
            return
        console.log(message, optionalParams)
    }
}