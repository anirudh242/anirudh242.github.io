// This file is for type declarations.
// It tells TypeScript what to expect when we import a file that
// isn't a .ts or .js file.

// For CSS Modules (e.g., YourComponent.module.css)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// For regular CSS files (e.g., globals.css)
// We're telling TS that we can import it, but it doesn't have any specific exports.
// The 'any' type is a simple way to make TS happy for side-effect imports.
declare module '*.css' {
  const content: any;
  export default content;
}
