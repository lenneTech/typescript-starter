import Welcome from './modules/welcome/welcome.class';

/**
 * Exports for use as a package
 */

// Default export
export default Welcome;

// Other exports
export * from './modules/welcome/welcome.interface';

/**
 * Commands for use as executable script
 */

// Welcome
console.log(Welcome.hello() + ', thank you for using Typescript Starter!');
