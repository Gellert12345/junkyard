/**********************************************************************
 * TYPESCRIPT COMPLETE REFERENCE FILE
 * 
 * Ez a fájl egy tanuló + emlékeztető gyűjtemény.
 * Ha JavaScript és TypeScript között váltasz,
 * itt megtalálod az összes fontos koncepciót.
 **********************************************************************/

/**********************************************************************
 * 1. ALAP TÍPUSOK
 **********************************************************************/

// number
let age: number = 16;

// string
let username: string = "Gellért";

// boolean
let isDeveloper: boolean = true;

// null és undefined
let nothing: null = null;
let notDefined: undefined = undefined;

// type inference (automatikus típus kikövetkeztetés)
let score = 100; // TypeScript automatikusan number-nek veszi


/**********************************************************************
 * 2. ARRAY
 **********************************************************************/

let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Többféle típus egy array-ben
let mixed: (number | string)[] = [1, "hello"];


/**********************************************************************
 * 3. TUPLE (fix hossz + fix típus sorrend)
 **********************************************************************/

let userTuple: [string, number] = ["Gellért", 16];


/**********************************************************************
 * 4. OBJECT TÍPUS
 **********************************************************************/

let user: {
  name: string;
  age: number;
} = {
  name: "Gellért",
  age: 16
};


/**********************************************************************
 * 5. INTERFACE
 **********************************************************************/

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // opcionális property
}

let u1: User = {
  name: "Test",
  age: 20
};


/**********************************************************************
 * 6. TYPE ALIAS
 **********************************************************************/

type ID = number | string;

let userId: ID = 123;
userId = "abc123";


/**********************************************************************
 * 7. UNION TYPE
 **********************************************************************/

let status: "idle" | "loading" | "success" | "error";

status = "loading";
// status = "wrong"; -> ERROR


/**********************************************************************
 * 8. FUNCTION TÍPUSOK
 **********************************************************************/

function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Void (nem ad vissza semmit)
function logMessage(msg: string): void {
  console.log(msg);
}


/**********************************************************************
 * 9. OPTIONAL PARAMETER
 **********************************************************************/

function greet(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old`;
  }
  return `Hello ${name}`;
}


/**********************************************************************
 * 10. DEFAULT PARAMETER
 **********************************************************************/

function power(base: number, exponent: number = 2): number {
  return base ** exponent;
}


/**********************************************************************
 * 11. ANY (KERÜLENDŐ)
 **********************************************************************/

let dangerous: any = 5;
dangerous = "hello";
dangerous = {};


/**********************************************************************
 * 12. UNKNOWN (BIZTONSÁGOSABB ANY)
 **********************************************************************/

let value: unknown = "text";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


/**********************************************************************
 * 13. TYPE ASSERTION
 **********************************************************************/

let someValue: unknown = "hello";
let strLength: number = (someValue as string).length;


/**********************************************************************
 * 14. GENERICS
 **********************************************************************/

function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(10);
let str = identity<string>("hello");

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
}

let response: ApiResponse<string> = {
  data: "Success",
  status: 200
};


/**********************************************************************
 * 15. GENERIC CONSTRAINT
 **********************************************************************/

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}


/**********************************************************************
 * 16. ENUM
 **********************************************************************/

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;


/**********************************************************************
 * 17. CLASS
 **********************************************************************/

class Player {
  public name: string;
  private health: number;
  protected level: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.level = 1;
  }

  takeDamage(amount: number): void {
    this.health -= amount;
  }

  getHealth(): number {
    return this.health;
  }
}

let player1 = new Player("Hero", 100);


/**********************************************************************
 * 18. INTERFACE + CLASS IMPLEMENT
 **********************************************************************/

interface Animal {
  speak(): void;
}

class Dog implements Animal {
  speak(): void {
    console.log("Woof");
  }
}


/**********************************************************************
 * 19. READONLY
 **********************************************************************/

interface Config {
  readonly apiKey: string;
}

const config: Config = {
  apiKey: "12345"
};

// config.apiKey = "new"; -> ERROR


/**********************************************************************
 * 20. UTILITY TYPES
 **********************************************************************/

interface Person {
  name: string;
  age: number;
}

// Partial (minden property opcionális)
type PartialPerson = Partial<Person>;

// Readonly
type ReadonlyPerson = Readonly<Person>;

// Pick
type NameOnly = Pick<Person, "name">;

// Omit
type WithoutAge = Omit<Person, "age">;


/**********************************************************************
 * 21. TYPE NARROWING
 **********************************************************************/

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}


/**********************************************************************
 * 22. NEVER
 **********************************************************************/

function throwError(message: string): never {
  throw new Error(message);
}


/**********************************************************************
 * 23. MODULE EXPORT / IMPORT
 **********************************************************************/

// export
export function exportedFunction(): string {
  return "Hello";
}

// import példa:
// import { exportedFunction } from "./file";


/**********************************************************************
 * 24. ASYNC + PROMISE TÍPUS
 **********************************************************************/

async function fetchData(): Promise<string> {
  return "data";
}


/**********************************************************************
 * 25. STRICT NULL CHECKING
 **********************************************************************/

let possibleNull: string | null = null;

if (possibleNull !== null) {
  console.log(possibleNull.toUpperCase());
}


/**********************************************************************
 * 26. RECORD TYPE
 **********************************************************************/

type UserRoles = Record<string, boolean>;

let roles: UserRoles = {
  admin: true,
  user: false
};


/**********************************************************************
 * 27. DISCRIMINATED UNION
 **********************************************************************/

type ApiResult =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function handleResult(result: ApiResult) {
  if (result.status === "success") {
    console.log(result.data);
  } else {
    console.log(result.message);
  }
}


/**********************************************************************
 * 28. TS CONFIG FONTOS OPCIÓK (nem kód, csak emlékeztető)
 **********************************************************************/

/*
"strict": true
"noImplicitAny": true
"strictNullChecks": true
"target": "ES2020"
"module": "ESNext"
*/


/**********************************************************************
 * VÉGSŐ MEGJEGYZÉS
 *
 * A TypeScript:
 * - compile-time típusellenőrzést ad
 * - refaktorálhatóvá teszi a kódot
 * - skálázható rendszereknél alap
 *
 * A runtime-ban minden típus eltűnik.
 * A végeredmény sima JavaScript lesz.
 **********************************************************************/
/**********************************************************************
 * ADVANCED TYPESCRIPT REFERENCE
 * File: advanced-types.ts
 *
 * Ez a fájl a TypeScript haladó típus rendszerének gyűjteménye.
 * Itt már nem sima típusokról beszélünk,
 * hanem a TypeScript saját "type programming language"-éről.
 *
 * Igen. A TypeScriptnek van egy kvázi metanyelve.
 **********************************************************************/


/**********************************************************************
 * 1. CONDITIONAL TYPES
 *
 * Szintaxis:
 * T extends U ? X : Y
 *
 * Ha T kompatibilis U-val → X
 * különben → Y
 **********************************************************************/

type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false


/**********************************************************************
 * 2. CONDITIONAL TYPE DISTRIBUTION
 *
 * Union típus esetén a conditional "eloszlik"
 **********************************************************************/

type IsNumber<T> = T extends number ? "yes" : "no";

type Distributed = IsNumber<string | number>;
// "no" | "yes"


/**********************************************************************
 * 3. INFER (típus kinyerése)
 *
 * Az infer kulcsszó lehetővé teszi,
 * hogy egy conditional type belsejében
 * "kivonjuk" egy típus egy részét.
 **********************************************************************/

type ReturnTypeCustom<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

function exampleFunction(): string {
  return "hello";
}

type ExtractedReturn = ReturnTypeCustom<typeof exampleFunction>;
// string


/**********************************************************************
 * 4. PARAMETER TÍPUS KINYERÉS
 **********************************************************************/

type ParametersCustom<T> = T extends (...args: infer P) => any
  ? P
  : never;

function sum(a: number, b: number) {
  return a + b;
}

type SumParams = ParametersCustom<typeof sum>; 
// [number, number]


/**********************************************************************
 * 5. MAPPED TYPES
 *
 * Objektum típus property-inek átalakítása
 **********************************************************************/

interface User {
  name: string;
  age: number;
}

// Minden property readonly
type ReadonlyMapped<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyUser = ReadonlyMapped<User>;


/**********************************************************************
 * 6. OPTIONAL MAPPED TYPE
 **********************************************************************/

type OptionalMapped<T> = {
  [K in keyof T]?: T[K];
};

type OptionalUser = OptionalMapped<User>;


/**********************************************************************
 * 7. REMOVE OPTIONAL
 **********************************************************************/

type RequiredMapped<T> = {
  [K in keyof T]-?: T[K];
};


/**********************************************************************
 * 8. KEYOF
 *
 * Egy típus kulcsainak union típusa
 **********************************************************************/

type UserKeys = keyof User;
// "name" | "age"


/**********************************************************************
 * 9. INDEX ACCESS TYPE
 **********************************************************************/

type NameType = User["name"]; 
// string


/**********************************************************************
 * 10. TEMPLATE LITERAL TYPES
 *
 * String típus programozás
 **********************************************************************/

type EventName<T extends string> = `on${Capitalize<T>}`;

type ClickEvent = EventName<"click">;
// "onClick"


/**********************************************************************
 * 11. STRING MANIPULATION BUILT-IN TYPES
 *
 * Uppercase
 * Lowercase
 * Capitalize
 * Uncapitalize
 **********************************************************************/

type Upper = Uppercase<"hello">;     // "HELLO"
type Lower = Lowercase<"HELLO">;     // "hello"
type Cap = Capitalize<"dev">;        // "Dev"
type Uncap = Uncapitalize<"Dev">;    // "dev"


/**********************************************************************
 * 12. DEEP PARTIAL (rekurzív mapped type)
 **********************************************************************/

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object
    ? DeepPartial<T[K]>
    : T[K];
};

interface Nested {
  user: {
    name: string;
    settings: {
      darkMode: boolean;
    };
  };
}

type PartialNested = DeepPartial<Nested>;


/**********************************************************************
 * 13. EXCLUDE
 **********************************************************************/

type Letters = "a" | "b" | "c";

type WithoutB = Exclude<Letters, "b">;
// "a" | "c"


/**********************************************************************
 * 14. EXTRACT
 **********************************************************************/

type ExtractOnlyB = Extract<Letters, "b" | "d">;
// "b"


/**********************************************************************
 * 15. NONNULLABLE
 **********************************************************************/

type MaybeString = string | null | undefined;

type CleanString = NonNullable<MaybeString>;
// string


/**********************************************************************
 * 16. FUNCTION OVERLOAD TYPE LOGIKA
 **********************************************************************/

function overload(x: string): string;
function overload(x: number): number;
function overload(x: string | number): string | number {
  return x;
}


/**********************************************************************
 * 17. BRANDING (nominal typing hack)
 *
 * TypeScript alapból strukturális típus rendszerű.
 * Ezzel csinálunk "név szerinti" típus különbséget.
 **********************************************************************/

type Brand<T, B> = T & { __brand: B };

type UserId = Brand<number, "UserId">;
type ProductId = Brand<number, "ProductId">;

let userId: UserId = 5 as UserId;
// productId = userId; -> ERROR (más brand)


/**********************************************************************
 * 18. CONDITIONAL + INFER + ARRAY UNWRAP
 **********************************************************************/

type UnwrapArray<T> = T extends (infer U)[] ? U : T;

type A = UnwrapArray<string[]>; // string
type B = UnwrapArray<number>;   // number


/**********************************************************************
 * 19. PROMISE UNWRAP
 **********************************************************************/

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type AsyncResult = UnwrapPromise<Promise<number>>;
// number


/**********************************************************************
 * 20. CONDITIONAL LOGIKA TÍPUS SZINTEN
 **********************************************************************/

type IsNever<T> = [T] extends [never] ? true : false;

type TestNever = IsNever<never>; // true


/**********************************************************************
 * 21. FUNCTION PROPERTY FILTER
 **********************************************************************/

type OnlyFunctions<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T];

interface Example {
  name: string;
  run(): void;
  stop(): void;
}

type FunctionKeys = OnlyFunctions<Example>;
// "run" | "stop"


/**********************************************************************
 * 22. DEEP READONLY
 **********************************************************************/

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};


/**********************************************************************
 * 23. TYPE GUARD (ADVANCED)
 **********************************************************************/

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function exampleGuard(value: unknown) {
  if (isString(value)) {
    // Itt a TS már tudja hogy string
    console.log(value.toUpperCase());
  }
}


/**********************************************************************
 * 24. SATISFIES OPERATOR (TS 4.9+)
 **********************************************************************/

const config = {
  port: 3000,
  mode: "development"
} satisfies {
  port: number;
  mode: "development" | "production";
};


/**********************************************************************
 * ZÁRÓ MEGJEGYZÉS
 *
 * A TypeScript típus rendszere:
 *
 * - strukturális
 * - Turing-complete jellegű típus szinten
 * - alkalmas compile-time logika építésre
 *
 * Ez már nem csak "típus annotáció".
 * Ez metaprogramozás.
 *
 * A runtime-ban ezek NEM léteznek.
 * Minden eltűnik JS fordításkor.
 **********************************************************************/
