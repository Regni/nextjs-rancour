
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
 * Model Raider
 * 
 */
export type Raider = $Result.DefaultSelection<Prisma.$RaiderPayload>
/**
 * Model Weeklies
 * 
 */
export type Weeklies = $Result.DefaultSelection<Prisma.$WeekliesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Raiders
 * const raiders = await prisma.raider.findMany()
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
   * // Fetch zero or more Raiders
   * const raiders = await prisma.raider.findMany()
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
   * `prisma.raider`: Exposes CRUD operations for the **Raider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Raiders
    * const raiders = await prisma.raider.findMany()
    * ```
    */
  get raider(): Prisma.RaiderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklies`: Exposes CRUD operations for the **Weeklies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weeklies
    * const weeklies = await prisma.weeklies.findMany()
    * ```
    */
  get weeklies(): Prisma.WeekliesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Raider: 'Raider',
    Weeklies: 'Weeklies'
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
      modelProps: "raider" | "weeklies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Raider: {
        payload: Prisma.$RaiderPayload<ExtArgs>
        fields: Prisma.RaiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>
          }
          findFirst: {
            args: Prisma.RaiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>
          }
          findMany: {
            args: Prisma.RaiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>[]
          }
          create: {
            args: Prisma.RaiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>
          }
          createMany: {
            args: Prisma.RaiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaiderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>[]
          }
          delete: {
            args: Prisma.RaiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>
          }
          update: {
            args: Prisma.RaiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>
          }
          deleteMany: {
            args: Prisma.RaiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaiderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>[]
          }
          upsert: {
            args: Prisma.RaiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaiderPayload>
          }
          aggregate: {
            args: Prisma.RaiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaider>
          }
          groupBy: {
            args: Prisma.RaiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaiderCountArgs<ExtArgs>
            result: $Utils.Optional<RaiderCountAggregateOutputType> | number
          }
        }
      }
      Weeklies: {
        payload: Prisma.$WeekliesPayload<ExtArgs>
        fields: Prisma.WeekliesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeekliesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeekliesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>
          }
          findFirst: {
            args: Prisma.WeekliesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeekliesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>
          }
          findMany: {
            args: Prisma.WeekliesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>[]
          }
          create: {
            args: Prisma.WeekliesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>
          }
          createMany: {
            args: Prisma.WeekliesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeekliesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>[]
          }
          delete: {
            args: Prisma.WeekliesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>
          }
          update: {
            args: Prisma.WeekliesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>
          }
          deleteMany: {
            args: Prisma.WeekliesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeekliesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeekliesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>[]
          }
          upsert: {
            args: Prisma.WeekliesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekliesPayload>
          }
          aggregate: {
            args: Prisma.WeekliesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklies>
          }
          groupBy: {
            args: Prisma.WeekliesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeekliesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeekliesCountArgs<ExtArgs>
            result: $Utils.Optional<WeekliesCountAggregateOutputType> | number
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
    raider?: RaiderOmit
    weeklies?: WeekliesOmit
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
   * Count Type RaiderCountOutputType
   */

  export type RaiderCountOutputType = {
    progress: number
  }

  export type RaiderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | RaiderCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * RaiderCountOutputType without action
   */
  export type RaiderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaiderCountOutputType
     */
    select?: RaiderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaiderCountOutputType without action
   */
  export type RaiderCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekliesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Raider
   */

  export type AggregateRaider = {
    _count: RaiderCountAggregateOutputType | null
    _min: RaiderMinAggregateOutputType | null
    _max: RaiderMaxAggregateOutputType | null
  }

  export type RaiderMinAggregateOutputType = {
    id: string | null
    name: string | null
    class: string | null
    spec: string | null
    active: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaiderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    class: string | null
    spec: string | null
    active: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RaiderCountAggregateOutputType = {
    id: number
    name: number
    class: number
    spec: number
    active: number
    lastSeen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RaiderMinAggregateInputType = {
    id?: true
    name?: true
    class?: true
    spec?: true
    active?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaiderMaxAggregateInputType = {
    id?: true
    name?: true
    class?: true
    spec?: true
    active?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RaiderCountAggregateInputType = {
    id?: true
    name?: true
    class?: true
    spec?: true
    active?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RaiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raider to aggregate.
     */
    where?: RaiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raiders to fetch.
     */
    orderBy?: RaiderOrderByWithRelationInput | RaiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Raiders
    **/
    _count?: true | RaiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaiderMaxAggregateInputType
  }

  export type GetRaiderAggregateType<T extends RaiderAggregateArgs> = {
        [P in keyof T & keyof AggregateRaider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaider[P]>
      : GetScalarType<T[P], AggregateRaider[P]>
  }




  export type RaiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaiderWhereInput
    orderBy?: RaiderOrderByWithAggregationInput | RaiderOrderByWithAggregationInput[]
    by: RaiderScalarFieldEnum[] | RaiderScalarFieldEnum
    having?: RaiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaiderCountAggregateInputType | true
    _min?: RaiderMinAggregateInputType
    _max?: RaiderMaxAggregateInputType
  }

  export type RaiderGroupByOutputType = {
    id: string
    name: string
    class: string
    spec: string
    active: boolean
    lastSeen: Date
    createdAt: Date
    updatedAt: Date
    _count: RaiderCountAggregateOutputType | null
    _min: RaiderMinAggregateOutputType | null
    _max: RaiderMaxAggregateOutputType | null
  }

  type GetRaiderGroupByPayload<T extends RaiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaiderGroupByOutputType[P]>
            : GetScalarType<T[P], RaiderGroupByOutputType[P]>
        }
      >
    >


  export type RaiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    spec?: boolean
    active?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    progress?: boolean | Raider$progressArgs<ExtArgs>
    _count?: boolean | RaiderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raider"]>

  export type RaiderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    spec?: boolean
    active?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["raider"]>

  export type RaiderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    class?: boolean
    spec?: boolean
    active?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["raider"]>

  export type RaiderSelectScalar = {
    id?: boolean
    name?: boolean
    class?: boolean
    spec?: boolean
    active?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RaiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "class" | "spec" | "active" | "lastSeen" | "createdAt" | "updatedAt", ExtArgs["result"]["raider"]>
  export type RaiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | Raider$progressArgs<ExtArgs>
    _count?: boolean | RaiderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaiderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RaiderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RaiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Raider"
    objects: {
      progress: Prisma.$WeekliesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      class: string
      spec: string
      active: boolean
      lastSeen: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["raider"]>
    composites: {}
  }

  type RaiderGetPayload<S extends boolean | null | undefined | RaiderDefaultArgs> = $Result.GetResult<Prisma.$RaiderPayload, S>

  type RaiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaiderCountAggregateInputType | true
    }

  export interface RaiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Raider'], meta: { name: 'Raider' } }
    /**
     * Find zero or one Raider that matches the filter.
     * @param {RaiderFindUniqueArgs} args - Arguments to find a Raider
     * @example
     * // Get one Raider
     * const raider = await prisma.raider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaiderFindUniqueArgs>(args: SelectSubset<T, RaiderFindUniqueArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Raider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaiderFindUniqueOrThrowArgs} args - Arguments to find a Raider
     * @example
     * // Get one Raider
     * const raider = await prisma.raider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaiderFindUniqueOrThrowArgs>(args: SelectSubset<T, RaiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaiderFindFirstArgs} args - Arguments to find a Raider
     * @example
     * // Get one Raider
     * const raider = await prisma.raider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaiderFindFirstArgs>(args?: SelectSubset<T, RaiderFindFirstArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Raider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaiderFindFirstOrThrowArgs} args - Arguments to find a Raider
     * @example
     * // Get one Raider
     * const raider = await prisma.raider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaiderFindFirstOrThrowArgs>(args?: SelectSubset<T, RaiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Raiders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Raiders
     * const raiders = await prisma.raider.findMany()
     * 
     * // Get first 10 Raiders
     * const raiders = await prisma.raider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raiderWithIdOnly = await prisma.raider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaiderFindManyArgs>(args?: SelectSubset<T, RaiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Raider.
     * @param {RaiderCreateArgs} args - Arguments to create a Raider.
     * @example
     * // Create one Raider
     * const Raider = await prisma.raider.create({
     *   data: {
     *     // ... data to create a Raider
     *   }
     * })
     * 
     */
    create<T extends RaiderCreateArgs>(args: SelectSubset<T, RaiderCreateArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Raiders.
     * @param {RaiderCreateManyArgs} args - Arguments to create many Raiders.
     * @example
     * // Create many Raiders
     * const raider = await prisma.raider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaiderCreateManyArgs>(args?: SelectSubset<T, RaiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Raiders and returns the data saved in the database.
     * @param {RaiderCreateManyAndReturnArgs} args - Arguments to create many Raiders.
     * @example
     * // Create many Raiders
     * const raider = await prisma.raider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Raiders and only return the `id`
     * const raiderWithIdOnly = await prisma.raider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaiderCreateManyAndReturnArgs>(args?: SelectSubset<T, RaiderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Raider.
     * @param {RaiderDeleteArgs} args - Arguments to delete one Raider.
     * @example
     * // Delete one Raider
     * const Raider = await prisma.raider.delete({
     *   where: {
     *     // ... filter to delete one Raider
     *   }
     * })
     * 
     */
    delete<T extends RaiderDeleteArgs>(args: SelectSubset<T, RaiderDeleteArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Raider.
     * @param {RaiderUpdateArgs} args - Arguments to update one Raider.
     * @example
     * // Update one Raider
     * const raider = await prisma.raider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaiderUpdateArgs>(args: SelectSubset<T, RaiderUpdateArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Raiders.
     * @param {RaiderDeleteManyArgs} args - Arguments to filter Raiders to delete.
     * @example
     * // Delete a few Raiders
     * const { count } = await prisma.raider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaiderDeleteManyArgs>(args?: SelectSubset<T, RaiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Raiders
     * const raider = await prisma.raider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaiderUpdateManyArgs>(args: SelectSubset<T, RaiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Raiders and returns the data updated in the database.
     * @param {RaiderUpdateManyAndReturnArgs} args - Arguments to update many Raiders.
     * @example
     * // Update many Raiders
     * const raider = await prisma.raider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Raiders and only return the `id`
     * const raiderWithIdOnly = await prisma.raider.updateManyAndReturn({
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
    updateManyAndReturn<T extends RaiderUpdateManyAndReturnArgs>(args: SelectSubset<T, RaiderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Raider.
     * @param {RaiderUpsertArgs} args - Arguments to update or create a Raider.
     * @example
     * // Update or create a Raider
     * const raider = await prisma.raider.upsert({
     *   create: {
     *     // ... data to create a Raider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Raider we want to update
     *   }
     * })
     */
    upsert<T extends RaiderUpsertArgs>(args: SelectSubset<T, RaiderUpsertArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Raiders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaiderCountArgs} args - Arguments to filter Raiders to count.
     * @example
     * // Count the number of Raiders
     * const count = await prisma.raider.count({
     *   where: {
     *     // ... the filter for the Raiders we want to count
     *   }
     * })
    **/
    count<T extends RaiderCountArgs>(
      args?: Subset<T, RaiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Raider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaiderAggregateArgs>(args: Subset<T, RaiderAggregateArgs>): Prisma.PrismaPromise<GetRaiderAggregateType<T>>

    /**
     * Group by Raider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaiderGroupByArgs} args - Group by arguments.
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
      T extends RaiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaiderGroupByArgs['orderBy'] }
        : { orderBy?: RaiderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Raider model
   */
  readonly fields: RaiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Raider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progress<T extends Raider$progressArgs<ExtArgs> = {}>(args?: Subset<T, Raider$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Raider model
   */
  interface RaiderFieldRefs {
    readonly id: FieldRef<"Raider", 'String'>
    readonly name: FieldRef<"Raider", 'String'>
    readonly class: FieldRef<"Raider", 'String'>
    readonly spec: FieldRef<"Raider", 'String'>
    readonly active: FieldRef<"Raider", 'Boolean'>
    readonly lastSeen: FieldRef<"Raider", 'DateTime'>
    readonly createdAt: FieldRef<"Raider", 'DateTime'>
    readonly updatedAt: FieldRef<"Raider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Raider findUnique
   */
  export type RaiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * Filter, which Raider to fetch.
     */
    where: RaiderWhereUniqueInput
  }

  /**
   * Raider findUniqueOrThrow
   */
  export type RaiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * Filter, which Raider to fetch.
     */
    where: RaiderWhereUniqueInput
  }

  /**
   * Raider findFirst
   */
  export type RaiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * Filter, which Raider to fetch.
     */
    where?: RaiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raiders to fetch.
     */
    orderBy?: RaiderOrderByWithRelationInput | RaiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raiders.
     */
    cursor?: RaiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raiders.
     */
    distinct?: RaiderScalarFieldEnum | RaiderScalarFieldEnum[]
  }

  /**
   * Raider findFirstOrThrow
   */
  export type RaiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * Filter, which Raider to fetch.
     */
    where?: RaiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raiders to fetch.
     */
    orderBy?: RaiderOrderByWithRelationInput | RaiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Raiders.
     */
    cursor?: RaiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raiders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Raiders.
     */
    distinct?: RaiderScalarFieldEnum | RaiderScalarFieldEnum[]
  }

  /**
   * Raider findMany
   */
  export type RaiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * Filter, which Raiders to fetch.
     */
    where?: RaiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Raiders to fetch.
     */
    orderBy?: RaiderOrderByWithRelationInput | RaiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Raiders.
     */
    cursor?: RaiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Raiders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Raiders.
     */
    skip?: number
    distinct?: RaiderScalarFieldEnum | RaiderScalarFieldEnum[]
  }

  /**
   * Raider create
   */
  export type RaiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Raider.
     */
    data: XOR<RaiderCreateInput, RaiderUncheckedCreateInput>
  }

  /**
   * Raider createMany
   */
  export type RaiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Raiders.
     */
    data: RaiderCreateManyInput | RaiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Raider createManyAndReturn
   */
  export type RaiderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * The data used to create many Raiders.
     */
    data: RaiderCreateManyInput | RaiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Raider update
   */
  export type RaiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Raider.
     */
    data: XOR<RaiderUpdateInput, RaiderUncheckedUpdateInput>
    /**
     * Choose, which Raider to update.
     */
    where: RaiderWhereUniqueInput
  }

  /**
   * Raider updateMany
   */
  export type RaiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Raiders.
     */
    data: XOR<RaiderUpdateManyMutationInput, RaiderUncheckedUpdateManyInput>
    /**
     * Filter which Raiders to update
     */
    where?: RaiderWhereInput
    /**
     * Limit how many Raiders to update.
     */
    limit?: number
  }

  /**
   * Raider updateManyAndReturn
   */
  export type RaiderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * The data used to update Raiders.
     */
    data: XOR<RaiderUpdateManyMutationInput, RaiderUncheckedUpdateManyInput>
    /**
     * Filter which Raiders to update
     */
    where?: RaiderWhereInput
    /**
     * Limit how many Raiders to update.
     */
    limit?: number
  }

  /**
   * Raider upsert
   */
  export type RaiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Raider to update in case it exists.
     */
    where: RaiderWhereUniqueInput
    /**
     * In case the Raider found by the `where` argument doesn't exist, create a new Raider with this data.
     */
    create: XOR<RaiderCreateInput, RaiderUncheckedCreateInput>
    /**
     * In case the Raider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaiderUpdateInput, RaiderUncheckedUpdateInput>
  }

  /**
   * Raider delete
   */
  export type RaiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
    /**
     * Filter which Raider to delete.
     */
    where: RaiderWhereUniqueInput
  }

  /**
   * Raider deleteMany
   */
  export type RaiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Raiders to delete
     */
    where?: RaiderWhereInput
    /**
     * Limit how many Raiders to delete.
     */
    limit?: number
  }

  /**
   * Raider.progress
   */
  export type Raider$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    where?: WeekliesWhereInput
    orderBy?: WeekliesOrderByWithRelationInput | WeekliesOrderByWithRelationInput[]
    cursor?: WeekliesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeekliesScalarFieldEnum | WeekliesScalarFieldEnum[]
  }

  /**
   * Raider without action
   */
  export type RaiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Raider
     */
    select?: RaiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Raider
     */
    omit?: RaiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaiderInclude<ExtArgs> | null
  }


  /**
   * Model Weeklies
   */

  export type AggregateWeeklies = {
    _count: WeekliesCountAggregateOutputType | null
    _avg: WeekliesAvgAggregateOutputType | null
    _sum: WeekliesSumAggregateOutputType | null
    _min: WeekliesMinAggregateOutputType | null
    _max: WeekliesMaxAggregateOutputType | null
  }

  export type WeekliesAvgAggregateOutputType = {
    weekNumber: number | null
  }

  export type WeekliesSumAggregateOutputType = {
    weekNumber: number | null
  }

  export type WeekliesMinAggregateOutputType = {
    id: string | null
    raiderId: string | null
    weekNumber: number | null
    completed: boolean | null
    lastUpdated: Date | null
  }

  export type WeekliesMaxAggregateOutputType = {
    id: string | null
    raiderId: string | null
    weekNumber: number | null
    completed: boolean | null
    lastUpdated: Date | null
  }

  export type WeekliesCountAggregateOutputType = {
    id: number
    raiderId: number
    weekNumber: number
    runUrls: number
    completed: number
    lastUpdated: number
    _all: number
  }


  export type WeekliesAvgAggregateInputType = {
    weekNumber?: true
  }

  export type WeekliesSumAggregateInputType = {
    weekNumber?: true
  }

  export type WeekliesMinAggregateInputType = {
    id?: true
    raiderId?: true
    weekNumber?: true
    completed?: true
    lastUpdated?: true
  }

  export type WeekliesMaxAggregateInputType = {
    id?: true
    raiderId?: true
    weekNumber?: true
    completed?: true
    lastUpdated?: true
  }

  export type WeekliesCountAggregateInputType = {
    id?: true
    raiderId?: true
    weekNumber?: true
    runUrls?: true
    completed?: true
    lastUpdated?: true
    _all?: true
  }

  export type WeekliesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weeklies to aggregate.
     */
    where?: WeekliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeekliesOrderByWithRelationInput | WeekliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeekliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weeklies
    **/
    _count?: true | WeekliesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeekliesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeekliesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekliesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekliesMaxAggregateInputType
  }

  export type GetWeekliesAggregateType<T extends WeekliesAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklies[P]>
      : GetScalarType<T[P], AggregateWeeklies[P]>
  }




  export type WeekliesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekliesWhereInput
    orderBy?: WeekliesOrderByWithAggregationInput | WeekliesOrderByWithAggregationInput[]
    by: WeekliesScalarFieldEnum[] | WeekliesScalarFieldEnum
    having?: WeekliesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekliesCountAggregateInputType | true
    _avg?: WeekliesAvgAggregateInputType
    _sum?: WeekliesSumAggregateInputType
    _min?: WeekliesMinAggregateInputType
    _max?: WeekliesMaxAggregateInputType
  }

  export type WeekliesGroupByOutputType = {
    id: string
    raiderId: string
    weekNumber: number
    runUrls: string[]
    completed: boolean
    lastUpdated: Date
    _count: WeekliesCountAggregateOutputType | null
    _avg: WeekliesAvgAggregateOutputType | null
    _sum: WeekliesSumAggregateOutputType | null
    _min: WeekliesMinAggregateOutputType | null
    _max: WeekliesMaxAggregateOutputType | null
  }

  type GetWeekliesGroupByPayload<T extends WeekliesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekliesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekliesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekliesGroupByOutputType[P]>
            : GetScalarType<T[P], WeekliesGroupByOutputType[P]>
        }
      >
    >


  export type WeekliesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raiderId?: boolean
    weekNumber?: boolean
    runUrls?: boolean
    completed?: boolean
    lastUpdated?: boolean
    raider?: boolean | RaiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklies"]>

  export type WeekliesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raiderId?: boolean
    weekNumber?: boolean
    runUrls?: boolean
    completed?: boolean
    lastUpdated?: boolean
    raider?: boolean | RaiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklies"]>

  export type WeekliesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raiderId?: boolean
    weekNumber?: boolean
    runUrls?: boolean
    completed?: boolean
    lastUpdated?: boolean
    raider?: boolean | RaiderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklies"]>

  export type WeekliesSelectScalar = {
    id?: boolean
    raiderId?: boolean
    weekNumber?: boolean
    runUrls?: boolean
    completed?: boolean
    lastUpdated?: boolean
  }

  export type WeekliesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raiderId" | "weekNumber" | "runUrls" | "completed" | "lastUpdated", ExtArgs["result"]["weeklies"]>
  export type WeekliesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raider?: boolean | RaiderDefaultArgs<ExtArgs>
  }
  export type WeekliesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raider?: boolean | RaiderDefaultArgs<ExtArgs>
  }
  export type WeekliesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    raider?: boolean | RaiderDefaultArgs<ExtArgs>
  }

  export type $WeekliesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weeklies"
    objects: {
      raider: Prisma.$RaiderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      raiderId: string
      weekNumber: number
      runUrls: string[]
      completed: boolean
      lastUpdated: Date
    }, ExtArgs["result"]["weeklies"]>
    composites: {}
  }

  type WeekliesGetPayload<S extends boolean | null | undefined | WeekliesDefaultArgs> = $Result.GetResult<Prisma.$WeekliesPayload, S>

  type WeekliesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeekliesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeekliesCountAggregateInputType | true
    }

  export interface WeekliesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weeklies'], meta: { name: 'Weeklies' } }
    /**
     * Find zero or one Weeklies that matches the filter.
     * @param {WeekliesFindUniqueArgs} args - Arguments to find a Weeklies
     * @example
     * // Get one Weeklies
     * const weeklies = await prisma.weeklies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeekliesFindUniqueArgs>(args: SelectSubset<T, WeekliesFindUniqueArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weeklies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeekliesFindUniqueOrThrowArgs} args - Arguments to find a Weeklies
     * @example
     * // Get one Weeklies
     * const weeklies = await prisma.weeklies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeekliesFindUniqueOrThrowArgs>(args: SelectSubset<T, WeekliesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weeklies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekliesFindFirstArgs} args - Arguments to find a Weeklies
     * @example
     * // Get one Weeklies
     * const weeklies = await prisma.weeklies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeekliesFindFirstArgs>(args?: SelectSubset<T, WeekliesFindFirstArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weeklies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekliesFindFirstOrThrowArgs} args - Arguments to find a Weeklies
     * @example
     * // Get one Weeklies
     * const weeklies = await prisma.weeklies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeekliesFindFirstOrThrowArgs>(args?: SelectSubset<T, WeekliesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weeklies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekliesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weeklies
     * const weeklies = await prisma.weeklies.findMany()
     * 
     * // Get first 10 Weeklies
     * const weeklies = await prisma.weeklies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekliesWithIdOnly = await prisma.weeklies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeekliesFindManyArgs>(args?: SelectSubset<T, WeekliesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weeklies.
     * @param {WeekliesCreateArgs} args - Arguments to create a Weeklies.
     * @example
     * // Create one Weeklies
     * const Weeklies = await prisma.weeklies.create({
     *   data: {
     *     // ... data to create a Weeklies
     *   }
     * })
     * 
     */
    create<T extends WeekliesCreateArgs>(args: SelectSubset<T, WeekliesCreateArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weeklies.
     * @param {WeekliesCreateManyArgs} args - Arguments to create many Weeklies.
     * @example
     * // Create many Weeklies
     * const weeklies = await prisma.weeklies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeekliesCreateManyArgs>(args?: SelectSubset<T, WeekliesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weeklies and returns the data saved in the database.
     * @param {WeekliesCreateManyAndReturnArgs} args - Arguments to create many Weeklies.
     * @example
     * // Create many Weeklies
     * const weeklies = await prisma.weeklies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weeklies and only return the `id`
     * const weekliesWithIdOnly = await prisma.weeklies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeekliesCreateManyAndReturnArgs>(args?: SelectSubset<T, WeekliesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weeklies.
     * @param {WeekliesDeleteArgs} args - Arguments to delete one Weeklies.
     * @example
     * // Delete one Weeklies
     * const Weeklies = await prisma.weeklies.delete({
     *   where: {
     *     // ... filter to delete one Weeklies
     *   }
     * })
     * 
     */
    delete<T extends WeekliesDeleteArgs>(args: SelectSubset<T, WeekliesDeleteArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weeklies.
     * @param {WeekliesUpdateArgs} args - Arguments to update one Weeklies.
     * @example
     * // Update one Weeklies
     * const weeklies = await prisma.weeklies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeekliesUpdateArgs>(args: SelectSubset<T, WeekliesUpdateArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weeklies.
     * @param {WeekliesDeleteManyArgs} args - Arguments to filter Weeklies to delete.
     * @example
     * // Delete a few Weeklies
     * const { count } = await prisma.weeklies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeekliesDeleteManyArgs>(args?: SelectSubset<T, WeekliesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeklies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekliesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weeklies
     * const weeklies = await prisma.weeklies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeekliesUpdateManyArgs>(args: SelectSubset<T, WeekliesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeklies and returns the data updated in the database.
     * @param {WeekliesUpdateManyAndReturnArgs} args - Arguments to update many Weeklies.
     * @example
     * // Update many Weeklies
     * const weeklies = await prisma.weeklies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weeklies and only return the `id`
     * const weekliesWithIdOnly = await prisma.weeklies.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeekliesUpdateManyAndReturnArgs>(args: SelectSubset<T, WeekliesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weeklies.
     * @param {WeekliesUpsertArgs} args - Arguments to update or create a Weeklies.
     * @example
     * // Update or create a Weeklies
     * const weeklies = await prisma.weeklies.upsert({
     *   create: {
     *     // ... data to create a Weeklies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weeklies we want to update
     *   }
     * })
     */
    upsert<T extends WeekliesUpsertArgs>(args: SelectSubset<T, WeekliesUpsertArgs<ExtArgs>>): Prisma__WeekliesClient<$Result.GetResult<Prisma.$WeekliesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weeklies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekliesCountArgs} args - Arguments to filter Weeklies to count.
     * @example
     * // Count the number of Weeklies
     * const count = await prisma.weeklies.count({
     *   where: {
     *     // ... the filter for the Weeklies we want to count
     *   }
     * })
    **/
    count<T extends WeekliesCountArgs>(
      args?: Subset<T, WeekliesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekliesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weeklies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekliesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeekliesAggregateArgs>(args: Subset<T, WeekliesAggregateArgs>): Prisma.PrismaPromise<GetWeekliesAggregateType<T>>

    /**
     * Group by Weeklies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekliesGroupByArgs} args - Group by arguments.
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
      T extends WeekliesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekliesGroupByArgs['orderBy'] }
        : { orderBy?: WeekliesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeekliesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekliesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weeklies model
   */
  readonly fields: WeekliesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weeklies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeekliesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    raider<T extends RaiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaiderDefaultArgs<ExtArgs>>): Prisma__RaiderClient<$Result.GetResult<Prisma.$RaiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Weeklies model
   */
  interface WeekliesFieldRefs {
    readonly id: FieldRef<"Weeklies", 'String'>
    readonly raiderId: FieldRef<"Weeklies", 'String'>
    readonly weekNumber: FieldRef<"Weeklies", 'Int'>
    readonly runUrls: FieldRef<"Weeklies", 'String[]'>
    readonly completed: FieldRef<"Weeklies", 'Boolean'>
    readonly lastUpdated: FieldRef<"Weeklies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Weeklies findUnique
   */
  export type WeekliesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * Filter, which Weeklies to fetch.
     */
    where: WeekliesWhereUniqueInput
  }

  /**
   * Weeklies findUniqueOrThrow
   */
  export type WeekliesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * Filter, which Weeklies to fetch.
     */
    where: WeekliesWhereUniqueInput
  }

  /**
   * Weeklies findFirst
   */
  export type WeekliesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * Filter, which Weeklies to fetch.
     */
    where?: WeekliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeekliesOrderByWithRelationInput | WeekliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeklies.
     */
    cursor?: WeekliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeklies.
     */
    distinct?: WeekliesScalarFieldEnum | WeekliesScalarFieldEnum[]
  }

  /**
   * Weeklies findFirstOrThrow
   */
  export type WeekliesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * Filter, which Weeklies to fetch.
     */
    where?: WeekliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeekliesOrderByWithRelationInput | WeekliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeklies.
     */
    cursor?: WeekliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeklies.
     */
    distinct?: WeekliesScalarFieldEnum | WeekliesScalarFieldEnum[]
  }

  /**
   * Weeklies findMany
   */
  export type WeekliesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * Filter, which Weeklies to fetch.
     */
    where?: WeekliesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeklies to fetch.
     */
    orderBy?: WeekliesOrderByWithRelationInput | WeekliesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weeklies.
     */
    cursor?: WeekliesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeklies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeklies.
     */
    skip?: number
    distinct?: WeekliesScalarFieldEnum | WeekliesScalarFieldEnum[]
  }

  /**
   * Weeklies create
   */
  export type WeekliesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * The data needed to create a Weeklies.
     */
    data: XOR<WeekliesCreateInput, WeekliesUncheckedCreateInput>
  }

  /**
   * Weeklies createMany
   */
  export type WeekliesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weeklies.
     */
    data: WeekliesCreateManyInput | WeekliesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weeklies createManyAndReturn
   */
  export type WeekliesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * The data used to create many Weeklies.
     */
    data: WeekliesCreateManyInput | WeekliesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weeklies update
   */
  export type WeekliesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * The data needed to update a Weeklies.
     */
    data: XOR<WeekliesUpdateInput, WeekliesUncheckedUpdateInput>
    /**
     * Choose, which Weeklies to update.
     */
    where: WeekliesWhereUniqueInput
  }

  /**
   * Weeklies updateMany
   */
  export type WeekliesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weeklies.
     */
    data: XOR<WeekliesUpdateManyMutationInput, WeekliesUncheckedUpdateManyInput>
    /**
     * Filter which Weeklies to update
     */
    where?: WeekliesWhereInput
    /**
     * Limit how many Weeklies to update.
     */
    limit?: number
  }

  /**
   * Weeklies updateManyAndReturn
   */
  export type WeekliesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * The data used to update Weeklies.
     */
    data: XOR<WeekliesUpdateManyMutationInput, WeekliesUncheckedUpdateManyInput>
    /**
     * Filter which Weeklies to update
     */
    where?: WeekliesWhereInput
    /**
     * Limit how many Weeklies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Weeklies upsert
   */
  export type WeekliesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * The filter to search for the Weeklies to update in case it exists.
     */
    where: WeekliesWhereUniqueInput
    /**
     * In case the Weeklies found by the `where` argument doesn't exist, create a new Weeklies with this data.
     */
    create: XOR<WeekliesCreateInput, WeekliesUncheckedCreateInput>
    /**
     * In case the Weeklies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeekliesUpdateInput, WeekliesUncheckedUpdateInput>
  }

  /**
   * Weeklies delete
   */
  export type WeekliesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
    /**
     * Filter which Weeklies to delete.
     */
    where: WeekliesWhereUniqueInput
  }

  /**
   * Weeklies deleteMany
   */
  export type WeekliesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weeklies to delete
     */
    where?: WeekliesWhereInput
    /**
     * Limit how many Weeklies to delete.
     */
    limit?: number
  }

  /**
   * Weeklies without action
   */
  export type WeekliesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weeklies
     */
    select?: WeekliesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weeklies
     */
    omit?: WeekliesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekliesInclude<ExtArgs> | null
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


  export const RaiderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    class: 'class',
    spec: 'spec',
    active: 'active',
    lastSeen: 'lastSeen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RaiderScalarFieldEnum = (typeof RaiderScalarFieldEnum)[keyof typeof RaiderScalarFieldEnum]


  export const WeekliesScalarFieldEnum: {
    id: 'id',
    raiderId: 'raiderId',
    weekNumber: 'weekNumber',
    runUrls: 'runUrls',
    completed: 'completed',
    lastUpdated: 'lastUpdated'
  };

  export type WeekliesScalarFieldEnum = (typeof WeekliesScalarFieldEnum)[keyof typeof WeekliesScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type RaiderWhereInput = {
    AND?: RaiderWhereInput | RaiderWhereInput[]
    OR?: RaiderWhereInput[]
    NOT?: RaiderWhereInput | RaiderWhereInput[]
    id?: StringFilter<"Raider"> | string
    name?: StringFilter<"Raider"> | string
    class?: StringFilter<"Raider"> | string
    spec?: StringFilter<"Raider"> | string
    active?: BoolFilter<"Raider"> | boolean
    lastSeen?: DateTimeFilter<"Raider"> | Date | string
    createdAt?: DateTimeFilter<"Raider"> | Date | string
    updatedAt?: DateTimeFilter<"Raider"> | Date | string
    progress?: WeekliesListRelationFilter
  }

  export type RaiderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    spec?: SortOrder
    active?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    progress?: WeekliesOrderByRelationAggregateInput
  }

  export type RaiderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaiderWhereInput | RaiderWhereInput[]
    OR?: RaiderWhereInput[]
    NOT?: RaiderWhereInput | RaiderWhereInput[]
    name?: StringFilter<"Raider"> | string
    class?: StringFilter<"Raider"> | string
    spec?: StringFilter<"Raider"> | string
    active?: BoolFilter<"Raider"> | boolean
    lastSeen?: DateTimeFilter<"Raider"> | Date | string
    createdAt?: DateTimeFilter<"Raider"> | Date | string
    updatedAt?: DateTimeFilter<"Raider"> | Date | string
    progress?: WeekliesListRelationFilter
  }, "id">

  export type RaiderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    spec?: SortOrder
    active?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RaiderCountOrderByAggregateInput
    _max?: RaiderMaxOrderByAggregateInput
    _min?: RaiderMinOrderByAggregateInput
  }

  export type RaiderScalarWhereWithAggregatesInput = {
    AND?: RaiderScalarWhereWithAggregatesInput | RaiderScalarWhereWithAggregatesInput[]
    OR?: RaiderScalarWhereWithAggregatesInput[]
    NOT?: RaiderScalarWhereWithAggregatesInput | RaiderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Raider"> | string
    name?: StringWithAggregatesFilter<"Raider"> | string
    class?: StringWithAggregatesFilter<"Raider"> | string
    spec?: StringWithAggregatesFilter<"Raider"> | string
    active?: BoolWithAggregatesFilter<"Raider"> | boolean
    lastSeen?: DateTimeWithAggregatesFilter<"Raider"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Raider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Raider"> | Date | string
  }

  export type WeekliesWhereInput = {
    AND?: WeekliesWhereInput | WeekliesWhereInput[]
    OR?: WeekliesWhereInput[]
    NOT?: WeekliesWhereInput | WeekliesWhereInput[]
    id?: StringFilter<"Weeklies"> | string
    raiderId?: StringFilter<"Weeklies"> | string
    weekNumber?: IntFilter<"Weeklies"> | number
    runUrls?: StringNullableListFilter<"Weeklies">
    completed?: BoolFilter<"Weeklies"> | boolean
    lastUpdated?: DateTimeFilter<"Weeklies"> | Date | string
    raider?: XOR<RaiderScalarRelationFilter, RaiderWhereInput>
  }

  export type WeekliesOrderByWithRelationInput = {
    id?: SortOrder
    raiderId?: SortOrder
    weekNumber?: SortOrder
    runUrls?: SortOrder
    completed?: SortOrder
    lastUpdated?: SortOrder
    raider?: RaiderOrderByWithRelationInput
  }

  export type WeekliesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    raiderId_weekNumber?: WeekliesRaiderIdWeekNumberCompoundUniqueInput
    AND?: WeekliesWhereInput | WeekliesWhereInput[]
    OR?: WeekliesWhereInput[]
    NOT?: WeekliesWhereInput | WeekliesWhereInput[]
    raiderId?: StringFilter<"Weeklies"> | string
    weekNumber?: IntFilter<"Weeklies"> | number
    runUrls?: StringNullableListFilter<"Weeklies">
    completed?: BoolFilter<"Weeklies"> | boolean
    lastUpdated?: DateTimeFilter<"Weeklies"> | Date | string
    raider?: XOR<RaiderScalarRelationFilter, RaiderWhereInput>
  }, "id" | "raiderId_weekNumber">

  export type WeekliesOrderByWithAggregationInput = {
    id?: SortOrder
    raiderId?: SortOrder
    weekNumber?: SortOrder
    runUrls?: SortOrder
    completed?: SortOrder
    lastUpdated?: SortOrder
    _count?: WeekliesCountOrderByAggregateInput
    _avg?: WeekliesAvgOrderByAggregateInput
    _max?: WeekliesMaxOrderByAggregateInput
    _min?: WeekliesMinOrderByAggregateInput
    _sum?: WeekliesSumOrderByAggregateInput
  }

  export type WeekliesScalarWhereWithAggregatesInput = {
    AND?: WeekliesScalarWhereWithAggregatesInput | WeekliesScalarWhereWithAggregatesInput[]
    OR?: WeekliesScalarWhereWithAggregatesInput[]
    NOT?: WeekliesScalarWhereWithAggregatesInput | WeekliesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Weeklies"> | string
    raiderId?: StringWithAggregatesFilter<"Weeklies"> | string
    weekNumber?: IntWithAggregatesFilter<"Weeklies"> | number
    runUrls?: StringNullableListFilter<"Weeklies">
    completed?: BoolWithAggregatesFilter<"Weeklies"> | boolean
    lastUpdated?: DateTimeWithAggregatesFilter<"Weeklies"> | Date | string
  }

  export type RaiderCreateInput = {
    id?: string
    name: string
    class: string
    spec: string
    active?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: WeekliesCreateNestedManyWithoutRaiderInput
  }

  export type RaiderUncheckedCreateInput = {
    id?: string
    name: string
    class: string
    spec: string
    active?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: WeekliesUncheckedCreateNestedManyWithoutRaiderInput
  }

  export type RaiderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    spec?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: WeekliesUpdateManyWithoutRaiderNestedInput
  }

  export type RaiderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    spec?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: WeekliesUncheckedUpdateManyWithoutRaiderNestedInput
  }

  export type RaiderCreateManyInput = {
    id?: string
    name: string
    class: string
    spec: string
    active?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaiderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    spec?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaiderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    spec?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekliesCreateInput = {
    id?: string
    weekNumber: number
    runUrls?: WeekliesCreaterunUrlsInput | string[]
    completed?: boolean
    lastUpdated?: Date | string
    raider: RaiderCreateNestedOneWithoutProgressInput
  }

  export type WeekliesUncheckedCreateInput = {
    id?: string
    raiderId: string
    weekNumber: number
    runUrls?: WeekliesCreaterunUrlsInput | string[]
    completed?: boolean
    lastUpdated?: Date | string
  }

  export type WeekliesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    runUrls?: WeekliesUpdaterunUrlsInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    raider?: RaiderUpdateOneRequiredWithoutProgressNestedInput
  }

  export type WeekliesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    raiderId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    runUrls?: WeekliesUpdaterunUrlsInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekliesCreateManyInput = {
    id?: string
    raiderId: string
    weekNumber: number
    runUrls?: WeekliesCreaterunUrlsInput | string[]
    completed?: boolean
    lastUpdated?: Date | string
  }

  export type WeekliesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    runUrls?: WeekliesUpdaterunUrlsInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekliesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    raiderId?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    runUrls?: WeekliesUpdaterunUrlsInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type WeekliesListRelationFilter = {
    every?: WeekliesWhereInput
    some?: WeekliesWhereInput
    none?: WeekliesWhereInput
  }

  export type WeekliesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaiderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    spec?: SortOrder
    active?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaiderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    spec?: SortOrder
    active?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RaiderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    class?: SortOrder
    spec?: SortOrder
    active?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RaiderScalarRelationFilter = {
    is?: RaiderWhereInput
    isNot?: RaiderWhereInput
  }

  export type WeekliesRaiderIdWeekNumberCompoundUniqueInput = {
    raiderId: string
    weekNumber: number
  }

  export type WeekliesCountOrderByAggregateInput = {
    id?: SortOrder
    raiderId?: SortOrder
    weekNumber?: SortOrder
    runUrls?: SortOrder
    completed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type WeekliesAvgOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type WeekliesMaxOrderByAggregateInput = {
    id?: SortOrder
    raiderId?: SortOrder
    weekNumber?: SortOrder
    completed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type WeekliesMinOrderByAggregateInput = {
    id?: SortOrder
    raiderId?: SortOrder
    weekNumber?: SortOrder
    completed?: SortOrder
    lastUpdated?: SortOrder
  }

  export type WeekliesSumOrderByAggregateInput = {
    weekNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type WeekliesCreateNestedManyWithoutRaiderInput = {
    create?: XOR<WeekliesCreateWithoutRaiderInput, WeekliesUncheckedCreateWithoutRaiderInput> | WeekliesCreateWithoutRaiderInput[] | WeekliesUncheckedCreateWithoutRaiderInput[]
    connectOrCreate?: WeekliesCreateOrConnectWithoutRaiderInput | WeekliesCreateOrConnectWithoutRaiderInput[]
    createMany?: WeekliesCreateManyRaiderInputEnvelope
    connect?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
  }

  export type WeekliesUncheckedCreateNestedManyWithoutRaiderInput = {
    create?: XOR<WeekliesCreateWithoutRaiderInput, WeekliesUncheckedCreateWithoutRaiderInput> | WeekliesCreateWithoutRaiderInput[] | WeekliesUncheckedCreateWithoutRaiderInput[]
    connectOrCreate?: WeekliesCreateOrConnectWithoutRaiderInput | WeekliesCreateOrConnectWithoutRaiderInput[]
    createMany?: WeekliesCreateManyRaiderInputEnvelope
    connect?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WeekliesUpdateManyWithoutRaiderNestedInput = {
    create?: XOR<WeekliesCreateWithoutRaiderInput, WeekliesUncheckedCreateWithoutRaiderInput> | WeekliesCreateWithoutRaiderInput[] | WeekliesUncheckedCreateWithoutRaiderInput[]
    connectOrCreate?: WeekliesCreateOrConnectWithoutRaiderInput | WeekliesCreateOrConnectWithoutRaiderInput[]
    upsert?: WeekliesUpsertWithWhereUniqueWithoutRaiderInput | WeekliesUpsertWithWhereUniqueWithoutRaiderInput[]
    createMany?: WeekliesCreateManyRaiderInputEnvelope
    set?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    disconnect?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    delete?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    connect?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    update?: WeekliesUpdateWithWhereUniqueWithoutRaiderInput | WeekliesUpdateWithWhereUniqueWithoutRaiderInput[]
    updateMany?: WeekliesUpdateManyWithWhereWithoutRaiderInput | WeekliesUpdateManyWithWhereWithoutRaiderInput[]
    deleteMany?: WeekliesScalarWhereInput | WeekliesScalarWhereInput[]
  }

  export type WeekliesUncheckedUpdateManyWithoutRaiderNestedInput = {
    create?: XOR<WeekliesCreateWithoutRaiderInput, WeekliesUncheckedCreateWithoutRaiderInput> | WeekliesCreateWithoutRaiderInput[] | WeekliesUncheckedCreateWithoutRaiderInput[]
    connectOrCreate?: WeekliesCreateOrConnectWithoutRaiderInput | WeekliesCreateOrConnectWithoutRaiderInput[]
    upsert?: WeekliesUpsertWithWhereUniqueWithoutRaiderInput | WeekliesUpsertWithWhereUniqueWithoutRaiderInput[]
    createMany?: WeekliesCreateManyRaiderInputEnvelope
    set?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    disconnect?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    delete?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    connect?: WeekliesWhereUniqueInput | WeekliesWhereUniqueInput[]
    update?: WeekliesUpdateWithWhereUniqueWithoutRaiderInput | WeekliesUpdateWithWhereUniqueWithoutRaiderInput[]
    updateMany?: WeekliesUpdateManyWithWhereWithoutRaiderInput | WeekliesUpdateManyWithWhereWithoutRaiderInput[]
    deleteMany?: WeekliesScalarWhereInput | WeekliesScalarWhereInput[]
  }

  export type WeekliesCreaterunUrlsInput = {
    set: string[]
  }

  export type RaiderCreateNestedOneWithoutProgressInput = {
    create?: XOR<RaiderCreateWithoutProgressInput, RaiderUncheckedCreateWithoutProgressInput>
    connectOrCreate?: RaiderCreateOrConnectWithoutProgressInput
    connect?: RaiderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeekliesUpdaterunUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RaiderUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<RaiderCreateWithoutProgressInput, RaiderUncheckedCreateWithoutProgressInput>
    connectOrCreate?: RaiderCreateOrConnectWithoutProgressInput
    upsert?: RaiderUpsertWithoutProgressInput
    connect?: RaiderWhereUniqueInput
    update?: XOR<XOR<RaiderUpdateToOneWithWhereWithoutProgressInput, RaiderUpdateWithoutProgressInput>, RaiderUncheckedUpdateWithoutProgressInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type WeekliesCreateWithoutRaiderInput = {
    id?: string
    weekNumber: number
    runUrls?: WeekliesCreaterunUrlsInput | string[]
    completed?: boolean
    lastUpdated?: Date | string
  }

  export type WeekliesUncheckedCreateWithoutRaiderInput = {
    id?: string
    weekNumber: number
    runUrls?: WeekliesCreaterunUrlsInput | string[]
    completed?: boolean
    lastUpdated?: Date | string
  }

  export type WeekliesCreateOrConnectWithoutRaiderInput = {
    where: WeekliesWhereUniqueInput
    create: XOR<WeekliesCreateWithoutRaiderInput, WeekliesUncheckedCreateWithoutRaiderInput>
  }

  export type WeekliesCreateManyRaiderInputEnvelope = {
    data: WeekliesCreateManyRaiderInput | WeekliesCreateManyRaiderInput[]
    skipDuplicates?: boolean
  }

  export type WeekliesUpsertWithWhereUniqueWithoutRaiderInput = {
    where: WeekliesWhereUniqueInput
    update: XOR<WeekliesUpdateWithoutRaiderInput, WeekliesUncheckedUpdateWithoutRaiderInput>
    create: XOR<WeekliesCreateWithoutRaiderInput, WeekliesUncheckedCreateWithoutRaiderInput>
  }

  export type WeekliesUpdateWithWhereUniqueWithoutRaiderInput = {
    where: WeekliesWhereUniqueInput
    data: XOR<WeekliesUpdateWithoutRaiderInput, WeekliesUncheckedUpdateWithoutRaiderInput>
  }

  export type WeekliesUpdateManyWithWhereWithoutRaiderInput = {
    where: WeekliesScalarWhereInput
    data: XOR<WeekliesUpdateManyMutationInput, WeekliesUncheckedUpdateManyWithoutRaiderInput>
  }

  export type WeekliesScalarWhereInput = {
    AND?: WeekliesScalarWhereInput | WeekliesScalarWhereInput[]
    OR?: WeekliesScalarWhereInput[]
    NOT?: WeekliesScalarWhereInput | WeekliesScalarWhereInput[]
    id?: StringFilter<"Weeklies"> | string
    raiderId?: StringFilter<"Weeklies"> | string
    weekNumber?: IntFilter<"Weeklies"> | number
    runUrls?: StringNullableListFilter<"Weeklies">
    completed?: BoolFilter<"Weeklies"> | boolean
    lastUpdated?: DateTimeFilter<"Weeklies"> | Date | string
  }

  export type RaiderCreateWithoutProgressInput = {
    id?: string
    name: string
    class: string
    spec: string
    active?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaiderUncheckedCreateWithoutProgressInput = {
    id?: string
    name: string
    class: string
    spec: string
    active?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RaiderCreateOrConnectWithoutProgressInput = {
    where: RaiderWhereUniqueInput
    create: XOR<RaiderCreateWithoutProgressInput, RaiderUncheckedCreateWithoutProgressInput>
  }

  export type RaiderUpsertWithoutProgressInput = {
    update: XOR<RaiderUpdateWithoutProgressInput, RaiderUncheckedUpdateWithoutProgressInput>
    create: XOR<RaiderCreateWithoutProgressInput, RaiderUncheckedCreateWithoutProgressInput>
    where?: RaiderWhereInput
  }

  export type RaiderUpdateToOneWithWhereWithoutProgressInput = {
    where?: RaiderWhereInput
    data: XOR<RaiderUpdateWithoutProgressInput, RaiderUncheckedUpdateWithoutProgressInput>
  }

  export type RaiderUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    spec?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaiderUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    spec?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekliesCreateManyRaiderInput = {
    id?: string
    weekNumber: number
    runUrls?: WeekliesCreaterunUrlsInput | string[]
    completed?: boolean
    lastUpdated?: Date | string
  }

  export type WeekliesUpdateWithoutRaiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    runUrls?: WeekliesUpdaterunUrlsInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekliesUncheckedUpdateWithoutRaiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    runUrls?: WeekliesUpdaterunUrlsInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekliesUncheckedUpdateManyWithoutRaiderInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekNumber?: IntFieldUpdateOperationsInput | number
    runUrls?: WeekliesUpdaterunUrlsInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
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