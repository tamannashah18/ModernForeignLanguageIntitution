
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Exam_Info
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Exam_Info = $Result.DefaultSelection<Prisma.$Exam_InfoPayload>
/**
 * Model Languages
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Languages = $Result.DefaultSelection<Prisma.$LanguagesPayload>
/**
 * Model Reviews
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Exam_Infos
 * const exam_Infos = await prisma.exam_Info.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Exam_Infos
   * const exam_Infos = await prisma.exam_Info.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.exam_Info`: Exposes CRUD operations for the **Exam_Info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exam_Infos
    * const exam_Infos = await prisma.exam_Info.findMany()
    * ```
    */
  get exam_Info(): Prisma.Exam_InfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languages`: Exposes CRUD operations for the **Languages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.languages.findMany()
    * ```
    */
  get languages(): Prisma.LanguagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Exam_Info: 'Exam_Info',
    Languages: 'Languages',
    Reviews: 'Reviews'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "exam_Info" | "languages" | "reviews"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Exam_Info: {
        payload: Prisma.$Exam_InfoPayload<ExtArgs>
        fields: Prisma.Exam_InfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Exam_InfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Exam_InfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>
          }
          findFirst: {
            args: Prisma.Exam_InfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Exam_InfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>
          }
          findMany: {
            args: Prisma.Exam_InfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>[]
          }
          create: {
            args: Prisma.Exam_InfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>
          }
          createMany: {
            args: Prisma.Exam_InfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Exam_InfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>[]
          }
          delete: {
            args: Prisma.Exam_InfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>
          }
          update: {
            args: Prisma.Exam_InfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>
          }
          deleteMany: {
            args: Prisma.Exam_InfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Exam_InfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Exam_InfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>[]
          }
          upsert: {
            args: Prisma.Exam_InfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Exam_InfoPayload>
          }
          aggregate: {
            args: Prisma.Exam_InfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam_Info>
          }
          groupBy: {
            args: Prisma.Exam_InfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Exam_InfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Exam_InfoCountArgs<ExtArgs>
            result: $Utils.Optional<Exam_InfoCountAggregateOutputType> | number
          }
        }
      }
      Languages: {
        payload: Prisma.$LanguagesPayload<ExtArgs>
        fields: Prisma.LanguagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findFirst: {
            args: Prisma.LanguagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          findMany: {
            args: Prisma.LanguagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          create: {
            args: Prisma.LanguagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          createMany: {
            args: Prisma.LanguagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          delete: {
            args: Prisma.LanguagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          update: {
            args: Prisma.LanguagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          deleteMany: {
            args: Prisma.LanguagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>[]
          }
          upsert: {
            args: Prisma.LanguagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagesPayload>
          }
          aggregate: {
            args: Prisma.LanguagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguages>
          }
          groupBy: {
            args: Prisma.LanguagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguagesCountArgs<ExtArgs>
            result: $Utils.Optional<LanguagesCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    exam_Info?: Exam_InfoOmit
    languages?: LanguagesOmit
    reviews?: ReviewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Exam_InfoCountOutputType
   */

  export type Exam_InfoCountOutputType = {
    Reviews: number
  }

  export type Exam_InfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reviews?: boolean | Exam_InfoCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * Exam_InfoCountOutputType without action
   */
  export type Exam_InfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_InfoCountOutputType
     */
    select?: Exam_InfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Exam_InfoCountOutputType without action
   */
  export type Exam_InfoCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type LanguagesCountOutputType
   */

  export type LanguagesCountOutputType = {
    Exam_Info: number
    Reviews: number
  }

  export type LanguagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exam_Info?: boolean | LanguagesCountOutputTypeCountExam_InfoArgs
    Reviews?: boolean | LanguagesCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagesCountOutputType
     */
    select?: LanguagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeCountExam_InfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Exam_InfoWhereInput
  }

  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Exam_Info
   */

  export type AggregateExam_Info = {
    _count: Exam_InfoCountAggregateOutputType | null
    _avg: Exam_InfoAvgAggregateOutputType | null
    _sum: Exam_InfoSumAggregateOutputType | null
    _min: Exam_InfoMinAggregateOutputType | null
    _max: Exam_InfoMaxAggregateOutputType | null
  }

  export type Exam_InfoAvgAggregateOutputType = {
    id: number | null
    language: number | null
    max_marks: number | null
  }

  export type Exam_InfoSumAggregateOutputType = {
    id: bigint | null
    language: bigint | null
    max_marks: bigint | null
  }

  export type Exam_InfoMinAggregateOutputType = {
    id: bigint | null
    exam_name: string | null
    language: bigint | null
    max_marks: bigint | null
  }

  export type Exam_InfoMaxAggregateOutputType = {
    id: bigint | null
    exam_name: string | null
    language: bigint | null
    max_marks: bigint | null
  }

  export type Exam_InfoCountAggregateOutputType = {
    id: number
    exam_name: number
    language: number
    max_marks: number
    _all: number
  }


  export type Exam_InfoAvgAggregateInputType = {
    id?: true
    language?: true
    max_marks?: true
  }

  export type Exam_InfoSumAggregateInputType = {
    id?: true
    language?: true
    max_marks?: true
  }

  export type Exam_InfoMinAggregateInputType = {
    id?: true
    exam_name?: true
    language?: true
    max_marks?: true
  }

  export type Exam_InfoMaxAggregateInputType = {
    id?: true
    exam_name?: true
    language?: true
    max_marks?: true
  }

  export type Exam_InfoCountAggregateInputType = {
    id?: true
    exam_name?: true
    language?: true
    max_marks?: true
    _all?: true
  }

  export type Exam_InfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam_Info to aggregate.
     */
    where?: Exam_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exam_Infos to fetch.
     */
    orderBy?: Exam_InfoOrderByWithRelationInput | Exam_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Exam_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exam_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exam_Infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exam_Infos
    **/
    _count?: true | Exam_InfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Exam_InfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Exam_InfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exam_InfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exam_InfoMaxAggregateInputType
  }

  export type GetExam_InfoAggregateType<T extends Exam_InfoAggregateArgs> = {
        [P in keyof T & keyof AggregateExam_Info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam_Info[P]>
      : GetScalarType<T[P], AggregateExam_Info[P]>
  }




  export type Exam_InfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Exam_InfoWhereInput
    orderBy?: Exam_InfoOrderByWithAggregationInput | Exam_InfoOrderByWithAggregationInput[]
    by: Exam_InfoScalarFieldEnum[] | Exam_InfoScalarFieldEnum
    having?: Exam_InfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exam_InfoCountAggregateInputType | true
    _avg?: Exam_InfoAvgAggregateInputType
    _sum?: Exam_InfoSumAggregateInputType
    _min?: Exam_InfoMinAggregateInputType
    _max?: Exam_InfoMaxAggregateInputType
  }

  export type Exam_InfoGroupByOutputType = {
    id: bigint
    exam_name: string | null
    language: bigint
    max_marks: bigint | null
    _count: Exam_InfoCountAggregateOutputType | null
    _avg: Exam_InfoAvgAggregateOutputType | null
    _sum: Exam_InfoSumAggregateOutputType | null
    _min: Exam_InfoMinAggregateOutputType | null
    _max: Exam_InfoMaxAggregateOutputType | null
  }

  type GetExam_InfoGroupByPayload<T extends Exam_InfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Exam_InfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exam_InfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exam_InfoGroupByOutputType[P]>
            : GetScalarType<T[P], Exam_InfoGroupByOutputType[P]>
        }
      >
    >


  export type Exam_InfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_name?: boolean
    language?: boolean
    max_marks?: boolean
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
    Reviews?: boolean | Exam_Info$ReviewsArgs<ExtArgs>
    _count?: boolean | Exam_InfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam_Info"]>

  export type Exam_InfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_name?: boolean
    language?: boolean
    max_marks?: boolean
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam_Info"]>

  export type Exam_InfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exam_name?: boolean
    language?: boolean
    max_marks?: boolean
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam_Info"]>

  export type Exam_InfoSelectScalar = {
    id?: boolean
    exam_name?: boolean
    language?: boolean
    max_marks?: boolean
  }

  export type Exam_InfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exam_name" | "language" | "max_marks", ExtArgs["result"]["exam_Info"]>
  export type Exam_InfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
    Reviews?: boolean | Exam_Info$ReviewsArgs<ExtArgs>
    _count?: boolean | Exam_InfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Exam_InfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }
  export type Exam_InfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }

  export type $Exam_InfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam_Info"
    objects: {
      Languages: Prisma.$LanguagesPayload<ExtArgs>
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      exam_name: string | null
      language: bigint
      max_marks: bigint | null
    }, ExtArgs["result"]["exam_Info"]>
    composites: {}
  }

  type Exam_InfoGetPayload<S extends boolean | null | undefined | Exam_InfoDefaultArgs> = $Result.GetResult<Prisma.$Exam_InfoPayload, S>

  type Exam_InfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Exam_InfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Exam_InfoCountAggregateInputType | true
    }

  export interface Exam_InfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam_Info'], meta: { name: 'Exam_Info' } }
    /**
     * Find zero or one Exam_Info that matches the filter.
     * @param {Exam_InfoFindUniqueArgs} args - Arguments to find a Exam_Info
     * @example
     * // Get one Exam_Info
     * const exam_Info = await prisma.exam_Info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Exam_InfoFindUniqueArgs>(args: SelectSubset<T, Exam_InfoFindUniqueArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam_Info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Exam_InfoFindUniqueOrThrowArgs} args - Arguments to find a Exam_Info
     * @example
     * // Get one Exam_Info
     * const exam_Info = await prisma.exam_Info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Exam_InfoFindUniqueOrThrowArgs>(args: SelectSubset<T, Exam_InfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_Info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_InfoFindFirstArgs} args - Arguments to find a Exam_Info
     * @example
     * // Get one Exam_Info
     * const exam_Info = await prisma.exam_Info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Exam_InfoFindFirstArgs>(args?: SelectSubset<T, Exam_InfoFindFirstArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam_Info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_InfoFindFirstOrThrowArgs} args - Arguments to find a Exam_Info
     * @example
     * // Get one Exam_Info
     * const exam_Info = await prisma.exam_Info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Exam_InfoFindFirstOrThrowArgs>(args?: SelectSubset<T, Exam_InfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exam_Infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_InfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exam_Infos
     * const exam_Infos = await prisma.exam_Info.findMany()
     * 
     * // Get first 10 Exam_Infos
     * const exam_Infos = await prisma.exam_Info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exam_InfoWithIdOnly = await prisma.exam_Info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Exam_InfoFindManyArgs>(args?: SelectSubset<T, Exam_InfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam_Info.
     * @param {Exam_InfoCreateArgs} args - Arguments to create a Exam_Info.
     * @example
     * // Create one Exam_Info
     * const Exam_Info = await prisma.exam_Info.create({
     *   data: {
     *     // ... data to create a Exam_Info
     *   }
     * })
     * 
     */
    create<T extends Exam_InfoCreateArgs>(args: SelectSubset<T, Exam_InfoCreateArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exam_Infos.
     * @param {Exam_InfoCreateManyArgs} args - Arguments to create many Exam_Infos.
     * @example
     * // Create many Exam_Infos
     * const exam_Info = await prisma.exam_Info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Exam_InfoCreateManyArgs>(args?: SelectSubset<T, Exam_InfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exam_Infos and returns the data saved in the database.
     * @param {Exam_InfoCreateManyAndReturnArgs} args - Arguments to create many Exam_Infos.
     * @example
     * // Create many Exam_Infos
     * const exam_Info = await prisma.exam_Info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exam_Infos and only return the `id`
     * const exam_InfoWithIdOnly = await prisma.exam_Info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Exam_InfoCreateManyAndReturnArgs>(args?: SelectSubset<T, Exam_InfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Exam_Info.
     * @param {Exam_InfoDeleteArgs} args - Arguments to delete one Exam_Info.
     * @example
     * // Delete one Exam_Info
     * const Exam_Info = await prisma.exam_Info.delete({
     *   where: {
     *     // ... filter to delete one Exam_Info
     *   }
     * })
     * 
     */
    delete<T extends Exam_InfoDeleteArgs>(args: SelectSubset<T, Exam_InfoDeleteArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam_Info.
     * @param {Exam_InfoUpdateArgs} args - Arguments to update one Exam_Info.
     * @example
     * // Update one Exam_Info
     * const exam_Info = await prisma.exam_Info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Exam_InfoUpdateArgs>(args: SelectSubset<T, Exam_InfoUpdateArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exam_Infos.
     * @param {Exam_InfoDeleteManyArgs} args - Arguments to filter Exam_Infos to delete.
     * @example
     * // Delete a few Exam_Infos
     * const { count } = await prisma.exam_Info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Exam_InfoDeleteManyArgs>(args?: SelectSubset<T, Exam_InfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exam_Infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_InfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exam_Infos
     * const exam_Info = await prisma.exam_Info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Exam_InfoUpdateManyArgs>(args: SelectSubset<T, Exam_InfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exam_Infos and returns the data updated in the database.
     * @param {Exam_InfoUpdateManyAndReturnArgs} args - Arguments to update many Exam_Infos.
     * @example
     * // Update many Exam_Infos
     * const exam_Info = await prisma.exam_Info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Exam_Infos and only return the `id`
     * const exam_InfoWithIdOnly = await prisma.exam_Info.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Exam_InfoUpdateManyAndReturnArgs>(args: SelectSubset<T, Exam_InfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Exam_Info.
     * @param {Exam_InfoUpsertArgs} args - Arguments to update or create a Exam_Info.
     * @example
     * // Update or create a Exam_Info
     * const exam_Info = await prisma.exam_Info.upsert({
     *   create: {
     *     // ... data to create a Exam_Info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam_Info we want to update
     *   }
     * })
     */
    upsert<T extends Exam_InfoUpsertArgs>(args: SelectSubset<T, Exam_InfoUpsertArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exam_Infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_InfoCountArgs} args - Arguments to filter Exam_Infos to count.
     * @example
     * // Count the number of Exam_Infos
     * const count = await prisma.exam_Info.count({
     *   where: {
     *     // ... the filter for the Exam_Infos we want to count
     *   }
     * })
    **/
    count<T extends Exam_InfoCountArgs>(
      args?: Subset<T, Exam_InfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exam_InfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam_Info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_InfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exam_InfoAggregateArgs>(args: Subset<T, Exam_InfoAggregateArgs>): Prisma.PrismaPromise<GetExam_InfoAggregateType<T>>

    /**
     * Group by Exam_Info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exam_InfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Exam_InfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Exam_InfoGroupByArgs['orderBy'] }
        : { orderBy?: Exam_InfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Exam_InfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExam_InfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam_Info model
   */
  readonly fields: Exam_InfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam_Info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Exam_InfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Languages<T extends LanguagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguagesDefaultArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Reviews<T extends Exam_Info$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Exam_Info$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam_Info model
   */
  interface Exam_InfoFieldRefs {
    readonly id: FieldRef<"Exam_Info", 'BigInt'>
    readonly exam_name: FieldRef<"Exam_Info", 'String'>
    readonly language: FieldRef<"Exam_Info", 'BigInt'>
    readonly max_marks: FieldRef<"Exam_Info", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Exam_Info findUnique
   */
  export type Exam_InfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Exam_Info to fetch.
     */
    where: Exam_InfoWhereUniqueInput
  }

  /**
   * Exam_Info findUniqueOrThrow
   */
  export type Exam_InfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Exam_Info to fetch.
     */
    where: Exam_InfoWhereUniqueInput
  }

  /**
   * Exam_Info findFirst
   */
  export type Exam_InfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Exam_Info to fetch.
     */
    where?: Exam_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exam_Infos to fetch.
     */
    orderBy?: Exam_InfoOrderByWithRelationInput | Exam_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exam_Infos.
     */
    cursor?: Exam_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exam_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exam_Infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exam_Infos.
     */
    distinct?: Exam_InfoScalarFieldEnum | Exam_InfoScalarFieldEnum[]
  }

  /**
   * Exam_Info findFirstOrThrow
   */
  export type Exam_InfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Exam_Info to fetch.
     */
    where?: Exam_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exam_Infos to fetch.
     */
    orderBy?: Exam_InfoOrderByWithRelationInput | Exam_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exam_Infos.
     */
    cursor?: Exam_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exam_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exam_Infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exam_Infos.
     */
    distinct?: Exam_InfoScalarFieldEnum | Exam_InfoScalarFieldEnum[]
  }

  /**
   * Exam_Info findMany
   */
  export type Exam_InfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * Filter, which Exam_Infos to fetch.
     */
    where?: Exam_InfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exam_Infos to fetch.
     */
    orderBy?: Exam_InfoOrderByWithRelationInput | Exam_InfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exam_Infos.
     */
    cursor?: Exam_InfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exam_Infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exam_Infos.
     */
    skip?: number
    distinct?: Exam_InfoScalarFieldEnum | Exam_InfoScalarFieldEnum[]
  }

  /**
   * Exam_Info create
   */
  export type Exam_InfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam_Info.
     */
    data: XOR<Exam_InfoCreateInput, Exam_InfoUncheckedCreateInput>
  }

  /**
   * Exam_Info createMany
   */
  export type Exam_InfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exam_Infos.
     */
    data: Exam_InfoCreateManyInput | Exam_InfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam_Info createManyAndReturn
   */
  export type Exam_InfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * The data used to create many Exam_Infos.
     */
    data: Exam_InfoCreateManyInput | Exam_InfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam_Info update
   */
  export type Exam_InfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam_Info.
     */
    data: XOR<Exam_InfoUpdateInput, Exam_InfoUncheckedUpdateInput>
    /**
     * Choose, which Exam_Info to update.
     */
    where: Exam_InfoWhereUniqueInput
  }

  /**
   * Exam_Info updateMany
   */
  export type Exam_InfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exam_Infos.
     */
    data: XOR<Exam_InfoUpdateManyMutationInput, Exam_InfoUncheckedUpdateManyInput>
    /**
     * Filter which Exam_Infos to update
     */
    where?: Exam_InfoWhereInput
    /**
     * Limit how many Exam_Infos to update.
     */
    limit?: number
  }

  /**
   * Exam_Info updateManyAndReturn
   */
  export type Exam_InfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * The data used to update Exam_Infos.
     */
    data: XOR<Exam_InfoUpdateManyMutationInput, Exam_InfoUncheckedUpdateManyInput>
    /**
     * Filter which Exam_Infos to update
     */
    where?: Exam_InfoWhereInput
    /**
     * Limit how many Exam_Infos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam_Info upsert
   */
  export type Exam_InfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam_Info to update in case it exists.
     */
    where: Exam_InfoWhereUniqueInput
    /**
     * In case the Exam_Info found by the `where` argument doesn't exist, create a new Exam_Info with this data.
     */
    create: XOR<Exam_InfoCreateInput, Exam_InfoUncheckedCreateInput>
    /**
     * In case the Exam_Info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Exam_InfoUpdateInput, Exam_InfoUncheckedUpdateInput>
  }

  /**
   * Exam_Info delete
   */
  export type Exam_InfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    /**
     * Filter which Exam_Info to delete.
     */
    where: Exam_InfoWhereUniqueInput
  }

  /**
   * Exam_Info deleteMany
   */
  export type Exam_InfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam_Infos to delete
     */
    where?: Exam_InfoWhereInput
    /**
     * Limit how many Exam_Infos to delete.
     */
    limit?: number
  }

  /**
   * Exam_Info.Reviews
   */
  export type Exam_Info$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Exam_Info without action
   */
  export type Exam_InfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
  }


  /**
   * Model Languages
   */

  export type AggregateLanguages = {
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  export type LanguagesAvgAggregateOutputType = {
    id: number | null
  }

  export type LanguagesSumAggregateOutputType = {
    id: bigint | null
  }

  export type LanguagesMinAggregateOutputType = {
    id: bigint | null
    language_name: string | null
  }

  export type LanguagesMaxAggregateOutputType = {
    id: bigint | null
    language_name: string | null
  }

  export type LanguagesCountAggregateOutputType = {
    id: number
    language_name: number
    _all: number
  }


  export type LanguagesAvgAggregateInputType = {
    id?: true
  }

  export type LanguagesSumAggregateInputType = {
    id?: true
  }

  export type LanguagesMinAggregateInputType = {
    id?: true
    language_name?: true
  }

  export type LanguagesMaxAggregateInputType = {
    id?: true
    language_name?: true
  }

  export type LanguagesCountAggregateInputType = {
    id?: true
    language_name?: true
    _all?: true
  }

  export type LanguagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to aggregate.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguagesMaxAggregateInputType
  }

  export type GetLanguagesAggregateType<T extends LanguagesAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguages[P]>
      : GetScalarType<T[P], AggregateLanguages[P]>
  }




  export type LanguagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguagesWhereInput
    orderBy?: LanguagesOrderByWithAggregationInput | LanguagesOrderByWithAggregationInput[]
    by: LanguagesScalarFieldEnum[] | LanguagesScalarFieldEnum
    having?: LanguagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguagesCountAggregateInputType | true
    _avg?: LanguagesAvgAggregateInputType
    _sum?: LanguagesSumAggregateInputType
    _min?: LanguagesMinAggregateInputType
    _max?: LanguagesMaxAggregateInputType
  }

  export type LanguagesGroupByOutputType = {
    id: bigint
    language_name: string
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  type GetLanguagesGroupByPayload<T extends LanguagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
            : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
        }
      >
    >


  export type LanguagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language_name?: boolean
    Exam_Info?: boolean | Languages$Exam_InfoArgs<ExtArgs>
    Reviews?: boolean | Languages$ReviewsArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languages"]>

  export type LanguagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language_name?: boolean
  }, ExtArgs["result"]["languages"]>

  export type LanguagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language_name?: boolean
  }, ExtArgs["result"]["languages"]>

  export type LanguagesSelectScalar = {
    id?: boolean
    language_name?: boolean
  }

  export type LanguagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "language_name", ExtArgs["result"]["languages"]>
  export type LanguagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exam_Info?: boolean | Languages$Exam_InfoArgs<ExtArgs>
    Reviews?: boolean | Languages$ReviewsArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Languages"
    objects: {
      Exam_Info: Prisma.$Exam_InfoPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      language_name: string
    }, ExtArgs["result"]["languages"]>
    composites: {}
  }

  type LanguagesGetPayload<S extends boolean | null | undefined | LanguagesDefaultArgs> = $Result.GetResult<Prisma.$LanguagesPayload, S>

  type LanguagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguagesCountAggregateInputType | true
    }

  export interface LanguagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Languages'], meta: { name: 'Languages' } }
    /**
     * Find zero or one Languages that matches the filter.
     * @param {LanguagesFindUniqueArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguagesFindUniqueArgs>(args: SelectSubset<T, LanguagesFindUniqueArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Languages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguagesFindUniqueOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguagesFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguagesFindFirstArgs>(args?: SelectSubset<T, LanguagesFindFirstArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Languages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindFirstOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguagesFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.languages.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.languages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languagesWithIdOnly = await prisma.languages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguagesFindManyArgs>(args?: SelectSubset<T, LanguagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Languages.
     * @param {LanguagesCreateArgs} args - Arguments to create a Languages.
     * @example
     * // Create one Languages
     * const Languages = await prisma.languages.create({
     *   data: {
     *     // ... data to create a Languages
     *   }
     * })
     * 
     */
    create<T extends LanguagesCreateArgs>(args: SelectSubset<T, LanguagesCreateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguagesCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguagesCreateManyArgs>(args?: SelectSubset<T, LanguagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguagesCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languagesWithIdOnly = await prisma.languages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguagesCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Languages.
     * @param {LanguagesDeleteArgs} args - Arguments to delete one Languages.
     * @example
     * // Delete one Languages
     * const Languages = await prisma.languages.delete({
     *   where: {
     *     // ... filter to delete one Languages
     *   }
     * })
     * 
     */
    delete<T extends LanguagesDeleteArgs>(args: SelectSubset<T, LanguagesDeleteArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Languages.
     * @param {LanguagesUpdateArgs} args - Arguments to update one Languages.
     * @example
     * // Update one Languages
     * const languages = await prisma.languages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguagesUpdateArgs>(args: SelectSubset<T, LanguagesUpdateArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguagesDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.languages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguagesDeleteManyArgs>(args?: SelectSubset<T, LanguagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const languages = await prisma.languages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguagesUpdateManyArgs>(args: SelectSubset<T, LanguagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguagesUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const languages = await prisma.languages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languagesWithIdOnly = await prisma.languages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguagesUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Languages.
     * @param {LanguagesUpsertArgs} args - Arguments to update or create a Languages.
     * @example
     * // Update or create a Languages
     * const languages = await prisma.languages.upsert({
     *   create: {
     *     // ... data to create a Languages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Languages we want to update
     *   }
     * })
     */
    upsert<T extends LanguagesUpsertArgs>(args: SelectSubset<T, LanguagesUpsertArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.languages.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguagesCountArgs>(
      args?: Subset<T, LanguagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguagesAggregateArgs>(args: Subset<T, LanguagesAggregateArgs>): Prisma.PrismaPromise<GetLanguagesAggregateType<T>>

    /**
     * Group by Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguagesGroupByArgs['orderBy'] }
        : { orderBy?: LanguagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Languages model
   */
  readonly fields: LanguagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Languages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Exam_Info<T extends Languages$Exam_InfoArgs<ExtArgs> = {}>(args?: Subset<T, Languages$Exam_InfoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Languages$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Languages$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Languages model
   */
  interface LanguagesFieldRefs {
    readonly id: FieldRef<"Languages", 'BigInt'>
    readonly language_name: FieldRef<"Languages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Languages findUnique
   */
  export type LanguagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findUniqueOrThrow
   */
  export type LanguagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages findFirst
   */
  export type LanguagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findFirstOrThrow
   */
  export type LanguagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages findMany
   */
  export type LanguagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguagesOrderByWithRelationInput | LanguagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * Languages create
   */
  export type LanguagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Languages.
     */
    data: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
  }

  /**
   * Languages createMany
   */
  export type LanguagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguagesCreateManyInput | LanguagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Languages createManyAndReturn
   */
  export type LanguagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguagesCreateManyInput | LanguagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Languages update
   */
  export type LanguagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Languages.
     */
    data: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
    /**
     * Choose, which Languages to update.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages updateMany
   */
  export type LanguagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguagesUpdateManyMutationInput, LanguagesUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguagesWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Languages updateManyAndReturn
   */
  export type LanguagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguagesUpdateManyMutationInput, LanguagesUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguagesWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Languages upsert
   */
  export type LanguagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Languages to update in case it exists.
     */
    where: LanguagesWhereUniqueInput
    /**
     * In case the Languages found by the `where` argument doesn't exist, create a new Languages with this data.
     */
    create: XOR<LanguagesCreateInput, LanguagesUncheckedCreateInput>
    /**
     * In case the Languages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguagesUpdateInput, LanguagesUncheckedUpdateInput>
  }

  /**
   * Languages delete
   */
  export type LanguagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
    /**
     * Filter which Languages to delete.
     */
    where: LanguagesWhereUniqueInput
  }

  /**
   * Languages deleteMany
   */
  export type LanguagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguagesWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Languages.Exam_Info
   */
  export type Languages$Exam_InfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    where?: Exam_InfoWhereInput
    orderBy?: Exam_InfoOrderByWithRelationInput | Exam_InfoOrderByWithRelationInput[]
    cursor?: Exam_InfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Exam_InfoScalarFieldEnum | Exam_InfoScalarFieldEnum[]
  }

  /**
   * Languages.Reviews
   */
  export type Languages$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Languages without action
   */
  export type LanguagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Languages
     */
    select?: LanguagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Languages
     */
    omit?: LanguagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguagesInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    exam_id: number | null
    marks_obtained: Decimal | null
    language: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: bigint | null
    exam_id: bigint | null
    marks_obtained: Decimal | null
    language: bigint | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    student_name: string | null
    experience: string | null
    exam_id: bigint | null
    marks_obtained: Decimal | null
    language: bigint | null
    exam_date: Date | null
    picture: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    student_name: string | null
    experience: string | null
    exam_id: bigint | null
    marks_obtained: Decimal | null
    language: bigint | null
    exam_date: Date | null
    picture: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    created_at: number
    student_name: number
    experience: number
    exam_id: number
    marks_obtained: number
    language: number
    exam_date: number
    picture: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    exam_id?: true
    marks_obtained?: true
    language?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    exam_id?: true
    marks_obtained?: true
    language?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    created_at?: true
    student_name?: true
    experience?: true
    exam_id?: true
    marks_obtained?: true
    language?: true
    exam_date?: true
    picture?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    created_at?: true
    student_name?: true
    experience?: true
    exam_id?: true
    marks_obtained?: true
    language?: true
    exam_date?: true
    picture?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    created_at?: true
    student_name?: true
    experience?: true
    exam_id?: true
    marks_obtained?: true
    language?: true
    exam_date?: true
    picture?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: bigint
    created_at: Date
    student_name: string | null
    experience: string | null
    exam_id: bigint | null
    marks_obtained: Decimal | null
    language: bigint
    exam_date: Date | null
    picture: string | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    student_name?: boolean
    experience?: boolean
    exam_id?: boolean
    marks_obtained?: boolean
    language?: boolean
    exam_date?: boolean
    picture?: boolean
    Exam_Info?: boolean | Reviews$Exam_InfoArgs<ExtArgs>
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    student_name?: boolean
    experience?: boolean
    exam_id?: boolean
    marks_obtained?: boolean
    language?: boolean
    exam_date?: boolean
    picture?: boolean
    Exam_Info?: boolean | Reviews$Exam_InfoArgs<ExtArgs>
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    student_name?: boolean
    experience?: boolean
    exam_id?: boolean
    marks_obtained?: boolean
    language?: boolean
    exam_date?: boolean
    picture?: boolean
    Exam_Info?: boolean | Reviews$Exam_InfoArgs<ExtArgs>
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    created_at?: boolean
    student_name?: boolean
    experience?: boolean
    exam_id?: boolean
    marks_obtained?: boolean
    language?: boolean
    exam_date?: boolean
    picture?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "student_name" | "experience" | "exam_id" | "marks_obtained" | "language" | "exam_date" | "picture", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exam_Info?: boolean | Reviews$Exam_InfoArgs<ExtArgs>
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exam_Info?: boolean | Reviews$Exam_InfoArgs<ExtArgs>
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Exam_Info?: boolean | Reviews$Exam_InfoArgs<ExtArgs>
    Languages?: boolean | LanguagesDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      Exam_Info: Prisma.$Exam_InfoPayload<ExtArgs> | null
      Languages: Prisma.$LanguagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      student_name: string | null
      experience: string | null
      exam_id: bigint | null
      marks_obtained: Prisma.Decimal | null
      language: bigint
      exam_date: Date | null
      picture: string | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Exam_Info<T extends Reviews$Exam_InfoArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$Exam_InfoArgs<ExtArgs>>): Prisma__Exam_InfoClient<$Result.GetResult<Prisma.$Exam_InfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Languages<T extends LanguagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguagesDefaultArgs<ExtArgs>>): Prisma__LanguagesClient<$Result.GetResult<Prisma.$LanguagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'BigInt'>
    readonly created_at: FieldRef<"Reviews", 'DateTime'>
    readonly student_name: FieldRef<"Reviews", 'String'>
    readonly experience: FieldRef<"Reviews", 'String'>
    readonly exam_id: FieldRef<"Reviews", 'BigInt'>
    readonly marks_obtained: FieldRef<"Reviews", 'Decimal'>
    readonly language: FieldRef<"Reviews", 'BigInt'>
    readonly exam_date: FieldRef<"Reviews", 'DateTime'>
    readonly picture: FieldRef<"Reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews.Exam_Info
   */
  export type Reviews$Exam_InfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam_Info
     */
    select?: Exam_InfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam_Info
     */
    omit?: Exam_InfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Exam_InfoInclude<ExtArgs> | null
    where?: Exam_InfoWhereInput
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Exam_InfoScalarFieldEnum: {
    id: 'id',
    exam_name: 'exam_name',
    language: 'language',
    max_marks: 'max_marks'
  };

  export type Exam_InfoScalarFieldEnum = (typeof Exam_InfoScalarFieldEnum)[keyof typeof Exam_InfoScalarFieldEnum]


  export const LanguagesScalarFieldEnum: {
    id: 'id',
    language_name: 'language_name'
  };

  export type LanguagesScalarFieldEnum = (typeof LanguagesScalarFieldEnum)[keyof typeof LanguagesScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    student_name: 'student_name',
    experience: 'experience',
    exam_id: 'exam_id',
    marks_obtained: 'marks_obtained',
    language: 'language',
    exam_date: 'exam_date',
    picture: 'picture'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Exam_InfoWhereInput = {
    AND?: Exam_InfoWhereInput | Exam_InfoWhereInput[]
    OR?: Exam_InfoWhereInput[]
    NOT?: Exam_InfoWhereInput | Exam_InfoWhereInput[]
    id?: BigIntFilter<"Exam_Info"> | bigint | number
    exam_name?: StringNullableFilter<"Exam_Info"> | string | null
    language?: BigIntFilter<"Exam_Info"> | bigint | number
    max_marks?: BigIntNullableFilter<"Exam_Info"> | bigint | number | null
    Languages?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
    Reviews?: ReviewsListRelationFilter
  }

  export type Exam_InfoOrderByWithRelationInput = {
    id?: SortOrder
    exam_name?: SortOrderInput | SortOrder
    language?: SortOrder
    max_marks?: SortOrderInput | SortOrder
    Languages?: LanguagesOrderByWithRelationInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type Exam_InfoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Exam_InfoWhereInput | Exam_InfoWhereInput[]
    OR?: Exam_InfoWhereInput[]
    NOT?: Exam_InfoWhereInput | Exam_InfoWhereInput[]
    exam_name?: StringNullableFilter<"Exam_Info"> | string | null
    language?: BigIntFilter<"Exam_Info"> | bigint | number
    max_marks?: BigIntNullableFilter<"Exam_Info"> | bigint | number | null
    Languages?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
    Reviews?: ReviewsListRelationFilter
  }, "id">

  export type Exam_InfoOrderByWithAggregationInput = {
    id?: SortOrder
    exam_name?: SortOrderInput | SortOrder
    language?: SortOrder
    max_marks?: SortOrderInput | SortOrder
    _count?: Exam_InfoCountOrderByAggregateInput
    _avg?: Exam_InfoAvgOrderByAggregateInput
    _max?: Exam_InfoMaxOrderByAggregateInput
    _min?: Exam_InfoMinOrderByAggregateInput
    _sum?: Exam_InfoSumOrderByAggregateInput
  }

  export type Exam_InfoScalarWhereWithAggregatesInput = {
    AND?: Exam_InfoScalarWhereWithAggregatesInput | Exam_InfoScalarWhereWithAggregatesInput[]
    OR?: Exam_InfoScalarWhereWithAggregatesInput[]
    NOT?: Exam_InfoScalarWhereWithAggregatesInput | Exam_InfoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Exam_Info"> | bigint | number
    exam_name?: StringNullableWithAggregatesFilter<"Exam_Info"> | string | null
    language?: BigIntWithAggregatesFilter<"Exam_Info"> | bigint | number
    max_marks?: BigIntNullableWithAggregatesFilter<"Exam_Info"> | bigint | number | null
  }

  export type LanguagesWhereInput = {
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    id?: BigIntFilter<"Languages"> | bigint | number
    language_name?: StringFilter<"Languages"> | string
    Exam_Info?: Exam_InfoListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }

  export type LanguagesOrderByWithRelationInput = {
    id?: SortOrder
    language_name?: SortOrder
    Exam_Info?: Exam_InfoOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type LanguagesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: LanguagesWhereInput | LanguagesWhereInput[]
    OR?: LanguagesWhereInput[]
    NOT?: LanguagesWhereInput | LanguagesWhereInput[]
    language_name?: StringFilter<"Languages"> | string
    Exam_Info?: Exam_InfoListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }, "id">

  export type LanguagesOrderByWithAggregationInput = {
    id?: SortOrder
    language_name?: SortOrder
    _count?: LanguagesCountOrderByAggregateInput
    _avg?: LanguagesAvgOrderByAggregateInput
    _max?: LanguagesMaxOrderByAggregateInput
    _min?: LanguagesMinOrderByAggregateInput
    _sum?: LanguagesSumOrderByAggregateInput
  }

  export type LanguagesScalarWhereWithAggregatesInput = {
    AND?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    OR?: LanguagesScalarWhereWithAggregatesInput[]
    NOT?: LanguagesScalarWhereWithAggregatesInput | LanguagesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Languages"> | bigint | number
    language_name?: StringWithAggregatesFilter<"Languages"> | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: BigIntFilter<"Reviews"> | bigint | number
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    student_name?: StringNullableFilter<"Reviews"> | string | null
    experience?: StringNullableFilter<"Reviews"> | string | null
    exam_id?: BigIntNullableFilter<"Reviews"> | bigint | number | null
    marks_obtained?: DecimalNullableFilter<"Reviews"> | Decimal | DecimalJsLike | number | string | null
    language?: BigIntFilter<"Reviews"> | bigint | number
    exam_date?: DateTimeNullableFilter<"Reviews"> | Date | string | null
    picture?: StringNullableFilter<"Reviews"> | string | null
    Exam_Info?: XOR<Exam_InfoNullableScalarRelationFilter, Exam_InfoWhereInput> | null
    Languages?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    student_name?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    exam_id?: SortOrderInput | SortOrder
    marks_obtained?: SortOrderInput | SortOrder
    language?: SortOrder
    exam_date?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    Exam_Info?: Exam_InfoOrderByWithRelationInput
    Languages?: LanguagesOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    student_name?: StringNullableFilter<"Reviews"> | string | null
    experience?: StringNullableFilter<"Reviews"> | string | null
    exam_id?: BigIntNullableFilter<"Reviews"> | bigint | number | null
    marks_obtained?: DecimalNullableFilter<"Reviews"> | Decimal | DecimalJsLike | number | string | null
    language?: BigIntFilter<"Reviews"> | bigint | number
    exam_date?: DateTimeNullableFilter<"Reviews"> | Date | string | null
    picture?: StringNullableFilter<"Reviews"> | string | null
    Exam_Info?: XOR<Exam_InfoNullableScalarRelationFilter, Exam_InfoWhereInput> | null
    Languages?: XOR<LanguagesScalarRelationFilter, LanguagesWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    student_name?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    exam_id?: SortOrderInput | SortOrder
    marks_obtained?: SortOrderInput | SortOrder
    language?: SortOrder
    exam_date?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Reviews"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    student_name?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    experience?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    exam_id?: BigIntNullableWithAggregatesFilter<"Reviews"> | bigint | number | null
    marks_obtained?: DecimalNullableWithAggregatesFilter<"Reviews"> | Decimal | DecimalJsLike | number | string | null
    language?: BigIntWithAggregatesFilter<"Reviews"> | bigint | number
    exam_date?: DateTimeNullableWithAggregatesFilter<"Reviews"> | Date | string | null
    picture?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
  }

  export type Exam_InfoCreateInput = {
    id?: bigint | number
    exam_name?: string | null
    max_marks?: bigint | number | null
    Languages: LanguagesCreateNestedOneWithoutExam_InfoInput
    Reviews?: ReviewsCreateNestedManyWithoutExam_InfoInput
  }

  export type Exam_InfoUncheckedCreateInput = {
    id?: bigint | number
    exam_name?: string | null
    language: bigint | number
    max_marks?: bigint | number | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutExam_InfoInput
  }

  export type Exam_InfoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Languages?: LanguagesUpdateOneRequiredWithoutExam_InfoNestedInput
    Reviews?: ReviewsUpdateManyWithoutExam_InfoNestedInput
  }

  export type Exam_InfoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    language?: BigIntFieldUpdateOperationsInput | bigint | number
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutExam_InfoNestedInput
  }

  export type Exam_InfoCreateManyInput = {
    id?: bigint | number
    exam_name?: string | null
    language: bigint | number
    max_marks?: bigint | number | null
  }

  export type Exam_InfoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type Exam_InfoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    language?: BigIntFieldUpdateOperationsInput | bigint | number
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type LanguagesCreateInput = {
    id?: bigint | number
    language_name: string
    Exam_Info?: Exam_InfoCreateNestedManyWithoutLanguagesInput
    Reviews?: ReviewsCreateNestedManyWithoutLanguagesInput
  }

  export type LanguagesUncheckedCreateInput = {
    id?: bigint | number
    language_name: string
    Exam_Info?: Exam_InfoUncheckedCreateNestedManyWithoutLanguagesInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutLanguagesInput
  }

  export type LanguagesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
    Exam_Info?: Exam_InfoUpdateManyWithoutLanguagesNestedInput
    Reviews?: ReviewsUpdateManyWithoutLanguagesNestedInput
  }

  export type LanguagesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
    Exam_Info?: Exam_InfoUncheckedUpdateManyWithoutLanguagesNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutLanguagesNestedInput
  }

  export type LanguagesCreateManyInput = {
    id?: bigint | number
    language_name: string
  }

  export type LanguagesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguagesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    exam_date?: Date | string | null
    picture?: string | null
    Exam_Info?: Exam_InfoCreateNestedOneWithoutReviewsInput
    Languages: LanguagesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    exam_id?: bigint | number | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    language: bigint | number
    exam_date?: Date | string | null
    picture?: string | null
  }

  export type ReviewsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    Exam_Info?: Exam_InfoUpdateOneWithoutReviewsNestedInput
    Languages?: LanguagesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    exam_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    exam_id?: bigint | number | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    language: bigint | number
    exam_date?: Date | string | null
    picture?: string | null
  }

  export type ReviewsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    exam_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type LanguagesScalarRelationFilter = {
    is?: LanguagesWhereInput
    isNot?: LanguagesWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Exam_InfoCountOrderByAggregateInput = {
    id?: SortOrder
    exam_name?: SortOrder
    language?: SortOrder
    max_marks?: SortOrder
  }

  export type Exam_InfoAvgOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    max_marks?: SortOrder
  }

  export type Exam_InfoMaxOrderByAggregateInput = {
    id?: SortOrder
    exam_name?: SortOrder
    language?: SortOrder
    max_marks?: SortOrder
  }

  export type Exam_InfoMinOrderByAggregateInput = {
    id?: SortOrder
    exam_name?: SortOrder
    language?: SortOrder
    max_marks?: SortOrder
  }

  export type Exam_InfoSumOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    max_marks?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Exam_InfoListRelationFilter = {
    every?: Exam_InfoWhereInput
    some?: Exam_InfoWhereInput
    none?: Exam_InfoWhereInput
  }

  export type Exam_InfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguagesCountOrderByAggregateInput = {
    id?: SortOrder
    language_name?: SortOrder
  }

  export type LanguagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguagesMaxOrderByAggregateInput = {
    id?: SortOrder
    language_name?: SortOrder
  }

  export type LanguagesMinOrderByAggregateInput = {
    id?: SortOrder
    language_name?: SortOrder
  }

  export type LanguagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Exam_InfoNullableScalarRelationFilter = {
    is?: Exam_InfoWhereInput | null
    isNot?: Exam_InfoWhereInput | null
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    student_name?: SortOrder
    experience?: SortOrder
    exam_id?: SortOrder
    marks_obtained?: SortOrder
    language?: SortOrder
    exam_date?: SortOrder
    picture?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    marks_obtained?: SortOrder
    language?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    student_name?: SortOrder
    experience?: SortOrder
    exam_id?: SortOrder
    marks_obtained?: SortOrder
    language?: SortOrder
    exam_date?: SortOrder
    picture?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    student_name?: SortOrder
    experience?: SortOrder
    exam_id?: SortOrder
    marks_obtained?: SortOrder
    language?: SortOrder
    exam_date?: SortOrder
    picture?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    exam_id?: SortOrder
    marks_obtained?: SortOrder
    language?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LanguagesCreateNestedOneWithoutExam_InfoInput = {
    create?: XOR<LanguagesCreateWithoutExam_InfoInput, LanguagesUncheckedCreateWithoutExam_InfoInput>
    connectOrCreate?: LanguagesCreateOrConnectWithoutExam_InfoInput
    connect?: LanguagesWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutExam_InfoInput = {
    create?: XOR<ReviewsCreateWithoutExam_InfoInput, ReviewsUncheckedCreateWithoutExam_InfoInput> | ReviewsCreateWithoutExam_InfoInput[] | ReviewsUncheckedCreateWithoutExam_InfoInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutExam_InfoInput | ReviewsCreateOrConnectWithoutExam_InfoInput[]
    createMany?: ReviewsCreateManyExam_InfoInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutExam_InfoInput = {
    create?: XOR<ReviewsCreateWithoutExam_InfoInput, ReviewsUncheckedCreateWithoutExam_InfoInput> | ReviewsCreateWithoutExam_InfoInput[] | ReviewsUncheckedCreateWithoutExam_InfoInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutExam_InfoInput | ReviewsCreateOrConnectWithoutExam_InfoInput[]
    createMany?: ReviewsCreateManyExam_InfoInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type LanguagesUpdateOneRequiredWithoutExam_InfoNestedInput = {
    create?: XOR<LanguagesCreateWithoutExam_InfoInput, LanguagesUncheckedCreateWithoutExam_InfoInput>
    connectOrCreate?: LanguagesCreateOrConnectWithoutExam_InfoInput
    upsert?: LanguagesUpsertWithoutExam_InfoInput
    connect?: LanguagesWhereUniqueInput
    update?: XOR<XOR<LanguagesUpdateToOneWithWhereWithoutExam_InfoInput, LanguagesUpdateWithoutExam_InfoInput>, LanguagesUncheckedUpdateWithoutExam_InfoInput>
  }

  export type ReviewsUpdateManyWithoutExam_InfoNestedInput = {
    create?: XOR<ReviewsCreateWithoutExam_InfoInput, ReviewsUncheckedCreateWithoutExam_InfoInput> | ReviewsCreateWithoutExam_InfoInput[] | ReviewsUncheckedCreateWithoutExam_InfoInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutExam_InfoInput | ReviewsCreateOrConnectWithoutExam_InfoInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutExam_InfoInput | ReviewsUpsertWithWhereUniqueWithoutExam_InfoInput[]
    createMany?: ReviewsCreateManyExam_InfoInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutExam_InfoInput | ReviewsUpdateWithWhereUniqueWithoutExam_InfoInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutExam_InfoInput | ReviewsUpdateManyWithWhereWithoutExam_InfoInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutExam_InfoNestedInput = {
    create?: XOR<ReviewsCreateWithoutExam_InfoInput, ReviewsUncheckedCreateWithoutExam_InfoInput> | ReviewsCreateWithoutExam_InfoInput[] | ReviewsUncheckedCreateWithoutExam_InfoInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutExam_InfoInput | ReviewsCreateOrConnectWithoutExam_InfoInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutExam_InfoInput | ReviewsUpsertWithWhereUniqueWithoutExam_InfoInput[]
    createMany?: ReviewsCreateManyExam_InfoInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutExam_InfoInput | ReviewsUpdateWithWhereUniqueWithoutExam_InfoInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutExam_InfoInput | ReviewsUpdateManyWithWhereWithoutExam_InfoInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Exam_InfoCreateNestedManyWithoutLanguagesInput = {
    create?: XOR<Exam_InfoCreateWithoutLanguagesInput, Exam_InfoUncheckedCreateWithoutLanguagesInput> | Exam_InfoCreateWithoutLanguagesInput[] | Exam_InfoUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: Exam_InfoCreateOrConnectWithoutLanguagesInput | Exam_InfoCreateOrConnectWithoutLanguagesInput[]
    createMany?: Exam_InfoCreateManyLanguagesInputEnvelope
    connect?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutLanguagesInput = {
    create?: XOR<ReviewsCreateWithoutLanguagesInput, ReviewsUncheckedCreateWithoutLanguagesInput> | ReviewsCreateWithoutLanguagesInput[] | ReviewsUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutLanguagesInput | ReviewsCreateOrConnectWithoutLanguagesInput[]
    createMany?: ReviewsCreateManyLanguagesInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Exam_InfoUncheckedCreateNestedManyWithoutLanguagesInput = {
    create?: XOR<Exam_InfoCreateWithoutLanguagesInput, Exam_InfoUncheckedCreateWithoutLanguagesInput> | Exam_InfoCreateWithoutLanguagesInput[] | Exam_InfoUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: Exam_InfoCreateOrConnectWithoutLanguagesInput | Exam_InfoCreateOrConnectWithoutLanguagesInput[]
    createMany?: Exam_InfoCreateManyLanguagesInputEnvelope
    connect?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutLanguagesInput = {
    create?: XOR<ReviewsCreateWithoutLanguagesInput, ReviewsUncheckedCreateWithoutLanguagesInput> | ReviewsCreateWithoutLanguagesInput[] | ReviewsUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutLanguagesInput | ReviewsCreateOrConnectWithoutLanguagesInput[]
    createMany?: ReviewsCreateManyLanguagesInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Exam_InfoUpdateManyWithoutLanguagesNestedInput = {
    create?: XOR<Exam_InfoCreateWithoutLanguagesInput, Exam_InfoUncheckedCreateWithoutLanguagesInput> | Exam_InfoCreateWithoutLanguagesInput[] | Exam_InfoUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: Exam_InfoCreateOrConnectWithoutLanguagesInput | Exam_InfoCreateOrConnectWithoutLanguagesInput[]
    upsert?: Exam_InfoUpsertWithWhereUniqueWithoutLanguagesInput | Exam_InfoUpsertWithWhereUniqueWithoutLanguagesInput[]
    createMany?: Exam_InfoCreateManyLanguagesInputEnvelope
    set?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    disconnect?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    delete?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    connect?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    update?: Exam_InfoUpdateWithWhereUniqueWithoutLanguagesInput | Exam_InfoUpdateWithWhereUniqueWithoutLanguagesInput[]
    updateMany?: Exam_InfoUpdateManyWithWhereWithoutLanguagesInput | Exam_InfoUpdateManyWithWhereWithoutLanguagesInput[]
    deleteMany?: Exam_InfoScalarWhereInput | Exam_InfoScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutLanguagesNestedInput = {
    create?: XOR<ReviewsCreateWithoutLanguagesInput, ReviewsUncheckedCreateWithoutLanguagesInput> | ReviewsCreateWithoutLanguagesInput[] | ReviewsUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutLanguagesInput | ReviewsCreateOrConnectWithoutLanguagesInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutLanguagesInput | ReviewsUpsertWithWhereUniqueWithoutLanguagesInput[]
    createMany?: ReviewsCreateManyLanguagesInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutLanguagesInput | ReviewsUpdateWithWhereUniqueWithoutLanguagesInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutLanguagesInput | ReviewsUpdateManyWithWhereWithoutLanguagesInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Exam_InfoUncheckedUpdateManyWithoutLanguagesNestedInput = {
    create?: XOR<Exam_InfoCreateWithoutLanguagesInput, Exam_InfoUncheckedCreateWithoutLanguagesInput> | Exam_InfoCreateWithoutLanguagesInput[] | Exam_InfoUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: Exam_InfoCreateOrConnectWithoutLanguagesInput | Exam_InfoCreateOrConnectWithoutLanguagesInput[]
    upsert?: Exam_InfoUpsertWithWhereUniqueWithoutLanguagesInput | Exam_InfoUpsertWithWhereUniqueWithoutLanguagesInput[]
    createMany?: Exam_InfoCreateManyLanguagesInputEnvelope
    set?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    disconnect?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    delete?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    connect?: Exam_InfoWhereUniqueInput | Exam_InfoWhereUniqueInput[]
    update?: Exam_InfoUpdateWithWhereUniqueWithoutLanguagesInput | Exam_InfoUpdateWithWhereUniqueWithoutLanguagesInput[]
    updateMany?: Exam_InfoUpdateManyWithWhereWithoutLanguagesInput | Exam_InfoUpdateManyWithWhereWithoutLanguagesInput[]
    deleteMany?: Exam_InfoScalarWhereInput | Exam_InfoScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutLanguagesNestedInput = {
    create?: XOR<ReviewsCreateWithoutLanguagesInput, ReviewsUncheckedCreateWithoutLanguagesInput> | ReviewsCreateWithoutLanguagesInput[] | ReviewsUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutLanguagesInput | ReviewsCreateOrConnectWithoutLanguagesInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutLanguagesInput | ReviewsUpsertWithWhereUniqueWithoutLanguagesInput[]
    createMany?: ReviewsCreateManyLanguagesInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutLanguagesInput | ReviewsUpdateWithWhereUniqueWithoutLanguagesInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutLanguagesInput | ReviewsUpdateManyWithWhereWithoutLanguagesInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Exam_InfoCreateNestedOneWithoutReviewsInput = {
    create?: XOR<Exam_InfoCreateWithoutReviewsInput, Exam_InfoUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: Exam_InfoCreateOrConnectWithoutReviewsInput
    connect?: Exam_InfoWhereUniqueInput
  }

  export type LanguagesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<LanguagesCreateWithoutReviewsInput, LanguagesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LanguagesCreateOrConnectWithoutReviewsInput
    connect?: LanguagesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Exam_InfoUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<Exam_InfoCreateWithoutReviewsInput, Exam_InfoUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: Exam_InfoCreateOrConnectWithoutReviewsInput
    upsert?: Exam_InfoUpsertWithoutReviewsInput
    disconnect?: Exam_InfoWhereInput | boolean
    delete?: Exam_InfoWhereInput | boolean
    connect?: Exam_InfoWhereUniqueInput
    update?: XOR<XOR<Exam_InfoUpdateToOneWithWhereWithoutReviewsInput, Exam_InfoUpdateWithoutReviewsInput>, Exam_InfoUncheckedUpdateWithoutReviewsInput>
  }

  export type LanguagesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<LanguagesCreateWithoutReviewsInput, LanguagesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LanguagesCreateOrConnectWithoutReviewsInput
    upsert?: LanguagesUpsertWithoutReviewsInput
    connect?: LanguagesWhereUniqueInput
    update?: XOR<XOR<LanguagesUpdateToOneWithWhereWithoutReviewsInput, LanguagesUpdateWithoutReviewsInput>, LanguagesUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LanguagesCreateWithoutExam_InfoInput = {
    id?: bigint | number
    language_name: string
    Reviews?: ReviewsCreateNestedManyWithoutLanguagesInput
  }

  export type LanguagesUncheckedCreateWithoutExam_InfoInput = {
    id?: bigint | number
    language_name: string
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutLanguagesInput
  }

  export type LanguagesCreateOrConnectWithoutExam_InfoInput = {
    where: LanguagesWhereUniqueInput
    create: XOR<LanguagesCreateWithoutExam_InfoInput, LanguagesUncheckedCreateWithoutExam_InfoInput>
  }

  export type ReviewsCreateWithoutExam_InfoInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    exam_date?: Date | string | null
    picture?: string | null
    Languages: LanguagesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutExam_InfoInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    language: bigint | number
    exam_date?: Date | string | null
    picture?: string | null
  }

  export type ReviewsCreateOrConnectWithoutExam_InfoInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutExam_InfoInput, ReviewsUncheckedCreateWithoutExam_InfoInput>
  }

  export type ReviewsCreateManyExam_InfoInputEnvelope = {
    data: ReviewsCreateManyExam_InfoInput | ReviewsCreateManyExam_InfoInput[]
    skipDuplicates?: boolean
  }

  export type LanguagesUpsertWithoutExam_InfoInput = {
    update: XOR<LanguagesUpdateWithoutExam_InfoInput, LanguagesUncheckedUpdateWithoutExam_InfoInput>
    create: XOR<LanguagesCreateWithoutExam_InfoInput, LanguagesUncheckedCreateWithoutExam_InfoInput>
    where?: LanguagesWhereInput
  }

  export type LanguagesUpdateToOneWithWhereWithoutExam_InfoInput = {
    where?: LanguagesWhereInput
    data: XOR<LanguagesUpdateWithoutExam_InfoInput, LanguagesUncheckedUpdateWithoutExam_InfoInput>
  }

  export type LanguagesUpdateWithoutExam_InfoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
    Reviews?: ReviewsUpdateManyWithoutLanguagesNestedInput
  }

  export type LanguagesUncheckedUpdateWithoutExam_InfoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
    Reviews?: ReviewsUncheckedUpdateManyWithoutLanguagesNestedInput
  }

  export type ReviewsUpsertWithWhereUniqueWithoutExam_InfoInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutExam_InfoInput, ReviewsUncheckedUpdateWithoutExam_InfoInput>
    create: XOR<ReviewsCreateWithoutExam_InfoInput, ReviewsUncheckedCreateWithoutExam_InfoInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutExam_InfoInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutExam_InfoInput, ReviewsUncheckedUpdateWithoutExam_InfoInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutExam_InfoInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutExam_InfoInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: BigIntFilter<"Reviews"> | bigint | number
    created_at?: DateTimeFilter<"Reviews"> | Date | string
    student_name?: StringNullableFilter<"Reviews"> | string | null
    experience?: StringNullableFilter<"Reviews"> | string | null
    exam_id?: BigIntNullableFilter<"Reviews"> | bigint | number | null
    marks_obtained?: DecimalNullableFilter<"Reviews"> | Decimal | DecimalJsLike | number | string | null
    language?: BigIntFilter<"Reviews"> | bigint | number
    exam_date?: DateTimeNullableFilter<"Reviews"> | Date | string | null
    picture?: StringNullableFilter<"Reviews"> | string | null
  }

  export type Exam_InfoCreateWithoutLanguagesInput = {
    id?: bigint | number
    exam_name?: string | null
    max_marks?: bigint | number | null
    Reviews?: ReviewsCreateNestedManyWithoutExam_InfoInput
  }

  export type Exam_InfoUncheckedCreateWithoutLanguagesInput = {
    id?: bigint | number
    exam_name?: string | null
    max_marks?: bigint | number | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutExam_InfoInput
  }

  export type Exam_InfoCreateOrConnectWithoutLanguagesInput = {
    where: Exam_InfoWhereUniqueInput
    create: XOR<Exam_InfoCreateWithoutLanguagesInput, Exam_InfoUncheckedCreateWithoutLanguagesInput>
  }

  export type Exam_InfoCreateManyLanguagesInputEnvelope = {
    data: Exam_InfoCreateManyLanguagesInput | Exam_InfoCreateManyLanguagesInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutLanguagesInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    exam_date?: Date | string | null
    picture?: string | null
    Exam_Info?: Exam_InfoCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutLanguagesInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    exam_id?: bigint | number | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    exam_date?: Date | string | null
    picture?: string | null
  }

  export type ReviewsCreateOrConnectWithoutLanguagesInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutLanguagesInput, ReviewsUncheckedCreateWithoutLanguagesInput>
  }

  export type ReviewsCreateManyLanguagesInputEnvelope = {
    data: ReviewsCreateManyLanguagesInput | ReviewsCreateManyLanguagesInput[]
    skipDuplicates?: boolean
  }

  export type Exam_InfoUpsertWithWhereUniqueWithoutLanguagesInput = {
    where: Exam_InfoWhereUniqueInput
    update: XOR<Exam_InfoUpdateWithoutLanguagesInput, Exam_InfoUncheckedUpdateWithoutLanguagesInput>
    create: XOR<Exam_InfoCreateWithoutLanguagesInput, Exam_InfoUncheckedCreateWithoutLanguagesInput>
  }

  export type Exam_InfoUpdateWithWhereUniqueWithoutLanguagesInput = {
    where: Exam_InfoWhereUniqueInput
    data: XOR<Exam_InfoUpdateWithoutLanguagesInput, Exam_InfoUncheckedUpdateWithoutLanguagesInput>
  }

  export type Exam_InfoUpdateManyWithWhereWithoutLanguagesInput = {
    where: Exam_InfoScalarWhereInput
    data: XOR<Exam_InfoUpdateManyMutationInput, Exam_InfoUncheckedUpdateManyWithoutLanguagesInput>
  }

  export type Exam_InfoScalarWhereInput = {
    AND?: Exam_InfoScalarWhereInput | Exam_InfoScalarWhereInput[]
    OR?: Exam_InfoScalarWhereInput[]
    NOT?: Exam_InfoScalarWhereInput | Exam_InfoScalarWhereInput[]
    id?: BigIntFilter<"Exam_Info"> | bigint | number
    exam_name?: StringNullableFilter<"Exam_Info"> | string | null
    language?: BigIntFilter<"Exam_Info"> | bigint | number
    max_marks?: BigIntNullableFilter<"Exam_Info"> | bigint | number | null
  }

  export type ReviewsUpsertWithWhereUniqueWithoutLanguagesInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutLanguagesInput, ReviewsUncheckedUpdateWithoutLanguagesInput>
    create: XOR<ReviewsCreateWithoutLanguagesInput, ReviewsUncheckedCreateWithoutLanguagesInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutLanguagesInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutLanguagesInput, ReviewsUncheckedUpdateWithoutLanguagesInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutLanguagesInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutLanguagesInput>
  }

  export type Exam_InfoCreateWithoutReviewsInput = {
    id?: bigint | number
    exam_name?: string | null
    max_marks?: bigint | number | null
    Languages: LanguagesCreateNestedOneWithoutExam_InfoInput
  }

  export type Exam_InfoUncheckedCreateWithoutReviewsInput = {
    id?: bigint | number
    exam_name?: string | null
    language: bigint | number
    max_marks?: bigint | number | null
  }

  export type Exam_InfoCreateOrConnectWithoutReviewsInput = {
    where: Exam_InfoWhereUniqueInput
    create: XOR<Exam_InfoCreateWithoutReviewsInput, Exam_InfoUncheckedCreateWithoutReviewsInput>
  }

  export type LanguagesCreateWithoutReviewsInput = {
    id?: bigint | number
    language_name: string
    Exam_Info?: Exam_InfoCreateNestedManyWithoutLanguagesInput
  }

  export type LanguagesUncheckedCreateWithoutReviewsInput = {
    id?: bigint | number
    language_name: string
    Exam_Info?: Exam_InfoUncheckedCreateNestedManyWithoutLanguagesInput
  }

  export type LanguagesCreateOrConnectWithoutReviewsInput = {
    where: LanguagesWhereUniqueInput
    create: XOR<LanguagesCreateWithoutReviewsInput, LanguagesUncheckedCreateWithoutReviewsInput>
  }

  export type Exam_InfoUpsertWithoutReviewsInput = {
    update: XOR<Exam_InfoUpdateWithoutReviewsInput, Exam_InfoUncheckedUpdateWithoutReviewsInput>
    create: XOR<Exam_InfoCreateWithoutReviewsInput, Exam_InfoUncheckedCreateWithoutReviewsInput>
    where?: Exam_InfoWhereInput
  }

  export type Exam_InfoUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Exam_InfoWhereInput
    data: XOR<Exam_InfoUpdateWithoutReviewsInput, Exam_InfoUncheckedUpdateWithoutReviewsInput>
  }

  export type Exam_InfoUpdateWithoutReviewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Languages?: LanguagesUpdateOneRequiredWithoutExam_InfoNestedInput
  }

  export type Exam_InfoUncheckedUpdateWithoutReviewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    language?: BigIntFieldUpdateOperationsInput | bigint | number
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type LanguagesUpsertWithoutReviewsInput = {
    update: XOR<LanguagesUpdateWithoutReviewsInput, LanguagesUncheckedUpdateWithoutReviewsInput>
    create: XOR<LanguagesCreateWithoutReviewsInput, LanguagesUncheckedCreateWithoutReviewsInput>
    where?: LanguagesWhereInput
  }

  export type LanguagesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: LanguagesWhereInput
    data: XOR<LanguagesUpdateWithoutReviewsInput, LanguagesUncheckedUpdateWithoutReviewsInput>
  }

  export type LanguagesUpdateWithoutReviewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
    Exam_Info?: Exam_InfoUpdateManyWithoutLanguagesNestedInput
  }

  export type LanguagesUncheckedUpdateWithoutReviewsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    language_name?: StringFieldUpdateOperationsInput | string
    Exam_Info?: Exam_InfoUncheckedUpdateManyWithoutLanguagesNestedInput
  }

  export type ReviewsCreateManyExam_InfoInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    language: bigint | number
    exam_date?: Date | string | null
    picture?: string | null
  }

  export type ReviewsUpdateWithoutExam_InfoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    Languages?: LanguagesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutExam_InfoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyWithoutExam_InfoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    language?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Exam_InfoCreateManyLanguagesInput = {
    id?: bigint | number
    exam_name?: string | null
    max_marks?: bigint | number | null
  }

  export type ReviewsCreateManyLanguagesInput = {
    id?: bigint | number
    created_at?: Date | string
    student_name?: string | null
    experience?: string | null
    exam_id?: bigint | number | null
    marks_obtained?: Decimal | DecimalJsLike | number | string | null
    exam_date?: Date | string | null
    picture?: string | null
  }

  export type Exam_InfoUpdateWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Reviews?: ReviewsUpdateManyWithoutExam_InfoNestedInput
  }

  export type Exam_InfoUncheckedUpdateWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutExam_InfoNestedInput
  }

  export type Exam_InfoUncheckedUpdateManyWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    exam_name?: NullableStringFieldUpdateOperationsInput | string | null
    max_marks?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ReviewsUpdateWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    Exam_Info?: Exam_InfoUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    exam_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyWithoutLanguagesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student_name?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    exam_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    marks_obtained?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    exam_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}