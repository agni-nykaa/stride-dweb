declare global {
  var setTimeout: (callback: Function, delay: number, ...args: any[]) => number;
  var clearTimeout: (timeoutId: number) => void;
  var setInterval: (
    callback: Function,
    delay: number,
    ...args: any[]
  ) => number;
  var clearInterval: (intervalId: number) => void;
  var structuredClone: <T>(value: T) => T;
  // Other globals
  var localStorage: Storage;
  var sessionStorage: Storage;
  var fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  var console: Console;
  var navigator: Navigator;
  var document: Document;
  var __PLATFORM__: string;
  var __SERVER__: boolean;
  var newrelic: any;
  var btoa: (input: string) => string;
}

declare global {
  interface Window {
    AndroidFunction: any;
    webkit: any;
  }
}

// This line is required to make it a valid module.
export {};
