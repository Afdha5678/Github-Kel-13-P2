
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Obat
 * 
 */
export type Obat = $Result.DefaultSelection<Prisma.$ObatPayload>
/**
 * Model Stok
 * 
 */
export type Stok = $Result.DefaultSelection<Prisma.$StokPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model TransaksiPenjualan
 * 
 */
export type TransaksiPenjualan = $Result.DefaultSelection<Prisma.$TransaksiPenjualanPayload>
/**
 * Model DetailPenjualan
 * 
 */
export type DetailPenjualan = $Result.DefaultSelection<Prisma.$DetailPenjualanPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model TransaksiPembelian
 * 
 */
export type TransaksiPembelian = $Result.DefaultSelection<Prisma.$TransaksiPembelianPayload>
/**
 * Model DetailPembelian
 * 
 */
export type DetailPembelian = $Result.DefaultSelection<Prisma.$DetailPembelianPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MovementType: {
  IN: 'IN',
  OUT: 'OUT',
  ADJUSTMENT: 'ADJUSTMENT'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const Role: {
  OWNER: 'OWNER',
  PEGAWAI: 'PEGAWAI'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obat`: Exposes CRUD operations for the **Obat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obats
    * const obats = await prisma.obat.findMany()
    * ```
    */
  get obat(): Prisma.ObatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stok`: Exposes CRUD operations for the **Stok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stoks
    * const stoks = await prisma.stok.findMany()
    * ```
    */
  get stok(): Prisma.StokDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksiPenjualan`: Exposes CRUD operations for the **TransaksiPenjualan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaksiPenjualans
    * const transaksiPenjualans = await prisma.transaksiPenjualan.findMany()
    * ```
    */
  get transaksiPenjualan(): Prisma.TransaksiPenjualanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailPenjualan`: Exposes CRUD operations for the **DetailPenjualan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailPenjualans
    * const detailPenjualans = await prisma.detailPenjualan.findMany()
    * ```
    */
  get detailPenjualan(): Prisma.DetailPenjualanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksiPembelian`: Exposes CRUD operations for the **TransaksiPembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaksiPembelians
    * const transaksiPembelians = await prisma.transaksiPembelian.findMany()
    * ```
    */
  get transaksiPembelian(): Prisma.TransaksiPembelianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailPembelian`: Exposes CRUD operations for the **DetailPembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailPembelians
    * const detailPembelians = await prisma.detailPembelian.findMany()
    * ```
    */
  get detailPembelian(): Prisma.DetailPembelianDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Obat: 'Obat',
    Stok: 'Stok',
    StockMovement: 'StockMovement',
    TransaksiPenjualan: 'TransaksiPenjualan',
    DetailPenjualan: 'DetailPenjualan',
    Supplier: 'Supplier',
    TransaksiPembelian: 'TransaksiPembelian',
    DetailPembelian: 'DetailPembelian'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "obat" | "stok" | "stockMovement" | "transaksiPenjualan" | "detailPenjualan" | "supplier" | "transaksiPembelian" | "detailPembelian"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Obat: {
        payload: Prisma.$ObatPayload<ExtArgs>
        fields: Prisma.ObatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          findFirst: {
            args: Prisma.ObatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          findMany: {
            args: Prisma.ObatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>[]
          }
          create: {
            args: Prisma.ObatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          createMany: {
            args: Prisma.ObatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>[]
          }
          delete: {
            args: Prisma.ObatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          update: {
            args: Prisma.ObatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          deleteMany: {
            args: Prisma.ObatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>[]
          }
          upsert: {
            args: Prisma.ObatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          aggregate: {
            args: Prisma.ObatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObat>
          }
          groupBy: {
            args: Prisma.ObatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObatCountArgs<ExtArgs>
            result: $Utils.Optional<ObatCountAggregateOutputType> | number
          }
        }
      }
      Stok: {
        payload: Prisma.$StokPayload<ExtArgs>
        fields: Prisma.StokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          findFirst: {
            args: Prisma.StokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          findMany: {
            args: Prisma.StokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          create: {
            args: Prisma.StokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          createMany: {
            args: Prisma.StokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StokCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          delete: {
            args: Prisma.StokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          update: {
            args: Prisma.StokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          deleteMany: {
            args: Prisma.StokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StokUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          upsert: {
            args: Prisma.StokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          aggregate: {
            args: Prisma.StokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStok>
          }
          groupBy: {
            args: Prisma.StokGroupByArgs<ExtArgs>
            result: $Utils.Optional<StokGroupByOutputType>[]
          }
          count: {
            args: Prisma.StokCountArgs<ExtArgs>
            result: $Utils.Optional<StokCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      TransaksiPenjualan: {
        payload: Prisma.$TransaksiPenjualanPayload<ExtArgs>
        fields: Prisma.TransaksiPenjualanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiPenjualanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiPenjualanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>
          }
          findFirst: {
            args: Prisma.TransaksiPenjualanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiPenjualanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>
          }
          findMany: {
            args: Prisma.TransaksiPenjualanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>[]
          }
          create: {
            args: Prisma.TransaksiPenjualanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>
          }
          createMany: {
            args: Prisma.TransaksiPenjualanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiPenjualanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>[]
          }
          delete: {
            args: Prisma.TransaksiPenjualanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>
          }
          update: {
            args: Prisma.TransaksiPenjualanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiPenjualanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiPenjualanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransaksiPenjualanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>[]
          }
          upsert: {
            args: Prisma.TransaksiPenjualanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPenjualanPayload>
          }
          aggregate: {
            args: Prisma.TransaksiPenjualanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksiPenjualan>
          }
          groupBy: {
            args: Prisma.TransaksiPenjualanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiPenjualanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiPenjualanCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiPenjualanCountAggregateOutputType> | number
          }
        }
      }
      DetailPenjualan: {
        payload: Prisma.$DetailPenjualanPayload<ExtArgs>
        fields: Prisma.DetailPenjualanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailPenjualanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailPenjualanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>
          }
          findFirst: {
            args: Prisma.DetailPenjualanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailPenjualanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>
          }
          findMany: {
            args: Prisma.DetailPenjualanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>[]
          }
          create: {
            args: Prisma.DetailPenjualanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>
          }
          createMany: {
            args: Prisma.DetailPenjualanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailPenjualanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>[]
          }
          delete: {
            args: Prisma.DetailPenjualanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>
          }
          update: {
            args: Prisma.DetailPenjualanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>
          }
          deleteMany: {
            args: Prisma.DetailPenjualanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailPenjualanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailPenjualanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>[]
          }
          upsert: {
            args: Prisma.DetailPenjualanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPenjualanPayload>
          }
          aggregate: {
            args: Prisma.DetailPenjualanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailPenjualan>
          }
          groupBy: {
            args: Prisma.DetailPenjualanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailPenjualanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailPenjualanCountArgs<ExtArgs>
            result: $Utils.Optional<DetailPenjualanCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      TransaksiPembelian: {
        payload: Prisma.$TransaksiPembelianPayload<ExtArgs>
        fields: Prisma.TransaksiPembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiPembelianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiPembelianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>
          }
          findFirst: {
            args: Prisma.TransaksiPembelianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiPembelianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>
          }
          findMany: {
            args: Prisma.TransaksiPembelianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>[]
          }
          create: {
            args: Prisma.TransaksiPembelianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>
          }
          createMany: {
            args: Prisma.TransaksiPembelianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiPembelianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>[]
          }
          delete: {
            args: Prisma.TransaksiPembelianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>
          }
          update: {
            args: Prisma.TransaksiPembelianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiPembelianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiPembelianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransaksiPembelianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>[]
          }
          upsert: {
            args: Prisma.TransaksiPembelianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPembelianPayload>
          }
          aggregate: {
            args: Prisma.TransaksiPembelianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksiPembelian>
          }
          groupBy: {
            args: Prisma.TransaksiPembelianGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiPembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiPembelianCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiPembelianCountAggregateOutputType> | number
          }
        }
      }
      DetailPembelian: {
        payload: Prisma.$DetailPembelianPayload<ExtArgs>
        fields: Prisma.DetailPembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailPembelianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailPembelianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          findFirst: {
            args: Prisma.DetailPembelianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailPembelianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          findMany: {
            args: Prisma.DetailPembelianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>[]
          }
          create: {
            args: Prisma.DetailPembelianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          createMany: {
            args: Prisma.DetailPembelianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailPembelianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>[]
          }
          delete: {
            args: Prisma.DetailPembelianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          update: {
            args: Prisma.DetailPembelianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          deleteMany: {
            args: Prisma.DetailPembelianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailPembelianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailPembelianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>[]
          }
          upsert: {
            args: Prisma.DetailPembelianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailPembelianPayload>
          }
          aggregate: {
            args: Prisma.DetailPembelianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailPembelian>
          }
          groupBy: {
            args: Prisma.DetailPembelianGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailPembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailPembelianCountArgs<ExtArgs>
            result: $Utils.Optional<DetailPembelianCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    obat?: ObatOmit
    stok?: StokOmit
    stockMovement?: StockMovementOmit
    transaksiPenjualan?: TransaksiPenjualanOmit
    detailPenjualan?: DetailPenjualanOmit
    supplier?: SupplierOmit
    transaksiPembelian?: TransaksiPembelianOmit
    detailPembelian?: DetailPembelianOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ObatCountOutputType
   */

  export type ObatCountOutputType = {
    detailPembelian: number
    detailPenjualan: number
    stok: number
  }

  export type ObatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailPembelian?: boolean | ObatCountOutputTypeCountDetailPembelianArgs
    detailPenjualan?: boolean | ObatCountOutputTypeCountDetailPenjualanArgs
    stok?: boolean | ObatCountOutputTypeCountStokArgs
  }

  // Custom InputTypes
  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObatCountOutputType
     */
    select?: ObatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeCountDetailPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPembelianWhereInput
  }

  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeCountDetailPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPenjualanWhereInput
  }

  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeCountStokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokWhereInput
  }


  /**
   * Count Type StokCountOutputType
   */

  export type StokCountOutputType = {
    stockMovements: number
  }

  export type StokCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovements?: boolean | StokCountOutputTypeCountStockMovementsArgs
  }

  // Custom InputTypes
  /**
   * StokCountOutputType without action
   */
  export type StokCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokCountOutputType
     */
    select?: StokCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StokCountOutputType without action
   */
  export type StokCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }


  /**
   * Count Type TransaksiPenjualanCountOutputType
   */

  export type TransaksiPenjualanCountOutputType = {
    details: number
  }

  export type TransaksiPenjualanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | TransaksiPenjualanCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * TransaksiPenjualanCountOutputType without action
   */
  export type TransaksiPenjualanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualanCountOutputType
     */
    select?: TransaksiPenjualanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransaksiPenjualanCountOutputType without action
   */
  export type TransaksiPenjualanCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPenjualanWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    transaksiPembelian: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksiPembelian?: boolean | SupplierCountOutputTypeCountTransaksiPembelianArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountTransaksiPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiPembelianWhereInput
  }


  /**
   * Count Type TransaksiPembelianCountOutputType
   */

  export type TransaksiPembelianCountOutputType = {
    details: number
  }

  export type TransaksiPembelianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | TransaksiPembelianCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * TransaksiPembelianCountOutputType without action
   */
  export type TransaksiPembelianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelianCountOutputType
     */
    select?: TransaksiPembelianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransaksiPembelianCountOutputType without action
   */
  export type TransaksiPembelianCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPembelianWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    resetPasswordExpires: Date | null
    resetPasswordToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    resetPasswordExpires: Date | null
    resetPasswordToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    resetPasswordExpires: number
    resetPasswordToken: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordExpires?: true
    resetPasswordToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordExpires?: true
    resetPasswordToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    resetPasswordExpires?: true
    resetPasswordToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    resetPasswordExpires: Date | null
    resetPasswordToken: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordExpires?: boolean
    resetPasswordToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordExpires?: boolean
    resetPasswordToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordExpires?: boolean
    resetPasswordToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetPasswordExpires?: boolean
    resetPasswordToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "role" | "createdAt" | "updatedAt" | "resetPasswordExpires" | "resetPasswordToken", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
      resetPasswordExpires: Date | null
      resetPasswordToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly resetPasswordExpires: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Obat
   */

  export type AggregateObat = {
    _count: ObatCountAggregateOutputType | null
    _avg: ObatAvgAggregateOutputType | null
    _sum: ObatSumAggregateOutputType | null
    _min: ObatMinAggregateOutputType | null
    _max: ObatMaxAggregateOutputType | null
  }

  export type ObatAvgAggregateOutputType = {
    hargaJual: number | null
  }

  export type ObatSumAggregateOutputType = {
    hargaJual: number | null
  }

  export type ObatMinAggregateOutputType = {
    id: string | null
    nama: string | null
    hargaJual: number | null
    satuan: string | null
    lokasiRak: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type ObatMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    hargaJual: number | null
    satuan: string | null
    lokasiRak: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type ObatCountAggregateOutputType = {
    id: number
    nama: number
    hargaJual: number
    satuan: number
    lokasiRak: number
    createdAt: number
    updatedAt: number
    image: number
    _all: number
  }


  export type ObatAvgAggregateInputType = {
    hargaJual?: true
  }

  export type ObatSumAggregateInputType = {
    hargaJual?: true
  }

  export type ObatMinAggregateInputType = {
    id?: true
    nama?: true
    hargaJual?: true
    satuan?: true
    lokasiRak?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type ObatMaxAggregateInputType = {
    id?: true
    nama?: true
    hargaJual?: true
    satuan?: true
    lokasiRak?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type ObatCountAggregateInputType = {
    id?: true
    nama?: true
    hargaJual?: true
    satuan?: true
    lokasiRak?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    _all?: true
  }

  export type ObatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obat to aggregate.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obats
    **/
    _count?: true | ObatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObatMaxAggregateInputType
  }

  export type GetObatAggregateType<T extends ObatAggregateArgs> = {
        [P in keyof T & keyof AggregateObat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObat[P]>
      : GetScalarType<T[P], AggregateObat[P]>
  }




  export type ObatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObatWhereInput
    orderBy?: ObatOrderByWithAggregationInput | ObatOrderByWithAggregationInput[]
    by: ObatScalarFieldEnum[] | ObatScalarFieldEnum
    having?: ObatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObatCountAggregateInputType | true
    _avg?: ObatAvgAggregateInputType
    _sum?: ObatSumAggregateInputType
    _min?: ObatMinAggregateInputType
    _max?: ObatMaxAggregateInputType
  }

  export type ObatGroupByOutputType = {
    id: string
    nama: string
    hargaJual: number
    satuan: string
    lokasiRak: string | null
    createdAt: Date
    updatedAt: Date
    image: string | null
    _count: ObatCountAggregateOutputType | null
    _avg: ObatAvgAggregateOutputType | null
    _sum: ObatSumAggregateOutputType | null
    _min: ObatMinAggregateOutputType | null
    _max: ObatMaxAggregateOutputType | null
  }

  type GetObatGroupByPayload<T extends ObatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObatGroupByOutputType[P]>
            : GetScalarType<T[P], ObatGroupByOutputType[P]>
        }
      >
    >


  export type ObatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    hargaJual?: boolean
    satuan?: boolean
    lokasiRak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    detailPembelian?: boolean | Obat$detailPembelianArgs<ExtArgs>
    detailPenjualan?: boolean | Obat$detailPenjualanArgs<ExtArgs>
    stok?: boolean | Obat$stokArgs<ExtArgs>
    _count?: boolean | ObatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obat"]>

  export type ObatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    hargaJual?: boolean
    satuan?: boolean
    lokasiRak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["obat"]>

  export type ObatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    hargaJual?: boolean
    satuan?: boolean
    lokasiRak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["obat"]>

  export type ObatSelectScalar = {
    id?: boolean
    nama?: boolean
    hargaJual?: boolean
    satuan?: boolean
    lokasiRak?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }

  export type ObatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "hargaJual" | "satuan" | "lokasiRak" | "createdAt" | "updatedAt" | "image", ExtArgs["result"]["obat"]>
  export type ObatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailPembelian?: boolean | Obat$detailPembelianArgs<ExtArgs>
    detailPenjualan?: boolean | Obat$detailPenjualanArgs<ExtArgs>
    stok?: boolean | Obat$stokArgs<ExtArgs>
    _count?: boolean | ObatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obat"
    objects: {
      detailPembelian: Prisma.$DetailPembelianPayload<ExtArgs>[]
      detailPenjualan: Prisma.$DetailPenjualanPayload<ExtArgs>[]
      stok: Prisma.$StokPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      hargaJual: number
      satuan: string
      lokasiRak: string | null
      createdAt: Date
      updatedAt: Date
      image: string | null
    }, ExtArgs["result"]["obat"]>
    composites: {}
  }

  type ObatGetPayload<S extends boolean | null | undefined | ObatDefaultArgs> = $Result.GetResult<Prisma.$ObatPayload, S>

  type ObatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObatCountAggregateInputType | true
    }

  export interface ObatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obat'], meta: { name: 'Obat' } }
    /**
     * Find zero or one Obat that matches the filter.
     * @param {ObatFindUniqueArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObatFindUniqueArgs>(args: SelectSubset<T, ObatFindUniqueArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObatFindUniqueOrThrowArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObatFindUniqueOrThrowArgs>(args: SelectSubset<T, ObatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindFirstArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObatFindFirstArgs>(args?: SelectSubset<T, ObatFindFirstArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindFirstOrThrowArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObatFindFirstOrThrowArgs>(args?: SelectSubset<T, ObatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obats
     * const obats = await prisma.obat.findMany()
     * 
     * // Get first 10 Obats
     * const obats = await prisma.obat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obatWithIdOnly = await prisma.obat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObatFindManyArgs>(args?: SelectSubset<T, ObatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obat.
     * @param {ObatCreateArgs} args - Arguments to create a Obat.
     * @example
     * // Create one Obat
     * const Obat = await prisma.obat.create({
     *   data: {
     *     // ... data to create a Obat
     *   }
     * })
     * 
     */
    create<T extends ObatCreateArgs>(args: SelectSubset<T, ObatCreateArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obats.
     * @param {ObatCreateManyArgs} args - Arguments to create many Obats.
     * @example
     * // Create many Obats
     * const obat = await prisma.obat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObatCreateManyArgs>(args?: SelectSubset<T, ObatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obats and returns the data saved in the database.
     * @param {ObatCreateManyAndReturnArgs} args - Arguments to create many Obats.
     * @example
     * // Create many Obats
     * const obat = await prisma.obat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obats and only return the `id`
     * const obatWithIdOnly = await prisma.obat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObatCreateManyAndReturnArgs>(args?: SelectSubset<T, ObatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obat.
     * @param {ObatDeleteArgs} args - Arguments to delete one Obat.
     * @example
     * // Delete one Obat
     * const Obat = await prisma.obat.delete({
     *   where: {
     *     // ... filter to delete one Obat
     *   }
     * })
     * 
     */
    delete<T extends ObatDeleteArgs>(args: SelectSubset<T, ObatDeleteArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obat.
     * @param {ObatUpdateArgs} args - Arguments to update one Obat.
     * @example
     * // Update one Obat
     * const obat = await prisma.obat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObatUpdateArgs>(args: SelectSubset<T, ObatUpdateArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obats.
     * @param {ObatDeleteManyArgs} args - Arguments to filter Obats to delete.
     * @example
     * // Delete a few Obats
     * const { count } = await prisma.obat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObatDeleteManyArgs>(args?: SelectSubset<T, ObatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obats
     * const obat = await prisma.obat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObatUpdateManyArgs>(args: SelectSubset<T, ObatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obats and returns the data updated in the database.
     * @param {ObatUpdateManyAndReturnArgs} args - Arguments to update many Obats.
     * @example
     * // Update many Obats
     * const obat = await prisma.obat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obats and only return the `id`
     * const obatWithIdOnly = await prisma.obat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObatUpdateManyAndReturnArgs>(args: SelectSubset<T, ObatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obat.
     * @param {ObatUpsertArgs} args - Arguments to update or create a Obat.
     * @example
     * // Update or create a Obat
     * const obat = await prisma.obat.upsert({
     *   create: {
     *     // ... data to create a Obat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obat we want to update
     *   }
     * })
     */
    upsert<T extends ObatUpsertArgs>(args: SelectSubset<T, ObatUpsertArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatCountArgs} args - Arguments to filter Obats to count.
     * @example
     * // Count the number of Obats
     * const count = await prisma.obat.count({
     *   where: {
     *     // ... the filter for the Obats we want to count
     *   }
     * })
    **/
    count<T extends ObatCountArgs>(
      args?: Subset<T, ObatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObatAggregateArgs>(args: Subset<T, ObatAggregateArgs>): Prisma.PrismaPromise<GetObatAggregateType<T>>

    /**
     * Group by Obat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatGroupByArgs} args - Group by arguments.
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
      T extends ObatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObatGroupByArgs['orderBy'] }
        : { orderBy?: ObatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obat model
   */
  readonly fields: ObatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detailPembelian<T extends Obat$detailPembelianArgs<ExtArgs> = {}>(args?: Subset<T, Obat$detailPembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detailPenjualan<T extends Obat$detailPenjualanArgs<ExtArgs> = {}>(args?: Subset<T, Obat$detailPenjualanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stok<T extends Obat$stokArgs<ExtArgs> = {}>(args?: Subset<T, Obat$stokArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Obat model
   */
  interface ObatFieldRefs {
    readonly id: FieldRef<"Obat", 'String'>
    readonly nama: FieldRef<"Obat", 'String'>
    readonly hargaJual: FieldRef<"Obat", 'Int'>
    readonly satuan: FieldRef<"Obat", 'String'>
    readonly lokasiRak: FieldRef<"Obat", 'String'>
    readonly createdAt: FieldRef<"Obat", 'DateTime'>
    readonly updatedAt: FieldRef<"Obat", 'DateTime'>
    readonly image: FieldRef<"Obat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Obat findUnique
   */
  export type ObatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat findUniqueOrThrow
   */
  export type ObatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat findFirst
   */
  export type ObatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obats.
     */
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat findFirstOrThrow
   */
  export type ObatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obats.
     */
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat findMany
   */
  export type ObatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obats to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obats.
     */
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat create
   */
  export type ObatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The data needed to create a Obat.
     */
    data: XOR<ObatCreateInput, ObatUncheckedCreateInput>
  }

  /**
   * Obat createMany
   */
  export type ObatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obats.
     */
    data: ObatCreateManyInput | ObatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obat createManyAndReturn
   */
  export type ObatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * The data used to create many Obats.
     */
    data: ObatCreateManyInput | ObatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obat update
   */
  export type ObatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The data needed to update a Obat.
     */
    data: XOR<ObatUpdateInput, ObatUncheckedUpdateInput>
    /**
     * Choose, which Obat to update.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat updateMany
   */
  export type ObatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obats.
     */
    data: XOR<ObatUpdateManyMutationInput, ObatUncheckedUpdateManyInput>
    /**
     * Filter which Obats to update
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to update.
     */
    limit?: number
  }

  /**
   * Obat updateManyAndReturn
   */
  export type ObatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * The data used to update Obats.
     */
    data: XOR<ObatUpdateManyMutationInput, ObatUncheckedUpdateManyInput>
    /**
     * Filter which Obats to update
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to update.
     */
    limit?: number
  }

  /**
   * Obat upsert
   */
  export type ObatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The filter to search for the Obat to update in case it exists.
     */
    where: ObatWhereUniqueInput
    /**
     * In case the Obat found by the `where` argument doesn't exist, create a new Obat with this data.
     */
    create: XOR<ObatCreateInput, ObatUncheckedCreateInput>
    /**
     * In case the Obat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObatUpdateInput, ObatUncheckedUpdateInput>
  }

  /**
   * Obat delete
   */
  export type ObatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter which Obat to delete.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat deleteMany
   */
  export type ObatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obats to delete
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to delete.
     */
    limit?: number
  }

  /**
   * Obat.detailPembelian
   */
  export type Obat$detailPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    where?: DetailPembelianWhereInput
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    cursor?: DetailPembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }

  /**
   * Obat.detailPenjualan
   */
  export type Obat$detailPenjualanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    where?: DetailPenjualanWhereInput
    orderBy?: DetailPenjualanOrderByWithRelationInput | DetailPenjualanOrderByWithRelationInput[]
    cursor?: DetailPenjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPenjualanScalarFieldEnum | DetailPenjualanScalarFieldEnum[]
  }

  /**
   * Obat.stok
   */
  export type Obat$stokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    where?: StokWhereInput
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    cursor?: StokWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Obat without action
   */
  export type ObatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
  }


  /**
   * Model Stok
   */

  export type AggregateStok = {
    _count: StokCountAggregateOutputType | null
    _avg: StokAvgAggregateOutputType | null
    _sum: StokSumAggregateOutputType | null
    _min: StokMinAggregateOutputType | null
    _max: StokMaxAggregateOutputType | null
  }

  export type StokAvgAggregateOutputType = {
    jumlah: number | null
  }

  export type StokSumAggregateOutputType = {
    jumlah: number | null
  }

  export type StokMinAggregateOutputType = {
    id: string | null
    jumlah: number | null
    obatId: string | null
    updatedAt: Date | null
    createdAt: Date | null
    tanggalKedaluwarsa: Date | null
  }

  export type StokMaxAggregateOutputType = {
    id: string | null
    jumlah: number | null
    obatId: string | null
    updatedAt: Date | null
    createdAt: Date | null
    tanggalKedaluwarsa: Date | null
  }

  export type StokCountAggregateOutputType = {
    id: number
    jumlah: number
    obatId: number
    updatedAt: number
    createdAt: number
    tanggalKedaluwarsa: number
    _all: number
  }


  export type StokAvgAggregateInputType = {
    jumlah?: true
  }

  export type StokSumAggregateInputType = {
    jumlah?: true
  }

  export type StokMinAggregateInputType = {
    id?: true
    jumlah?: true
    obatId?: true
    updatedAt?: true
    createdAt?: true
    tanggalKedaluwarsa?: true
  }

  export type StokMaxAggregateInputType = {
    id?: true
    jumlah?: true
    obatId?: true
    updatedAt?: true
    createdAt?: true
    tanggalKedaluwarsa?: true
  }

  export type StokCountAggregateInputType = {
    id?: true
    jumlah?: true
    obatId?: true
    updatedAt?: true
    createdAt?: true
    tanggalKedaluwarsa?: true
    _all?: true
  }

  export type StokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stok to aggregate.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stoks
    **/
    _count?: true | StokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StokAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StokSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StokMaxAggregateInputType
  }

  export type GetStokAggregateType<T extends StokAggregateArgs> = {
        [P in keyof T & keyof AggregateStok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStok[P]>
      : GetScalarType<T[P], AggregateStok[P]>
  }




  export type StokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokWhereInput
    orderBy?: StokOrderByWithAggregationInput | StokOrderByWithAggregationInput[]
    by: StokScalarFieldEnum[] | StokScalarFieldEnum
    having?: StokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StokCountAggregateInputType | true
    _avg?: StokAvgAggregateInputType
    _sum?: StokSumAggregateInputType
    _min?: StokMinAggregateInputType
    _max?: StokMaxAggregateInputType
  }

  export type StokGroupByOutputType = {
    id: string
    jumlah: number
    obatId: string
    updatedAt: Date
    createdAt: Date
    tanggalKedaluwarsa: Date
    _count: StokCountAggregateOutputType | null
    _avg: StokAvgAggregateOutputType | null
    _sum: StokSumAggregateOutputType | null
    _min: StokMinAggregateOutputType | null
    _max: StokMaxAggregateOutputType | null
  }

  type GetStokGroupByPayload<T extends StokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StokGroupByOutputType[P]>
            : GetScalarType<T[P], StokGroupByOutputType[P]>
        }
      >
    >


  export type StokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    obatId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    tanggalKedaluwarsa?: boolean
    stockMovements?: boolean | Stok$stockMovementsArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    _count?: boolean | StokCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    obatId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    tanggalKedaluwarsa?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    obatId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    tanggalKedaluwarsa?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectScalar = {
    id?: boolean
    jumlah?: boolean
    obatId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    tanggalKedaluwarsa?: boolean
  }

  export type StokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jumlah" | "obatId" | "updatedAt" | "createdAt" | "tanggalKedaluwarsa", ExtArgs["result"]["stok"]>
  export type StokInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovements?: boolean | Stok$stockMovementsArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    _count?: boolean | StokCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StokIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }
  export type StokIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }

  export type $StokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stok"
    objects: {
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
      obat: Prisma.$ObatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jumlah: number
      obatId: string
      updatedAt: Date
      createdAt: Date
      tanggalKedaluwarsa: Date
    }, ExtArgs["result"]["stok"]>
    composites: {}
  }

  type StokGetPayload<S extends boolean | null | undefined | StokDefaultArgs> = $Result.GetResult<Prisma.$StokPayload, S>

  type StokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StokCountAggregateInputType | true
    }

  export interface StokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stok'], meta: { name: 'Stok' } }
    /**
     * Find zero or one Stok that matches the filter.
     * @param {StokFindUniqueArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StokFindUniqueArgs>(args: SelectSubset<T, StokFindUniqueArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StokFindUniqueOrThrowArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StokFindUniqueOrThrowArgs>(args: SelectSubset<T, StokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindFirstArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StokFindFirstArgs>(args?: SelectSubset<T, StokFindFirstArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindFirstOrThrowArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StokFindFirstOrThrowArgs>(args?: SelectSubset<T, StokFindFirstOrThrowArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stoks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stoks
     * const stoks = await prisma.stok.findMany()
     * 
     * // Get first 10 Stoks
     * const stoks = await prisma.stok.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stokWithIdOnly = await prisma.stok.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StokFindManyArgs>(args?: SelectSubset<T, StokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stok.
     * @param {StokCreateArgs} args - Arguments to create a Stok.
     * @example
     * // Create one Stok
     * const Stok = await prisma.stok.create({
     *   data: {
     *     // ... data to create a Stok
     *   }
     * })
     * 
     */
    create<T extends StokCreateArgs>(args: SelectSubset<T, StokCreateArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stoks.
     * @param {StokCreateManyArgs} args - Arguments to create many Stoks.
     * @example
     * // Create many Stoks
     * const stok = await prisma.stok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StokCreateManyArgs>(args?: SelectSubset<T, StokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stoks and returns the data saved in the database.
     * @param {StokCreateManyAndReturnArgs} args - Arguments to create many Stoks.
     * @example
     * // Create many Stoks
     * const stok = await prisma.stok.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stoks and only return the `id`
     * const stokWithIdOnly = await prisma.stok.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StokCreateManyAndReturnArgs>(args?: SelectSubset<T, StokCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stok.
     * @param {StokDeleteArgs} args - Arguments to delete one Stok.
     * @example
     * // Delete one Stok
     * const Stok = await prisma.stok.delete({
     *   where: {
     *     // ... filter to delete one Stok
     *   }
     * })
     * 
     */
    delete<T extends StokDeleteArgs>(args: SelectSubset<T, StokDeleteArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stok.
     * @param {StokUpdateArgs} args - Arguments to update one Stok.
     * @example
     * // Update one Stok
     * const stok = await prisma.stok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StokUpdateArgs>(args: SelectSubset<T, StokUpdateArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stoks.
     * @param {StokDeleteManyArgs} args - Arguments to filter Stoks to delete.
     * @example
     * // Delete a few Stoks
     * const { count } = await prisma.stok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StokDeleteManyArgs>(args?: SelectSubset<T, StokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stoks
     * const stok = await prisma.stok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StokUpdateManyArgs>(args: SelectSubset<T, StokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stoks and returns the data updated in the database.
     * @param {StokUpdateManyAndReturnArgs} args - Arguments to update many Stoks.
     * @example
     * // Update many Stoks
     * const stok = await prisma.stok.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stoks and only return the `id`
     * const stokWithIdOnly = await prisma.stok.updateManyAndReturn({
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
    updateManyAndReturn<T extends StokUpdateManyAndReturnArgs>(args: SelectSubset<T, StokUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stok.
     * @param {StokUpsertArgs} args - Arguments to update or create a Stok.
     * @example
     * // Update or create a Stok
     * const stok = await prisma.stok.upsert({
     *   create: {
     *     // ... data to create a Stok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stok we want to update
     *   }
     * })
     */
    upsert<T extends StokUpsertArgs>(args: SelectSubset<T, StokUpsertArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokCountArgs} args - Arguments to filter Stoks to count.
     * @example
     * // Count the number of Stoks
     * const count = await prisma.stok.count({
     *   where: {
     *     // ... the filter for the Stoks we want to count
     *   }
     * })
    **/
    count<T extends StokCountArgs>(
      args?: Subset<T, StokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StokAggregateArgs>(args: Subset<T, StokAggregateArgs>): Prisma.PrismaPromise<GetStokAggregateType<T>>

    /**
     * Group by Stok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokGroupByArgs} args - Group by arguments.
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
      T extends StokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StokGroupByArgs['orderBy'] }
        : { orderBy?: StokGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stok model
   */
  readonly fields: StokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockMovements<T extends Stok$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Stok$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    obat<T extends ObatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObatDefaultArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stok model
   */
  interface StokFieldRefs {
    readonly id: FieldRef<"Stok", 'String'>
    readonly jumlah: FieldRef<"Stok", 'Int'>
    readonly obatId: FieldRef<"Stok", 'String'>
    readonly updatedAt: FieldRef<"Stok", 'DateTime'>
    readonly createdAt: FieldRef<"Stok", 'DateTime'>
    readonly tanggalKedaluwarsa: FieldRef<"Stok", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stok findUnique
   */
  export type StokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok findUniqueOrThrow
   */
  export type StokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok findFirst
   */
  export type StokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stoks.
     */
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok findFirstOrThrow
   */
  export type StokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stoks.
     */
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok findMany
   */
  export type StokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stoks to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stoks.
     */
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok create
   */
  export type StokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The data needed to create a Stok.
     */
    data: XOR<StokCreateInput, StokUncheckedCreateInput>
  }

  /**
   * Stok createMany
   */
  export type StokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stoks.
     */
    data: StokCreateManyInput | StokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stok createManyAndReturn
   */
  export type StokCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * The data used to create many Stoks.
     */
    data: StokCreateManyInput | StokCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stok update
   */
  export type StokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The data needed to update a Stok.
     */
    data: XOR<StokUpdateInput, StokUncheckedUpdateInput>
    /**
     * Choose, which Stok to update.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok updateMany
   */
  export type StokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stoks.
     */
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyInput>
    /**
     * Filter which Stoks to update
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to update.
     */
    limit?: number
  }

  /**
   * Stok updateManyAndReturn
   */
  export type StokUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * The data used to update Stoks.
     */
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyInput>
    /**
     * Filter which Stoks to update
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stok upsert
   */
  export type StokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The filter to search for the Stok to update in case it exists.
     */
    where: StokWhereUniqueInput
    /**
     * In case the Stok found by the `where` argument doesn't exist, create a new Stok with this data.
     */
    create: XOR<StokCreateInput, StokUncheckedCreateInput>
    /**
     * In case the Stok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StokUpdateInput, StokUncheckedUpdateInput>
  }

  /**
   * Stok delete
   */
  export type StokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter which Stok to delete.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok deleteMany
   */
  export type StokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stoks to delete
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to delete.
     */
    limit?: number
  }

  /**
   * Stok.stockMovements
   */
  export type Stok$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * Stok without action
   */
  export type StokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    type: $Enums.MovementType | null
    quantity: number | null
    createdAt: Date | null
    stokId: string | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MovementType | null
    quantity: number | null
    createdAt: Date | null
    stokId: string | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    type: number
    quantity: number
    createdAt: number
    stokId: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantity?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantity?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    createdAt?: true
    stokId?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    createdAt?: true
    stokId?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    createdAt?: true
    stokId?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    type: $Enums.MovementType
    quantity: number
    createdAt: Date
    stokId: string
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    createdAt?: boolean
    stokId?: boolean
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    createdAt?: boolean
    stokId?: boolean
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    createdAt?: boolean
    stokId?: boolean
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    type?: boolean
    quantity?: boolean
    createdAt?: boolean
    stokId?: boolean
  }

  export type StockMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "quantity" | "createdAt" | "stokId", ExtArgs["result"]["stockMovement"]>
  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stok?: boolean | StokDefaultArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      stok: Prisma.$StokPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MovementType
      quantity: number
      createdAt: Date
      stokId: string
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements and returns the data updated in the database.
     * @param {StockMovementUpdateManyAndReturnArgs} args - Arguments to update many StockMovements.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.updateManyAndReturn({
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
    updateManyAndReturn<T extends StockMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, StockMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
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
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stok<T extends StokDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StokDefaultArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StockMovement model
   */
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly type: FieldRef<"StockMovement", 'MovementType'>
    readonly quantity: FieldRef<"StockMovement", 'Int'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
    readonly stokId: FieldRef<"StockMovement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement updateManyAndReturn
   */
  export type StockMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to delete.
     */
    limit?: number
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Model TransaksiPenjualan
   */

  export type AggregateTransaksiPenjualan = {
    _count: TransaksiPenjualanCountAggregateOutputType | null
    _avg: TransaksiPenjualanAvgAggregateOutputType | null
    _sum: TransaksiPenjualanSumAggregateOutputType | null
    _min: TransaksiPenjualanMinAggregateOutputType | null
    _max: TransaksiPenjualanMaxAggregateOutputType | null
  }

  export type TransaksiPenjualanAvgAggregateOutputType = {
    total: number | null
  }

  export type TransaksiPenjualanSumAggregateOutputType = {
    total: number | null
  }

  export type TransaksiPenjualanMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiPenjualanMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiPenjualanCountAggregateOutputType = {
    id: number
    tanggal: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransaksiPenjualanAvgAggregateInputType = {
    total?: true
  }

  export type TransaksiPenjualanSumAggregateInputType = {
    total?: true
  }

  export type TransaksiPenjualanMinAggregateInputType = {
    id?: true
    tanggal?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiPenjualanMaxAggregateInputType = {
    id?: true
    tanggal?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiPenjualanCountAggregateInputType = {
    id?: true
    tanggal?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransaksiPenjualanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiPenjualan to aggregate.
     */
    where?: TransaksiPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPenjualans to fetch.
     */
    orderBy?: TransaksiPenjualanOrderByWithRelationInput | TransaksiPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransaksiPenjualans
    **/
    _count?: true | TransaksiPenjualanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiPenjualanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiPenjualanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiPenjualanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiPenjualanMaxAggregateInputType
  }

  export type GetTransaksiPenjualanAggregateType<T extends TransaksiPenjualanAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksiPenjualan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksiPenjualan[P]>
      : GetScalarType<T[P], AggregateTransaksiPenjualan[P]>
  }




  export type TransaksiPenjualanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiPenjualanWhereInput
    orderBy?: TransaksiPenjualanOrderByWithAggregationInput | TransaksiPenjualanOrderByWithAggregationInput[]
    by: TransaksiPenjualanScalarFieldEnum[] | TransaksiPenjualanScalarFieldEnum
    having?: TransaksiPenjualanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiPenjualanCountAggregateInputType | true
    _avg?: TransaksiPenjualanAvgAggregateInputType
    _sum?: TransaksiPenjualanSumAggregateInputType
    _min?: TransaksiPenjualanMinAggregateInputType
    _max?: TransaksiPenjualanMaxAggregateInputType
  }

  export type TransaksiPenjualanGroupByOutputType = {
    id: string
    tanggal: Date
    total: number
    createdAt: Date
    updatedAt: Date
    _count: TransaksiPenjualanCountAggregateOutputType | null
    _avg: TransaksiPenjualanAvgAggregateOutputType | null
    _sum: TransaksiPenjualanSumAggregateOutputType | null
    _min: TransaksiPenjualanMinAggregateOutputType | null
    _max: TransaksiPenjualanMaxAggregateOutputType | null
  }

  type GetTransaksiPenjualanGroupByPayload<T extends TransaksiPenjualanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiPenjualanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiPenjualanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiPenjualanGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiPenjualanGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiPenjualanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    details?: boolean | TransaksiPenjualan$detailsArgs<ExtArgs>
    _count?: boolean | TransaksiPenjualanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiPenjualan"]>

  export type TransaksiPenjualanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transaksiPenjualan"]>

  export type TransaksiPenjualanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["transaksiPenjualan"]>

  export type TransaksiPenjualanSelectScalar = {
    id?: boolean
    tanggal?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransaksiPenjualanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["transaksiPenjualan"]>
  export type TransaksiPenjualanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | TransaksiPenjualan$detailsArgs<ExtArgs>
    _count?: boolean | TransaksiPenjualanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransaksiPenjualanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransaksiPenjualanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransaksiPenjualanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransaksiPenjualan"
    objects: {
      details: Prisma.$DetailPenjualanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      total: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaksiPenjualan"]>
    composites: {}
  }

  type TransaksiPenjualanGetPayload<S extends boolean | null | undefined | TransaksiPenjualanDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPenjualanPayload, S>

  type TransaksiPenjualanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiPenjualanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiPenjualanCountAggregateInputType | true
    }

  export interface TransaksiPenjualanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransaksiPenjualan'], meta: { name: 'TransaksiPenjualan' } }
    /**
     * Find zero or one TransaksiPenjualan that matches the filter.
     * @param {TransaksiPenjualanFindUniqueArgs} args - Arguments to find a TransaksiPenjualan
     * @example
     * // Get one TransaksiPenjualan
     * const transaksiPenjualan = await prisma.transaksiPenjualan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiPenjualanFindUniqueArgs>(args: SelectSubset<T, TransaksiPenjualanFindUniqueArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransaksiPenjualan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiPenjualanFindUniqueOrThrowArgs} args - Arguments to find a TransaksiPenjualan
     * @example
     * // Get one TransaksiPenjualan
     * const transaksiPenjualan = await prisma.transaksiPenjualan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiPenjualanFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiPenjualanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiPenjualan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPenjualanFindFirstArgs} args - Arguments to find a TransaksiPenjualan
     * @example
     * // Get one TransaksiPenjualan
     * const transaksiPenjualan = await prisma.transaksiPenjualan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiPenjualanFindFirstArgs>(args?: SelectSubset<T, TransaksiPenjualanFindFirstArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiPenjualan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPenjualanFindFirstOrThrowArgs} args - Arguments to find a TransaksiPenjualan
     * @example
     * // Get one TransaksiPenjualan
     * const transaksiPenjualan = await prisma.transaksiPenjualan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiPenjualanFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiPenjualanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransaksiPenjualans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPenjualanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaksiPenjualans
     * const transaksiPenjualans = await prisma.transaksiPenjualan.findMany()
     * 
     * // Get first 10 TransaksiPenjualans
     * const transaksiPenjualans = await prisma.transaksiPenjualan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiPenjualanWithIdOnly = await prisma.transaksiPenjualan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiPenjualanFindManyArgs>(args?: SelectSubset<T, TransaksiPenjualanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransaksiPenjualan.
     * @param {TransaksiPenjualanCreateArgs} args - Arguments to create a TransaksiPenjualan.
     * @example
     * // Create one TransaksiPenjualan
     * const TransaksiPenjualan = await prisma.transaksiPenjualan.create({
     *   data: {
     *     // ... data to create a TransaksiPenjualan
     *   }
     * })
     * 
     */
    create<T extends TransaksiPenjualanCreateArgs>(args: SelectSubset<T, TransaksiPenjualanCreateArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransaksiPenjualans.
     * @param {TransaksiPenjualanCreateManyArgs} args - Arguments to create many TransaksiPenjualans.
     * @example
     * // Create many TransaksiPenjualans
     * const transaksiPenjualan = await prisma.transaksiPenjualan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiPenjualanCreateManyArgs>(args?: SelectSubset<T, TransaksiPenjualanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransaksiPenjualans and returns the data saved in the database.
     * @param {TransaksiPenjualanCreateManyAndReturnArgs} args - Arguments to create many TransaksiPenjualans.
     * @example
     * // Create many TransaksiPenjualans
     * const transaksiPenjualan = await prisma.transaksiPenjualan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransaksiPenjualans and only return the `id`
     * const transaksiPenjualanWithIdOnly = await prisma.transaksiPenjualan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransaksiPenjualanCreateManyAndReturnArgs>(args?: SelectSubset<T, TransaksiPenjualanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransaksiPenjualan.
     * @param {TransaksiPenjualanDeleteArgs} args - Arguments to delete one TransaksiPenjualan.
     * @example
     * // Delete one TransaksiPenjualan
     * const TransaksiPenjualan = await prisma.transaksiPenjualan.delete({
     *   where: {
     *     // ... filter to delete one TransaksiPenjualan
     *   }
     * })
     * 
     */
    delete<T extends TransaksiPenjualanDeleteArgs>(args: SelectSubset<T, TransaksiPenjualanDeleteArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransaksiPenjualan.
     * @param {TransaksiPenjualanUpdateArgs} args - Arguments to update one TransaksiPenjualan.
     * @example
     * // Update one TransaksiPenjualan
     * const transaksiPenjualan = await prisma.transaksiPenjualan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiPenjualanUpdateArgs>(args: SelectSubset<T, TransaksiPenjualanUpdateArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransaksiPenjualans.
     * @param {TransaksiPenjualanDeleteManyArgs} args - Arguments to filter TransaksiPenjualans to delete.
     * @example
     * // Delete a few TransaksiPenjualans
     * const { count } = await prisma.transaksiPenjualan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiPenjualanDeleteManyArgs>(args?: SelectSubset<T, TransaksiPenjualanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiPenjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPenjualanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaksiPenjualans
     * const transaksiPenjualan = await prisma.transaksiPenjualan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiPenjualanUpdateManyArgs>(args: SelectSubset<T, TransaksiPenjualanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiPenjualans and returns the data updated in the database.
     * @param {TransaksiPenjualanUpdateManyAndReturnArgs} args - Arguments to update many TransaksiPenjualans.
     * @example
     * // Update many TransaksiPenjualans
     * const transaksiPenjualan = await prisma.transaksiPenjualan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransaksiPenjualans and only return the `id`
     * const transaksiPenjualanWithIdOnly = await prisma.transaksiPenjualan.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransaksiPenjualanUpdateManyAndReturnArgs>(args: SelectSubset<T, TransaksiPenjualanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransaksiPenjualan.
     * @param {TransaksiPenjualanUpsertArgs} args - Arguments to update or create a TransaksiPenjualan.
     * @example
     * // Update or create a TransaksiPenjualan
     * const transaksiPenjualan = await prisma.transaksiPenjualan.upsert({
     *   create: {
     *     // ... data to create a TransaksiPenjualan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaksiPenjualan we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiPenjualanUpsertArgs>(args: SelectSubset<T, TransaksiPenjualanUpsertArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransaksiPenjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPenjualanCountArgs} args - Arguments to filter TransaksiPenjualans to count.
     * @example
     * // Count the number of TransaksiPenjualans
     * const count = await prisma.transaksiPenjualan.count({
     *   where: {
     *     // ... the filter for the TransaksiPenjualans we want to count
     *   }
     * })
    **/
    count<T extends TransaksiPenjualanCountArgs>(
      args?: Subset<T, TransaksiPenjualanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiPenjualanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaksiPenjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPenjualanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiPenjualanAggregateArgs>(args: Subset<T, TransaksiPenjualanAggregateArgs>): Prisma.PrismaPromise<GetTransaksiPenjualanAggregateType<T>>

    /**
     * Group by TransaksiPenjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPenjualanGroupByArgs} args - Group by arguments.
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
      T extends TransaksiPenjualanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiPenjualanGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiPenjualanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransaksiPenjualanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiPenjualanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransaksiPenjualan model
   */
  readonly fields: TransaksiPenjualanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransaksiPenjualan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiPenjualanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends TransaksiPenjualan$detailsArgs<ExtArgs> = {}>(args?: Subset<T, TransaksiPenjualan$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TransaksiPenjualan model
   */
  interface TransaksiPenjualanFieldRefs {
    readonly id: FieldRef<"TransaksiPenjualan", 'String'>
    readonly tanggal: FieldRef<"TransaksiPenjualan", 'DateTime'>
    readonly total: FieldRef<"TransaksiPenjualan", 'Int'>
    readonly createdAt: FieldRef<"TransaksiPenjualan", 'DateTime'>
    readonly updatedAt: FieldRef<"TransaksiPenjualan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransaksiPenjualan findUnique
   */
  export type TransaksiPenjualanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPenjualan to fetch.
     */
    where: TransaksiPenjualanWhereUniqueInput
  }

  /**
   * TransaksiPenjualan findUniqueOrThrow
   */
  export type TransaksiPenjualanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPenjualan to fetch.
     */
    where: TransaksiPenjualanWhereUniqueInput
  }

  /**
   * TransaksiPenjualan findFirst
   */
  export type TransaksiPenjualanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPenjualan to fetch.
     */
    where?: TransaksiPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPenjualans to fetch.
     */
    orderBy?: TransaksiPenjualanOrderByWithRelationInput | TransaksiPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiPenjualans.
     */
    cursor?: TransaksiPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiPenjualans.
     */
    distinct?: TransaksiPenjualanScalarFieldEnum | TransaksiPenjualanScalarFieldEnum[]
  }

  /**
   * TransaksiPenjualan findFirstOrThrow
   */
  export type TransaksiPenjualanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPenjualan to fetch.
     */
    where?: TransaksiPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPenjualans to fetch.
     */
    orderBy?: TransaksiPenjualanOrderByWithRelationInput | TransaksiPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiPenjualans.
     */
    cursor?: TransaksiPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiPenjualans.
     */
    distinct?: TransaksiPenjualanScalarFieldEnum | TransaksiPenjualanScalarFieldEnum[]
  }

  /**
   * TransaksiPenjualan findMany
   */
  export type TransaksiPenjualanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPenjualans to fetch.
     */
    where?: TransaksiPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPenjualans to fetch.
     */
    orderBy?: TransaksiPenjualanOrderByWithRelationInput | TransaksiPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransaksiPenjualans.
     */
    cursor?: TransaksiPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiPenjualans.
     */
    distinct?: TransaksiPenjualanScalarFieldEnum | TransaksiPenjualanScalarFieldEnum[]
  }

  /**
   * TransaksiPenjualan create
   */
  export type TransaksiPenjualanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * The data needed to create a TransaksiPenjualan.
     */
    data: XOR<TransaksiPenjualanCreateInput, TransaksiPenjualanUncheckedCreateInput>
  }

  /**
   * TransaksiPenjualan createMany
   */
  export type TransaksiPenjualanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransaksiPenjualans.
     */
    data: TransaksiPenjualanCreateManyInput | TransaksiPenjualanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransaksiPenjualan createManyAndReturn
   */
  export type TransaksiPenjualanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * The data used to create many TransaksiPenjualans.
     */
    data: TransaksiPenjualanCreateManyInput | TransaksiPenjualanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransaksiPenjualan update
   */
  export type TransaksiPenjualanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * The data needed to update a TransaksiPenjualan.
     */
    data: XOR<TransaksiPenjualanUpdateInput, TransaksiPenjualanUncheckedUpdateInput>
    /**
     * Choose, which TransaksiPenjualan to update.
     */
    where: TransaksiPenjualanWhereUniqueInput
  }

  /**
   * TransaksiPenjualan updateMany
   */
  export type TransaksiPenjualanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransaksiPenjualans.
     */
    data: XOR<TransaksiPenjualanUpdateManyMutationInput, TransaksiPenjualanUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiPenjualans to update
     */
    where?: TransaksiPenjualanWhereInput
    /**
     * Limit how many TransaksiPenjualans to update.
     */
    limit?: number
  }

  /**
   * TransaksiPenjualan updateManyAndReturn
   */
  export type TransaksiPenjualanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * The data used to update TransaksiPenjualans.
     */
    data: XOR<TransaksiPenjualanUpdateManyMutationInput, TransaksiPenjualanUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiPenjualans to update
     */
    where?: TransaksiPenjualanWhereInput
    /**
     * Limit how many TransaksiPenjualans to update.
     */
    limit?: number
  }

  /**
   * TransaksiPenjualan upsert
   */
  export type TransaksiPenjualanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * The filter to search for the TransaksiPenjualan to update in case it exists.
     */
    where: TransaksiPenjualanWhereUniqueInput
    /**
     * In case the TransaksiPenjualan found by the `where` argument doesn't exist, create a new TransaksiPenjualan with this data.
     */
    create: XOR<TransaksiPenjualanCreateInput, TransaksiPenjualanUncheckedCreateInput>
    /**
     * In case the TransaksiPenjualan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiPenjualanUpdateInput, TransaksiPenjualanUncheckedUpdateInput>
  }

  /**
   * TransaksiPenjualan delete
   */
  export type TransaksiPenjualanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
    /**
     * Filter which TransaksiPenjualan to delete.
     */
    where: TransaksiPenjualanWhereUniqueInput
  }

  /**
   * TransaksiPenjualan deleteMany
   */
  export type TransaksiPenjualanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiPenjualans to delete
     */
    where?: TransaksiPenjualanWhereInput
    /**
     * Limit how many TransaksiPenjualans to delete.
     */
    limit?: number
  }

  /**
   * TransaksiPenjualan.details
   */
  export type TransaksiPenjualan$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    where?: DetailPenjualanWhereInput
    orderBy?: DetailPenjualanOrderByWithRelationInput | DetailPenjualanOrderByWithRelationInput[]
    cursor?: DetailPenjualanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPenjualanScalarFieldEnum | DetailPenjualanScalarFieldEnum[]
  }

  /**
   * TransaksiPenjualan without action
   */
  export type TransaksiPenjualanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPenjualan
     */
    select?: TransaksiPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPenjualan
     */
    omit?: TransaksiPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPenjualanInclude<ExtArgs> | null
  }


  /**
   * Model DetailPenjualan
   */

  export type AggregateDetailPenjualan = {
    _count: DetailPenjualanCountAggregateOutputType | null
    _avg: DetailPenjualanAvgAggregateOutputType | null
    _sum: DetailPenjualanSumAggregateOutputType | null
    _min: DetailPenjualanMinAggregateOutputType | null
    _max: DetailPenjualanMaxAggregateOutputType | null
  }

  export type DetailPenjualanAvgAggregateOutputType = {
    quantity: number | null
    harga: number | null
  }

  export type DetailPenjualanSumAggregateOutputType = {
    quantity: number | null
    harga: number | null
  }

  export type DetailPenjualanMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    harga: number | null
    transaksiId: string | null
    obatId: string | null
  }

  export type DetailPenjualanMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    harga: number | null
    transaksiId: string | null
    obatId: string | null
  }

  export type DetailPenjualanCountAggregateOutputType = {
    id: number
    quantity: number
    harga: number
    transaksiId: number
    obatId: number
    _all: number
  }


  export type DetailPenjualanAvgAggregateInputType = {
    quantity?: true
    harga?: true
  }

  export type DetailPenjualanSumAggregateInputType = {
    quantity?: true
    harga?: true
  }

  export type DetailPenjualanMinAggregateInputType = {
    id?: true
    quantity?: true
    harga?: true
    transaksiId?: true
    obatId?: true
  }

  export type DetailPenjualanMaxAggregateInputType = {
    id?: true
    quantity?: true
    harga?: true
    transaksiId?: true
    obatId?: true
  }

  export type DetailPenjualanCountAggregateInputType = {
    id?: true
    quantity?: true
    harga?: true
    transaksiId?: true
    obatId?: true
    _all?: true
  }

  export type DetailPenjualanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPenjualan to aggregate.
     */
    where?: DetailPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPenjualans to fetch.
     */
    orderBy?: DetailPenjualanOrderByWithRelationInput | DetailPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailPenjualans
    **/
    _count?: true | DetailPenjualanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailPenjualanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailPenjualanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailPenjualanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailPenjualanMaxAggregateInputType
  }

  export type GetDetailPenjualanAggregateType<T extends DetailPenjualanAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailPenjualan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailPenjualan[P]>
      : GetScalarType<T[P], AggregateDetailPenjualan[P]>
  }




  export type DetailPenjualanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPenjualanWhereInput
    orderBy?: DetailPenjualanOrderByWithAggregationInput | DetailPenjualanOrderByWithAggregationInput[]
    by: DetailPenjualanScalarFieldEnum[] | DetailPenjualanScalarFieldEnum
    having?: DetailPenjualanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailPenjualanCountAggregateInputType | true
    _avg?: DetailPenjualanAvgAggregateInputType
    _sum?: DetailPenjualanSumAggregateInputType
    _min?: DetailPenjualanMinAggregateInputType
    _max?: DetailPenjualanMaxAggregateInputType
  }

  export type DetailPenjualanGroupByOutputType = {
    id: string
    quantity: number
    harga: number
    transaksiId: string
    obatId: string
    _count: DetailPenjualanCountAggregateOutputType | null
    _avg: DetailPenjualanAvgAggregateOutputType | null
    _sum: DetailPenjualanSumAggregateOutputType | null
    _min: DetailPenjualanMinAggregateOutputType | null
    _max: DetailPenjualanMaxAggregateOutputType | null
  }

  type GetDetailPenjualanGroupByPayload<T extends DetailPenjualanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailPenjualanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailPenjualanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailPenjualanGroupByOutputType[P]>
            : GetScalarType<T[P], DetailPenjualanGroupByOutputType[P]>
        }
      >
    >


  export type DetailPenjualanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    harga?: boolean
    transaksiId?: boolean
    obatId?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPenjualanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPenjualan"]>

  export type DetailPenjualanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    harga?: boolean
    transaksiId?: boolean
    obatId?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPenjualanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPenjualan"]>

  export type DetailPenjualanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    harga?: boolean
    transaksiId?: boolean
    obatId?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPenjualanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPenjualan"]>

  export type DetailPenjualanSelectScalar = {
    id?: boolean
    quantity?: boolean
    harga?: boolean
    transaksiId?: boolean
    obatId?: boolean
  }

  export type DetailPenjualanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "harga" | "transaksiId" | "obatId", ExtArgs["result"]["detailPenjualan"]>
  export type DetailPenjualanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPenjualanDefaultArgs<ExtArgs>
  }
  export type DetailPenjualanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPenjualanDefaultArgs<ExtArgs>
  }
  export type DetailPenjualanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPenjualanDefaultArgs<ExtArgs>
  }

  export type $DetailPenjualanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailPenjualan"
    objects: {
      obat: Prisma.$ObatPayload<ExtArgs>
      transaksi: Prisma.$TransaksiPenjualanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      harga: number
      transaksiId: string
      obatId: string
    }, ExtArgs["result"]["detailPenjualan"]>
    composites: {}
  }

  type DetailPenjualanGetPayload<S extends boolean | null | undefined | DetailPenjualanDefaultArgs> = $Result.GetResult<Prisma.$DetailPenjualanPayload, S>

  type DetailPenjualanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailPenjualanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailPenjualanCountAggregateInputType | true
    }

  export interface DetailPenjualanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailPenjualan'], meta: { name: 'DetailPenjualan' } }
    /**
     * Find zero or one DetailPenjualan that matches the filter.
     * @param {DetailPenjualanFindUniqueArgs} args - Arguments to find a DetailPenjualan
     * @example
     * // Get one DetailPenjualan
     * const detailPenjualan = await prisma.detailPenjualan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailPenjualanFindUniqueArgs>(args: SelectSubset<T, DetailPenjualanFindUniqueArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailPenjualan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailPenjualanFindUniqueOrThrowArgs} args - Arguments to find a DetailPenjualan
     * @example
     * // Get one DetailPenjualan
     * const detailPenjualan = await prisma.detailPenjualan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailPenjualanFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailPenjualanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailPenjualan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPenjualanFindFirstArgs} args - Arguments to find a DetailPenjualan
     * @example
     * // Get one DetailPenjualan
     * const detailPenjualan = await prisma.detailPenjualan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailPenjualanFindFirstArgs>(args?: SelectSubset<T, DetailPenjualanFindFirstArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailPenjualan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPenjualanFindFirstOrThrowArgs} args - Arguments to find a DetailPenjualan
     * @example
     * // Get one DetailPenjualan
     * const detailPenjualan = await prisma.detailPenjualan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailPenjualanFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailPenjualanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailPenjualans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPenjualanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailPenjualans
     * const detailPenjualans = await prisma.detailPenjualan.findMany()
     * 
     * // Get first 10 DetailPenjualans
     * const detailPenjualans = await prisma.detailPenjualan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailPenjualanWithIdOnly = await prisma.detailPenjualan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailPenjualanFindManyArgs>(args?: SelectSubset<T, DetailPenjualanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailPenjualan.
     * @param {DetailPenjualanCreateArgs} args - Arguments to create a DetailPenjualan.
     * @example
     * // Create one DetailPenjualan
     * const DetailPenjualan = await prisma.detailPenjualan.create({
     *   data: {
     *     // ... data to create a DetailPenjualan
     *   }
     * })
     * 
     */
    create<T extends DetailPenjualanCreateArgs>(args: SelectSubset<T, DetailPenjualanCreateArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailPenjualans.
     * @param {DetailPenjualanCreateManyArgs} args - Arguments to create many DetailPenjualans.
     * @example
     * // Create many DetailPenjualans
     * const detailPenjualan = await prisma.detailPenjualan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailPenjualanCreateManyArgs>(args?: SelectSubset<T, DetailPenjualanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailPenjualans and returns the data saved in the database.
     * @param {DetailPenjualanCreateManyAndReturnArgs} args - Arguments to create many DetailPenjualans.
     * @example
     * // Create many DetailPenjualans
     * const detailPenjualan = await prisma.detailPenjualan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailPenjualans and only return the `id`
     * const detailPenjualanWithIdOnly = await prisma.detailPenjualan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailPenjualanCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailPenjualanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailPenjualan.
     * @param {DetailPenjualanDeleteArgs} args - Arguments to delete one DetailPenjualan.
     * @example
     * // Delete one DetailPenjualan
     * const DetailPenjualan = await prisma.detailPenjualan.delete({
     *   where: {
     *     // ... filter to delete one DetailPenjualan
     *   }
     * })
     * 
     */
    delete<T extends DetailPenjualanDeleteArgs>(args: SelectSubset<T, DetailPenjualanDeleteArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailPenjualan.
     * @param {DetailPenjualanUpdateArgs} args - Arguments to update one DetailPenjualan.
     * @example
     * // Update one DetailPenjualan
     * const detailPenjualan = await prisma.detailPenjualan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailPenjualanUpdateArgs>(args: SelectSubset<T, DetailPenjualanUpdateArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailPenjualans.
     * @param {DetailPenjualanDeleteManyArgs} args - Arguments to filter DetailPenjualans to delete.
     * @example
     * // Delete a few DetailPenjualans
     * const { count } = await prisma.detailPenjualan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailPenjualanDeleteManyArgs>(args?: SelectSubset<T, DetailPenjualanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPenjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPenjualanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailPenjualans
     * const detailPenjualan = await prisma.detailPenjualan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailPenjualanUpdateManyArgs>(args: SelectSubset<T, DetailPenjualanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPenjualans and returns the data updated in the database.
     * @param {DetailPenjualanUpdateManyAndReturnArgs} args - Arguments to update many DetailPenjualans.
     * @example
     * // Update many DetailPenjualans
     * const detailPenjualan = await prisma.detailPenjualan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailPenjualans and only return the `id`
     * const detailPenjualanWithIdOnly = await prisma.detailPenjualan.updateManyAndReturn({
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
    updateManyAndReturn<T extends DetailPenjualanUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailPenjualanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailPenjualan.
     * @param {DetailPenjualanUpsertArgs} args - Arguments to update or create a DetailPenjualan.
     * @example
     * // Update or create a DetailPenjualan
     * const detailPenjualan = await prisma.detailPenjualan.upsert({
     *   create: {
     *     // ... data to create a DetailPenjualan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailPenjualan we want to update
     *   }
     * })
     */
    upsert<T extends DetailPenjualanUpsertArgs>(args: SelectSubset<T, DetailPenjualanUpsertArgs<ExtArgs>>): Prisma__DetailPenjualanClient<$Result.GetResult<Prisma.$DetailPenjualanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailPenjualans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPenjualanCountArgs} args - Arguments to filter DetailPenjualans to count.
     * @example
     * // Count the number of DetailPenjualans
     * const count = await prisma.detailPenjualan.count({
     *   where: {
     *     // ... the filter for the DetailPenjualans we want to count
     *   }
     * })
    **/
    count<T extends DetailPenjualanCountArgs>(
      args?: Subset<T, DetailPenjualanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailPenjualanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailPenjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPenjualanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailPenjualanAggregateArgs>(args: Subset<T, DetailPenjualanAggregateArgs>): Prisma.PrismaPromise<GetDetailPenjualanAggregateType<T>>

    /**
     * Group by DetailPenjualan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPenjualanGroupByArgs} args - Group by arguments.
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
      T extends DetailPenjualanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailPenjualanGroupByArgs['orderBy'] }
        : { orderBy?: DetailPenjualanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailPenjualanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailPenjualanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailPenjualan model
   */
  readonly fields: DetailPenjualanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailPenjualan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailPenjualanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obat<T extends ObatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObatDefaultArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends TransaksiPenjualanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransaksiPenjualanDefaultArgs<ExtArgs>>): Prisma__TransaksiPenjualanClient<$Result.GetResult<Prisma.$TransaksiPenjualanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailPenjualan model
   */
  interface DetailPenjualanFieldRefs {
    readonly id: FieldRef<"DetailPenjualan", 'String'>
    readonly quantity: FieldRef<"DetailPenjualan", 'Int'>
    readonly harga: FieldRef<"DetailPenjualan", 'Int'>
    readonly transaksiId: FieldRef<"DetailPenjualan", 'String'>
    readonly obatId: FieldRef<"DetailPenjualan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetailPenjualan findUnique
   */
  export type DetailPenjualanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPenjualan to fetch.
     */
    where: DetailPenjualanWhereUniqueInput
  }

  /**
   * DetailPenjualan findUniqueOrThrow
   */
  export type DetailPenjualanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPenjualan to fetch.
     */
    where: DetailPenjualanWhereUniqueInput
  }

  /**
   * DetailPenjualan findFirst
   */
  export type DetailPenjualanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPenjualan to fetch.
     */
    where?: DetailPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPenjualans to fetch.
     */
    orderBy?: DetailPenjualanOrderByWithRelationInput | DetailPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPenjualans.
     */
    cursor?: DetailPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPenjualans.
     */
    distinct?: DetailPenjualanScalarFieldEnum | DetailPenjualanScalarFieldEnum[]
  }

  /**
   * DetailPenjualan findFirstOrThrow
   */
  export type DetailPenjualanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPenjualan to fetch.
     */
    where?: DetailPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPenjualans to fetch.
     */
    orderBy?: DetailPenjualanOrderByWithRelationInput | DetailPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPenjualans.
     */
    cursor?: DetailPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPenjualans.
     */
    distinct?: DetailPenjualanScalarFieldEnum | DetailPenjualanScalarFieldEnum[]
  }

  /**
   * DetailPenjualan findMany
   */
  export type DetailPenjualanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * Filter, which DetailPenjualans to fetch.
     */
    where?: DetailPenjualanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPenjualans to fetch.
     */
    orderBy?: DetailPenjualanOrderByWithRelationInput | DetailPenjualanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailPenjualans.
     */
    cursor?: DetailPenjualanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPenjualans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPenjualans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPenjualans.
     */
    distinct?: DetailPenjualanScalarFieldEnum | DetailPenjualanScalarFieldEnum[]
  }

  /**
   * DetailPenjualan create
   */
  export type DetailPenjualanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailPenjualan.
     */
    data: XOR<DetailPenjualanCreateInput, DetailPenjualanUncheckedCreateInput>
  }

  /**
   * DetailPenjualan createMany
   */
  export type DetailPenjualanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailPenjualans.
     */
    data: DetailPenjualanCreateManyInput | DetailPenjualanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailPenjualan createManyAndReturn
   */
  export type DetailPenjualanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * The data used to create many DetailPenjualans.
     */
    data: DetailPenjualanCreateManyInput | DetailPenjualanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailPenjualan update
   */
  export type DetailPenjualanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailPenjualan.
     */
    data: XOR<DetailPenjualanUpdateInput, DetailPenjualanUncheckedUpdateInput>
    /**
     * Choose, which DetailPenjualan to update.
     */
    where: DetailPenjualanWhereUniqueInput
  }

  /**
   * DetailPenjualan updateMany
   */
  export type DetailPenjualanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailPenjualans.
     */
    data: XOR<DetailPenjualanUpdateManyMutationInput, DetailPenjualanUncheckedUpdateManyInput>
    /**
     * Filter which DetailPenjualans to update
     */
    where?: DetailPenjualanWhereInput
    /**
     * Limit how many DetailPenjualans to update.
     */
    limit?: number
  }

  /**
   * DetailPenjualan updateManyAndReturn
   */
  export type DetailPenjualanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * The data used to update DetailPenjualans.
     */
    data: XOR<DetailPenjualanUpdateManyMutationInput, DetailPenjualanUncheckedUpdateManyInput>
    /**
     * Filter which DetailPenjualans to update
     */
    where?: DetailPenjualanWhereInput
    /**
     * Limit how many DetailPenjualans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailPenjualan upsert
   */
  export type DetailPenjualanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailPenjualan to update in case it exists.
     */
    where: DetailPenjualanWhereUniqueInput
    /**
     * In case the DetailPenjualan found by the `where` argument doesn't exist, create a new DetailPenjualan with this data.
     */
    create: XOR<DetailPenjualanCreateInput, DetailPenjualanUncheckedCreateInput>
    /**
     * In case the DetailPenjualan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailPenjualanUpdateInput, DetailPenjualanUncheckedUpdateInput>
  }

  /**
   * DetailPenjualan delete
   */
  export type DetailPenjualanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
    /**
     * Filter which DetailPenjualan to delete.
     */
    where: DetailPenjualanWhereUniqueInput
  }

  /**
   * DetailPenjualan deleteMany
   */
  export type DetailPenjualanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPenjualans to delete
     */
    where?: DetailPenjualanWhereInput
    /**
     * Limit how many DetailPenjualans to delete.
     */
    limit?: number
  }

  /**
   * DetailPenjualan without action
   */
  export type DetailPenjualanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPenjualan
     */
    select?: DetailPenjualanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPenjualan
     */
    omit?: DetailPenjualanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPenjualanInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    nama: string | null
    alamat: string | null
    telepon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    alamat: string | null
    telepon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    nama: number
    alamat: number
    telepon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    telepon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    telepon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    nama?: true
    alamat?: true
    telepon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    nama: string
    alamat: string
    telepon: string
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaksiPembelian?: boolean | Supplier$transaksiPembelianArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "alamat" | "telepon" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksiPembelian?: boolean | Supplier$transaksiPembelianArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      transaksiPembelian: Prisma.$TransaksiPembelianPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      alamat: string
      telepon: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksiPembelian<T extends Supplier$transaksiPembelianArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$transaksiPembelianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly nama: FieldRef<"Supplier", 'String'>
    readonly alamat: FieldRef<"Supplier", 'String'>
    readonly telepon: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.transaksiPembelian
   */
  export type Supplier$transaksiPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    where?: TransaksiPembelianWhereInput
    orderBy?: TransaksiPembelianOrderByWithRelationInput | TransaksiPembelianOrderByWithRelationInput[]
    cursor?: TransaksiPembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiPembelianScalarFieldEnum | TransaksiPembelianScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model TransaksiPembelian
   */

  export type AggregateTransaksiPembelian = {
    _count: TransaksiPembelianCountAggregateOutputType | null
    _min: TransaksiPembelianMinAggregateOutputType | null
    _max: TransaksiPembelianMaxAggregateOutputType | null
  }

  export type TransaksiPembelianMinAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: string | null
    supplierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiPembelianMaxAggregateOutputType = {
    id: string | null
    tanggal: Date | null
    status: string | null
    supplierId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransaksiPembelianCountAggregateOutputType = {
    id: number
    tanggal: number
    status: number
    supplierId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransaksiPembelianMinAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiPembelianMaxAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransaksiPembelianCountAggregateInputType = {
    id?: true
    tanggal?: true
    status?: true
    supplierId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransaksiPembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiPembelian to aggregate.
     */
    where?: TransaksiPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPembelians to fetch.
     */
    orderBy?: TransaksiPembelianOrderByWithRelationInput | TransaksiPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransaksiPembelians
    **/
    _count?: true | TransaksiPembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiPembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiPembelianMaxAggregateInputType
  }

  export type GetTransaksiPembelianAggregateType<T extends TransaksiPembelianAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksiPembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksiPembelian[P]>
      : GetScalarType<T[P], AggregateTransaksiPembelian[P]>
  }




  export type TransaksiPembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiPembelianWhereInput
    orderBy?: TransaksiPembelianOrderByWithAggregationInput | TransaksiPembelianOrderByWithAggregationInput[]
    by: TransaksiPembelianScalarFieldEnum[] | TransaksiPembelianScalarFieldEnum
    having?: TransaksiPembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiPembelianCountAggregateInputType | true
    _min?: TransaksiPembelianMinAggregateInputType
    _max?: TransaksiPembelianMaxAggregateInputType
  }

  export type TransaksiPembelianGroupByOutputType = {
    id: string
    tanggal: Date
    status: string
    supplierId: string
    createdAt: Date
    updatedAt: Date
    _count: TransaksiPembelianCountAggregateOutputType | null
    _min: TransaksiPembelianMinAggregateOutputType | null
    _max: TransaksiPembelianMaxAggregateOutputType | null
  }

  type GetTransaksiPembelianGroupByPayload<T extends TransaksiPembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiPembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiPembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiPembelianGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiPembelianGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiPembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    details?: boolean | TransaksiPembelian$detailsArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    _count?: boolean | TransaksiPembelianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiPembelian"]>

  export type TransaksiPembelianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiPembelian"]>

  export type TransaksiPembelianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    status?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiPembelian"]>

  export type TransaksiPembelianSelectScalar = {
    id?: boolean
    tanggal?: boolean
    status?: boolean
    supplierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransaksiPembelianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "status" | "supplierId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaksiPembelian"]>
  export type TransaksiPembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | TransaksiPembelian$detailsArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    _count?: boolean | TransaksiPembelianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransaksiPembelianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type TransaksiPembelianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $TransaksiPembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransaksiPembelian"
    objects: {
      details: Prisma.$DetailPembelianPayload<ExtArgs>[]
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanggal: Date
      status: string
      supplierId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaksiPembelian"]>
    composites: {}
  }

  type TransaksiPembelianGetPayload<S extends boolean | null | undefined | TransaksiPembelianDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPembelianPayload, S>

  type TransaksiPembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiPembelianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiPembelianCountAggregateInputType | true
    }

  export interface TransaksiPembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransaksiPembelian'], meta: { name: 'TransaksiPembelian' } }
    /**
     * Find zero or one TransaksiPembelian that matches the filter.
     * @param {TransaksiPembelianFindUniqueArgs} args - Arguments to find a TransaksiPembelian
     * @example
     * // Get one TransaksiPembelian
     * const transaksiPembelian = await prisma.transaksiPembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiPembelianFindUniqueArgs>(args: SelectSubset<T, TransaksiPembelianFindUniqueArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransaksiPembelian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiPembelianFindUniqueOrThrowArgs} args - Arguments to find a TransaksiPembelian
     * @example
     * // Get one TransaksiPembelian
     * const transaksiPembelian = await prisma.transaksiPembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiPembelianFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiPembelianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiPembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPembelianFindFirstArgs} args - Arguments to find a TransaksiPembelian
     * @example
     * // Get one TransaksiPembelian
     * const transaksiPembelian = await prisma.transaksiPembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiPembelianFindFirstArgs>(args?: SelectSubset<T, TransaksiPembelianFindFirstArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiPembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPembelianFindFirstOrThrowArgs} args - Arguments to find a TransaksiPembelian
     * @example
     * // Get one TransaksiPembelian
     * const transaksiPembelian = await prisma.transaksiPembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiPembelianFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiPembelianFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransaksiPembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPembelianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaksiPembelians
     * const transaksiPembelians = await prisma.transaksiPembelian.findMany()
     * 
     * // Get first 10 TransaksiPembelians
     * const transaksiPembelians = await prisma.transaksiPembelian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiPembelianWithIdOnly = await prisma.transaksiPembelian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiPembelianFindManyArgs>(args?: SelectSubset<T, TransaksiPembelianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransaksiPembelian.
     * @param {TransaksiPembelianCreateArgs} args - Arguments to create a TransaksiPembelian.
     * @example
     * // Create one TransaksiPembelian
     * const TransaksiPembelian = await prisma.transaksiPembelian.create({
     *   data: {
     *     // ... data to create a TransaksiPembelian
     *   }
     * })
     * 
     */
    create<T extends TransaksiPembelianCreateArgs>(args: SelectSubset<T, TransaksiPembelianCreateArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransaksiPembelians.
     * @param {TransaksiPembelianCreateManyArgs} args - Arguments to create many TransaksiPembelians.
     * @example
     * // Create many TransaksiPembelians
     * const transaksiPembelian = await prisma.transaksiPembelian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiPembelianCreateManyArgs>(args?: SelectSubset<T, TransaksiPembelianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransaksiPembelians and returns the data saved in the database.
     * @param {TransaksiPembelianCreateManyAndReturnArgs} args - Arguments to create many TransaksiPembelians.
     * @example
     * // Create many TransaksiPembelians
     * const transaksiPembelian = await prisma.transaksiPembelian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransaksiPembelians and only return the `id`
     * const transaksiPembelianWithIdOnly = await prisma.transaksiPembelian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransaksiPembelianCreateManyAndReturnArgs>(args?: SelectSubset<T, TransaksiPembelianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransaksiPembelian.
     * @param {TransaksiPembelianDeleteArgs} args - Arguments to delete one TransaksiPembelian.
     * @example
     * // Delete one TransaksiPembelian
     * const TransaksiPembelian = await prisma.transaksiPembelian.delete({
     *   where: {
     *     // ... filter to delete one TransaksiPembelian
     *   }
     * })
     * 
     */
    delete<T extends TransaksiPembelianDeleteArgs>(args: SelectSubset<T, TransaksiPembelianDeleteArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransaksiPembelian.
     * @param {TransaksiPembelianUpdateArgs} args - Arguments to update one TransaksiPembelian.
     * @example
     * // Update one TransaksiPembelian
     * const transaksiPembelian = await prisma.transaksiPembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiPembelianUpdateArgs>(args: SelectSubset<T, TransaksiPembelianUpdateArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransaksiPembelians.
     * @param {TransaksiPembelianDeleteManyArgs} args - Arguments to filter TransaksiPembelians to delete.
     * @example
     * // Delete a few TransaksiPembelians
     * const { count } = await prisma.transaksiPembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiPembelianDeleteManyArgs>(args?: SelectSubset<T, TransaksiPembelianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaksiPembelians
     * const transaksiPembelian = await prisma.transaksiPembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiPembelianUpdateManyArgs>(args: SelectSubset<T, TransaksiPembelianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiPembelians and returns the data updated in the database.
     * @param {TransaksiPembelianUpdateManyAndReturnArgs} args - Arguments to update many TransaksiPembelians.
     * @example
     * // Update many TransaksiPembelians
     * const transaksiPembelian = await prisma.transaksiPembelian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransaksiPembelians and only return the `id`
     * const transaksiPembelianWithIdOnly = await prisma.transaksiPembelian.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransaksiPembelianUpdateManyAndReturnArgs>(args: SelectSubset<T, TransaksiPembelianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransaksiPembelian.
     * @param {TransaksiPembelianUpsertArgs} args - Arguments to update or create a TransaksiPembelian.
     * @example
     * // Update or create a TransaksiPembelian
     * const transaksiPembelian = await prisma.transaksiPembelian.upsert({
     *   create: {
     *     // ... data to create a TransaksiPembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaksiPembelian we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiPembelianUpsertArgs>(args: SelectSubset<T, TransaksiPembelianUpsertArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransaksiPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPembelianCountArgs} args - Arguments to filter TransaksiPembelians to count.
     * @example
     * // Count the number of TransaksiPembelians
     * const count = await prisma.transaksiPembelian.count({
     *   where: {
     *     // ... the filter for the TransaksiPembelians we want to count
     *   }
     * })
    **/
    count<T extends TransaksiPembelianCountArgs>(
      args?: Subset<T, TransaksiPembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiPembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaksiPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiPembelianAggregateArgs>(args: Subset<T, TransaksiPembelianAggregateArgs>): Prisma.PrismaPromise<GetTransaksiPembelianAggregateType<T>>

    /**
     * Group by TransaksiPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiPembelianGroupByArgs} args - Group by arguments.
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
      T extends TransaksiPembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiPembelianGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiPembelianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransaksiPembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransaksiPembelian model
   */
  readonly fields: TransaksiPembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransaksiPembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiPembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends TransaksiPembelian$detailsArgs<ExtArgs> = {}>(args?: Subset<T, TransaksiPembelian$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransaksiPembelian model
   */
  interface TransaksiPembelianFieldRefs {
    readonly id: FieldRef<"TransaksiPembelian", 'String'>
    readonly tanggal: FieldRef<"TransaksiPembelian", 'DateTime'>
    readonly status: FieldRef<"TransaksiPembelian", 'String'>
    readonly supplierId: FieldRef<"TransaksiPembelian", 'String'>
    readonly createdAt: FieldRef<"TransaksiPembelian", 'DateTime'>
    readonly updatedAt: FieldRef<"TransaksiPembelian", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransaksiPembelian findUnique
   */
  export type TransaksiPembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPembelian to fetch.
     */
    where: TransaksiPembelianWhereUniqueInput
  }

  /**
   * TransaksiPembelian findUniqueOrThrow
   */
  export type TransaksiPembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPembelian to fetch.
     */
    where: TransaksiPembelianWhereUniqueInput
  }

  /**
   * TransaksiPembelian findFirst
   */
  export type TransaksiPembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPembelian to fetch.
     */
    where?: TransaksiPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPembelians to fetch.
     */
    orderBy?: TransaksiPembelianOrderByWithRelationInput | TransaksiPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiPembelians.
     */
    cursor?: TransaksiPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiPembelians.
     */
    distinct?: TransaksiPembelianScalarFieldEnum | TransaksiPembelianScalarFieldEnum[]
  }

  /**
   * TransaksiPembelian findFirstOrThrow
   */
  export type TransaksiPembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPembelian to fetch.
     */
    where?: TransaksiPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPembelians to fetch.
     */
    orderBy?: TransaksiPembelianOrderByWithRelationInput | TransaksiPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiPembelians.
     */
    cursor?: TransaksiPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiPembelians.
     */
    distinct?: TransaksiPembelianScalarFieldEnum | TransaksiPembelianScalarFieldEnum[]
  }

  /**
   * TransaksiPembelian findMany
   */
  export type TransaksiPembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiPembelians to fetch.
     */
    where?: TransaksiPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiPembelians to fetch.
     */
    orderBy?: TransaksiPembelianOrderByWithRelationInput | TransaksiPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransaksiPembelians.
     */
    cursor?: TransaksiPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiPembelians.
     */
    distinct?: TransaksiPembelianScalarFieldEnum | TransaksiPembelianScalarFieldEnum[]
  }

  /**
   * TransaksiPembelian create
   */
  export type TransaksiPembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a TransaksiPembelian.
     */
    data: XOR<TransaksiPembelianCreateInput, TransaksiPembelianUncheckedCreateInput>
  }

  /**
   * TransaksiPembelian createMany
   */
  export type TransaksiPembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransaksiPembelians.
     */
    data: TransaksiPembelianCreateManyInput | TransaksiPembelianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransaksiPembelian createManyAndReturn
   */
  export type TransaksiPembelianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * The data used to create many TransaksiPembelians.
     */
    data: TransaksiPembelianCreateManyInput | TransaksiPembelianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransaksiPembelian update
   */
  export type TransaksiPembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a TransaksiPembelian.
     */
    data: XOR<TransaksiPembelianUpdateInput, TransaksiPembelianUncheckedUpdateInput>
    /**
     * Choose, which TransaksiPembelian to update.
     */
    where: TransaksiPembelianWhereUniqueInput
  }

  /**
   * TransaksiPembelian updateMany
   */
  export type TransaksiPembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransaksiPembelians.
     */
    data: XOR<TransaksiPembelianUpdateManyMutationInput, TransaksiPembelianUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiPembelians to update
     */
    where?: TransaksiPembelianWhereInput
    /**
     * Limit how many TransaksiPembelians to update.
     */
    limit?: number
  }

  /**
   * TransaksiPembelian updateManyAndReturn
   */
  export type TransaksiPembelianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * The data used to update TransaksiPembelians.
     */
    data: XOR<TransaksiPembelianUpdateManyMutationInput, TransaksiPembelianUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiPembelians to update
     */
    where?: TransaksiPembelianWhereInput
    /**
     * Limit how many TransaksiPembelians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransaksiPembelian upsert
   */
  export type TransaksiPembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the TransaksiPembelian to update in case it exists.
     */
    where: TransaksiPembelianWhereUniqueInput
    /**
     * In case the TransaksiPembelian found by the `where` argument doesn't exist, create a new TransaksiPembelian with this data.
     */
    create: XOR<TransaksiPembelianCreateInput, TransaksiPembelianUncheckedCreateInput>
    /**
     * In case the TransaksiPembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiPembelianUpdateInput, TransaksiPembelianUncheckedUpdateInput>
  }

  /**
   * TransaksiPembelian delete
   */
  export type TransaksiPembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
    /**
     * Filter which TransaksiPembelian to delete.
     */
    where: TransaksiPembelianWhereUniqueInput
  }

  /**
   * TransaksiPembelian deleteMany
   */
  export type TransaksiPembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiPembelians to delete
     */
    where?: TransaksiPembelianWhereInput
    /**
     * Limit how many TransaksiPembelians to delete.
     */
    limit?: number
  }

  /**
   * TransaksiPembelian.details
   */
  export type TransaksiPembelian$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    where?: DetailPembelianWhereInput
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    cursor?: DetailPembelianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }

  /**
   * TransaksiPembelian without action
   */
  export type TransaksiPembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiPembelian
     */
    select?: TransaksiPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiPembelian
     */
    omit?: TransaksiPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiPembelianInclude<ExtArgs> | null
  }


  /**
   * Model DetailPembelian
   */

  export type AggregateDetailPembelian = {
    _count: DetailPembelianCountAggregateOutputType | null
    _avg: DetailPembelianAvgAggregateOutputType | null
    _sum: DetailPembelianSumAggregateOutputType | null
    _min: DetailPembelianMinAggregateOutputType | null
    _max: DetailPembelianMaxAggregateOutputType | null
  }

  export type DetailPembelianAvgAggregateOutputType = {
    quantityOrdered: number | null
    quantityReceived: number | null
  }

  export type DetailPembelianSumAggregateOutputType = {
    quantityOrdered: number | null
    quantityReceived: number | null
  }

  export type DetailPembelianMinAggregateOutputType = {
    id: string | null
    quantityOrdered: number | null
    quantityReceived: number | null
    transaksiId: string | null
    obatId: string | null
  }

  export type DetailPembelianMaxAggregateOutputType = {
    id: string | null
    quantityOrdered: number | null
    quantityReceived: number | null
    transaksiId: string | null
    obatId: string | null
  }

  export type DetailPembelianCountAggregateOutputType = {
    id: number
    quantityOrdered: number
    quantityReceived: number
    transaksiId: number
    obatId: number
    _all: number
  }


  export type DetailPembelianAvgAggregateInputType = {
    quantityOrdered?: true
    quantityReceived?: true
  }

  export type DetailPembelianSumAggregateInputType = {
    quantityOrdered?: true
    quantityReceived?: true
  }

  export type DetailPembelianMinAggregateInputType = {
    id?: true
    quantityOrdered?: true
    quantityReceived?: true
    transaksiId?: true
    obatId?: true
  }

  export type DetailPembelianMaxAggregateInputType = {
    id?: true
    quantityOrdered?: true
    quantityReceived?: true
    transaksiId?: true
    obatId?: true
  }

  export type DetailPembelianCountAggregateInputType = {
    id?: true
    quantityOrdered?: true
    quantityReceived?: true
    transaksiId?: true
    obatId?: true
    _all?: true
  }

  export type DetailPembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPembelian to aggregate.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailPembelians
    **/
    _count?: true | DetailPembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailPembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailPembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailPembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailPembelianMaxAggregateInputType
  }

  export type GetDetailPembelianAggregateType<T extends DetailPembelianAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailPembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailPembelian[P]>
      : GetScalarType<T[P], AggregateDetailPembelian[P]>
  }




  export type DetailPembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailPembelianWhereInput
    orderBy?: DetailPembelianOrderByWithAggregationInput | DetailPembelianOrderByWithAggregationInput[]
    by: DetailPembelianScalarFieldEnum[] | DetailPembelianScalarFieldEnum
    having?: DetailPembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailPembelianCountAggregateInputType | true
    _avg?: DetailPembelianAvgAggregateInputType
    _sum?: DetailPembelianSumAggregateInputType
    _min?: DetailPembelianMinAggregateInputType
    _max?: DetailPembelianMaxAggregateInputType
  }

  export type DetailPembelianGroupByOutputType = {
    id: string
    quantityOrdered: number
    quantityReceived: number
    transaksiId: string
    obatId: string
    _count: DetailPembelianCountAggregateOutputType | null
    _avg: DetailPembelianAvgAggregateOutputType | null
    _sum: DetailPembelianSumAggregateOutputType | null
    _min: DetailPembelianMinAggregateOutputType | null
    _max: DetailPembelianMaxAggregateOutputType | null
  }

  type GetDetailPembelianGroupByPayload<T extends DetailPembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailPembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailPembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailPembelianGroupByOutputType[P]>
            : GetScalarType<T[P], DetailPembelianGroupByOutputType[P]>
        }
      >
    >


  export type DetailPembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantityOrdered?: boolean
    quantityReceived?: boolean
    transaksiId?: boolean
    obatId?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPembelianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPembelian"]>

  export type DetailPembelianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantityOrdered?: boolean
    quantityReceived?: boolean
    transaksiId?: boolean
    obatId?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPembelianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPembelian"]>

  export type DetailPembelianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantityOrdered?: boolean
    quantityReceived?: boolean
    transaksiId?: boolean
    obatId?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPembelianDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailPembelian"]>

  export type DetailPembelianSelectScalar = {
    id?: boolean
    quantityOrdered?: boolean
    quantityReceived?: boolean
    transaksiId?: boolean
    obatId?: boolean
  }

  export type DetailPembelianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantityOrdered" | "quantityReceived" | "transaksiId" | "obatId", ExtArgs["result"]["detailPembelian"]>
  export type DetailPembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPembelianDefaultArgs<ExtArgs>
  }
  export type DetailPembelianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPembelianDefaultArgs<ExtArgs>
  }
  export type DetailPembelianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
    transaksi?: boolean | TransaksiPembelianDefaultArgs<ExtArgs>
  }

  export type $DetailPembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailPembelian"
    objects: {
      obat: Prisma.$ObatPayload<ExtArgs>
      transaksi: Prisma.$TransaksiPembelianPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantityOrdered: number
      quantityReceived: number
      transaksiId: string
      obatId: string
    }, ExtArgs["result"]["detailPembelian"]>
    composites: {}
  }

  type DetailPembelianGetPayload<S extends boolean | null | undefined | DetailPembelianDefaultArgs> = $Result.GetResult<Prisma.$DetailPembelianPayload, S>

  type DetailPembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailPembelianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailPembelianCountAggregateInputType | true
    }

  export interface DetailPembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailPembelian'], meta: { name: 'DetailPembelian' } }
    /**
     * Find zero or one DetailPembelian that matches the filter.
     * @param {DetailPembelianFindUniqueArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailPembelianFindUniqueArgs>(args: SelectSubset<T, DetailPembelianFindUniqueArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailPembelian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailPembelianFindUniqueOrThrowArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailPembelianFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailPembelianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailPembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianFindFirstArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailPembelianFindFirstArgs>(args?: SelectSubset<T, DetailPembelianFindFirstArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailPembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianFindFirstOrThrowArgs} args - Arguments to find a DetailPembelian
     * @example
     * // Get one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailPembelianFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailPembelianFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailPembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailPembelians
     * const detailPembelians = await prisma.detailPembelian.findMany()
     * 
     * // Get first 10 DetailPembelians
     * const detailPembelians = await prisma.detailPembelian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailPembelianWithIdOnly = await prisma.detailPembelian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailPembelianFindManyArgs>(args?: SelectSubset<T, DetailPembelianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailPembelian.
     * @param {DetailPembelianCreateArgs} args - Arguments to create a DetailPembelian.
     * @example
     * // Create one DetailPembelian
     * const DetailPembelian = await prisma.detailPembelian.create({
     *   data: {
     *     // ... data to create a DetailPembelian
     *   }
     * })
     * 
     */
    create<T extends DetailPembelianCreateArgs>(args: SelectSubset<T, DetailPembelianCreateArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailPembelians.
     * @param {DetailPembelianCreateManyArgs} args - Arguments to create many DetailPembelians.
     * @example
     * // Create many DetailPembelians
     * const detailPembelian = await prisma.detailPembelian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailPembelianCreateManyArgs>(args?: SelectSubset<T, DetailPembelianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailPembelians and returns the data saved in the database.
     * @param {DetailPembelianCreateManyAndReturnArgs} args - Arguments to create many DetailPembelians.
     * @example
     * // Create many DetailPembelians
     * const detailPembelian = await prisma.detailPembelian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailPembelians and only return the `id`
     * const detailPembelianWithIdOnly = await prisma.detailPembelian.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailPembelianCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailPembelianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailPembelian.
     * @param {DetailPembelianDeleteArgs} args - Arguments to delete one DetailPembelian.
     * @example
     * // Delete one DetailPembelian
     * const DetailPembelian = await prisma.detailPembelian.delete({
     *   where: {
     *     // ... filter to delete one DetailPembelian
     *   }
     * })
     * 
     */
    delete<T extends DetailPembelianDeleteArgs>(args: SelectSubset<T, DetailPembelianDeleteArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailPembelian.
     * @param {DetailPembelianUpdateArgs} args - Arguments to update one DetailPembelian.
     * @example
     * // Update one DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailPembelianUpdateArgs>(args: SelectSubset<T, DetailPembelianUpdateArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailPembelians.
     * @param {DetailPembelianDeleteManyArgs} args - Arguments to filter DetailPembelians to delete.
     * @example
     * // Delete a few DetailPembelians
     * const { count } = await prisma.detailPembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailPembelianDeleteManyArgs>(args?: SelectSubset<T, DetailPembelianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailPembelians
     * const detailPembelian = await prisma.detailPembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailPembelianUpdateManyArgs>(args: SelectSubset<T, DetailPembelianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailPembelians and returns the data updated in the database.
     * @param {DetailPembelianUpdateManyAndReturnArgs} args - Arguments to update many DetailPembelians.
     * @example
     * // Update many DetailPembelians
     * const detailPembelian = await prisma.detailPembelian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailPembelians and only return the `id`
     * const detailPembelianWithIdOnly = await prisma.detailPembelian.updateManyAndReturn({
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
    updateManyAndReturn<T extends DetailPembelianUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailPembelianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailPembelian.
     * @param {DetailPembelianUpsertArgs} args - Arguments to update or create a DetailPembelian.
     * @example
     * // Update or create a DetailPembelian
     * const detailPembelian = await prisma.detailPembelian.upsert({
     *   create: {
     *     // ... data to create a DetailPembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailPembelian we want to update
     *   }
     * })
     */
    upsert<T extends DetailPembelianUpsertArgs>(args: SelectSubset<T, DetailPembelianUpsertArgs<ExtArgs>>): Prisma__DetailPembelianClient<$Result.GetResult<Prisma.$DetailPembelianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianCountArgs} args - Arguments to filter DetailPembelians to count.
     * @example
     * // Count the number of DetailPembelians
     * const count = await prisma.detailPembelian.count({
     *   where: {
     *     // ... the filter for the DetailPembelians we want to count
     *   }
     * })
    **/
    count<T extends DetailPembelianCountArgs>(
      args?: Subset<T, DetailPembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailPembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailPembelianAggregateArgs>(args: Subset<T, DetailPembelianAggregateArgs>): Prisma.PrismaPromise<GetDetailPembelianAggregateType<T>>

    /**
     * Group by DetailPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailPembelianGroupByArgs} args - Group by arguments.
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
      T extends DetailPembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailPembelianGroupByArgs['orderBy'] }
        : { orderBy?: DetailPembelianGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailPembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailPembelian model
   */
  readonly fields: DetailPembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailPembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailPembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obat<T extends ObatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObatDefaultArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends TransaksiPembelianDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransaksiPembelianDefaultArgs<ExtArgs>>): Prisma__TransaksiPembelianClient<$Result.GetResult<Prisma.$TransaksiPembelianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailPembelian model
   */
  interface DetailPembelianFieldRefs {
    readonly id: FieldRef<"DetailPembelian", 'String'>
    readonly quantityOrdered: FieldRef<"DetailPembelian", 'Int'>
    readonly quantityReceived: FieldRef<"DetailPembelian", 'Int'>
    readonly transaksiId: FieldRef<"DetailPembelian", 'String'>
    readonly obatId: FieldRef<"DetailPembelian", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetailPembelian findUnique
   */
  export type DetailPembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where: DetailPembelianWhereUniqueInput
  }

  /**
   * DetailPembelian findUniqueOrThrow
   */
  export type DetailPembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where: DetailPembelianWhereUniqueInput
  }

  /**
   * DetailPembelian findFirst
   */
  export type DetailPembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPembelians.
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPembelians.
     */
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }

  /**
   * DetailPembelian findFirstOrThrow
   */
  export type DetailPembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelian to fetch.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailPembelians.
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPembelians.
     */
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }

  /**
   * DetailPembelian findMany
   */
  export type DetailPembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter, which DetailPembelians to fetch.
     */
    where?: DetailPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailPembelians to fetch.
     */
    orderBy?: DetailPembelianOrderByWithRelationInput | DetailPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailPembelians.
     */
    cursor?: DetailPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailPembelians.
     */
    distinct?: DetailPembelianScalarFieldEnum | DetailPembelianScalarFieldEnum[]
  }

  /**
   * DetailPembelian create
   */
  export type DetailPembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailPembelian.
     */
    data: XOR<DetailPembelianCreateInput, DetailPembelianUncheckedCreateInput>
  }

  /**
   * DetailPembelian createMany
   */
  export type DetailPembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailPembelians.
     */
    data: DetailPembelianCreateManyInput | DetailPembelianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailPembelian createManyAndReturn
   */
  export type DetailPembelianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * The data used to create many DetailPembelians.
     */
    data: DetailPembelianCreateManyInput | DetailPembelianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailPembelian update
   */
  export type DetailPembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailPembelian.
     */
    data: XOR<DetailPembelianUpdateInput, DetailPembelianUncheckedUpdateInput>
    /**
     * Choose, which DetailPembelian to update.
     */
    where: DetailPembelianWhereUniqueInput
  }

  /**
   * DetailPembelian updateMany
   */
  export type DetailPembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailPembelians.
     */
    data: XOR<DetailPembelianUpdateManyMutationInput, DetailPembelianUncheckedUpdateManyInput>
    /**
     * Filter which DetailPembelians to update
     */
    where?: DetailPembelianWhereInput
    /**
     * Limit how many DetailPembelians to update.
     */
    limit?: number
  }

  /**
   * DetailPembelian updateManyAndReturn
   */
  export type DetailPembelianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * The data used to update DetailPembelians.
     */
    data: XOR<DetailPembelianUpdateManyMutationInput, DetailPembelianUncheckedUpdateManyInput>
    /**
     * Filter which DetailPembelians to update
     */
    where?: DetailPembelianWhereInput
    /**
     * Limit how many DetailPembelians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailPembelian upsert
   */
  export type DetailPembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailPembelian to update in case it exists.
     */
    where: DetailPembelianWhereUniqueInput
    /**
     * In case the DetailPembelian found by the `where` argument doesn't exist, create a new DetailPembelian with this data.
     */
    create: XOR<DetailPembelianCreateInput, DetailPembelianUncheckedCreateInput>
    /**
     * In case the DetailPembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailPembelianUpdateInput, DetailPembelianUncheckedUpdateInput>
  }

  /**
   * DetailPembelian delete
   */
  export type DetailPembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
    /**
     * Filter which DetailPembelian to delete.
     */
    where: DetailPembelianWhereUniqueInput
  }

  /**
   * DetailPembelian deleteMany
   */
  export type DetailPembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailPembelians to delete
     */
    where?: DetailPembelianWhereInput
    /**
     * Limit how many DetailPembelians to delete.
     */
    limit?: number
  }

  /**
   * DetailPembelian without action
   */
  export type DetailPembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailPembelian
     */
    select?: DetailPembelianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailPembelian
     */
    omit?: DetailPembelianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailPembelianInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resetPasswordExpires: 'resetPasswordExpires',
    resetPasswordToken: 'resetPasswordToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ObatScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    hargaJual: 'hargaJual',
    satuan: 'satuan',
    lokasiRak: 'lokasiRak',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image'
  };

  export type ObatScalarFieldEnum = (typeof ObatScalarFieldEnum)[keyof typeof ObatScalarFieldEnum]


  export const StokScalarFieldEnum: {
    id: 'id',
    jumlah: 'jumlah',
    obatId: 'obatId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    tanggalKedaluwarsa: 'tanggalKedaluwarsa'
  };

  export type StokScalarFieldEnum = (typeof StokScalarFieldEnum)[keyof typeof StokScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    type: 'type',
    quantity: 'quantity',
    createdAt: 'createdAt',
    stokId: 'stokId'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const TransaksiPenjualanScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransaksiPenjualanScalarFieldEnum = (typeof TransaksiPenjualanScalarFieldEnum)[keyof typeof TransaksiPenjualanScalarFieldEnum]


  export const DetailPenjualanScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    harga: 'harga',
    transaksiId: 'transaksiId',
    obatId: 'obatId'
  };

  export type DetailPenjualanScalarFieldEnum = (typeof DetailPenjualanScalarFieldEnum)[keyof typeof DetailPenjualanScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alamat: 'alamat',
    telepon: 'telepon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const TransaksiPembelianScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    status: 'status',
    supplierId: 'supplierId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransaksiPembelianScalarFieldEnum = (typeof TransaksiPembelianScalarFieldEnum)[keyof typeof TransaksiPembelianScalarFieldEnum]


  export const DetailPembelianScalarFieldEnum: {
    id: 'id',
    quantityOrdered: 'quantityOrdered',
    quantityReceived: 'quantityReceived',
    transaksiId: 'transaksiId',
    obatId: 'obatId'
  };

  export type DetailPembelianScalarFieldEnum = (typeof DetailPembelianScalarFieldEnum)[keyof typeof DetailPembelianScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'MovementType[]'
   */
  export type ListEnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ObatWhereInput = {
    AND?: ObatWhereInput | ObatWhereInput[]
    OR?: ObatWhereInput[]
    NOT?: ObatWhereInput | ObatWhereInput[]
    id?: StringFilter<"Obat"> | string
    nama?: StringFilter<"Obat"> | string
    hargaJual?: IntFilter<"Obat"> | number
    satuan?: StringFilter<"Obat"> | string
    lokasiRak?: StringNullableFilter<"Obat"> | string | null
    createdAt?: DateTimeFilter<"Obat"> | Date | string
    updatedAt?: DateTimeFilter<"Obat"> | Date | string
    image?: StringNullableFilter<"Obat"> | string | null
    detailPembelian?: DetailPembelianListRelationFilter
    detailPenjualan?: DetailPenjualanListRelationFilter
    stok?: StokListRelationFilter
  }

  export type ObatOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    hargaJual?: SortOrder
    satuan?: SortOrder
    lokasiRak?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    detailPembelian?: DetailPembelianOrderByRelationAggregateInput
    detailPenjualan?: DetailPenjualanOrderByRelationAggregateInput
    stok?: StokOrderByRelationAggregateInput
  }

  export type ObatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObatWhereInput | ObatWhereInput[]
    OR?: ObatWhereInput[]
    NOT?: ObatWhereInput | ObatWhereInput[]
    nama?: StringFilter<"Obat"> | string
    hargaJual?: IntFilter<"Obat"> | number
    satuan?: StringFilter<"Obat"> | string
    lokasiRak?: StringNullableFilter<"Obat"> | string | null
    createdAt?: DateTimeFilter<"Obat"> | Date | string
    updatedAt?: DateTimeFilter<"Obat"> | Date | string
    image?: StringNullableFilter<"Obat"> | string | null
    detailPembelian?: DetailPembelianListRelationFilter
    detailPenjualan?: DetailPenjualanListRelationFilter
    stok?: StokListRelationFilter
  }, "id">

  export type ObatOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    hargaJual?: SortOrder
    satuan?: SortOrder
    lokasiRak?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: ObatCountOrderByAggregateInput
    _avg?: ObatAvgOrderByAggregateInput
    _max?: ObatMaxOrderByAggregateInput
    _min?: ObatMinOrderByAggregateInput
    _sum?: ObatSumOrderByAggregateInput
  }

  export type ObatScalarWhereWithAggregatesInput = {
    AND?: ObatScalarWhereWithAggregatesInput | ObatScalarWhereWithAggregatesInput[]
    OR?: ObatScalarWhereWithAggregatesInput[]
    NOT?: ObatScalarWhereWithAggregatesInput | ObatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Obat"> | string
    nama?: StringWithAggregatesFilter<"Obat"> | string
    hargaJual?: IntWithAggregatesFilter<"Obat"> | number
    satuan?: StringWithAggregatesFilter<"Obat"> | string
    lokasiRak?: StringNullableWithAggregatesFilter<"Obat"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Obat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Obat"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Obat"> | string | null
  }

  export type StokWhereInput = {
    AND?: StokWhereInput | StokWhereInput[]
    OR?: StokWhereInput[]
    NOT?: StokWhereInput | StokWhereInput[]
    id?: StringFilter<"Stok"> | string
    jumlah?: IntFilter<"Stok"> | number
    obatId?: StringFilter<"Stok"> | string
    updatedAt?: DateTimeFilter<"Stok"> | Date | string
    createdAt?: DateTimeFilter<"Stok"> | Date | string
    tanggalKedaluwarsa?: DateTimeFilter<"Stok"> | Date | string
    stockMovements?: StockMovementListRelationFilter
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }

  export type StokOrderByWithRelationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    obatId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    tanggalKedaluwarsa?: SortOrder
    stockMovements?: StockMovementOrderByRelationAggregateInput
    obat?: ObatOrderByWithRelationInput
  }

  export type StokWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StokWhereInput | StokWhereInput[]
    OR?: StokWhereInput[]
    NOT?: StokWhereInput | StokWhereInput[]
    jumlah?: IntFilter<"Stok"> | number
    obatId?: StringFilter<"Stok"> | string
    updatedAt?: DateTimeFilter<"Stok"> | Date | string
    createdAt?: DateTimeFilter<"Stok"> | Date | string
    tanggalKedaluwarsa?: DateTimeFilter<"Stok"> | Date | string
    stockMovements?: StockMovementListRelationFilter
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }, "id">

  export type StokOrderByWithAggregationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    obatId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    tanggalKedaluwarsa?: SortOrder
    _count?: StokCountOrderByAggregateInput
    _avg?: StokAvgOrderByAggregateInput
    _max?: StokMaxOrderByAggregateInput
    _min?: StokMinOrderByAggregateInput
    _sum?: StokSumOrderByAggregateInput
  }

  export type StokScalarWhereWithAggregatesInput = {
    AND?: StokScalarWhereWithAggregatesInput | StokScalarWhereWithAggregatesInput[]
    OR?: StokScalarWhereWithAggregatesInput[]
    NOT?: StokScalarWhereWithAggregatesInput | StokScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stok"> | string
    jumlah?: IntWithAggregatesFilter<"Stok"> | number
    obatId?: StringWithAggregatesFilter<"Stok"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stok"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Stok"> | Date | string
    tanggalKedaluwarsa?: DateTimeWithAggregatesFilter<"Stok"> | Date | string
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    type?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntFilter<"StockMovement"> | number
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    stokId?: StringFilter<"StockMovement"> | string
    stok?: XOR<StokScalarRelationFilter, StokWhereInput>
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    stokId?: SortOrder
    stok?: StokOrderByWithRelationInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    type?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntFilter<"StockMovement"> | number
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    stokId?: StringFilter<"StockMovement"> | string
    stok?: XOR<StokScalarRelationFilter, StokWhereInput>
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    stokId?: SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    type?: EnumMovementTypeWithAggregatesFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntWithAggregatesFilter<"StockMovement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
    stokId?: StringWithAggregatesFilter<"StockMovement"> | string
  }

  export type TransaksiPenjualanWhereInput = {
    AND?: TransaksiPenjualanWhereInput | TransaksiPenjualanWhereInput[]
    OR?: TransaksiPenjualanWhereInput[]
    NOT?: TransaksiPenjualanWhereInput | TransaksiPenjualanWhereInput[]
    id?: StringFilter<"TransaksiPenjualan"> | string
    tanggal?: DateTimeFilter<"TransaksiPenjualan"> | Date | string
    total?: IntFilter<"TransaksiPenjualan"> | number
    createdAt?: DateTimeFilter<"TransaksiPenjualan"> | Date | string
    updatedAt?: DateTimeFilter<"TransaksiPenjualan"> | Date | string
    details?: DetailPenjualanListRelationFilter
  }

  export type TransaksiPenjualanOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    details?: DetailPenjualanOrderByRelationAggregateInput
  }

  export type TransaksiPenjualanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransaksiPenjualanWhereInput | TransaksiPenjualanWhereInput[]
    OR?: TransaksiPenjualanWhereInput[]
    NOT?: TransaksiPenjualanWhereInput | TransaksiPenjualanWhereInput[]
    tanggal?: DateTimeFilter<"TransaksiPenjualan"> | Date | string
    total?: IntFilter<"TransaksiPenjualan"> | number
    createdAt?: DateTimeFilter<"TransaksiPenjualan"> | Date | string
    updatedAt?: DateTimeFilter<"TransaksiPenjualan"> | Date | string
    details?: DetailPenjualanListRelationFilter
  }, "id">

  export type TransaksiPenjualanOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransaksiPenjualanCountOrderByAggregateInput
    _avg?: TransaksiPenjualanAvgOrderByAggregateInput
    _max?: TransaksiPenjualanMaxOrderByAggregateInput
    _min?: TransaksiPenjualanMinOrderByAggregateInput
    _sum?: TransaksiPenjualanSumOrderByAggregateInput
  }

  export type TransaksiPenjualanScalarWhereWithAggregatesInput = {
    AND?: TransaksiPenjualanScalarWhereWithAggregatesInput | TransaksiPenjualanScalarWhereWithAggregatesInput[]
    OR?: TransaksiPenjualanScalarWhereWithAggregatesInput[]
    NOT?: TransaksiPenjualanScalarWhereWithAggregatesInput | TransaksiPenjualanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransaksiPenjualan"> | string
    tanggal?: DateTimeWithAggregatesFilter<"TransaksiPenjualan"> | Date | string
    total?: IntWithAggregatesFilter<"TransaksiPenjualan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TransaksiPenjualan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransaksiPenjualan"> | Date | string
  }

  export type DetailPenjualanWhereInput = {
    AND?: DetailPenjualanWhereInput | DetailPenjualanWhereInput[]
    OR?: DetailPenjualanWhereInput[]
    NOT?: DetailPenjualanWhereInput | DetailPenjualanWhereInput[]
    id?: StringFilter<"DetailPenjualan"> | string
    quantity?: IntFilter<"DetailPenjualan"> | number
    harga?: IntFilter<"DetailPenjualan"> | number
    transaksiId?: StringFilter<"DetailPenjualan"> | string
    obatId?: StringFilter<"DetailPenjualan"> | string
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
    transaksi?: XOR<TransaksiPenjualanScalarRelationFilter, TransaksiPenjualanWhereInput>
  }

  export type DetailPenjualanOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    harga?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
    obat?: ObatOrderByWithRelationInput
    transaksi?: TransaksiPenjualanOrderByWithRelationInput
  }

  export type DetailPenjualanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetailPenjualanWhereInput | DetailPenjualanWhereInput[]
    OR?: DetailPenjualanWhereInput[]
    NOT?: DetailPenjualanWhereInput | DetailPenjualanWhereInput[]
    quantity?: IntFilter<"DetailPenjualan"> | number
    harga?: IntFilter<"DetailPenjualan"> | number
    transaksiId?: StringFilter<"DetailPenjualan"> | string
    obatId?: StringFilter<"DetailPenjualan"> | string
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
    transaksi?: XOR<TransaksiPenjualanScalarRelationFilter, TransaksiPenjualanWhereInput>
  }, "id">

  export type DetailPenjualanOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    harga?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
    _count?: DetailPenjualanCountOrderByAggregateInput
    _avg?: DetailPenjualanAvgOrderByAggregateInput
    _max?: DetailPenjualanMaxOrderByAggregateInput
    _min?: DetailPenjualanMinOrderByAggregateInput
    _sum?: DetailPenjualanSumOrderByAggregateInput
  }

  export type DetailPenjualanScalarWhereWithAggregatesInput = {
    AND?: DetailPenjualanScalarWhereWithAggregatesInput | DetailPenjualanScalarWhereWithAggregatesInput[]
    OR?: DetailPenjualanScalarWhereWithAggregatesInput[]
    NOT?: DetailPenjualanScalarWhereWithAggregatesInput | DetailPenjualanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetailPenjualan"> | string
    quantity?: IntWithAggregatesFilter<"DetailPenjualan"> | number
    harga?: IntWithAggregatesFilter<"DetailPenjualan"> | number
    transaksiId?: StringWithAggregatesFilter<"DetailPenjualan"> | string
    obatId?: StringWithAggregatesFilter<"DetailPenjualan"> | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    nama?: StringFilter<"Supplier"> | string
    alamat?: StringFilter<"Supplier"> | string
    telepon?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    transaksiPembelian?: TransaksiPembelianListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaksiPembelian?: TransaksiPembelianOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    nama?: StringFilter<"Supplier"> | string
    alamat?: StringFilter<"Supplier"> | string
    telepon?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    transaksiPembelian?: TransaksiPembelianListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    nama?: StringWithAggregatesFilter<"Supplier"> | string
    alamat?: StringWithAggregatesFilter<"Supplier"> | string
    telepon?: StringWithAggregatesFilter<"Supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type TransaksiPembelianWhereInput = {
    AND?: TransaksiPembelianWhereInput | TransaksiPembelianWhereInput[]
    OR?: TransaksiPembelianWhereInput[]
    NOT?: TransaksiPembelianWhereInput | TransaksiPembelianWhereInput[]
    id?: StringFilter<"TransaksiPembelian"> | string
    tanggal?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    status?: StringFilter<"TransaksiPembelian"> | string
    supplierId?: StringFilter<"TransaksiPembelian"> | string
    createdAt?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    updatedAt?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    details?: DetailPembelianListRelationFilter
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type TransaksiPembelianOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    details?: DetailPembelianOrderByRelationAggregateInput
    supplier?: SupplierOrderByWithRelationInput
  }

  export type TransaksiPembelianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransaksiPembelianWhereInput | TransaksiPembelianWhereInput[]
    OR?: TransaksiPembelianWhereInput[]
    NOT?: TransaksiPembelianWhereInput | TransaksiPembelianWhereInput[]
    tanggal?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    status?: StringFilter<"TransaksiPembelian"> | string
    supplierId?: StringFilter<"TransaksiPembelian"> | string
    createdAt?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    updatedAt?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    details?: DetailPembelianListRelationFilter
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type TransaksiPembelianOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransaksiPembelianCountOrderByAggregateInput
    _max?: TransaksiPembelianMaxOrderByAggregateInput
    _min?: TransaksiPembelianMinOrderByAggregateInput
  }

  export type TransaksiPembelianScalarWhereWithAggregatesInput = {
    AND?: TransaksiPembelianScalarWhereWithAggregatesInput | TransaksiPembelianScalarWhereWithAggregatesInput[]
    OR?: TransaksiPembelianScalarWhereWithAggregatesInput[]
    NOT?: TransaksiPembelianScalarWhereWithAggregatesInput | TransaksiPembelianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransaksiPembelian"> | string
    tanggal?: DateTimeWithAggregatesFilter<"TransaksiPembelian"> | Date | string
    status?: StringWithAggregatesFilter<"TransaksiPembelian"> | string
    supplierId?: StringWithAggregatesFilter<"TransaksiPembelian"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TransaksiPembelian"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransaksiPembelian"> | Date | string
  }

  export type DetailPembelianWhereInput = {
    AND?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    OR?: DetailPembelianWhereInput[]
    NOT?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    id?: StringFilter<"DetailPembelian"> | string
    quantityOrdered?: IntFilter<"DetailPembelian"> | number
    quantityReceived?: IntFilter<"DetailPembelian"> | number
    transaksiId?: StringFilter<"DetailPembelian"> | string
    obatId?: StringFilter<"DetailPembelian"> | string
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
    transaksi?: XOR<TransaksiPembelianScalarRelationFilter, TransaksiPembelianWhereInput>
  }

  export type DetailPembelianOrderByWithRelationInput = {
    id?: SortOrder
    quantityOrdered?: SortOrder
    quantityReceived?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
    obat?: ObatOrderByWithRelationInput
    transaksi?: TransaksiPembelianOrderByWithRelationInput
  }

  export type DetailPembelianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    OR?: DetailPembelianWhereInput[]
    NOT?: DetailPembelianWhereInput | DetailPembelianWhereInput[]
    quantityOrdered?: IntFilter<"DetailPembelian"> | number
    quantityReceived?: IntFilter<"DetailPembelian"> | number
    transaksiId?: StringFilter<"DetailPembelian"> | string
    obatId?: StringFilter<"DetailPembelian"> | string
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
    transaksi?: XOR<TransaksiPembelianScalarRelationFilter, TransaksiPembelianWhereInput>
  }, "id">

  export type DetailPembelianOrderByWithAggregationInput = {
    id?: SortOrder
    quantityOrdered?: SortOrder
    quantityReceived?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
    _count?: DetailPembelianCountOrderByAggregateInput
    _avg?: DetailPembelianAvgOrderByAggregateInput
    _max?: DetailPembelianMaxOrderByAggregateInput
    _min?: DetailPembelianMinOrderByAggregateInput
    _sum?: DetailPembelianSumOrderByAggregateInput
  }

  export type DetailPembelianScalarWhereWithAggregatesInput = {
    AND?: DetailPembelianScalarWhereWithAggregatesInput | DetailPembelianScalarWhereWithAggregatesInput[]
    OR?: DetailPembelianScalarWhereWithAggregatesInput[]
    NOT?: DetailPembelianScalarWhereWithAggregatesInput | DetailPembelianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetailPembelian"> | string
    quantityOrdered?: IntWithAggregatesFilter<"DetailPembelian"> | number
    quantityReceived?: IntWithAggregatesFilter<"DetailPembelian"> | number
    transaksiId?: StringWithAggregatesFilter<"DetailPembelian"> | string
    obatId?: StringWithAggregatesFilter<"DetailPembelian"> | string
  }

  export type UserCreateInput = {
    id?: string
    nama: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordExpires?: Date | string | null
    resetPasswordToken?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nama: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordExpires?: Date | string | null
    resetPasswordToken?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    nama: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    resetPasswordExpires?: Date | string | null
    resetPasswordToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObatCreateInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPembelian?: DetailPembelianCreateNestedManyWithoutObatInput
    detailPenjualan?: DetailPenjualanCreateNestedManyWithoutObatInput
    stok?: StokCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPembelian?: DetailPembelianUncheckedCreateNestedManyWithoutObatInput
    detailPenjualan?: DetailPenjualanUncheckedCreateNestedManyWithoutObatInput
    stok?: StokUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPembelian?: DetailPembelianUpdateManyWithoutObatNestedInput
    detailPenjualan?: DetailPenjualanUpdateManyWithoutObatNestedInput
    stok?: StokUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPembelian?: DetailPembelianUncheckedUpdateManyWithoutObatNestedInput
    detailPenjualan?: DetailPenjualanUncheckedUpdateManyWithoutObatNestedInput
    stok?: StokUncheckedUpdateManyWithoutObatNestedInput
  }

  export type ObatCreateManyInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type ObatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StokCreateInput = {
    id?: string
    jumlah?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutStokInput
    obat: ObatCreateNestedOneWithoutStokInput
  }

  export type StokUncheckedCreateInput = {
    id?: string
    jumlah?: number
    obatId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutStokInput
  }

  export type StokUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutStokNestedInput
    obat?: ObatUpdateOneRequiredWithoutStokNestedInput
  }

  export type StokUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    obatId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutStokNestedInput
  }

  export type StokCreateManyInput = {
    id?: string
    jumlah?: number
    obatId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
  }

  export type StokUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    obatId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    stok: StokCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    stokId: string
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stok?: StokUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stokId?: StringFieldUpdateOperationsInput | string
  }

  export type StockMovementCreateManyInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    stokId: string
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stokId?: StringFieldUpdateOperationsInput | string
  }

  export type TransaksiPenjualanCreateInput = {
    id?: string
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DetailPenjualanCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiPenjualanUncheckedCreateInput = {
    id?: string
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DetailPenjualanUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiPenjualanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPenjualanUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiPenjualanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPenjualanUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiPenjualanCreateManyInput = {
    id?: string
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiPenjualanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiPenjualanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPenjualanCreateInput = {
    id?: string
    quantity: number
    harga: number
    obat: ObatCreateNestedOneWithoutDetailPenjualanInput
    transaksi: TransaksiPenjualanCreateNestedOneWithoutDetailsInput
  }

  export type DetailPenjualanUncheckedCreateInput = {
    id?: string
    quantity: number
    harga: number
    transaksiId: string
    obatId: string
  }

  export type DetailPenjualanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    obat?: ObatUpdateOneRequiredWithoutDetailPenjualanNestedInput
    transaksi?: TransaksiPenjualanUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailPenjualanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
    obatId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPenjualanCreateManyInput = {
    id?: string
    quantity: number
    harga: number
    transaksiId: string
    obatId: string
  }

  export type DetailPenjualanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
  }

  export type DetailPenjualanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
    obatId?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierCreateInput = {
    id?: string
    nama: string
    alamat: string
    telepon: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksiPembelian?: TransaksiPembelianCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    nama: string
    alamat: string
    telepon: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaksiPembelian?: TransaksiPembelianUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksiPembelian?: TransaksiPembelianUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaksiPembelian?: TransaksiPembelianUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    nama: string
    alamat: string
    telepon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiPembelianCreateInput = {
    id?: string
    tanggal?: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DetailPembelianCreateNestedManyWithoutTransaksiInput
    supplier: SupplierCreateNestedOneWithoutTransaksiPembelianInput
  }

  export type TransaksiPembelianUncheckedCreateInput = {
    id?: string
    tanggal?: Date | string
    status: string
    supplierId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DetailPembelianUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiPembelianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPembelianUpdateManyWithoutTransaksiNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutTransaksiPembelianNestedInput
  }

  export type TransaksiPembelianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPembelianUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiPembelianCreateManyInput = {
    id?: string
    tanggal?: Date | string
    status: string
    supplierId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiPembelianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiPembelianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPembelianCreateInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    obat: ObatCreateNestedOneWithoutDetailPembelianInput
    transaksi: TransaksiPembelianCreateNestedOneWithoutDetailsInput
  }

  export type DetailPembelianUncheckedCreateInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    transaksiId: string
    obatId: string
  }

  export type DetailPembelianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    obat?: ObatUpdateOneRequiredWithoutDetailPembelianNestedInput
    transaksi?: TransaksiPembelianUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailPembelianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
    obatId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPembelianCreateManyInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    transaksiId: string
    obatId: string
  }

  export type DetailPembelianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
  }

  export type DetailPembelianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
    obatId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordExpires?: SortOrder
    resetPasswordToken?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordExpires?: SortOrder
    resetPasswordToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetPasswordExpires?: SortOrder
    resetPasswordToken?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DetailPembelianListRelationFilter = {
    every?: DetailPembelianWhereInput
    some?: DetailPembelianWhereInput
    none?: DetailPembelianWhereInput
  }

  export type DetailPenjualanListRelationFilter = {
    every?: DetailPenjualanWhereInput
    some?: DetailPenjualanWhereInput
    none?: DetailPenjualanWhereInput
  }

  export type StokListRelationFilter = {
    every?: StokWhereInput
    some?: StokWhereInput
    none?: StokWhereInput
  }

  export type DetailPembelianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetailPenjualanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StokOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObatCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    hargaJual?: SortOrder
    satuan?: SortOrder
    lokasiRak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type ObatAvgOrderByAggregateInput = {
    hargaJual?: SortOrder
  }

  export type ObatMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    hargaJual?: SortOrder
    satuan?: SortOrder
    lokasiRak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type ObatMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    hargaJual?: SortOrder
    satuan?: SortOrder
    lokasiRak?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type ObatSumOrderByAggregateInput = {
    hargaJual?: SortOrder
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

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type ObatScalarRelationFilter = {
    is?: ObatWhereInput
    isNot?: ObatWhereInput
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StokCountOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    obatId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    tanggalKedaluwarsa?: SortOrder
  }

  export type StokAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type StokMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    obatId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    tanggalKedaluwarsa?: SortOrder
  }

  export type StokMinOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    obatId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    tanggalKedaluwarsa?: SortOrder
  }

  export type StokSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type StokScalarRelationFilter = {
    is?: StokWhereInput
    isNot?: StokWhereInput
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    stokId?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    stokId?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    stokId?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type TransaksiPenjualanCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiPenjualanAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type TransaksiPenjualanMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiPenjualanMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiPenjualanSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type TransaksiPenjualanScalarRelationFilter = {
    is?: TransaksiPenjualanWhereInput
    isNot?: TransaksiPenjualanWhereInput
  }

  export type DetailPenjualanCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    harga?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
  }

  export type DetailPenjualanAvgOrderByAggregateInput = {
    quantity?: SortOrder
    harga?: SortOrder
  }

  export type DetailPenjualanMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    harga?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
  }

  export type DetailPenjualanMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    harga?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
  }

  export type DetailPenjualanSumOrderByAggregateInput = {
    quantity?: SortOrder
    harga?: SortOrder
  }

  export type TransaksiPembelianListRelationFilter = {
    every?: TransaksiPembelianWhereInput
    some?: TransaksiPembelianWhereInput
    none?: TransaksiPembelianWhereInput
  }

  export type TransaksiPembelianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type TransaksiPembelianCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiPembelianMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiPembelianMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransaksiPembelianScalarRelationFilter = {
    is?: TransaksiPembelianWhereInput
    isNot?: TransaksiPembelianWhereInput
  }

  export type DetailPembelianCountOrderByAggregateInput = {
    id?: SortOrder
    quantityOrdered?: SortOrder
    quantityReceived?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
  }

  export type DetailPembelianAvgOrderByAggregateInput = {
    quantityOrdered?: SortOrder
    quantityReceived?: SortOrder
  }

  export type DetailPembelianMaxOrderByAggregateInput = {
    id?: SortOrder
    quantityOrdered?: SortOrder
    quantityReceived?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
  }

  export type DetailPembelianMinOrderByAggregateInput = {
    id?: SortOrder
    quantityOrdered?: SortOrder
    quantityReceived?: SortOrder
    transaksiId?: SortOrder
    obatId?: SortOrder
  }

  export type DetailPembelianSumOrderByAggregateInput = {
    quantityOrdered?: SortOrder
    quantityReceived?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DetailPembelianCreateNestedManyWithoutObatInput = {
    create?: XOR<DetailPembelianCreateWithoutObatInput, DetailPembelianUncheckedCreateWithoutObatInput> | DetailPembelianCreateWithoutObatInput[] | DetailPembelianUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutObatInput | DetailPembelianCreateOrConnectWithoutObatInput[]
    createMany?: DetailPembelianCreateManyObatInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type DetailPenjualanCreateNestedManyWithoutObatInput = {
    create?: XOR<DetailPenjualanCreateWithoutObatInput, DetailPenjualanUncheckedCreateWithoutObatInput> | DetailPenjualanCreateWithoutObatInput[] | DetailPenjualanUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutObatInput | DetailPenjualanCreateOrConnectWithoutObatInput[]
    createMany?: DetailPenjualanCreateManyObatInputEnvelope
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
  }

  export type StokCreateNestedManyWithoutObatInput = {
    create?: XOR<StokCreateWithoutObatInput, StokUncheckedCreateWithoutObatInput> | StokCreateWithoutObatInput[] | StokUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokCreateOrConnectWithoutObatInput | StokCreateOrConnectWithoutObatInput[]
    createMany?: StokCreateManyObatInputEnvelope
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
  }

  export type DetailPembelianUncheckedCreateNestedManyWithoutObatInput = {
    create?: XOR<DetailPembelianCreateWithoutObatInput, DetailPembelianUncheckedCreateWithoutObatInput> | DetailPembelianCreateWithoutObatInput[] | DetailPembelianUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutObatInput | DetailPembelianCreateOrConnectWithoutObatInput[]
    createMany?: DetailPembelianCreateManyObatInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type DetailPenjualanUncheckedCreateNestedManyWithoutObatInput = {
    create?: XOR<DetailPenjualanCreateWithoutObatInput, DetailPenjualanUncheckedCreateWithoutObatInput> | DetailPenjualanCreateWithoutObatInput[] | DetailPenjualanUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutObatInput | DetailPenjualanCreateOrConnectWithoutObatInput[]
    createMany?: DetailPenjualanCreateManyObatInputEnvelope
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
  }

  export type StokUncheckedCreateNestedManyWithoutObatInput = {
    create?: XOR<StokCreateWithoutObatInput, StokUncheckedCreateWithoutObatInput> | StokCreateWithoutObatInput[] | StokUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokCreateOrConnectWithoutObatInput | StokCreateOrConnectWithoutObatInput[]
    createMany?: StokCreateManyObatInputEnvelope
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DetailPembelianUpdateManyWithoutObatNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutObatInput, DetailPembelianUncheckedCreateWithoutObatInput> | DetailPembelianCreateWithoutObatInput[] | DetailPembelianUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutObatInput | DetailPembelianCreateOrConnectWithoutObatInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutObatInput | DetailPembelianUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: DetailPembelianCreateManyObatInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutObatInput | DetailPembelianUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutObatInput | DetailPembelianUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type DetailPenjualanUpdateManyWithoutObatNestedInput = {
    create?: XOR<DetailPenjualanCreateWithoutObatInput, DetailPenjualanUncheckedCreateWithoutObatInput> | DetailPenjualanCreateWithoutObatInput[] | DetailPenjualanUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutObatInput | DetailPenjualanCreateOrConnectWithoutObatInput[]
    upsert?: DetailPenjualanUpsertWithWhereUniqueWithoutObatInput | DetailPenjualanUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: DetailPenjualanCreateManyObatInputEnvelope
    set?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    disconnect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    delete?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    update?: DetailPenjualanUpdateWithWhereUniqueWithoutObatInput | DetailPenjualanUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: DetailPenjualanUpdateManyWithWhereWithoutObatInput | DetailPenjualanUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: DetailPenjualanScalarWhereInput | DetailPenjualanScalarWhereInput[]
  }

  export type StokUpdateManyWithoutObatNestedInput = {
    create?: XOR<StokCreateWithoutObatInput, StokUncheckedCreateWithoutObatInput> | StokCreateWithoutObatInput[] | StokUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokCreateOrConnectWithoutObatInput | StokCreateOrConnectWithoutObatInput[]
    upsert?: StokUpsertWithWhereUniqueWithoutObatInput | StokUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: StokCreateManyObatInputEnvelope
    set?: StokWhereUniqueInput | StokWhereUniqueInput[]
    disconnect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    delete?: StokWhereUniqueInput | StokWhereUniqueInput[]
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    update?: StokUpdateWithWhereUniqueWithoutObatInput | StokUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: StokUpdateManyWithWhereWithoutObatInput | StokUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: StokScalarWhereInput | StokScalarWhereInput[]
  }

  export type DetailPembelianUncheckedUpdateManyWithoutObatNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutObatInput, DetailPembelianUncheckedCreateWithoutObatInput> | DetailPembelianCreateWithoutObatInput[] | DetailPembelianUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutObatInput | DetailPembelianCreateOrConnectWithoutObatInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutObatInput | DetailPembelianUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: DetailPembelianCreateManyObatInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutObatInput | DetailPembelianUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutObatInput | DetailPembelianUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type DetailPenjualanUncheckedUpdateManyWithoutObatNestedInput = {
    create?: XOR<DetailPenjualanCreateWithoutObatInput, DetailPenjualanUncheckedCreateWithoutObatInput> | DetailPenjualanCreateWithoutObatInput[] | DetailPenjualanUncheckedCreateWithoutObatInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutObatInput | DetailPenjualanCreateOrConnectWithoutObatInput[]
    upsert?: DetailPenjualanUpsertWithWhereUniqueWithoutObatInput | DetailPenjualanUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: DetailPenjualanCreateManyObatInputEnvelope
    set?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    disconnect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    delete?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    update?: DetailPenjualanUpdateWithWhereUniqueWithoutObatInput | DetailPenjualanUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: DetailPenjualanUpdateManyWithWhereWithoutObatInput | DetailPenjualanUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: DetailPenjualanScalarWhereInput | DetailPenjualanScalarWhereInput[]
  }

  export type StokUncheckedUpdateManyWithoutObatNestedInput = {
    create?: XOR<StokCreateWithoutObatInput, StokUncheckedCreateWithoutObatInput> | StokCreateWithoutObatInput[] | StokUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokCreateOrConnectWithoutObatInput | StokCreateOrConnectWithoutObatInput[]
    upsert?: StokUpsertWithWhereUniqueWithoutObatInput | StokUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: StokCreateManyObatInputEnvelope
    set?: StokWhereUniqueInput | StokWhereUniqueInput[]
    disconnect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    delete?: StokWhereUniqueInput | StokWhereUniqueInput[]
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    update?: StokUpdateWithWhereUniqueWithoutObatInput | StokUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: StokUpdateManyWithWhereWithoutObatInput | StokUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: StokScalarWhereInput | StokScalarWhereInput[]
  }

  export type StockMovementCreateNestedManyWithoutStokInput = {
    create?: XOR<StockMovementCreateWithoutStokInput, StockMovementUncheckedCreateWithoutStokInput> | StockMovementCreateWithoutStokInput[] | StockMovementUncheckedCreateWithoutStokInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStokInput | StockMovementCreateOrConnectWithoutStokInput[]
    createMany?: StockMovementCreateManyStokInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type ObatCreateNestedOneWithoutStokInput = {
    create?: XOR<ObatCreateWithoutStokInput, ObatUncheckedCreateWithoutStokInput>
    connectOrCreate?: ObatCreateOrConnectWithoutStokInput
    connect?: ObatWhereUniqueInput
  }

  export type StockMovementUncheckedCreateNestedManyWithoutStokInput = {
    create?: XOR<StockMovementCreateWithoutStokInput, StockMovementUncheckedCreateWithoutStokInput> | StockMovementCreateWithoutStokInput[] | StockMovementUncheckedCreateWithoutStokInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStokInput | StockMovementCreateOrConnectWithoutStokInput[]
    createMany?: StockMovementCreateManyStokInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockMovementUpdateManyWithoutStokNestedInput = {
    create?: XOR<StockMovementCreateWithoutStokInput, StockMovementUncheckedCreateWithoutStokInput> | StockMovementCreateWithoutStokInput[] | StockMovementUncheckedCreateWithoutStokInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStokInput | StockMovementCreateOrConnectWithoutStokInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutStokInput | StockMovementUpsertWithWhereUniqueWithoutStokInput[]
    createMany?: StockMovementCreateManyStokInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutStokInput | StockMovementUpdateWithWhereUniqueWithoutStokInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutStokInput | StockMovementUpdateManyWithWhereWithoutStokInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type ObatUpdateOneRequiredWithoutStokNestedInput = {
    create?: XOR<ObatCreateWithoutStokInput, ObatUncheckedCreateWithoutStokInput>
    connectOrCreate?: ObatCreateOrConnectWithoutStokInput
    upsert?: ObatUpsertWithoutStokInput
    connect?: ObatWhereUniqueInput
    update?: XOR<XOR<ObatUpdateToOneWithWhereWithoutStokInput, ObatUpdateWithoutStokInput>, ObatUncheckedUpdateWithoutStokInput>
  }

  export type StockMovementUncheckedUpdateManyWithoutStokNestedInput = {
    create?: XOR<StockMovementCreateWithoutStokInput, StockMovementUncheckedCreateWithoutStokInput> | StockMovementCreateWithoutStokInput[] | StockMovementUncheckedCreateWithoutStokInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutStokInput | StockMovementCreateOrConnectWithoutStokInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutStokInput | StockMovementUpsertWithWhereUniqueWithoutStokInput[]
    createMany?: StockMovementCreateManyStokInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutStokInput | StockMovementUpdateWithWhereUniqueWithoutStokInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutStokInput | StockMovementUpdateManyWithWhereWithoutStokInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StokCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<StokCreateWithoutStockMovementsInput, StokUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: StokCreateOrConnectWithoutStockMovementsInput
    connect?: StokWhereUniqueInput
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type StokUpdateOneRequiredWithoutStockMovementsNestedInput = {
    create?: XOR<StokCreateWithoutStockMovementsInput, StokUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: StokCreateOrConnectWithoutStockMovementsInput
    upsert?: StokUpsertWithoutStockMovementsInput
    connect?: StokWhereUniqueInput
    update?: XOR<XOR<StokUpdateToOneWithWhereWithoutStockMovementsInput, StokUpdateWithoutStockMovementsInput>, StokUncheckedUpdateWithoutStockMovementsInput>
  }

  export type DetailPenjualanCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailPenjualanCreateWithoutTransaksiInput, DetailPenjualanUncheckedCreateWithoutTransaksiInput> | DetailPenjualanCreateWithoutTransaksiInput[] | DetailPenjualanUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutTransaksiInput | DetailPenjualanCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailPenjualanCreateManyTransaksiInputEnvelope
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
  }

  export type DetailPenjualanUncheckedCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailPenjualanCreateWithoutTransaksiInput, DetailPenjualanUncheckedCreateWithoutTransaksiInput> | DetailPenjualanCreateWithoutTransaksiInput[] | DetailPenjualanUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutTransaksiInput | DetailPenjualanCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailPenjualanCreateManyTransaksiInputEnvelope
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
  }

  export type DetailPenjualanUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailPenjualanCreateWithoutTransaksiInput, DetailPenjualanUncheckedCreateWithoutTransaksiInput> | DetailPenjualanCreateWithoutTransaksiInput[] | DetailPenjualanUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutTransaksiInput | DetailPenjualanCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailPenjualanUpsertWithWhereUniqueWithoutTransaksiInput | DetailPenjualanUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailPenjualanCreateManyTransaksiInputEnvelope
    set?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    disconnect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    delete?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    update?: DetailPenjualanUpdateWithWhereUniqueWithoutTransaksiInput | DetailPenjualanUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailPenjualanUpdateManyWithWhereWithoutTransaksiInput | DetailPenjualanUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailPenjualanScalarWhereInput | DetailPenjualanScalarWhereInput[]
  }

  export type DetailPenjualanUncheckedUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailPenjualanCreateWithoutTransaksiInput, DetailPenjualanUncheckedCreateWithoutTransaksiInput> | DetailPenjualanCreateWithoutTransaksiInput[] | DetailPenjualanUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPenjualanCreateOrConnectWithoutTransaksiInput | DetailPenjualanCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailPenjualanUpsertWithWhereUniqueWithoutTransaksiInput | DetailPenjualanUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailPenjualanCreateManyTransaksiInputEnvelope
    set?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    disconnect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    delete?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    connect?: DetailPenjualanWhereUniqueInput | DetailPenjualanWhereUniqueInput[]
    update?: DetailPenjualanUpdateWithWhereUniqueWithoutTransaksiInput | DetailPenjualanUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailPenjualanUpdateManyWithWhereWithoutTransaksiInput | DetailPenjualanUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailPenjualanScalarWhereInput | DetailPenjualanScalarWhereInput[]
  }

  export type ObatCreateNestedOneWithoutDetailPenjualanInput = {
    create?: XOR<ObatCreateWithoutDetailPenjualanInput, ObatUncheckedCreateWithoutDetailPenjualanInput>
    connectOrCreate?: ObatCreateOrConnectWithoutDetailPenjualanInput
    connect?: ObatWhereUniqueInput
  }

  export type TransaksiPenjualanCreateNestedOneWithoutDetailsInput = {
    create?: XOR<TransaksiPenjualanCreateWithoutDetailsInput, TransaksiPenjualanUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransaksiPenjualanCreateOrConnectWithoutDetailsInput
    connect?: TransaksiPenjualanWhereUniqueInput
  }

  export type ObatUpdateOneRequiredWithoutDetailPenjualanNestedInput = {
    create?: XOR<ObatCreateWithoutDetailPenjualanInput, ObatUncheckedCreateWithoutDetailPenjualanInput>
    connectOrCreate?: ObatCreateOrConnectWithoutDetailPenjualanInput
    upsert?: ObatUpsertWithoutDetailPenjualanInput
    connect?: ObatWhereUniqueInput
    update?: XOR<XOR<ObatUpdateToOneWithWhereWithoutDetailPenjualanInput, ObatUpdateWithoutDetailPenjualanInput>, ObatUncheckedUpdateWithoutDetailPenjualanInput>
  }

  export type TransaksiPenjualanUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<TransaksiPenjualanCreateWithoutDetailsInput, TransaksiPenjualanUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransaksiPenjualanCreateOrConnectWithoutDetailsInput
    upsert?: TransaksiPenjualanUpsertWithoutDetailsInput
    connect?: TransaksiPenjualanWhereUniqueInput
    update?: XOR<XOR<TransaksiPenjualanUpdateToOneWithWhereWithoutDetailsInput, TransaksiPenjualanUpdateWithoutDetailsInput>, TransaksiPenjualanUncheckedUpdateWithoutDetailsInput>
  }

  export type TransaksiPembelianCreateNestedManyWithoutSupplierInput = {
    create?: XOR<TransaksiPembelianCreateWithoutSupplierInput, TransaksiPembelianUncheckedCreateWithoutSupplierInput> | TransaksiPembelianCreateWithoutSupplierInput[] | TransaksiPembelianUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TransaksiPembelianCreateOrConnectWithoutSupplierInput | TransaksiPembelianCreateOrConnectWithoutSupplierInput[]
    createMany?: TransaksiPembelianCreateManySupplierInputEnvelope
    connect?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
  }

  export type TransaksiPembelianUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<TransaksiPembelianCreateWithoutSupplierInput, TransaksiPembelianUncheckedCreateWithoutSupplierInput> | TransaksiPembelianCreateWithoutSupplierInput[] | TransaksiPembelianUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TransaksiPembelianCreateOrConnectWithoutSupplierInput | TransaksiPembelianCreateOrConnectWithoutSupplierInput[]
    createMany?: TransaksiPembelianCreateManySupplierInputEnvelope
    connect?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
  }

  export type TransaksiPembelianUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<TransaksiPembelianCreateWithoutSupplierInput, TransaksiPembelianUncheckedCreateWithoutSupplierInput> | TransaksiPembelianCreateWithoutSupplierInput[] | TransaksiPembelianUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TransaksiPembelianCreateOrConnectWithoutSupplierInput | TransaksiPembelianCreateOrConnectWithoutSupplierInput[]
    upsert?: TransaksiPembelianUpsertWithWhereUniqueWithoutSupplierInput | TransaksiPembelianUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: TransaksiPembelianCreateManySupplierInputEnvelope
    set?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    disconnect?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    delete?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    connect?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    update?: TransaksiPembelianUpdateWithWhereUniqueWithoutSupplierInput | TransaksiPembelianUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: TransaksiPembelianUpdateManyWithWhereWithoutSupplierInput | TransaksiPembelianUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: TransaksiPembelianScalarWhereInput | TransaksiPembelianScalarWhereInput[]
  }

  export type TransaksiPembelianUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<TransaksiPembelianCreateWithoutSupplierInput, TransaksiPembelianUncheckedCreateWithoutSupplierInput> | TransaksiPembelianCreateWithoutSupplierInput[] | TransaksiPembelianUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: TransaksiPembelianCreateOrConnectWithoutSupplierInput | TransaksiPembelianCreateOrConnectWithoutSupplierInput[]
    upsert?: TransaksiPembelianUpsertWithWhereUniqueWithoutSupplierInput | TransaksiPembelianUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: TransaksiPembelianCreateManySupplierInputEnvelope
    set?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    disconnect?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    delete?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    connect?: TransaksiPembelianWhereUniqueInput | TransaksiPembelianWhereUniqueInput[]
    update?: TransaksiPembelianUpdateWithWhereUniqueWithoutSupplierInput | TransaksiPembelianUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: TransaksiPembelianUpdateManyWithWhereWithoutSupplierInput | TransaksiPembelianUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: TransaksiPembelianScalarWhereInput | TransaksiPembelianScalarWhereInput[]
  }

  export type DetailPembelianCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailPembelianCreateWithoutTransaksiInput, DetailPembelianUncheckedCreateWithoutTransaksiInput> | DetailPembelianCreateWithoutTransaksiInput[] | DetailPembelianUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutTransaksiInput | DetailPembelianCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailPembelianCreateManyTransaksiInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type SupplierCreateNestedOneWithoutTransaksiPembelianInput = {
    create?: XOR<SupplierCreateWithoutTransaksiPembelianInput, SupplierUncheckedCreateWithoutTransaksiPembelianInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutTransaksiPembelianInput
    connect?: SupplierWhereUniqueInput
  }

  export type DetailPembelianUncheckedCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailPembelianCreateWithoutTransaksiInput, DetailPembelianUncheckedCreateWithoutTransaksiInput> | DetailPembelianCreateWithoutTransaksiInput[] | DetailPembelianUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutTransaksiInput | DetailPembelianCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailPembelianCreateManyTransaksiInputEnvelope
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
  }

  export type DetailPembelianUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutTransaksiInput, DetailPembelianUncheckedCreateWithoutTransaksiInput> | DetailPembelianCreateWithoutTransaksiInput[] | DetailPembelianUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutTransaksiInput | DetailPembelianCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutTransaksiInput | DetailPembelianUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailPembelianCreateManyTransaksiInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutTransaksiInput | DetailPembelianUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutTransaksiInput | DetailPembelianUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type SupplierUpdateOneRequiredWithoutTransaksiPembelianNestedInput = {
    create?: XOR<SupplierCreateWithoutTransaksiPembelianInput, SupplierUncheckedCreateWithoutTransaksiPembelianInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutTransaksiPembelianInput
    upsert?: SupplierUpsertWithoutTransaksiPembelianInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutTransaksiPembelianInput, SupplierUpdateWithoutTransaksiPembelianInput>, SupplierUncheckedUpdateWithoutTransaksiPembelianInput>
  }

  export type DetailPembelianUncheckedUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailPembelianCreateWithoutTransaksiInput, DetailPembelianUncheckedCreateWithoutTransaksiInput> | DetailPembelianCreateWithoutTransaksiInput[] | DetailPembelianUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailPembelianCreateOrConnectWithoutTransaksiInput | DetailPembelianCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailPembelianUpsertWithWhereUniqueWithoutTransaksiInput | DetailPembelianUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailPembelianCreateManyTransaksiInputEnvelope
    set?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    disconnect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    delete?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    connect?: DetailPembelianWhereUniqueInput | DetailPembelianWhereUniqueInput[]
    update?: DetailPembelianUpdateWithWhereUniqueWithoutTransaksiInput | DetailPembelianUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailPembelianUpdateManyWithWhereWithoutTransaksiInput | DetailPembelianUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
  }

  export type ObatCreateNestedOneWithoutDetailPembelianInput = {
    create?: XOR<ObatCreateWithoutDetailPembelianInput, ObatUncheckedCreateWithoutDetailPembelianInput>
    connectOrCreate?: ObatCreateOrConnectWithoutDetailPembelianInput
    connect?: ObatWhereUniqueInput
  }

  export type TransaksiPembelianCreateNestedOneWithoutDetailsInput = {
    create?: XOR<TransaksiPembelianCreateWithoutDetailsInput, TransaksiPembelianUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransaksiPembelianCreateOrConnectWithoutDetailsInput
    connect?: TransaksiPembelianWhereUniqueInput
  }

  export type ObatUpdateOneRequiredWithoutDetailPembelianNestedInput = {
    create?: XOR<ObatCreateWithoutDetailPembelianInput, ObatUncheckedCreateWithoutDetailPembelianInput>
    connectOrCreate?: ObatCreateOrConnectWithoutDetailPembelianInput
    upsert?: ObatUpsertWithoutDetailPembelianInput
    connect?: ObatWhereUniqueInput
    update?: XOR<XOR<ObatUpdateToOneWithWhereWithoutDetailPembelianInput, ObatUpdateWithoutDetailPembelianInput>, ObatUncheckedUpdateWithoutDetailPembelianInput>
  }

  export type TransaksiPembelianUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<TransaksiPembelianCreateWithoutDetailsInput, TransaksiPembelianUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TransaksiPembelianCreateOrConnectWithoutDetailsInput
    upsert?: TransaksiPembelianUpsertWithoutDetailsInput
    connect?: TransaksiPembelianWhereUniqueInput
    update?: XOR<XOR<TransaksiPembelianUpdateToOneWithWhereWithoutDetailsInput, TransaksiPembelianUpdateWithoutDetailsInput>, TransaksiPembelianUncheckedUpdateWithoutDetailsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type DetailPembelianCreateWithoutObatInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    transaksi: TransaksiPembelianCreateNestedOneWithoutDetailsInput
  }

  export type DetailPembelianUncheckedCreateWithoutObatInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    transaksiId: string
  }

  export type DetailPembelianCreateOrConnectWithoutObatInput = {
    where: DetailPembelianWhereUniqueInput
    create: XOR<DetailPembelianCreateWithoutObatInput, DetailPembelianUncheckedCreateWithoutObatInput>
  }

  export type DetailPembelianCreateManyObatInputEnvelope = {
    data: DetailPembelianCreateManyObatInput | DetailPembelianCreateManyObatInput[]
    skipDuplicates?: boolean
  }

  export type DetailPenjualanCreateWithoutObatInput = {
    id?: string
    quantity: number
    harga: number
    transaksi: TransaksiPenjualanCreateNestedOneWithoutDetailsInput
  }

  export type DetailPenjualanUncheckedCreateWithoutObatInput = {
    id?: string
    quantity: number
    harga: number
    transaksiId: string
  }

  export type DetailPenjualanCreateOrConnectWithoutObatInput = {
    where: DetailPenjualanWhereUniqueInput
    create: XOR<DetailPenjualanCreateWithoutObatInput, DetailPenjualanUncheckedCreateWithoutObatInput>
  }

  export type DetailPenjualanCreateManyObatInputEnvelope = {
    data: DetailPenjualanCreateManyObatInput | DetailPenjualanCreateManyObatInput[]
    skipDuplicates?: boolean
  }

  export type StokCreateWithoutObatInput = {
    id?: string
    jumlah?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
    stockMovements?: StockMovementCreateNestedManyWithoutStokInput
  }

  export type StokUncheckedCreateWithoutObatInput = {
    id?: string
    jumlah?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutStokInput
  }

  export type StokCreateOrConnectWithoutObatInput = {
    where: StokWhereUniqueInput
    create: XOR<StokCreateWithoutObatInput, StokUncheckedCreateWithoutObatInput>
  }

  export type StokCreateManyObatInputEnvelope = {
    data: StokCreateManyObatInput | StokCreateManyObatInput[]
    skipDuplicates?: boolean
  }

  export type DetailPembelianUpsertWithWhereUniqueWithoutObatInput = {
    where: DetailPembelianWhereUniqueInput
    update: XOR<DetailPembelianUpdateWithoutObatInput, DetailPembelianUncheckedUpdateWithoutObatInput>
    create: XOR<DetailPembelianCreateWithoutObatInput, DetailPembelianUncheckedCreateWithoutObatInput>
  }

  export type DetailPembelianUpdateWithWhereUniqueWithoutObatInput = {
    where: DetailPembelianWhereUniqueInput
    data: XOR<DetailPembelianUpdateWithoutObatInput, DetailPembelianUncheckedUpdateWithoutObatInput>
  }

  export type DetailPembelianUpdateManyWithWhereWithoutObatInput = {
    where: DetailPembelianScalarWhereInput
    data: XOR<DetailPembelianUpdateManyMutationInput, DetailPembelianUncheckedUpdateManyWithoutObatInput>
  }

  export type DetailPembelianScalarWhereInput = {
    AND?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
    OR?: DetailPembelianScalarWhereInput[]
    NOT?: DetailPembelianScalarWhereInput | DetailPembelianScalarWhereInput[]
    id?: StringFilter<"DetailPembelian"> | string
    quantityOrdered?: IntFilter<"DetailPembelian"> | number
    quantityReceived?: IntFilter<"DetailPembelian"> | number
    transaksiId?: StringFilter<"DetailPembelian"> | string
    obatId?: StringFilter<"DetailPembelian"> | string
  }

  export type DetailPenjualanUpsertWithWhereUniqueWithoutObatInput = {
    where: DetailPenjualanWhereUniqueInput
    update: XOR<DetailPenjualanUpdateWithoutObatInput, DetailPenjualanUncheckedUpdateWithoutObatInput>
    create: XOR<DetailPenjualanCreateWithoutObatInput, DetailPenjualanUncheckedCreateWithoutObatInput>
  }

  export type DetailPenjualanUpdateWithWhereUniqueWithoutObatInput = {
    where: DetailPenjualanWhereUniqueInput
    data: XOR<DetailPenjualanUpdateWithoutObatInput, DetailPenjualanUncheckedUpdateWithoutObatInput>
  }

  export type DetailPenjualanUpdateManyWithWhereWithoutObatInput = {
    where: DetailPenjualanScalarWhereInput
    data: XOR<DetailPenjualanUpdateManyMutationInput, DetailPenjualanUncheckedUpdateManyWithoutObatInput>
  }

  export type DetailPenjualanScalarWhereInput = {
    AND?: DetailPenjualanScalarWhereInput | DetailPenjualanScalarWhereInput[]
    OR?: DetailPenjualanScalarWhereInput[]
    NOT?: DetailPenjualanScalarWhereInput | DetailPenjualanScalarWhereInput[]
    id?: StringFilter<"DetailPenjualan"> | string
    quantity?: IntFilter<"DetailPenjualan"> | number
    harga?: IntFilter<"DetailPenjualan"> | number
    transaksiId?: StringFilter<"DetailPenjualan"> | string
    obatId?: StringFilter<"DetailPenjualan"> | string
  }

  export type StokUpsertWithWhereUniqueWithoutObatInput = {
    where: StokWhereUniqueInput
    update: XOR<StokUpdateWithoutObatInput, StokUncheckedUpdateWithoutObatInput>
    create: XOR<StokCreateWithoutObatInput, StokUncheckedCreateWithoutObatInput>
  }

  export type StokUpdateWithWhereUniqueWithoutObatInput = {
    where: StokWhereUniqueInput
    data: XOR<StokUpdateWithoutObatInput, StokUncheckedUpdateWithoutObatInput>
  }

  export type StokUpdateManyWithWhereWithoutObatInput = {
    where: StokScalarWhereInput
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyWithoutObatInput>
  }

  export type StokScalarWhereInput = {
    AND?: StokScalarWhereInput | StokScalarWhereInput[]
    OR?: StokScalarWhereInput[]
    NOT?: StokScalarWhereInput | StokScalarWhereInput[]
    id?: StringFilter<"Stok"> | string
    jumlah?: IntFilter<"Stok"> | number
    obatId?: StringFilter<"Stok"> | string
    updatedAt?: DateTimeFilter<"Stok"> | Date | string
    createdAt?: DateTimeFilter<"Stok"> | Date | string
    tanggalKedaluwarsa?: DateTimeFilter<"Stok"> | Date | string
  }

  export type StockMovementCreateWithoutStokInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
  }

  export type StockMovementUncheckedCreateWithoutStokInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
  }

  export type StockMovementCreateOrConnectWithoutStokInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutStokInput, StockMovementUncheckedCreateWithoutStokInput>
  }

  export type StockMovementCreateManyStokInputEnvelope = {
    data: StockMovementCreateManyStokInput | StockMovementCreateManyStokInput[]
    skipDuplicates?: boolean
  }

  export type ObatCreateWithoutStokInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPembelian?: DetailPembelianCreateNestedManyWithoutObatInput
    detailPenjualan?: DetailPenjualanCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateWithoutStokInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPembelian?: DetailPembelianUncheckedCreateNestedManyWithoutObatInput
    detailPenjualan?: DetailPenjualanUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatCreateOrConnectWithoutStokInput = {
    where: ObatWhereUniqueInput
    create: XOR<ObatCreateWithoutStokInput, ObatUncheckedCreateWithoutStokInput>
  }

  export type StockMovementUpsertWithWhereUniqueWithoutStokInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutStokInput, StockMovementUncheckedUpdateWithoutStokInput>
    create: XOR<StockMovementCreateWithoutStokInput, StockMovementUncheckedCreateWithoutStokInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutStokInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutStokInput, StockMovementUncheckedUpdateWithoutStokInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutStokInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutStokInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    type?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntFilter<"StockMovement"> | number
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    stokId?: StringFilter<"StockMovement"> | string
  }

  export type ObatUpsertWithoutStokInput = {
    update: XOR<ObatUpdateWithoutStokInput, ObatUncheckedUpdateWithoutStokInput>
    create: XOR<ObatCreateWithoutStokInput, ObatUncheckedCreateWithoutStokInput>
    where?: ObatWhereInput
  }

  export type ObatUpdateToOneWithWhereWithoutStokInput = {
    where?: ObatWhereInput
    data: XOR<ObatUpdateWithoutStokInput, ObatUncheckedUpdateWithoutStokInput>
  }

  export type ObatUpdateWithoutStokInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPembelian?: DetailPembelianUpdateManyWithoutObatNestedInput
    detailPenjualan?: DetailPenjualanUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateWithoutStokInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPembelian?: DetailPembelianUncheckedUpdateManyWithoutObatNestedInput
    detailPenjualan?: DetailPenjualanUncheckedUpdateManyWithoutObatNestedInput
  }

  export type StokCreateWithoutStockMovementsInput = {
    id?: string
    jumlah?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
    obat: ObatCreateNestedOneWithoutStokInput
  }

  export type StokUncheckedCreateWithoutStockMovementsInput = {
    id?: string
    jumlah?: number
    obatId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
  }

  export type StokCreateOrConnectWithoutStockMovementsInput = {
    where: StokWhereUniqueInput
    create: XOR<StokCreateWithoutStockMovementsInput, StokUncheckedCreateWithoutStockMovementsInput>
  }

  export type StokUpsertWithoutStockMovementsInput = {
    update: XOR<StokUpdateWithoutStockMovementsInput, StokUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<StokCreateWithoutStockMovementsInput, StokUncheckedCreateWithoutStockMovementsInput>
    where?: StokWhereInput
  }

  export type StokUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: StokWhereInput
    data: XOR<StokUpdateWithoutStockMovementsInput, StokUncheckedUpdateWithoutStockMovementsInput>
  }

  export type StokUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
    obat?: ObatUpdateOneRequiredWithoutStokNestedInput
  }

  export type StokUncheckedUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    obatId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPenjualanCreateWithoutTransaksiInput = {
    id?: string
    quantity: number
    harga: number
    obat: ObatCreateNestedOneWithoutDetailPenjualanInput
  }

  export type DetailPenjualanUncheckedCreateWithoutTransaksiInput = {
    id?: string
    quantity: number
    harga: number
    obatId: string
  }

  export type DetailPenjualanCreateOrConnectWithoutTransaksiInput = {
    where: DetailPenjualanWhereUniqueInput
    create: XOR<DetailPenjualanCreateWithoutTransaksiInput, DetailPenjualanUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailPenjualanCreateManyTransaksiInputEnvelope = {
    data: DetailPenjualanCreateManyTransaksiInput | DetailPenjualanCreateManyTransaksiInput[]
    skipDuplicates?: boolean
  }

  export type DetailPenjualanUpsertWithWhereUniqueWithoutTransaksiInput = {
    where: DetailPenjualanWhereUniqueInput
    update: XOR<DetailPenjualanUpdateWithoutTransaksiInput, DetailPenjualanUncheckedUpdateWithoutTransaksiInput>
    create: XOR<DetailPenjualanCreateWithoutTransaksiInput, DetailPenjualanUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailPenjualanUpdateWithWhereUniqueWithoutTransaksiInput = {
    where: DetailPenjualanWhereUniqueInput
    data: XOR<DetailPenjualanUpdateWithoutTransaksiInput, DetailPenjualanUncheckedUpdateWithoutTransaksiInput>
  }

  export type DetailPenjualanUpdateManyWithWhereWithoutTransaksiInput = {
    where: DetailPenjualanScalarWhereInput
    data: XOR<DetailPenjualanUpdateManyMutationInput, DetailPenjualanUncheckedUpdateManyWithoutTransaksiInput>
  }

  export type ObatCreateWithoutDetailPenjualanInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPembelian?: DetailPembelianCreateNestedManyWithoutObatInput
    stok?: StokCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateWithoutDetailPenjualanInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPembelian?: DetailPembelianUncheckedCreateNestedManyWithoutObatInput
    stok?: StokUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatCreateOrConnectWithoutDetailPenjualanInput = {
    where: ObatWhereUniqueInput
    create: XOR<ObatCreateWithoutDetailPenjualanInput, ObatUncheckedCreateWithoutDetailPenjualanInput>
  }

  export type TransaksiPenjualanCreateWithoutDetailsInput = {
    id?: string
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiPenjualanUncheckedCreateWithoutDetailsInput = {
    id?: string
    tanggal?: Date | string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiPenjualanCreateOrConnectWithoutDetailsInput = {
    where: TransaksiPenjualanWhereUniqueInput
    create: XOR<TransaksiPenjualanCreateWithoutDetailsInput, TransaksiPenjualanUncheckedCreateWithoutDetailsInput>
  }

  export type ObatUpsertWithoutDetailPenjualanInput = {
    update: XOR<ObatUpdateWithoutDetailPenjualanInput, ObatUncheckedUpdateWithoutDetailPenjualanInput>
    create: XOR<ObatCreateWithoutDetailPenjualanInput, ObatUncheckedCreateWithoutDetailPenjualanInput>
    where?: ObatWhereInput
  }

  export type ObatUpdateToOneWithWhereWithoutDetailPenjualanInput = {
    where?: ObatWhereInput
    data: XOR<ObatUpdateWithoutDetailPenjualanInput, ObatUncheckedUpdateWithoutDetailPenjualanInput>
  }

  export type ObatUpdateWithoutDetailPenjualanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPembelian?: DetailPembelianUpdateManyWithoutObatNestedInput
    stok?: StokUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateWithoutDetailPenjualanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPembelian?: DetailPembelianUncheckedUpdateManyWithoutObatNestedInput
    stok?: StokUncheckedUpdateManyWithoutObatNestedInput
  }

  export type TransaksiPenjualanUpsertWithoutDetailsInput = {
    update: XOR<TransaksiPenjualanUpdateWithoutDetailsInput, TransaksiPenjualanUncheckedUpdateWithoutDetailsInput>
    create: XOR<TransaksiPenjualanCreateWithoutDetailsInput, TransaksiPenjualanUncheckedCreateWithoutDetailsInput>
    where?: TransaksiPenjualanWhereInput
  }

  export type TransaksiPenjualanUpdateToOneWithWhereWithoutDetailsInput = {
    where?: TransaksiPenjualanWhereInput
    data: XOR<TransaksiPenjualanUpdateWithoutDetailsInput, TransaksiPenjualanUncheckedUpdateWithoutDetailsInput>
  }

  export type TransaksiPenjualanUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiPenjualanUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiPembelianCreateWithoutSupplierInput = {
    id?: string
    tanggal?: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DetailPembelianCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiPembelianUncheckedCreateWithoutSupplierInput = {
    id?: string
    tanggal?: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: DetailPembelianUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiPembelianCreateOrConnectWithoutSupplierInput = {
    where: TransaksiPembelianWhereUniqueInput
    create: XOR<TransaksiPembelianCreateWithoutSupplierInput, TransaksiPembelianUncheckedCreateWithoutSupplierInput>
  }

  export type TransaksiPembelianCreateManySupplierInputEnvelope = {
    data: TransaksiPembelianCreateManySupplierInput | TransaksiPembelianCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiPembelianUpsertWithWhereUniqueWithoutSupplierInput = {
    where: TransaksiPembelianWhereUniqueInput
    update: XOR<TransaksiPembelianUpdateWithoutSupplierInput, TransaksiPembelianUncheckedUpdateWithoutSupplierInput>
    create: XOR<TransaksiPembelianCreateWithoutSupplierInput, TransaksiPembelianUncheckedCreateWithoutSupplierInput>
  }

  export type TransaksiPembelianUpdateWithWhereUniqueWithoutSupplierInput = {
    where: TransaksiPembelianWhereUniqueInput
    data: XOR<TransaksiPembelianUpdateWithoutSupplierInput, TransaksiPembelianUncheckedUpdateWithoutSupplierInput>
  }

  export type TransaksiPembelianUpdateManyWithWhereWithoutSupplierInput = {
    where: TransaksiPembelianScalarWhereInput
    data: XOR<TransaksiPembelianUpdateManyMutationInput, TransaksiPembelianUncheckedUpdateManyWithoutSupplierInput>
  }

  export type TransaksiPembelianScalarWhereInput = {
    AND?: TransaksiPembelianScalarWhereInput | TransaksiPembelianScalarWhereInput[]
    OR?: TransaksiPembelianScalarWhereInput[]
    NOT?: TransaksiPembelianScalarWhereInput | TransaksiPembelianScalarWhereInput[]
    id?: StringFilter<"TransaksiPembelian"> | string
    tanggal?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    status?: StringFilter<"TransaksiPembelian"> | string
    supplierId?: StringFilter<"TransaksiPembelian"> | string
    createdAt?: DateTimeFilter<"TransaksiPembelian"> | Date | string
    updatedAt?: DateTimeFilter<"TransaksiPembelian"> | Date | string
  }

  export type DetailPembelianCreateWithoutTransaksiInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    obat: ObatCreateNestedOneWithoutDetailPembelianInput
  }

  export type DetailPembelianUncheckedCreateWithoutTransaksiInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    obatId: string
  }

  export type DetailPembelianCreateOrConnectWithoutTransaksiInput = {
    where: DetailPembelianWhereUniqueInput
    create: XOR<DetailPembelianCreateWithoutTransaksiInput, DetailPembelianUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailPembelianCreateManyTransaksiInputEnvelope = {
    data: DetailPembelianCreateManyTransaksiInput | DetailPembelianCreateManyTransaksiInput[]
    skipDuplicates?: boolean
  }

  export type SupplierCreateWithoutTransaksiPembelianInput = {
    id?: string
    nama: string
    alamat: string
    telepon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutTransaksiPembelianInput = {
    id?: string
    nama: string
    alamat: string
    telepon: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutTransaksiPembelianInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutTransaksiPembelianInput, SupplierUncheckedCreateWithoutTransaksiPembelianInput>
  }

  export type DetailPembelianUpsertWithWhereUniqueWithoutTransaksiInput = {
    where: DetailPembelianWhereUniqueInput
    update: XOR<DetailPembelianUpdateWithoutTransaksiInput, DetailPembelianUncheckedUpdateWithoutTransaksiInput>
    create: XOR<DetailPembelianCreateWithoutTransaksiInput, DetailPembelianUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailPembelianUpdateWithWhereUniqueWithoutTransaksiInput = {
    where: DetailPembelianWhereUniqueInput
    data: XOR<DetailPembelianUpdateWithoutTransaksiInput, DetailPembelianUncheckedUpdateWithoutTransaksiInput>
  }

  export type DetailPembelianUpdateManyWithWhereWithoutTransaksiInput = {
    where: DetailPembelianScalarWhereInput
    data: XOR<DetailPembelianUpdateManyMutationInput, DetailPembelianUncheckedUpdateManyWithoutTransaksiInput>
  }

  export type SupplierUpsertWithoutTransaksiPembelianInput = {
    update: XOR<SupplierUpdateWithoutTransaksiPembelianInput, SupplierUncheckedUpdateWithoutTransaksiPembelianInput>
    create: XOR<SupplierCreateWithoutTransaksiPembelianInput, SupplierUncheckedCreateWithoutTransaksiPembelianInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutTransaksiPembelianInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutTransaksiPembelianInput, SupplierUncheckedUpdateWithoutTransaksiPembelianInput>
  }

  export type SupplierUpdateWithoutTransaksiPembelianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutTransaksiPembelianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObatCreateWithoutDetailPembelianInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPenjualan?: DetailPenjualanCreateNestedManyWithoutObatInput
    stok?: StokCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateWithoutDetailPembelianInput = {
    id?: string
    nama: string
    hargaJual: number
    satuan?: string
    lokasiRak?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    detailPenjualan?: DetailPenjualanUncheckedCreateNestedManyWithoutObatInput
    stok?: StokUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatCreateOrConnectWithoutDetailPembelianInput = {
    where: ObatWhereUniqueInput
    create: XOR<ObatCreateWithoutDetailPembelianInput, ObatUncheckedCreateWithoutDetailPembelianInput>
  }

  export type TransaksiPembelianCreateWithoutDetailsInput = {
    id?: string
    tanggal?: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutTransaksiPembelianInput
  }

  export type TransaksiPembelianUncheckedCreateWithoutDetailsInput = {
    id?: string
    tanggal?: Date | string
    status: string
    supplierId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiPembelianCreateOrConnectWithoutDetailsInput = {
    where: TransaksiPembelianWhereUniqueInput
    create: XOR<TransaksiPembelianCreateWithoutDetailsInput, TransaksiPembelianUncheckedCreateWithoutDetailsInput>
  }

  export type ObatUpsertWithoutDetailPembelianInput = {
    update: XOR<ObatUpdateWithoutDetailPembelianInput, ObatUncheckedUpdateWithoutDetailPembelianInput>
    create: XOR<ObatCreateWithoutDetailPembelianInput, ObatUncheckedCreateWithoutDetailPembelianInput>
    where?: ObatWhereInput
  }

  export type ObatUpdateToOneWithWhereWithoutDetailPembelianInput = {
    where?: ObatWhereInput
    data: XOR<ObatUpdateWithoutDetailPembelianInput, ObatUncheckedUpdateWithoutDetailPembelianInput>
  }

  export type ObatUpdateWithoutDetailPembelianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPenjualan?: DetailPenjualanUpdateManyWithoutObatNestedInput
    stok?: StokUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateWithoutDetailPembelianInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    hargaJual?: IntFieldUpdateOperationsInput | number
    satuan?: StringFieldUpdateOperationsInput | string
    lokasiRak?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    detailPenjualan?: DetailPenjualanUncheckedUpdateManyWithoutObatNestedInput
    stok?: StokUncheckedUpdateManyWithoutObatNestedInput
  }

  export type TransaksiPembelianUpsertWithoutDetailsInput = {
    update: XOR<TransaksiPembelianUpdateWithoutDetailsInput, TransaksiPembelianUncheckedUpdateWithoutDetailsInput>
    create: XOR<TransaksiPembelianCreateWithoutDetailsInput, TransaksiPembelianUncheckedCreateWithoutDetailsInput>
    where?: TransaksiPembelianWhereInput
  }

  export type TransaksiPembelianUpdateToOneWithWhereWithoutDetailsInput = {
    where?: TransaksiPembelianWhereInput
    data: XOR<TransaksiPembelianUpdateWithoutDetailsInput, TransaksiPembelianUncheckedUpdateWithoutDetailsInput>
  }

  export type TransaksiPembelianUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutTransaksiPembelianNestedInput
  }

  export type TransaksiPembelianUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPembelianCreateManyObatInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    transaksiId: string
  }

  export type DetailPenjualanCreateManyObatInput = {
    id?: string
    quantity: number
    harga: number
    transaksiId: string
  }

  export type StokCreateManyObatInput = {
    id?: string
    jumlah?: number
    updatedAt?: Date | string
    createdAt?: Date | string
    tanggalKedaluwarsa: Date | string
  }

  export type DetailPembelianUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    transaksi?: TransaksiPembelianUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailPembelianUncheckedUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPembelianUncheckedUpdateManyWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPenjualanUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    transaksi?: TransaksiPenjualanUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type DetailPenjualanUncheckedUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPenjualanUncheckedUpdateManyWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    transaksiId?: StringFieldUpdateOperationsInput | string
  }

  export type StokUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUpdateManyWithoutStokNestedInput
  }

  export type StokUncheckedUpdateWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
    stockMovements?: StockMovementUncheckedUpdateManyWithoutStokNestedInput
  }

  export type StokUncheckedUpdateManyWithoutObatInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKedaluwarsa?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyStokInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
  }

  export type StockMovementUpdateWithoutStokInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateWithoutStokInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementUncheckedUpdateManyWithoutStokInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPenjualanCreateManyTransaksiInput = {
    id?: string
    quantity: number
    harga: number
    obatId: string
  }

  export type DetailPenjualanUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    obat?: ObatUpdateOneRequiredWithoutDetailPenjualanNestedInput
  }

  export type DetailPenjualanUncheckedUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    obatId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPenjualanUncheckedUpdateManyWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    obatId?: StringFieldUpdateOperationsInput | string
  }

  export type TransaksiPembelianCreateManySupplierInput = {
    id?: string
    tanggal?: Date | string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransaksiPembelianUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPembelianUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiPembelianUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: DetailPembelianUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiPembelianUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailPembelianCreateManyTransaksiInput = {
    id?: string
    quantityOrdered: number
    quantityReceived: number
    obatId: string
  }

  export type DetailPembelianUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    obat?: ObatUpdateOneRequiredWithoutDetailPembelianNestedInput
  }

  export type DetailPembelianUncheckedUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    obatId?: StringFieldUpdateOperationsInput | string
  }

  export type DetailPembelianUncheckedUpdateManyWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantityOrdered?: IntFieldUpdateOperationsInput | number
    quantityReceived?: IntFieldUpdateOperationsInput | number
    obatId?: StringFieldUpdateOperationsInput | string
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