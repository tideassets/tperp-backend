// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TperpSubgraphTypes } from './sources/tperp-subgraph/types';
import * as importedModule$0 from "./sources/tperp-subgraph/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type AffiliateRewardUpdate = {
  id: Scalars['ID'];
  affiliate: Scalars['String'];
  marketAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
  delta: Scalars['BigInt'];
  nextValue: Scalars['BigInt'];
  nextPoolValue: Scalars['BigInt'];
  transaction: Transaction;
};

export type AffiliateRewardUpdate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  affiliate?: InputMaybe<Scalars['String']>;
  affiliate_not?: InputMaybe<Scalars['String']>;
  affiliate_gt?: InputMaybe<Scalars['String']>;
  affiliate_lt?: InputMaybe<Scalars['String']>;
  affiliate_gte?: InputMaybe<Scalars['String']>;
  affiliate_lte?: InputMaybe<Scalars['String']>;
  affiliate_in?: InputMaybe<Array<Scalars['String']>>;
  affiliate_not_in?: InputMaybe<Array<Scalars['String']>>;
  affiliate_contains?: InputMaybe<Scalars['String']>;
  affiliate_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliate_not_contains?: InputMaybe<Scalars['String']>;
  affiliate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliate_starts_with?: InputMaybe<Scalars['String']>;
  affiliate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliate_not_starts_with?: InputMaybe<Scalars['String']>;
  affiliate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliate_ends_with?: InputMaybe<Scalars['String']>;
  affiliate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  affiliate_not_ends_with?: InputMaybe<Scalars['String']>;
  affiliate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
  tokenAddress_not?: InputMaybe<Scalars['String']>;
  tokenAddress_gt?: InputMaybe<Scalars['String']>;
  tokenAddress_lt?: InputMaybe<Scalars['String']>;
  tokenAddress_gte?: InputMaybe<Scalars['String']>;
  tokenAddress_lte?: InputMaybe<Scalars['String']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delta?: InputMaybe<Scalars['BigInt']>;
  delta_not?: InputMaybe<Scalars['BigInt']>;
  delta_gt?: InputMaybe<Scalars['BigInt']>;
  delta_lt?: InputMaybe<Scalars['BigInt']>;
  delta_gte?: InputMaybe<Scalars['BigInt']>;
  delta_lte?: InputMaybe<Scalars['BigInt']>;
  delta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextValue?: InputMaybe<Scalars['BigInt']>;
  nextValue_not?: InputMaybe<Scalars['BigInt']>;
  nextValue_gt?: InputMaybe<Scalars['BigInt']>;
  nextValue_lt?: InputMaybe<Scalars['BigInt']>;
  nextValue_gte?: InputMaybe<Scalars['BigInt']>;
  nextValue_lte?: InputMaybe<Scalars['BigInt']>;
  nextValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextPoolValue?: InputMaybe<Scalars['BigInt']>;
  nextPoolValue_not?: InputMaybe<Scalars['BigInt']>;
  nextPoolValue_gt?: InputMaybe<Scalars['BigInt']>;
  nextPoolValue_lt?: InputMaybe<Scalars['BigInt']>;
  nextPoolValue_gte?: InputMaybe<Scalars['BigInt']>;
  nextPoolValue_lte?: InputMaybe<Scalars['BigInt']>;
  nextPoolValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextPoolValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AffiliateRewardUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AffiliateRewardUpdate_filter>>>;
};

export type AffiliateRewardUpdate_orderBy =
  | 'id'
  | 'affiliate'
  | 'marketAddress'
  | 'tokenAddress'
  | 'delta'
  | 'nextValue'
  | 'nextPoolValue'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Candle = {
  id: Scalars['ID'];
  marketAddress: Scalars['String'];
  period: Scalars['String'];
  timestamp: Scalars['Int'];
  open: Scalars['BigInt'];
  close: Scalars['BigInt'];
  high: Scalars['BigInt'];
  low: Scalars['BigInt'];
};

export type Candle_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  open?: InputMaybe<Scalars['BigInt']>;
  open_not?: InputMaybe<Scalars['BigInt']>;
  open_gt?: InputMaybe<Scalars['BigInt']>;
  open_lt?: InputMaybe<Scalars['BigInt']>;
  open_gte?: InputMaybe<Scalars['BigInt']>;
  open_lte?: InputMaybe<Scalars['BigInt']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  close?: InputMaybe<Scalars['BigInt']>;
  close_not?: InputMaybe<Scalars['BigInt']>;
  close_gt?: InputMaybe<Scalars['BigInt']>;
  close_lt?: InputMaybe<Scalars['BigInt']>;
  close_gte?: InputMaybe<Scalars['BigInt']>;
  close_lte?: InputMaybe<Scalars['BigInt']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  high?: InputMaybe<Scalars['BigInt']>;
  high_not?: InputMaybe<Scalars['BigInt']>;
  high_gt?: InputMaybe<Scalars['BigInt']>;
  high_lt?: InputMaybe<Scalars['BigInt']>;
  high_gte?: InputMaybe<Scalars['BigInt']>;
  high_lte?: InputMaybe<Scalars['BigInt']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  low?: InputMaybe<Scalars['BigInt']>;
  low_not?: InputMaybe<Scalars['BigInt']>;
  low_gt?: InputMaybe<Scalars['BigInt']>;
  low_lt?: InputMaybe<Scalars['BigInt']>;
  low_gte?: InputMaybe<Scalars['BigInt']>;
  low_lte?: InputMaybe<Scalars['BigInt']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Candle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Candle_filter>>>;
};

export type Candle_orderBy =
  | 'id'
  | 'marketAddress'
  | 'period'
  | 'timestamp'
  | 'open'
  | 'close'
  | 'high'
  | 'low';

export type ClaimAction = {
  id: Scalars['ID'];
  eventName: ClaimActionType;
  account: Scalars['String'];
  marketAddresses: Array<Scalars['String']>;
  tokenAddresses: Array<Scalars['String']>;
  amounts: Array<Scalars['BigInt']>;
  isLongOrders: Array<Scalars['Boolean']>;
  transaction: Transaction;
};

export type ClaimActionType =
  | 'ClaimPriceImpact'
  | 'ClaimFunding'
  | 'SettleFundingFeeCreated'
  | 'SettleFundingFeeExecuted'
  | 'SettleFundingFeeCancelled';

export type ClaimAction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  eventName?: InputMaybe<ClaimActionType>;
  eventName_not?: InputMaybe<ClaimActionType>;
  eventName_in?: InputMaybe<Array<ClaimActionType>>;
  eventName_not_in?: InputMaybe<Array<ClaimActionType>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddresses?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  amounts?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  isLongOrders?: InputMaybe<Array<Scalars['Boolean']>>;
  isLongOrders_not?: InputMaybe<Array<Scalars['Boolean']>>;
  isLongOrders_contains?: InputMaybe<Array<Scalars['Boolean']>>;
  isLongOrders_contains_nocase?: InputMaybe<Array<Scalars['Boolean']>>;
  isLongOrders_not_contains?: InputMaybe<Array<Scalars['Boolean']>>;
  isLongOrders_not_contains_nocase?: InputMaybe<Array<Scalars['Boolean']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimAction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimAction_filter>>>;
};

export type ClaimAction_orderBy =
  | 'id'
  | 'eventName'
  | 'account'
  | 'marketAddresses'
  | 'tokenAddresses'
  | 'amounts'
  | 'isLongOrders'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type ClaimCollateralAction = {
  id: Scalars['ID'];
  eventName: ClaimActionType;
  account: Scalars['String'];
  marketAddresses: Array<Scalars['String']>;
  tokenAddresses: Array<Scalars['String']>;
  amounts: Array<Scalars['BigInt']>;
  transaction: Transaction;
};

export type ClaimCollateralAction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  eventName?: InputMaybe<ClaimActionType>;
  eventName_not?: InputMaybe<ClaimActionType>;
  eventName_in?: InputMaybe<Array<ClaimActionType>>;
  eventName_not_in?: InputMaybe<Array<ClaimActionType>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddresses?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  amounts?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimCollateralAction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimCollateralAction_filter>>>;
};

export type ClaimCollateralAction_orderBy =
  | 'id'
  | 'eventName'
  | 'account'
  | 'marketAddresses'
  | 'tokenAddresses'
  | 'amounts'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type ClaimRef = {
  id: Scalars['ID'];
};

export type ClaimRef_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimRef_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimRef_filter>>>;
};

export type ClaimRef_orderBy =
  | 'id';

export type ClaimableCollateral = {
  id: Scalars['ID'];
  account: Scalars['String'];
  marketAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
  timeKey: Scalars['String'];
  value: Scalars['BigInt'];
  claimed: Scalars['Boolean'];
  factor: Scalars['BigInt'];
  factorByTime: Scalars['BigInt'];
};

export type ClaimableCollateralGroup = {
  id: Scalars['ID'];
  timeKey: Scalars['String'];
  marketAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
  factor: Scalars['BigInt'];
  claimables: Array<ClaimableCollateral>;
};


export type ClaimableCollateralGroupclaimablesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimableCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimableCollateral_filter>;
};

export type ClaimableCollateralGroup_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timeKey?: InputMaybe<Scalars['String']>;
  timeKey_not?: InputMaybe<Scalars['String']>;
  timeKey_gt?: InputMaybe<Scalars['String']>;
  timeKey_lt?: InputMaybe<Scalars['String']>;
  timeKey_gte?: InputMaybe<Scalars['String']>;
  timeKey_lte?: InputMaybe<Scalars['String']>;
  timeKey_in?: InputMaybe<Array<Scalars['String']>>;
  timeKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  timeKey_contains?: InputMaybe<Scalars['String']>;
  timeKey_contains_nocase?: InputMaybe<Scalars['String']>;
  timeKey_not_contains?: InputMaybe<Scalars['String']>;
  timeKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  timeKey_starts_with?: InputMaybe<Scalars['String']>;
  timeKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timeKey_not_starts_with?: InputMaybe<Scalars['String']>;
  timeKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timeKey_ends_with?: InputMaybe<Scalars['String']>;
  timeKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timeKey_not_ends_with?: InputMaybe<Scalars['String']>;
  timeKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
  tokenAddress_not?: InputMaybe<Scalars['String']>;
  tokenAddress_gt?: InputMaybe<Scalars['String']>;
  tokenAddress_lt?: InputMaybe<Scalars['String']>;
  tokenAddress_gte?: InputMaybe<Scalars['String']>;
  tokenAddress_lte?: InputMaybe<Scalars['String']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  factor?: InputMaybe<Scalars['BigInt']>;
  factor_not?: InputMaybe<Scalars['BigInt']>;
  factor_gt?: InputMaybe<Scalars['BigInt']>;
  factor_lt?: InputMaybe<Scalars['BigInt']>;
  factor_gte?: InputMaybe<Scalars['BigInt']>;
  factor_lte?: InputMaybe<Scalars['BigInt']>;
  factor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  factor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimables?: InputMaybe<Array<Scalars['String']>>;
  claimables_not?: InputMaybe<Array<Scalars['String']>>;
  claimables_contains?: InputMaybe<Array<Scalars['String']>>;
  claimables_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  claimables_not_contains?: InputMaybe<Array<Scalars['String']>>;
  claimables_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  claimables_?: InputMaybe<ClaimableCollateral_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimableCollateralGroup_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimableCollateralGroup_filter>>>;
};

export type ClaimableCollateralGroup_orderBy =
  | 'id'
  | 'timeKey'
  | 'marketAddress'
  | 'tokenAddress'
  | 'factor'
  | 'claimables';

export type ClaimableCollateral_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
  tokenAddress_not?: InputMaybe<Scalars['String']>;
  tokenAddress_gt?: InputMaybe<Scalars['String']>;
  tokenAddress_lt?: InputMaybe<Scalars['String']>;
  tokenAddress_gte?: InputMaybe<Scalars['String']>;
  tokenAddress_lte?: InputMaybe<Scalars['String']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timeKey?: InputMaybe<Scalars['String']>;
  timeKey_not?: InputMaybe<Scalars['String']>;
  timeKey_gt?: InputMaybe<Scalars['String']>;
  timeKey_lt?: InputMaybe<Scalars['String']>;
  timeKey_gte?: InputMaybe<Scalars['String']>;
  timeKey_lte?: InputMaybe<Scalars['String']>;
  timeKey_in?: InputMaybe<Array<Scalars['String']>>;
  timeKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  timeKey_contains?: InputMaybe<Scalars['String']>;
  timeKey_contains_nocase?: InputMaybe<Scalars['String']>;
  timeKey_not_contains?: InputMaybe<Scalars['String']>;
  timeKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  timeKey_starts_with?: InputMaybe<Scalars['String']>;
  timeKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timeKey_not_starts_with?: InputMaybe<Scalars['String']>;
  timeKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  timeKey_ends_with?: InputMaybe<Scalars['String']>;
  timeKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timeKey_not_ends_with?: InputMaybe<Scalars['String']>;
  timeKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['BigInt']>;
  value_not?: InputMaybe<Scalars['BigInt']>;
  value_gt?: InputMaybe<Scalars['BigInt']>;
  value_lt?: InputMaybe<Scalars['BigInt']>;
  value_gte?: InputMaybe<Scalars['BigInt']>;
  value_lte?: InputMaybe<Scalars['BigInt']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  claimed?: InputMaybe<Scalars['Boolean']>;
  claimed_not?: InputMaybe<Scalars['Boolean']>;
  claimed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  claimed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  factor?: InputMaybe<Scalars['BigInt']>;
  factor_not?: InputMaybe<Scalars['BigInt']>;
  factor_gt?: InputMaybe<Scalars['BigInt']>;
  factor_lt?: InputMaybe<Scalars['BigInt']>;
  factor_gte?: InputMaybe<Scalars['BigInt']>;
  factor_lte?: InputMaybe<Scalars['BigInt']>;
  factor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  factor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  factorByTime?: InputMaybe<Scalars['BigInt']>;
  factorByTime_not?: InputMaybe<Scalars['BigInt']>;
  factorByTime_gt?: InputMaybe<Scalars['BigInt']>;
  factorByTime_lt?: InputMaybe<Scalars['BigInt']>;
  factorByTime_gte?: InputMaybe<Scalars['BigInt']>;
  factorByTime_lte?: InputMaybe<Scalars['BigInt']>;
  factorByTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  factorByTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimableCollateral_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimableCollateral_filter>>>;
};

export type ClaimableCollateral_orderBy =
  | 'id'
  | 'account'
  | 'marketAddress'
  | 'tokenAddress'
  | 'timeKey'
  | 'value'
  | 'claimed'
  | 'factor'
  | 'factorByTime';

export type ClaimableFundingFeeInfo = {
  id: Scalars['ID'];
  marketAddresses: Array<Scalars['String']>;
  tokenAddresses: Array<Scalars['String']>;
  amounts: Array<Scalars['BigInt']>;
};

export type ClaimableFundingFeeInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketAddresses?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  marketAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokenAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  amounts?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ClaimableFundingFeeInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ClaimableFundingFeeInfo_filter>>>;
};

export type ClaimableFundingFeeInfo_orderBy =
  | 'id'
  | 'marketAddresses'
  | 'tokenAddresses'
  | 'amounts';

export type CollectedMarketFeesInfo = {
  id: Scalars['ID'];
  period: Scalars['String'];
  marketAddress: Scalars['String'];
  feeUsdForPool: Scalars['BigInt'];
  cummulativeFeeUsdForPool: Scalars['BigInt'];
  feeUsdPerPoolValue: Scalars['BigInt'];
  cumulativeFeeUsdPerPoolValue: Scalars['BigInt'];
  feeUsdPerGmToken: Scalars['BigInt'];
  cumulativeFeeUsdPerGmToken: Scalars['BigInt'];
  prevCumulativeFeeUsdPerGmToken: Scalars['BigInt'];
  timestampGroup: Scalars['Int'];
};

export type CollectedMarketFeesInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  feeUsdForPool?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_not?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_gt?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_lt?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_gte?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_lte?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdForPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cummulativeFeeUsdForPool?: InputMaybe<Scalars['BigInt']>;
  cummulativeFeeUsdForPool_not?: InputMaybe<Scalars['BigInt']>;
  cummulativeFeeUsdForPool_gt?: InputMaybe<Scalars['BigInt']>;
  cummulativeFeeUsdForPool_lt?: InputMaybe<Scalars['BigInt']>;
  cummulativeFeeUsdForPool_gte?: InputMaybe<Scalars['BigInt']>;
  cummulativeFeeUsdForPool_lte?: InputMaybe<Scalars['BigInt']>;
  cummulativeFeeUsdForPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cummulativeFeeUsdForPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdPerPoolValue?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerPoolValue_not?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerPoolValue_gt?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerPoolValue_lt?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerPoolValue_gte?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerPoolValue_lte?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerPoolValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdPerPoolValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFeeUsdPerPoolValue?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerPoolValue_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerPoolValue_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerPoolValue_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerPoolValue_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerPoolValue_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerPoolValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFeeUsdPerPoolValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdPerGmToken?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerGmToken_not?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerGmToken_gt?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerGmToken_lt?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerGmToken_gte?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerGmToken_lte?: InputMaybe<Scalars['BigInt']>;
  feeUsdPerGmToken_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdPerGmToken_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFeeUsdPerGmToken?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFeeUsdPerGmToken_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  prevCumulativeFeeUsdPerGmToken?: InputMaybe<Scalars['BigInt']>;
  prevCumulativeFeeUsdPerGmToken_not?: InputMaybe<Scalars['BigInt']>;
  prevCumulativeFeeUsdPerGmToken_gt?: InputMaybe<Scalars['BigInt']>;
  prevCumulativeFeeUsdPerGmToken_lt?: InputMaybe<Scalars['BigInt']>;
  prevCumulativeFeeUsdPerGmToken_gte?: InputMaybe<Scalars['BigInt']>;
  prevCumulativeFeeUsdPerGmToken_lte?: InputMaybe<Scalars['BigInt']>;
  prevCumulativeFeeUsdPerGmToken_in?: InputMaybe<Array<Scalars['BigInt']>>;
  prevCumulativeFeeUsdPerGmToken_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampGroup?: InputMaybe<Scalars['Int']>;
  timestampGroup_not?: InputMaybe<Scalars['Int']>;
  timestampGroup_gt?: InputMaybe<Scalars['Int']>;
  timestampGroup_lt?: InputMaybe<Scalars['Int']>;
  timestampGroup_gte?: InputMaybe<Scalars['Int']>;
  timestampGroup_lte?: InputMaybe<Scalars['Int']>;
  timestampGroup_in?: InputMaybe<Array<Scalars['Int']>>;
  timestampGroup_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollectedMarketFeesInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollectedMarketFeesInfo_filter>>>;
};

export type CollectedMarketFeesInfo_orderBy =
  | 'id'
  | 'period'
  | 'marketAddress'
  | 'feeUsdForPool'
  | 'cummulativeFeeUsdForPool'
  | 'feeUsdPerPoolValue'
  | 'cumulativeFeeUsdPerPoolValue'
  | 'feeUsdPerGmToken'
  | 'cumulativeFeeUsdPerGmToken'
  | 'prevCumulativeFeeUsdPerGmToken'
  | 'timestampGroup';

export type DepositRef = {
  id: Scalars['ID'];
  marketAddress: Scalars['String'];
  account: Scalars['String'];
};

export type DepositRef_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositRef_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DepositRef_filter>>>;
};

export type DepositRef_orderBy =
  | 'id'
  | 'marketAddress'
  | 'account';

export type Distribution = {
  id: Scalars['ID'];
  receiver: Scalars['String'];
  amounts: Array<Scalars['BigInt']>;
  amountsInUsd: Array<Scalars['BigInt']>;
  tokens: Array<Scalars['String']>;
  typeId: Scalars['Int'];
  transactionHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  timestamp: Scalars['Int'];
};

export type Distribution_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amounts?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  amountsInUsd?: InputMaybe<Array<Scalars['BigInt']>>;
  amountsInUsd_not?: InputMaybe<Array<Scalars['BigInt']>>;
  amountsInUsd_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amountsInUsd_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  amountsInUsd_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  amountsInUsd_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokens?: InputMaybe<Array<Scalars['String']>>;
  tokens_not?: InputMaybe<Array<Scalars['String']>>;
  tokens_contains?: InputMaybe<Array<Scalars['String']>>;
  tokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  tokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  tokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  typeId?: InputMaybe<Scalars['Int']>;
  typeId_not?: InputMaybe<Scalars['Int']>;
  typeId_gt?: InputMaybe<Scalars['Int']>;
  typeId_lt?: InputMaybe<Scalars['Int']>;
  typeId_gte?: InputMaybe<Scalars['Int']>;
  typeId_lte?: InputMaybe<Scalars['Int']>;
  typeId_in?: InputMaybe<Array<Scalars['Int']>>;
  typeId_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionHash?: InputMaybe<Scalars['String']>;
  transactionHash_not?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']>;
  transactionHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Distribution_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Distribution_filter>>>;
};

export type Distribution_orderBy =
  | 'id'
  | 'receiver'
  | 'amounts'
  | 'amountsInUsd'
  | 'tokens'
  | 'typeId'
  | 'transactionHash'
  | 'blockNumber'
  | 'timestamp';

export type GlpGmMigrationStat = {
  id: Scalars['ID'];
  eligibleRedemptionUsd: Scalars['BigInt'];
  eligibleRedemptionInArb: Scalars['BigInt'];
};

export type GlpGmMigrationStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  eligibleRedemptionUsd?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_not?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleRedemptionUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleRedemptionInArb?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_not?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleRedemptionInArb_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlpGmMigrationStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GlpGmMigrationStat_filter>>>;
};

export type GlpGmMigrationStat_orderBy =
  | 'id'
  | 'eligibleRedemptionUsd'
  | 'eligibleRedemptionInArb';

export type LatestUserGmTokensBalanceChangeRef = {
  id: Scalars['ID'];
  latestUserGmTokensBalanceChange?: Maybe<UserGmTokensBalanceChange>;
};

export type LatestUserGmTokensBalanceChangeRef_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  latestUserGmTokensBalanceChange?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_not?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_gt?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_lt?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_gte?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_lte?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_in?: InputMaybe<Array<Scalars['String']>>;
  latestUserGmTokensBalanceChange_not_in?: InputMaybe<Array<Scalars['String']>>;
  latestUserGmTokensBalanceChange_contains?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_contains_nocase?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_not_contains?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_not_contains_nocase?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_starts_with?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_not_starts_with?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_ends_with?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_not_ends_with?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  latestUserGmTokensBalanceChange_?: InputMaybe<UserGmTokensBalanceChange_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LatestUserGmTokensBalanceChangeRef_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LatestUserGmTokensBalanceChangeRef_filter>>>;
};

export type LatestUserGmTokensBalanceChangeRef_orderBy =
  | 'id'
  | 'latestUserGmTokensBalanceChange'
  | 'latestUserGmTokensBalanceChange__id'
  | 'latestUserGmTokensBalanceChange__account'
  | 'latestUserGmTokensBalanceChange__marketAddress'
  | 'latestUserGmTokensBalanceChange__tokensBalance'
  | 'latestUserGmTokensBalanceChange__timestamp'
  | 'latestUserGmTokensBalanceChange__cumulativeIncome'
  | 'latestUserGmTokensBalanceChange__cumulativeFeeUsdPerGmToken'
  | 'latestUserGmTokensBalanceChange__index';

export type LiquidityProviderIncentivesStat = {
  id: Scalars['ID'];
  period: Scalars['String'];
  timestamp: Scalars['Int'];
  account: Scalars['String'];
  marketAddress: Scalars['String'];
  updatedTimestamp: Scalars['Int'];
  lastMarketTokensBalance: Scalars['BigInt'];
  cumulativeTimeByMarketTokensBalance: Scalars['BigInt'];
  weightedAverageMarketTokensBalance: Scalars['BigInt'];
};

export type LiquidityProviderIncentivesStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updatedTimestamp?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_not?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_gt?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_lt?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_gte?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_lte?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastMarketTokensBalance?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensBalance_not?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensBalance_gt?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensBalance_lt?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensBalance_gte?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensBalance_lte?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastMarketTokensBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeTimeByMarketTokensBalance?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensBalance_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensBalance_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensBalance_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensBalance_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensBalance_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeTimeByMarketTokensBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weightedAverageMarketTokensBalance?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensBalance_not?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensBalance_gt?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensBalance_lt?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensBalance_gte?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensBalance_lte?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weightedAverageMarketTokensBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityProviderIncentivesStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityProviderIncentivesStat_filter>>>;
};

export type LiquidityProviderIncentivesStat_orderBy =
  | 'id'
  | 'period'
  | 'timestamp'
  | 'account'
  | 'marketAddress'
  | 'updatedTimestamp'
  | 'lastMarketTokensBalance'
  | 'cumulativeTimeByMarketTokensBalance'
  | 'weightedAverageMarketTokensBalance';

export type MarketIncentivesStat = {
  id: Scalars['ID'];
  period: Scalars['String'];
  timestamp: Scalars['Int'];
  marketAddress: Scalars['String'];
  updatedTimestamp: Scalars['Int'];
  lastMarketTokensSupply: Scalars['BigInt'];
  cumulativeTimeByMarketTokensSupply: Scalars['BigInt'];
  weightedAverageMarketTokensSupply: Scalars['BigInt'];
};

export type MarketIncentivesStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  updatedTimestamp?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_not?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_gt?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_lt?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_gte?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_lte?: InputMaybe<Scalars['Int']>;
  updatedTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastMarketTokensSupply?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensSupply_not?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lastMarketTokensSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastMarketTokensSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeTimeByMarketTokensSupply?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensSupply_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensSupply_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensSupply_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensSupply_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensSupply_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeTimeByMarketTokensSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeTimeByMarketTokensSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weightedAverageMarketTokensSupply?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensSupply_not?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensSupply_gt?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensSupply_lt?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensSupply_gte?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensSupply_lte?: InputMaybe<Scalars['BigInt']>;
  weightedAverageMarketTokensSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weightedAverageMarketTokensSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketIncentivesStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MarketIncentivesStat_filter>>>;
};

export type MarketIncentivesStat_orderBy =
  | 'id'
  | 'period'
  | 'timestamp'
  | 'marketAddress'
  | 'updatedTimestamp'
  | 'lastMarketTokensSupply'
  | 'cumulativeTimeByMarketTokensSupply'
  | 'weightedAverageMarketTokensSupply';

export type MarketInfo = {
  id: Scalars['ID'];
  marketToken: Scalars['String'];
  indexToken: Scalars['String'];
  longToken: Scalars['String'];
  shortToken: Scalars['String'];
  marketTokensSupply: Scalars['BigInt'];
};

export type MarketInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketToken?: InputMaybe<Scalars['String']>;
  marketToken_not?: InputMaybe<Scalars['String']>;
  marketToken_gt?: InputMaybe<Scalars['String']>;
  marketToken_lt?: InputMaybe<Scalars['String']>;
  marketToken_gte?: InputMaybe<Scalars['String']>;
  marketToken_lte?: InputMaybe<Scalars['String']>;
  marketToken_in?: InputMaybe<Array<Scalars['String']>>;
  marketToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketToken_contains?: InputMaybe<Scalars['String']>;
  marketToken_contains_nocase?: InputMaybe<Scalars['String']>;
  marketToken_not_contains?: InputMaybe<Scalars['String']>;
  marketToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketToken_starts_with?: InputMaybe<Scalars['String']>;
  marketToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketToken_not_starts_with?: InputMaybe<Scalars['String']>;
  marketToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketToken_ends_with?: InputMaybe<Scalars['String']>;
  marketToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketToken_not_ends_with?: InputMaybe<Scalars['String']>;
  marketToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken?: InputMaybe<Scalars['String']>;
  indexToken_not?: InputMaybe<Scalars['String']>;
  indexToken_gt?: InputMaybe<Scalars['String']>;
  indexToken_lt?: InputMaybe<Scalars['String']>;
  indexToken_gte?: InputMaybe<Scalars['String']>;
  indexToken_lte?: InputMaybe<Scalars['String']>;
  indexToken_in?: InputMaybe<Array<Scalars['String']>>;
  indexToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexToken_contains?: InputMaybe<Scalars['String']>;
  indexToken_contains_nocase?: InputMaybe<Scalars['String']>;
  indexToken_not_contains?: InputMaybe<Scalars['String']>;
  indexToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexToken_starts_with?: InputMaybe<Scalars['String']>;
  indexToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken_not_starts_with?: InputMaybe<Scalars['String']>;
  indexToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken_ends_with?: InputMaybe<Scalars['String']>;
  indexToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken_not_ends_with?: InputMaybe<Scalars['String']>;
  indexToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  longToken?: InputMaybe<Scalars['String']>;
  longToken_not?: InputMaybe<Scalars['String']>;
  longToken_gt?: InputMaybe<Scalars['String']>;
  longToken_lt?: InputMaybe<Scalars['String']>;
  longToken_gte?: InputMaybe<Scalars['String']>;
  longToken_lte?: InputMaybe<Scalars['String']>;
  longToken_in?: InputMaybe<Array<Scalars['String']>>;
  longToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  longToken_contains?: InputMaybe<Scalars['String']>;
  longToken_contains_nocase?: InputMaybe<Scalars['String']>;
  longToken_not_contains?: InputMaybe<Scalars['String']>;
  longToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  longToken_starts_with?: InputMaybe<Scalars['String']>;
  longToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  longToken_not_starts_with?: InputMaybe<Scalars['String']>;
  longToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  longToken_ends_with?: InputMaybe<Scalars['String']>;
  longToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  longToken_not_ends_with?: InputMaybe<Scalars['String']>;
  longToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  shortToken?: InputMaybe<Scalars['String']>;
  shortToken_not?: InputMaybe<Scalars['String']>;
  shortToken_gt?: InputMaybe<Scalars['String']>;
  shortToken_lt?: InputMaybe<Scalars['String']>;
  shortToken_gte?: InputMaybe<Scalars['String']>;
  shortToken_lte?: InputMaybe<Scalars['String']>;
  shortToken_in?: InputMaybe<Array<Scalars['String']>>;
  shortToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  shortToken_contains?: InputMaybe<Scalars['String']>;
  shortToken_contains_nocase?: InputMaybe<Scalars['String']>;
  shortToken_not_contains?: InputMaybe<Scalars['String']>;
  shortToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  shortToken_starts_with?: InputMaybe<Scalars['String']>;
  shortToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  shortToken_not_starts_with?: InputMaybe<Scalars['String']>;
  shortToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  shortToken_ends_with?: InputMaybe<Scalars['String']>;
  shortToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  shortToken_not_ends_with?: InputMaybe<Scalars['String']>;
  shortToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketTokensSupply?: InputMaybe<Scalars['BigInt']>;
  marketTokensSupply_not?: InputMaybe<Scalars['BigInt']>;
  marketTokensSupply_gt?: InputMaybe<Scalars['BigInt']>;
  marketTokensSupply_lt?: InputMaybe<Scalars['BigInt']>;
  marketTokensSupply_gte?: InputMaybe<Scalars['BigInt']>;
  marketTokensSupply_lte?: InputMaybe<Scalars['BigInt']>;
  marketTokensSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketTokensSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MarketInfo_filter>>>;
};

export type MarketInfo_orderBy =
  | 'id'
  | 'marketToken'
  | 'indexToken'
  | 'longToken'
  | 'shortToken'
  | 'marketTokensSupply';

export type Order = {
  id: Scalars['ID'];
  account: Scalars['String'];
  receiver: Scalars['String'];
  callbackContract: Scalars['String'];
  marketAddress: Scalars['String'];
  swapPath?: Maybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress: Scalars['String'];
  sizeDeltaUsd: Scalars['BigInt'];
  initialCollateralDeltaAmount: Scalars['BigInt'];
  triggerPrice: Scalars['BigInt'];
  acceptablePrice: Scalars['BigInt'];
  executionFee: Scalars['BigInt'];
  callbackGasLimit: Scalars['BigInt'];
  minOutputAmount: Scalars['BigInt'];
  updatedAtBlock: Scalars['BigInt'];
  orderType: Scalars['BigInt'];
  shouldUnwrapNativeToken: Scalars['Boolean'];
  isLong: Scalars['Boolean'];
  status: OrderStatus;
  cancelledReason?: Maybe<Scalars['String']>;
  cancelledReasonBytes?: Maybe<Scalars['Bytes']>;
  frozenReason?: Maybe<Scalars['String']>;
  frozenReasonBytes?: Maybe<Scalars['Bytes']>;
  createdTxn: Transaction;
  cancelledTxn?: Maybe<Transaction>;
  executedTxn?: Maybe<Transaction>;
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type OrderStatus =
  | 'Created'
  | 'Executed'
  | 'Cancelled'
  | 'Frozen';

export type Order_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  callbackContract?: InputMaybe<Scalars['String']>;
  callbackContract_not?: InputMaybe<Scalars['String']>;
  callbackContract_gt?: InputMaybe<Scalars['String']>;
  callbackContract_lt?: InputMaybe<Scalars['String']>;
  callbackContract_gte?: InputMaybe<Scalars['String']>;
  callbackContract_lte?: InputMaybe<Scalars['String']>;
  callbackContract_in?: InputMaybe<Array<Scalars['String']>>;
  callbackContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  callbackContract_contains?: InputMaybe<Scalars['String']>;
  callbackContract_contains_nocase?: InputMaybe<Scalars['String']>;
  callbackContract_not_contains?: InputMaybe<Scalars['String']>;
  callbackContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  callbackContract_starts_with?: InputMaybe<Scalars['String']>;
  callbackContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  callbackContract_not_starts_with?: InputMaybe<Scalars['String']>;
  callbackContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  callbackContract_ends_with?: InputMaybe<Scalars['String']>;
  callbackContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  callbackContract_not_ends_with?: InputMaybe<Scalars['String']>;
  callbackContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swapPath?: InputMaybe<Array<Scalars['String']>>;
  swapPath_not?: InputMaybe<Array<Scalars['String']>>;
  swapPath_contains?: InputMaybe<Array<Scalars['String']>>;
  swapPath_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swapPath_not_contains?: InputMaybe<Array<Scalars['String']>>;
  swapPath_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_gt?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_lt?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_gte?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_lte?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress_contains?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sizeDeltaUsd?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_not?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialCollateralDeltaAmount?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_not?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_gt?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_lt?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_gte?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_lte?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialCollateralDeltaAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggerPrice?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_not?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_gt?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_lt?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_gte?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_lte?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggerPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  acceptablePrice?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_not?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_gt?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_lt?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_gte?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_lte?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  acceptablePrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionFee?: InputMaybe<Scalars['BigInt']>;
  executionFee_not?: InputMaybe<Scalars['BigInt']>;
  executionFee_gt?: InputMaybe<Scalars['BigInt']>;
  executionFee_lt?: InputMaybe<Scalars['BigInt']>;
  executionFee_gte?: InputMaybe<Scalars['BigInt']>;
  executionFee_lte?: InputMaybe<Scalars['BigInt']>;
  executionFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackGasLimit?: InputMaybe<Scalars['BigInt']>;
  callbackGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  callbackGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  callbackGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  callbackGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  callbackGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  callbackGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minOutputAmount?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_not?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_gt?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_lt?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_gte?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_lte?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minOutputAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlock?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_not?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderType?: InputMaybe<Scalars['BigInt']>;
  orderType_not?: InputMaybe<Scalars['BigInt']>;
  orderType_gt?: InputMaybe<Scalars['BigInt']>;
  orderType_lt?: InputMaybe<Scalars['BigInt']>;
  orderType_gte?: InputMaybe<Scalars['BigInt']>;
  orderType_lte?: InputMaybe<Scalars['BigInt']>;
  orderType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shouldUnwrapNativeToken?: InputMaybe<Scalars['Boolean']>;
  shouldUnwrapNativeToken_not?: InputMaybe<Scalars['Boolean']>;
  shouldUnwrapNativeToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  shouldUnwrapNativeToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLong?: InputMaybe<Scalars['Boolean']>;
  isLong_not?: InputMaybe<Scalars['Boolean']>;
  isLong_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLong_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  status?: InputMaybe<OrderStatus>;
  status_not?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  cancelledReason?: InputMaybe<Scalars['String']>;
  cancelledReason_not?: InputMaybe<Scalars['String']>;
  cancelledReason_gt?: InputMaybe<Scalars['String']>;
  cancelledReason_lt?: InputMaybe<Scalars['String']>;
  cancelledReason_gte?: InputMaybe<Scalars['String']>;
  cancelledReason_lte?: InputMaybe<Scalars['String']>;
  cancelledReason_in?: InputMaybe<Array<Scalars['String']>>;
  cancelledReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  cancelledReason_contains?: InputMaybe<Scalars['String']>;
  cancelledReason_contains_nocase?: InputMaybe<Scalars['String']>;
  cancelledReason_not_contains?: InputMaybe<Scalars['String']>;
  cancelledReason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cancelledReason_starts_with?: InputMaybe<Scalars['String']>;
  cancelledReason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledReason_not_starts_with?: InputMaybe<Scalars['String']>;
  cancelledReason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledReason_ends_with?: InputMaybe<Scalars['String']>;
  cancelledReason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledReason_not_ends_with?: InputMaybe<Scalars['String']>;
  cancelledReason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledReasonBytes?: InputMaybe<Scalars['Bytes']>;
  cancelledReasonBytes_not?: InputMaybe<Scalars['Bytes']>;
  cancelledReasonBytes_gt?: InputMaybe<Scalars['Bytes']>;
  cancelledReasonBytes_lt?: InputMaybe<Scalars['Bytes']>;
  cancelledReasonBytes_gte?: InputMaybe<Scalars['Bytes']>;
  cancelledReasonBytes_lte?: InputMaybe<Scalars['Bytes']>;
  cancelledReasonBytes_in?: InputMaybe<Array<Scalars['Bytes']>>;
  cancelledReasonBytes_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  cancelledReasonBytes_contains?: InputMaybe<Scalars['Bytes']>;
  cancelledReasonBytes_not_contains?: InputMaybe<Scalars['Bytes']>;
  frozenReason?: InputMaybe<Scalars['String']>;
  frozenReason_not?: InputMaybe<Scalars['String']>;
  frozenReason_gt?: InputMaybe<Scalars['String']>;
  frozenReason_lt?: InputMaybe<Scalars['String']>;
  frozenReason_gte?: InputMaybe<Scalars['String']>;
  frozenReason_lte?: InputMaybe<Scalars['String']>;
  frozenReason_in?: InputMaybe<Array<Scalars['String']>>;
  frozenReason_not_in?: InputMaybe<Array<Scalars['String']>>;
  frozenReason_contains?: InputMaybe<Scalars['String']>;
  frozenReason_contains_nocase?: InputMaybe<Scalars['String']>;
  frozenReason_not_contains?: InputMaybe<Scalars['String']>;
  frozenReason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  frozenReason_starts_with?: InputMaybe<Scalars['String']>;
  frozenReason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  frozenReason_not_starts_with?: InputMaybe<Scalars['String']>;
  frozenReason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  frozenReason_ends_with?: InputMaybe<Scalars['String']>;
  frozenReason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  frozenReason_not_ends_with?: InputMaybe<Scalars['String']>;
  frozenReason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  frozenReasonBytes?: InputMaybe<Scalars['Bytes']>;
  frozenReasonBytes_not?: InputMaybe<Scalars['Bytes']>;
  frozenReasonBytes_gt?: InputMaybe<Scalars['Bytes']>;
  frozenReasonBytes_lt?: InputMaybe<Scalars['Bytes']>;
  frozenReasonBytes_gte?: InputMaybe<Scalars['Bytes']>;
  frozenReasonBytes_lte?: InputMaybe<Scalars['Bytes']>;
  frozenReasonBytes_in?: InputMaybe<Array<Scalars['Bytes']>>;
  frozenReasonBytes_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  frozenReasonBytes_contains?: InputMaybe<Scalars['Bytes']>;
  frozenReasonBytes_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdTxn?: InputMaybe<Scalars['String']>;
  createdTxn_not?: InputMaybe<Scalars['String']>;
  createdTxn_gt?: InputMaybe<Scalars['String']>;
  createdTxn_lt?: InputMaybe<Scalars['String']>;
  createdTxn_gte?: InputMaybe<Scalars['String']>;
  createdTxn_lte?: InputMaybe<Scalars['String']>;
  createdTxn_in?: InputMaybe<Array<Scalars['String']>>;
  createdTxn_not_in?: InputMaybe<Array<Scalars['String']>>;
  createdTxn_contains?: InputMaybe<Scalars['String']>;
  createdTxn_contains_nocase?: InputMaybe<Scalars['String']>;
  createdTxn_not_contains?: InputMaybe<Scalars['String']>;
  createdTxn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  createdTxn_starts_with?: InputMaybe<Scalars['String']>;
  createdTxn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdTxn_not_starts_with?: InputMaybe<Scalars['String']>;
  createdTxn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdTxn_ends_with?: InputMaybe<Scalars['String']>;
  createdTxn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdTxn_not_ends_with?: InputMaybe<Scalars['String']>;
  createdTxn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  createdTxn_?: InputMaybe<Transaction_filter>;
  cancelledTxn?: InputMaybe<Scalars['String']>;
  cancelledTxn_not?: InputMaybe<Scalars['String']>;
  cancelledTxn_gt?: InputMaybe<Scalars['String']>;
  cancelledTxn_lt?: InputMaybe<Scalars['String']>;
  cancelledTxn_gte?: InputMaybe<Scalars['String']>;
  cancelledTxn_lte?: InputMaybe<Scalars['String']>;
  cancelledTxn_in?: InputMaybe<Array<Scalars['String']>>;
  cancelledTxn_not_in?: InputMaybe<Array<Scalars['String']>>;
  cancelledTxn_contains?: InputMaybe<Scalars['String']>;
  cancelledTxn_contains_nocase?: InputMaybe<Scalars['String']>;
  cancelledTxn_not_contains?: InputMaybe<Scalars['String']>;
  cancelledTxn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  cancelledTxn_starts_with?: InputMaybe<Scalars['String']>;
  cancelledTxn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledTxn_not_starts_with?: InputMaybe<Scalars['String']>;
  cancelledTxn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledTxn_ends_with?: InputMaybe<Scalars['String']>;
  cancelledTxn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledTxn_not_ends_with?: InputMaybe<Scalars['String']>;
  cancelledTxn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  cancelledTxn_?: InputMaybe<Transaction_filter>;
  executedTxn?: InputMaybe<Scalars['String']>;
  executedTxn_not?: InputMaybe<Scalars['String']>;
  executedTxn_gt?: InputMaybe<Scalars['String']>;
  executedTxn_lt?: InputMaybe<Scalars['String']>;
  executedTxn_gte?: InputMaybe<Scalars['String']>;
  executedTxn_lte?: InputMaybe<Scalars['String']>;
  executedTxn_in?: InputMaybe<Array<Scalars['String']>>;
  executedTxn_not_in?: InputMaybe<Array<Scalars['String']>>;
  executedTxn_contains?: InputMaybe<Scalars['String']>;
  executedTxn_contains_nocase?: InputMaybe<Scalars['String']>;
  executedTxn_not_contains?: InputMaybe<Scalars['String']>;
  executedTxn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  executedTxn_starts_with?: InputMaybe<Scalars['String']>;
  executedTxn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  executedTxn_not_starts_with?: InputMaybe<Scalars['String']>;
  executedTxn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  executedTxn_ends_with?: InputMaybe<Scalars['String']>;
  executedTxn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  executedTxn_not_ends_with?: InputMaybe<Scalars['String']>;
  executedTxn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  executedTxn_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Order_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Order_filter>>>;
};

export type Order_orderBy =
  | 'id'
  | 'account'
  | 'receiver'
  | 'callbackContract'
  | 'marketAddress'
  | 'swapPath'
  | 'initialCollateralTokenAddress'
  | 'sizeDeltaUsd'
  | 'initialCollateralDeltaAmount'
  | 'triggerPrice'
  | 'acceptablePrice'
  | 'executionFee'
  | 'callbackGasLimit'
  | 'minOutputAmount'
  | 'updatedAtBlock'
  | 'orderType'
  | 'shouldUnwrapNativeToken'
  | 'isLong'
  | 'status'
  | 'cancelledReason'
  | 'cancelledReasonBytes'
  | 'frozenReason'
  | 'frozenReasonBytes'
  | 'createdTxn'
  | 'createdTxn__id'
  | 'createdTxn__from'
  | 'createdTxn__to'
  | 'createdTxn__hash'
  | 'createdTxn__timestamp'
  | 'createdTxn__blockNumber'
  | 'createdTxn__transactionIndex'
  | 'cancelledTxn'
  | 'cancelledTxn__id'
  | 'cancelledTxn__from'
  | 'cancelledTxn__to'
  | 'cancelledTxn__hash'
  | 'cancelledTxn__timestamp'
  | 'cancelledTxn__blockNumber'
  | 'cancelledTxn__transactionIndex'
  | 'executedTxn'
  | 'executedTxn__id'
  | 'executedTxn__from'
  | 'executedTxn__to'
  | 'executedTxn__hash'
  | 'executedTxn__timestamp'
  | 'executedTxn__blockNumber'
  | 'executedTxn__transactionIndex';

export type PoolAmountUpdate = {
  id: Scalars['ID'];
  marketAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
  delta: Scalars['BigInt'];
  nextValue: Scalars['BigInt'];
  transaction: Transaction;
};

export type PoolAmountUpdate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
  tokenAddress_not?: InputMaybe<Scalars['String']>;
  tokenAddress_gt?: InputMaybe<Scalars['String']>;
  tokenAddress_lt?: InputMaybe<Scalars['String']>;
  tokenAddress_gte?: InputMaybe<Scalars['String']>;
  tokenAddress_lte?: InputMaybe<Scalars['String']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delta?: InputMaybe<Scalars['BigInt']>;
  delta_not?: InputMaybe<Scalars['BigInt']>;
  delta_gt?: InputMaybe<Scalars['BigInt']>;
  delta_lt?: InputMaybe<Scalars['BigInt']>;
  delta_gte?: InputMaybe<Scalars['BigInt']>;
  delta_lte?: InputMaybe<Scalars['BigInt']>;
  delta_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delta_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextValue?: InputMaybe<Scalars['BigInt']>;
  nextValue_not?: InputMaybe<Scalars['BigInt']>;
  nextValue_gt?: InputMaybe<Scalars['BigInt']>;
  nextValue_lt?: InputMaybe<Scalars['BigInt']>;
  nextValue_gte?: InputMaybe<Scalars['BigInt']>;
  nextValue_lte?: InputMaybe<Scalars['BigInt']>;
  nextValue_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextValue_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolAmountUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolAmountUpdate_filter>>>;
};

export type PoolAmountUpdate_orderBy =
  | 'id'
  | 'marketAddress'
  | 'tokenAddress'
  | 'delta'
  | 'nextValue'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type PositionDecrease = {
  id: Scalars['ID'];
  orderKey: Scalars['String'];
  positionKey: Scalars['String'];
  account: Scalars['String'];
  marketAddress: Scalars['String'];
  collateralTokenAddress: Scalars['String'];
  collateralTokenPriceMin: Scalars['BigInt'];
  collateralTokenPriceMax: Scalars['BigInt'];
  sizeInUsd: Scalars['BigInt'];
  sizeInTokens: Scalars['BigInt'];
  collateralAmount: Scalars['BigInt'];
  sizeDeltaUsd: Scalars['BigInt'];
  sizeDeltaInTokens: Scalars['BigInt'];
  collateralDeltaAmount: Scalars['BigInt'];
  executionPrice: Scalars['BigInt'];
  priceImpactDiffUsd: Scalars['BigInt'];
  priceImpactUsd: Scalars['BigInt'];
  orderType: Scalars['BigInt'];
  borrowingFactor: Scalars['BigInt'];
  longTokenFundingAmountPerSize: Scalars['BigInt'];
  shortTokenFundingAmountPerSize: Scalars['BigInt'];
  priceImpactAmount: Scalars['BigInt'];
  basePnlUsd: Scalars['BigInt'];
  isLong: Scalars['Boolean'];
  transaction?: Maybe<Transaction>;
};

export type PositionDecrease_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  orderKey?: InputMaybe<Scalars['String']>;
  orderKey_not?: InputMaybe<Scalars['String']>;
  orderKey_gt?: InputMaybe<Scalars['String']>;
  orderKey_lt?: InputMaybe<Scalars['String']>;
  orderKey_gte?: InputMaybe<Scalars['String']>;
  orderKey_lte?: InputMaybe<Scalars['String']>;
  orderKey_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_contains?: InputMaybe<Scalars['String']>;
  orderKey_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_contains?: InputMaybe<Scalars['String']>;
  orderKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey?: InputMaybe<Scalars['String']>;
  positionKey_not?: InputMaybe<Scalars['String']>;
  positionKey_gt?: InputMaybe<Scalars['String']>;
  positionKey_lt?: InputMaybe<Scalars['String']>;
  positionKey_gte?: InputMaybe<Scalars['String']>;
  positionKey_lte?: InputMaybe<Scalars['String']>;
  positionKey_in?: InputMaybe<Array<Scalars['String']>>;
  positionKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  positionKey_contains?: InputMaybe<Scalars['String']>;
  positionKey_contains_nocase?: InputMaybe<Scalars['String']>;
  positionKey_not_contains?: InputMaybe<Scalars['String']>;
  positionKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  positionKey_starts_with?: InputMaybe<Scalars['String']>;
  positionKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey_not_starts_with?: InputMaybe<Scalars['String']>;
  positionKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey_ends_with?: InputMaybe<Scalars['String']>;
  positionKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey_not_ends_with?: InputMaybe<Scalars['String']>;
  positionKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_gt?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_lt?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_gte?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_lte?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  collateralTokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  collateralTokenAddress_contains?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenPriceMin?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInUsd?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_not?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_gt?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_lt?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_gte?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_lte?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInTokens?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_not?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_gt?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_lt?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_gte?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_lte?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAmount?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_not?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_gt?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_lt?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_gte?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_lte?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaUsd?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_not?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaInTokens?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_not?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_gt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_lt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_gte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_lte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralDeltaAmount?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_not?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_gt?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_lt?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_gte?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_lte?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralDeltaAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactDiffUsd?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactDiffUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderType?: InputMaybe<Scalars['BigInt']>;
  orderType_not?: InputMaybe<Scalars['BigInt']>;
  orderType_gt?: InputMaybe<Scalars['BigInt']>;
  orderType_lt?: InputMaybe<Scalars['BigInt']>;
  orderType_gte?: InputMaybe<Scalars['BigInt']>;
  orderType_lte?: InputMaybe<Scalars['BigInt']>;
  orderType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFactor?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_not?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_gt?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_lt?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_gte?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_lte?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  longTokenFundingAmountPerSize?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_not?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_gt?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_lt?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_gte?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_lte?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  longTokenFundingAmountPerSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shortTokenFundingAmountPerSize?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_not?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_gt?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_lt?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_gte?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_lte?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shortTokenFundingAmountPerSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactAmount?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  basePnlUsd?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_not?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_gt?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_lt?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_gte?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_lte?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  basePnlUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isLong?: InputMaybe<Scalars['Boolean']>;
  isLong_not?: InputMaybe<Scalars['Boolean']>;
  isLong_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLong_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionDecrease_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionDecrease_filter>>>;
};

export type PositionDecrease_orderBy =
  | 'id'
  | 'orderKey'
  | 'positionKey'
  | 'account'
  | 'marketAddress'
  | 'collateralTokenAddress'
  | 'collateralTokenPriceMin'
  | 'collateralTokenPriceMax'
  | 'sizeInUsd'
  | 'sizeInTokens'
  | 'collateralAmount'
  | 'sizeDeltaUsd'
  | 'sizeDeltaInTokens'
  | 'collateralDeltaAmount'
  | 'executionPrice'
  | 'priceImpactDiffUsd'
  | 'priceImpactUsd'
  | 'orderType'
  | 'borrowingFactor'
  | 'longTokenFundingAmountPerSize'
  | 'shortTokenFundingAmountPerSize'
  | 'priceImpactAmount'
  | 'basePnlUsd'
  | 'isLong'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type PositionFeesInfo = {
  id: Scalars['ID'];
  eventName: Scalars['String'];
  orderKey: Scalars['String'];
  marketAddress: Scalars['String'];
  collateralTokenAddress: Scalars['String'];
  trader: Scalars['String'];
  affiliate: Scalars['String'];
  collateralTokenPriceMin: Scalars['BigInt'];
  collateralTokenPriceMax: Scalars['BigInt'];
  positionFeeAmount: Scalars['BigInt'];
  borrowingFeeAmount: Scalars['BigInt'];
  fundingFeeAmount: Scalars['BigInt'];
  feeUsdForPool: Scalars['BigInt'];
  totalRebateFactor: Scalars['BigInt'];
  traderDiscountAmount: Scalars['BigInt'];
  totalRebateAmount: Scalars['BigInt'];
  affiliateRewardAmount: Scalars['BigInt'];
  transaction: Transaction;
};

export type PositionFeesInfoWithPeriod = {
  id: Scalars['ID'];
  period: Scalars['String'];
  totalPositionFeeAmountForPool: Scalars['BigInt'];
  totalPositionFeeUsdForPool: Scalars['BigInt'];
  totalPositionFeeAmount: Scalars['BigInt'];
  totalPositionFeeUsd: Scalars['BigInt'];
  totalBorrowingFeeUsd: Scalars['BigInt'];
};

export type PositionFeesInfoWithPeriod_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalPositionFeeAmountForPool?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmountForPool_not?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmountForPool_gt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmountForPool_lt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmountForPool_gte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmountForPool_lte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmountForPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPositionFeeAmountForPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPositionFeeUsdForPool?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsdForPool_not?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsdForPool_gt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsdForPool_lt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsdForPool_gte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsdForPool_lte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsdForPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPositionFeeUsdForPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPositionFeeAmount?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPositionFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPositionFeeUsd?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsd_not?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  totalPositionFeeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPositionFeeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBorrowingFeeUsd?: InputMaybe<Scalars['BigInt']>;
  totalBorrowingFeeUsd_not?: InputMaybe<Scalars['BigInt']>;
  totalBorrowingFeeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  totalBorrowingFeeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  totalBorrowingFeeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  totalBorrowingFeeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  totalBorrowingFeeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalBorrowingFeeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionFeesInfoWithPeriod_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionFeesInfoWithPeriod_filter>>>;
};

export type PositionFeesInfoWithPeriod_orderBy =
  | 'id'
  | 'period'
  | 'totalPositionFeeAmountForPool'
  | 'totalPositionFeeUsdForPool'
  | 'totalPositionFeeAmount'
  | 'totalPositionFeeUsd'
  | 'totalBorrowingFeeUsd';

export type PositionFeesInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  eventName?: InputMaybe<Scalars['String']>;
  eventName_not?: InputMaybe<Scalars['String']>;
  eventName_gt?: InputMaybe<Scalars['String']>;
  eventName_lt?: InputMaybe<Scalars['String']>;
  eventName_gte?: InputMaybe<Scalars['String']>;
  eventName_lte?: InputMaybe<Scalars['String']>;
  eventName_in?: InputMaybe<Array<Scalars['String']>>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  eventName_contains?: InputMaybe<Scalars['String']>;
  eventName_contains_nocase?: InputMaybe<Scalars['String']>;
  eventName_not_contains?: InputMaybe<Scalars['String']>;
  eventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  eventName_starts_with?: InputMaybe<Scalars['String']>;
  eventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventName_not_starts_with?: InputMaybe<Scalars['String']>;
  eventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventName_ends_with?: InputMaybe<Scalars['String']>;
  eventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eventName_not_ends_with?: InputMaybe<Scalars['String']>;
  eventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey?: InputMaybe<Scalars['String']>;
  orderKey_not?: InputMaybe<Scalars['String']>;
  orderKey_gt?: InputMaybe<Scalars['String']>;
  orderKey_lt?: InputMaybe<Scalars['String']>;
  orderKey_gte?: InputMaybe<Scalars['String']>;
  orderKey_lte?: InputMaybe<Scalars['String']>;
  orderKey_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_contains?: InputMaybe<Scalars['String']>;
  orderKey_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_contains?: InputMaybe<Scalars['String']>;
  orderKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_gt?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_lt?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_gte?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_lte?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  collateralTokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  collateralTokenAddress_contains?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trader?: InputMaybe<Scalars['String']>;
  trader_not?: InputMaybe<Scalars['String']>;
  trader_gt?: InputMaybe<Scalars['String']>;
  trader_lt?: InputMaybe<Scalars['String']>;
  trader_gte?: InputMaybe<Scalars['String']>;
  trader_lte?: InputMaybe<Scalars['String']>;
  trader_in?: InputMaybe<Array<Scalars['String']>>;
  trader_not_in?: InputMaybe<Array<Scalars['String']>>;
  trader_contains?: InputMaybe<Scalars['String']>;
  trader_contains_nocase?: InputMaybe<Scalars['String']>;
  trader_not_contains?: InputMaybe<Scalars['String']>;
  trader_not_contains_nocase?: InputMaybe<Scalars['String']>;
  trader_starts_with?: InputMaybe<Scalars['String']>;
  trader_starts_with_nocase?: InputMaybe<Scalars['String']>;
  trader_not_starts_with?: InputMaybe<Scalars['String']>;
  trader_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  trader_ends_with?: InputMaybe<Scalars['String']>;
  trader_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']>;
  trader_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  affiliate?: InputMaybe<Scalars['String']>;
  affiliate_not?: InputMaybe<Scalars['String']>;
  affiliate_gt?: InputMaybe<Scalars['String']>;
  affiliate_lt?: InputMaybe<Scalars['String']>;
  affiliate_gte?: InputMaybe<Scalars['String']>;
  affiliate_lte?: InputMaybe<Scalars['String']>;
  affiliate_in?: InputMaybe<Array<Scalars['String']>>;
  affiliate_not_in?: InputMaybe<Array<Scalars['String']>>;
  affiliate_contains?: InputMaybe<Scalars['String']>;
  affiliate_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliate_not_contains?: InputMaybe<Scalars['String']>;
  affiliate_not_contains_nocase?: InputMaybe<Scalars['String']>;
  affiliate_starts_with?: InputMaybe<Scalars['String']>;
  affiliate_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliate_not_starts_with?: InputMaybe<Scalars['String']>;
  affiliate_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  affiliate_ends_with?: InputMaybe<Scalars['String']>;
  affiliate_ends_with_nocase?: InputMaybe<Scalars['String']>;
  affiliate_not_ends_with?: InputMaybe<Scalars['String']>;
  affiliate_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenPriceMin?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeeAmount?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFeeAmount?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingFeeAmount?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdForPool?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_not?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_gt?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_lt?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_gte?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_lte?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdForPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRebateFactor?: InputMaybe<Scalars['BigInt']>;
  totalRebateFactor_not?: InputMaybe<Scalars['BigInt']>;
  totalRebateFactor_gt?: InputMaybe<Scalars['BigInt']>;
  totalRebateFactor_lt?: InputMaybe<Scalars['BigInt']>;
  totalRebateFactor_gte?: InputMaybe<Scalars['BigInt']>;
  totalRebateFactor_lte?: InputMaybe<Scalars['BigInt']>;
  totalRebateFactor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRebateFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  traderDiscountAmount?: InputMaybe<Scalars['BigInt']>;
  traderDiscountAmount_not?: InputMaybe<Scalars['BigInt']>;
  traderDiscountAmount_gt?: InputMaybe<Scalars['BigInt']>;
  traderDiscountAmount_lt?: InputMaybe<Scalars['BigInt']>;
  traderDiscountAmount_gte?: InputMaybe<Scalars['BigInt']>;
  traderDiscountAmount_lte?: InputMaybe<Scalars['BigInt']>;
  traderDiscountAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  traderDiscountAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRebateAmount?: InputMaybe<Scalars['BigInt']>;
  totalRebateAmount_not?: InputMaybe<Scalars['BigInt']>;
  totalRebateAmount_gt?: InputMaybe<Scalars['BigInt']>;
  totalRebateAmount_lt?: InputMaybe<Scalars['BigInt']>;
  totalRebateAmount_gte?: InputMaybe<Scalars['BigInt']>;
  totalRebateAmount_lte?: InputMaybe<Scalars['BigInt']>;
  totalRebateAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalRebateAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  affiliateRewardAmount?: InputMaybe<Scalars['BigInt']>;
  affiliateRewardAmount_not?: InputMaybe<Scalars['BigInt']>;
  affiliateRewardAmount_gt?: InputMaybe<Scalars['BigInt']>;
  affiliateRewardAmount_lt?: InputMaybe<Scalars['BigInt']>;
  affiliateRewardAmount_gte?: InputMaybe<Scalars['BigInt']>;
  affiliateRewardAmount_lte?: InputMaybe<Scalars['BigInt']>;
  affiliateRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  affiliateRewardAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionFeesInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionFeesInfo_filter>>>;
};

export type PositionFeesInfo_orderBy =
  | 'id'
  | 'eventName'
  | 'orderKey'
  | 'marketAddress'
  | 'collateralTokenAddress'
  | 'trader'
  | 'affiliate'
  | 'collateralTokenPriceMin'
  | 'collateralTokenPriceMax'
  | 'positionFeeAmount'
  | 'borrowingFeeAmount'
  | 'fundingFeeAmount'
  | 'feeUsdForPool'
  | 'totalRebateFactor'
  | 'traderDiscountAmount'
  | 'totalRebateAmount'
  | 'affiliateRewardAmount'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type PositionIncrease = {
  id: Scalars['ID'];
  orderKey: Scalars['String'];
  positionKey: Scalars['String'];
  account: Scalars['String'];
  marketAddress: Scalars['String'];
  collateralTokenAddress: Scalars['String'];
  collateralTokenPriceMin: Scalars['BigInt'];
  collateralTokenPriceMax: Scalars['BigInt'];
  indexTokenPriceMin: Scalars['BigInt'];
  indexTokenPriceMax: Scalars['BigInt'];
  fundingFeeAmountPerSize: Scalars['BigInt'];
  sizeInUsd: Scalars['BigInt'];
  sizeInTokens: Scalars['BigInt'];
  collateralAmount: Scalars['BigInt'];
  sizeDeltaUsd: Scalars['BigInt'];
  sizeDeltaInTokens: Scalars['BigInt'];
  collateralDeltaAmount: Scalars['BigInt'];
  executionPrice: Scalars['BigInt'];
  orderType: Scalars['BigInt'];
  borrowingFactor: Scalars['BigInt'];
  longTokenFundingAmountPerSize?: Maybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize?: Maybe<Scalars['BigInt']>;
  priceImpactAmount: Scalars['BigInt'];
  priceImpactUsd: Scalars['BigInt'];
  isLong: Scalars['Boolean'];
  transaction?: Maybe<Transaction>;
};

export type PositionIncrease_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  orderKey?: InputMaybe<Scalars['String']>;
  orderKey_not?: InputMaybe<Scalars['String']>;
  orderKey_gt?: InputMaybe<Scalars['String']>;
  orderKey_lt?: InputMaybe<Scalars['String']>;
  orderKey_gte?: InputMaybe<Scalars['String']>;
  orderKey_lte?: InputMaybe<Scalars['String']>;
  orderKey_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_contains?: InputMaybe<Scalars['String']>;
  orderKey_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_contains?: InputMaybe<Scalars['String']>;
  orderKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey?: InputMaybe<Scalars['String']>;
  positionKey_not?: InputMaybe<Scalars['String']>;
  positionKey_gt?: InputMaybe<Scalars['String']>;
  positionKey_lt?: InputMaybe<Scalars['String']>;
  positionKey_gte?: InputMaybe<Scalars['String']>;
  positionKey_lte?: InputMaybe<Scalars['String']>;
  positionKey_in?: InputMaybe<Array<Scalars['String']>>;
  positionKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  positionKey_contains?: InputMaybe<Scalars['String']>;
  positionKey_contains_nocase?: InputMaybe<Scalars['String']>;
  positionKey_not_contains?: InputMaybe<Scalars['String']>;
  positionKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  positionKey_starts_with?: InputMaybe<Scalars['String']>;
  positionKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey_not_starts_with?: InputMaybe<Scalars['String']>;
  positionKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey_ends_with?: InputMaybe<Scalars['String']>;
  positionKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  positionKey_not_ends_with?: InputMaybe<Scalars['String']>;
  positionKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_gt?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_lt?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_gte?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_lte?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  collateralTokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  collateralTokenAddress_contains?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  collateralTokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralTokenPriceMin?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMin?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_not?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMax?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_not?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingFeeAmountPerSize?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmountPerSize_not?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmountPerSize_gt?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmountPerSize_lt?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmountPerSize_gte?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmountPerSize_lte?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmountPerSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingFeeAmountPerSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInUsd?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_not?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_gt?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_lt?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_gte?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_lte?: InputMaybe<Scalars['BigInt']>;
  sizeInUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInTokens?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_not?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_gt?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_lt?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_gte?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_lte?: InputMaybe<Scalars['BigInt']>;
  sizeInTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAmount?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_not?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_gt?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_lt?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_gte?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_lte?: InputMaybe<Scalars['BigInt']>;
  collateralAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaUsd?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_not?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaInTokens?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_not?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_gt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_lt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_gte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_lte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaInTokens_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaInTokens_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralDeltaAmount?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_not?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_gt?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_lt?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_gte?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_lte?: InputMaybe<Scalars['BigInt']>;
  collateralDeltaAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralDeltaAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderType?: InputMaybe<Scalars['BigInt']>;
  orderType_not?: InputMaybe<Scalars['BigInt']>;
  orderType_gt?: InputMaybe<Scalars['BigInt']>;
  orderType_lt?: InputMaybe<Scalars['BigInt']>;
  orderType_gte?: InputMaybe<Scalars['BigInt']>;
  orderType_lte?: InputMaybe<Scalars['BigInt']>;
  orderType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFactor?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_not?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_gt?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_lt?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_gte?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_lte?: InputMaybe<Scalars['BigInt']>;
  borrowingFactor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  longTokenFundingAmountPerSize?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_not?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_gt?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_lt?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_gte?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_lte?: InputMaybe<Scalars['BigInt']>;
  longTokenFundingAmountPerSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  longTokenFundingAmountPerSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shortTokenFundingAmountPerSize?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_not?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_gt?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_lt?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_gte?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_lte?: InputMaybe<Scalars['BigInt']>;
  shortTokenFundingAmountPerSize_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shortTokenFundingAmountPerSize_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactAmount?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isLong?: InputMaybe<Scalars['Boolean']>;
  isLong_not?: InputMaybe<Scalars['Boolean']>;
  isLong_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLong_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionIncrease_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionIncrease_filter>>>;
};

export type PositionIncrease_orderBy =
  | 'id'
  | 'orderKey'
  | 'positionKey'
  | 'account'
  | 'marketAddress'
  | 'collateralTokenAddress'
  | 'collateralTokenPriceMin'
  | 'collateralTokenPriceMax'
  | 'indexTokenPriceMin'
  | 'indexTokenPriceMax'
  | 'fundingFeeAmountPerSize'
  | 'sizeInUsd'
  | 'sizeInTokens'
  | 'collateralAmount'
  | 'sizeDeltaUsd'
  | 'sizeDeltaInTokens'
  | 'collateralDeltaAmount'
  | 'executionPrice'
  | 'orderType'
  | 'borrowingFactor'
  | 'longTokenFundingAmountPerSize'
  | 'shortTokenFundingAmountPerSize'
  | 'priceImpactAmount'
  | 'priceImpactUsd'
  | 'isLong'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type PositionVolumeInfo = {
  id: Scalars['ID'];
  period: Scalars['String'];
  collateralToken: Scalars['String'];
  indexToken: Scalars['String'];
  timestamp: Scalars['Int'];
  volumeUsd: Scalars['BigInt'];
};

export type PositionVolumeInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken?: InputMaybe<Scalars['String']>;
  collateralToken_not?: InputMaybe<Scalars['String']>;
  collateralToken_gt?: InputMaybe<Scalars['String']>;
  collateralToken_lt?: InputMaybe<Scalars['String']>;
  collateralToken_gte?: InputMaybe<Scalars['String']>;
  collateralToken_lte?: InputMaybe<Scalars['String']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']>;
  collateralToken_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_starts_with?: InputMaybe<Scalars['String']>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_not_starts_with?: InputMaybe<Scalars['String']>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_ends_with?: InputMaybe<Scalars['String']>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  collateralToken_not_ends_with?: InputMaybe<Scalars['String']>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken?: InputMaybe<Scalars['String']>;
  indexToken_not?: InputMaybe<Scalars['String']>;
  indexToken_gt?: InputMaybe<Scalars['String']>;
  indexToken_lt?: InputMaybe<Scalars['String']>;
  indexToken_gte?: InputMaybe<Scalars['String']>;
  indexToken_lte?: InputMaybe<Scalars['String']>;
  indexToken_in?: InputMaybe<Array<Scalars['String']>>;
  indexToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  indexToken_contains?: InputMaybe<Scalars['String']>;
  indexToken_contains_nocase?: InputMaybe<Scalars['String']>;
  indexToken_not_contains?: InputMaybe<Scalars['String']>;
  indexToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  indexToken_starts_with?: InputMaybe<Scalars['String']>;
  indexToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken_not_starts_with?: InputMaybe<Scalars['String']>;
  indexToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken_ends_with?: InputMaybe<Scalars['String']>;
  indexToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  indexToken_not_ends_with?: InputMaybe<Scalars['String']>;
  indexToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumeUsd?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionVolumeInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionVolumeInfo_filter>>>;
};

export type PositionVolumeInfo_orderBy =
  | 'id'
  | 'period'
  | 'collateralToken'
  | 'indexToken'
  | 'timestamp'
  | 'volumeUsd';

export type Query = {
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  affiliateRewardUpdate?: Maybe<AffiliateRewardUpdate>;
  affiliateRewardUpdates: Array<AffiliateRewardUpdate>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  positionIncrease?: Maybe<PositionIncrease>;
  positionIncreases: Array<PositionIncrease>;
  positionDecrease?: Maybe<PositionDecrease>;
  positionDecreases: Array<PositionDecrease>;
  positionFeesInfo?: Maybe<PositionFeesInfo>;
  positionFeesInfos: Array<PositionFeesInfo>;
  claimableCollateral?: Maybe<ClaimableCollateral>;
  claimableCollaterals: Array<ClaimableCollateral>;
  claimableCollateralGroup?: Maybe<ClaimableCollateralGroup>;
  claimableCollateralGroups: Array<ClaimableCollateralGroup>;
  swapInfo?: Maybe<SwapInfo>;
  swapInfos: Array<SwapInfo>;
  swapFeesInfo?: Maybe<SwapFeesInfo>;
  swapFeesInfos: Array<SwapFeesInfo>;
  collectedMarketFeesInfo?: Maybe<CollectedMarketFeesInfo>;
  collectedMarketFeesInfos: Array<CollectedMarketFeesInfo>;
  userGmTokensBalanceChange?: Maybe<UserGmTokensBalanceChange>;
  userGmTokensBalanceChanges: Array<UserGmTokensBalanceChange>;
  latestUserGmTokensBalanceChangeRef?: Maybe<LatestUserGmTokensBalanceChangeRef>;
  latestUserGmTokensBalanceChangeRefs: Array<LatestUserGmTokensBalanceChangeRef>;
  tradeAction?: Maybe<TradeAction>;
  tradeActions: Array<TradeAction>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  claimCollateralAction?: Maybe<ClaimCollateralAction>;
  claimCollateralActions: Array<ClaimCollateralAction>;
  claimAction?: Maybe<ClaimAction>;
  claimActions: Array<ClaimAction>;
  claimRef?: Maybe<ClaimRef>;
  claimRefs: Array<ClaimRef>;
  poolAmountUpdate?: Maybe<PoolAmountUpdate>;
  poolAmountUpdates: Array<PoolAmountUpdate>;
  claimableFundingFeeInfo?: Maybe<ClaimableFundingFeeInfo>;
  claimableFundingFeeInfos: Array<ClaimableFundingFeeInfo>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  marketInfo?: Maybe<MarketInfo>;
  marketInfos: Array<MarketInfo>;
  depositRef?: Maybe<DepositRef>;
  depositRefs: Array<DepositRef>;
  volumeInfo?: Maybe<VolumeInfo>;
  volumeInfos: Array<VolumeInfo>;
  swapVolumeInfo?: Maybe<SwapVolumeInfo>;
  swapVolumeInfos: Array<SwapVolumeInfo>;
  positionVolumeInfo?: Maybe<PositionVolumeInfo>;
  positionVolumeInfos: Array<PositionVolumeInfo>;
  user?: Maybe<User>;
  users: Array<User>;
  userStat?: Maybe<UserStat>;
  userStats: Array<UserStat>;
  swapFeesInfoWithPeriod?: Maybe<SwapFeesInfoWithPeriod>;
  swapFeesInfoWithPeriods: Array<SwapFeesInfoWithPeriod>;
  positionFeesInfoWithPeriod?: Maybe<PositionFeesInfoWithPeriod>;
  positionFeesInfoWithPeriods: Array<PositionFeesInfoWithPeriod>;
  liquidityProviderIncentivesStat?: Maybe<LiquidityProviderIncentivesStat>;
  liquidityProviderIncentivesStats: Array<LiquidityProviderIncentivesStat>;
  marketIncentivesStat?: Maybe<MarketIncentivesStat>;
  marketIncentivesStats: Array<MarketIncentivesStat>;
  userMarketInfo?: Maybe<UserMarketInfo>;
  userMarketInfos: Array<UserMarketInfo>;
  sellUSDG?: Maybe<SellUSDG>;
  sellUSDGs: Array<SellUSDG>;
  userGlpGmMigrationStat?: Maybe<UserGlpGmMigrationStat>;
  userGlpGmMigrationStats: Array<UserGlpGmMigrationStat>;
  glpGmMigrationStat?: Maybe<GlpGmMigrationStat>;
  glpGmMigrationStats: Array<GlpGmMigrationStat>;
  userTradingIncentivesStat?: Maybe<UserTradingIncentivesStat>;
  userTradingIncentivesStats: Array<UserTradingIncentivesStat>;
  tradingIncentivesStat?: Maybe<TradingIncentivesStat>;
  tradingIncentivesStats: Array<TradingIncentivesStat>;
  distribution?: Maybe<Distribution>;
  distributions: Array<Distribution>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerycandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaffiliateRewardUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaffiliateRewardUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AffiliateRewardUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AffiliateRewardUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionIncreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionIncreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionIncrease_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionIncrease_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionDecreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionDecreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionDecrease_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionDecrease_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionFeesInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionFeesInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionFeesInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionFeesInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimableCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimableCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimableCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimableCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimableCollateralGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimableCollateralGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimableCollateralGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimableCollateralGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapFeesInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapFeesInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapFeesInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapFeesInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectedMarketFeesInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycollectedMarketFeesInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectedMarketFeesInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectedMarketFeesInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserGmTokensBalanceChangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserGmTokensBalanceChangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserGmTokensBalanceChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserGmTokensBalanceChange_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylatestUserGmTokensBalanceChangeRefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylatestUserGmTokensBalanceChangeRefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LatestUserGmTokensBalanceChangeRef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LatestUserGmTokensBalanceChangeRef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradeActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradeActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TradeAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradeAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimCollateralActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimCollateralActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimCollateralAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimCollateralAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimRefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimRefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimRef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimRef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolAmountUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolAmountUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolAmountUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolAmountUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimableFundingFeeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryclaimableFundingFeeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimableFundingFeeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimableFundingFeeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositRefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositRefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DepositRef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositRef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvolumeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvolumeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VolumeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VolumeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapVolumeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapVolumeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapVolumeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapVolumeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionVolumeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionVolumeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionVolumeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionVolumeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapFeesInfoWithPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapFeesInfoWithPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapFeesInfoWithPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapFeesInfoWithPeriod_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionFeesInfoWithPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionFeesInfoWithPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionFeesInfoWithPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionFeesInfoWithPeriod_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityProviderIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityProviderIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityProviderIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityProviderIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserMarketInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserMarketInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserMarketInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserMarketInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysellUSDGArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerysellUSDGsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SellUSDG_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SellUSDG_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserGlpGmMigrationStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserGlpGmMigrationStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserGlpGmMigrationStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserGlpGmMigrationStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglpGmMigrationStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglpGmMigrationStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlpGmMigrationStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlpGmMigrationStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTradingIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserTradingIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserTradingIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserTradingIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradingIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytradingIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TradingIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradingIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydistributionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Distribution_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Distribution_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SellUSDG = {
  id: Scalars['ID'];
  txHash: Scalars['String'];
  logIndex: Scalars['Int'];
  feeBasisPoints: Scalars['BigInt'];
};

export type SellUSDG_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  txHash?: InputMaybe<Scalars['String']>;
  txHash_not?: InputMaybe<Scalars['String']>;
  txHash_gt?: InputMaybe<Scalars['String']>;
  txHash_lt?: InputMaybe<Scalars['String']>;
  txHash_gte?: InputMaybe<Scalars['String']>;
  txHash_lte?: InputMaybe<Scalars['String']>;
  txHash_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  txHash_contains?: InputMaybe<Scalars['String']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_contains?: InputMaybe<Scalars['String']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  txHash_starts_with?: InputMaybe<Scalars['String']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_ends_with?: InputMaybe<Scalars['String']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  feeBasisPoints?: InputMaybe<Scalars['BigInt']>;
  feeBasisPoints_not?: InputMaybe<Scalars['BigInt']>;
  feeBasisPoints_gt?: InputMaybe<Scalars['BigInt']>;
  feeBasisPoints_lt?: InputMaybe<Scalars['BigInt']>;
  feeBasisPoints_gte?: InputMaybe<Scalars['BigInt']>;
  feeBasisPoints_lte?: InputMaybe<Scalars['BigInt']>;
  feeBasisPoints_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeBasisPoints_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SellUSDG_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SellUSDG_filter>>>;
};

export type SellUSDG_orderBy =
  | 'id'
  | 'txHash'
  | 'logIndex'
  | 'feeBasisPoints';

export type Subscription = {
  candle?: Maybe<Candle>;
  candles: Array<Candle>;
  affiliateRewardUpdate?: Maybe<AffiliateRewardUpdate>;
  affiliateRewardUpdates: Array<AffiliateRewardUpdate>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  positionIncrease?: Maybe<PositionIncrease>;
  positionIncreases: Array<PositionIncrease>;
  positionDecrease?: Maybe<PositionDecrease>;
  positionDecreases: Array<PositionDecrease>;
  positionFeesInfo?: Maybe<PositionFeesInfo>;
  positionFeesInfos: Array<PositionFeesInfo>;
  claimableCollateral?: Maybe<ClaimableCollateral>;
  claimableCollaterals: Array<ClaimableCollateral>;
  claimableCollateralGroup?: Maybe<ClaimableCollateralGroup>;
  claimableCollateralGroups: Array<ClaimableCollateralGroup>;
  swapInfo?: Maybe<SwapInfo>;
  swapInfos: Array<SwapInfo>;
  swapFeesInfo?: Maybe<SwapFeesInfo>;
  swapFeesInfos: Array<SwapFeesInfo>;
  collectedMarketFeesInfo?: Maybe<CollectedMarketFeesInfo>;
  collectedMarketFeesInfos: Array<CollectedMarketFeesInfo>;
  userGmTokensBalanceChange?: Maybe<UserGmTokensBalanceChange>;
  userGmTokensBalanceChanges: Array<UserGmTokensBalanceChange>;
  latestUserGmTokensBalanceChangeRef?: Maybe<LatestUserGmTokensBalanceChangeRef>;
  latestUserGmTokensBalanceChangeRefs: Array<LatestUserGmTokensBalanceChangeRef>;
  tradeAction?: Maybe<TradeAction>;
  tradeActions: Array<TradeAction>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  claimCollateralAction?: Maybe<ClaimCollateralAction>;
  claimCollateralActions: Array<ClaimCollateralAction>;
  claimAction?: Maybe<ClaimAction>;
  claimActions: Array<ClaimAction>;
  claimRef?: Maybe<ClaimRef>;
  claimRefs: Array<ClaimRef>;
  poolAmountUpdate?: Maybe<PoolAmountUpdate>;
  poolAmountUpdates: Array<PoolAmountUpdate>;
  claimableFundingFeeInfo?: Maybe<ClaimableFundingFeeInfo>;
  claimableFundingFeeInfos: Array<ClaimableFundingFeeInfo>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  marketInfo?: Maybe<MarketInfo>;
  marketInfos: Array<MarketInfo>;
  depositRef?: Maybe<DepositRef>;
  depositRefs: Array<DepositRef>;
  volumeInfo?: Maybe<VolumeInfo>;
  volumeInfos: Array<VolumeInfo>;
  swapVolumeInfo?: Maybe<SwapVolumeInfo>;
  swapVolumeInfos: Array<SwapVolumeInfo>;
  positionVolumeInfo?: Maybe<PositionVolumeInfo>;
  positionVolumeInfos: Array<PositionVolumeInfo>;
  user?: Maybe<User>;
  users: Array<User>;
  userStat?: Maybe<UserStat>;
  userStats: Array<UserStat>;
  swapFeesInfoWithPeriod?: Maybe<SwapFeesInfoWithPeriod>;
  swapFeesInfoWithPeriods: Array<SwapFeesInfoWithPeriod>;
  positionFeesInfoWithPeriod?: Maybe<PositionFeesInfoWithPeriod>;
  positionFeesInfoWithPeriods: Array<PositionFeesInfoWithPeriod>;
  liquidityProviderIncentivesStat?: Maybe<LiquidityProviderIncentivesStat>;
  liquidityProviderIncentivesStats: Array<LiquidityProviderIncentivesStat>;
  marketIncentivesStat?: Maybe<MarketIncentivesStat>;
  marketIncentivesStats: Array<MarketIncentivesStat>;
  userMarketInfo?: Maybe<UserMarketInfo>;
  userMarketInfos: Array<UserMarketInfo>;
  sellUSDG?: Maybe<SellUSDG>;
  sellUSDGs: Array<SellUSDG>;
  userGlpGmMigrationStat?: Maybe<UserGlpGmMigrationStat>;
  userGlpGmMigrationStats: Array<UserGlpGmMigrationStat>;
  glpGmMigrationStat?: Maybe<GlpGmMigrationStat>;
  glpGmMigrationStats: Array<GlpGmMigrationStat>;
  userTradingIncentivesStat?: Maybe<UserTradingIncentivesStat>;
  userTradingIncentivesStats: Array<UserTradingIncentivesStat>;
  tradingIncentivesStat?: Maybe<TradingIncentivesStat>;
  tradingIncentivesStats: Array<TradingIncentivesStat>;
  distribution?: Maybe<Distribution>;
  distributions: Array<Distribution>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptioncandleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncandlesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaffiliateRewardUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaffiliateRewardUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AffiliateRewardUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AffiliateRewardUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionorderArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionordersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Order_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Order_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionIncreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionIncreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionIncrease_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionIncrease_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionDecreaseArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionDecreasesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionDecrease_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionDecrease_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionFeesInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionFeesInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionFeesInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionFeesInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimableCollateralArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimableCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimableCollateral_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimableCollateral_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimableCollateralGroupArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimableCollateralGroupsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimableCollateralGroup_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimableCollateralGroup_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapFeesInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapFeesInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapFeesInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapFeesInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectedMarketFeesInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncollectedMarketFeesInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectedMarketFeesInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollectedMarketFeesInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserGmTokensBalanceChangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserGmTokensBalanceChangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserGmTokensBalanceChange_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserGmTokensBalanceChange_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlatestUserGmTokensBalanceChangeRefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlatestUserGmTokensBalanceChangeRefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LatestUserGmTokensBalanceChangeRef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LatestUserGmTokensBalanceChangeRef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradeActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradeActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TradeAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradeAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPriceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenPricesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenPrice_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenPrice_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimCollateralActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimCollateralActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimCollateralAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimCollateralAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimActionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimActionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimAction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimAction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimRefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimRefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimRef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimRef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolAmountUpdateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolAmountUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PoolAmountUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolAmountUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimableFundingFeeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionclaimableFundingFeeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ClaimableFundingFeeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ClaimableFundingFeeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transaction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transaction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositRefArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositRefsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DepositRef_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositRef_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvolumeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvolumeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VolumeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VolumeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapVolumeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapVolumeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapVolumeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapVolumeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionVolumeInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionVolumeInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionVolumeInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionVolumeInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapFeesInfoWithPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapFeesInfoWithPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapFeesInfoWithPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapFeesInfoWithPeriod_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionFeesInfoWithPeriodArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionFeesInfoWithPeriodsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionFeesInfoWithPeriod_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionFeesInfoWithPeriod_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityProviderIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityProviderIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityProviderIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityProviderIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserMarketInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserMarketInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserMarketInfo_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserMarketInfo_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsellUSDGArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionsellUSDGsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SellUSDG_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SellUSDG_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserGlpGmMigrationStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserGlpGmMigrationStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserGlpGmMigrationStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserGlpGmMigrationStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglpGmMigrationStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglpGmMigrationStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GlpGmMigrationStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlpGmMigrationStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTradingIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserTradingIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserTradingIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UserTradingIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradingIncentivesStatArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontradingIncentivesStatsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TradingIncentivesStat_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TradingIncentivesStat_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondistributionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Distribution_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Distribution_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SwapFeesInfo = {
  id: Scalars['ID'];
  marketAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
  swapFeeType: Scalars['String'];
  tokenPrice: Scalars['BigInt'];
  feeReceiverAmount: Scalars['BigInt'];
  feeUsdForPool: Scalars['BigInt'];
  transaction: Transaction;
};

export type SwapFeesInfoWithPeriod = {
  id: Scalars['ID'];
  period: Scalars['String'];
  totalFeeReceiverUsd: Scalars['BigInt'];
  totalFeeUsdForPool: Scalars['BigInt'];
};

export type SwapFeesInfoWithPeriod_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalFeeReceiverUsd?: InputMaybe<Scalars['BigInt']>;
  totalFeeReceiverUsd_not?: InputMaybe<Scalars['BigInt']>;
  totalFeeReceiverUsd_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeeReceiverUsd_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeeReceiverUsd_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeeReceiverUsd_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeeReceiverUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeeReceiverUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeeUsdForPool?: InputMaybe<Scalars['BigInt']>;
  totalFeeUsdForPool_not?: InputMaybe<Scalars['BigInt']>;
  totalFeeUsdForPool_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeeUsdForPool_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeeUsdForPool_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeeUsdForPool_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeeUsdForPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeeUsdForPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapFeesInfoWithPeriod_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapFeesInfoWithPeriod_filter>>>;
};

export type SwapFeesInfoWithPeriod_orderBy =
  | 'id'
  | 'period'
  | 'totalFeeReceiverUsd'
  | 'totalFeeUsdForPool';

export type SwapFeesInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['String']>;
  tokenAddress_not?: InputMaybe<Scalars['String']>;
  tokenAddress_gt?: InputMaybe<Scalars['String']>;
  tokenAddress_lt?: InputMaybe<Scalars['String']>;
  tokenAddress_gte?: InputMaybe<Scalars['String']>;
  tokenAddress_lte?: InputMaybe<Scalars['String']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenAddress_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  tokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swapFeeType?: InputMaybe<Scalars['String']>;
  swapFeeType_not?: InputMaybe<Scalars['String']>;
  swapFeeType_gt?: InputMaybe<Scalars['String']>;
  swapFeeType_lt?: InputMaybe<Scalars['String']>;
  swapFeeType_gte?: InputMaybe<Scalars['String']>;
  swapFeeType_lte?: InputMaybe<Scalars['String']>;
  swapFeeType_in?: InputMaybe<Array<Scalars['String']>>;
  swapFeeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  swapFeeType_contains?: InputMaybe<Scalars['String']>;
  swapFeeType_contains_nocase?: InputMaybe<Scalars['String']>;
  swapFeeType_not_contains?: InputMaybe<Scalars['String']>;
  swapFeeType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  swapFeeType_starts_with?: InputMaybe<Scalars['String']>;
  swapFeeType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swapFeeType_not_starts_with?: InputMaybe<Scalars['String']>;
  swapFeeType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  swapFeeType_ends_with?: InputMaybe<Scalars['String']>;
  swapFeeType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swapFeeType_not_ends_with?: InputMaybe<Scalars['String']>;
  swapFeeType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenPrice?: InputMaybe<Scalars['BigInt']>;
  tokenPrice_not?: InputMaybe<Scalars['BigInt']>;
  tokenPrice_gt?: InputMaybe<Scalars['BigInt']>;
  tokenPrice_lt?: InputMaybe<Scalars['BigInt']>;
  tokenPrice_gte?: InputMaybe<Scalars['BigInt']>;
  tokenPrice_lte?: InputMaybe<Scalars['BigInt']>;
  tokenPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeReceiverAmount?: InputMaybe<Scalars['BigInt']>;
  feeReceiverAmount_not?: InputMaybe<Scalars['BigInt']>;
  feeReceiverAmount_gt?: InputMaybe<Scalars['BigInt']>;
  feeReceiverAmount_lt?: InputMaybe<Scalars['BigInt']>;
  feeReceiverAmount_gte?: InputMaybe<Scalars['BigInt']>;
  feeReceiverAmount_lte?: InputMaybe<Scalars['BigInt']>;
  feeReceiverAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeReceiverAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdForPool?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_not?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_gt?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_lt?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_gte?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_lte?: InputMaybe<Scalars['BigInt']>;
  feeUsdForPool_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeUsdForPool_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapFeesInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapFeesInfo_filter>>>;
};

export type SwapFeesInfo_orderBy =
  | 'id'
  | 'marketAddress'
  | 'tokenAddress'
  | 'swapFeeType'
  | 'tokenPrice'
  | 'feeReceiverAmount'
  | 'feeUsdForPool'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type SwapInfo = {
  id: Scalars['ID'];
  orderKey: Scalars['String'];
  receiver: Scalars['String'];
  marketAddress: Scalars['String'];
  tokenInAddress: Scalars['String'];
  tokenOutAddress: Scalars['String'];
  tokenInPrice: Scalars['BigInt'];
  tokenOutPrice: Scalars['BigInt'];
  amountIn: Scalars['BigInt'];
  amountInAfterFees: Scalars['BigInt'];
  amountOut: Scalars['BigInt'];
  priceImpactUsd: Scalars['BigInt'];
  transaction: Transaction;
};

export type SwapInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  orderKey?: InputMaybe<Scalars['String']>;
  orderKey_not?: InputMaybe<Scalars['String']>;
  orderKey_gt?: InputMaybe<Scalars['String']>;
  orderKey_lt?: InputMaybe<Scalars['String']>;
  orderKey_gte?: InputMaybe<Scalars['String']>;
  orderKey_lte?: InputMaybe<Scalars['String']>;
  orderKey_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_contains?: InputMaybe<Scalars['String']>;
  orderKey_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_contains?: InputMaybe<Scalars['String']>;
  orderKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInAddress?: InputMaybe<Scalars['String']>;
  tokenInAddress_not?: InputMaybe<Scalars['String']>;
  tokenInAddress_gt?: InputMaybe<Scalars['String']>;
  tokenInAddress_lt?: InputMaybe<Scalars['String']>;
  tokenInAddress_gte?: InputMaybe<Scalars['String']>;
  tokenInAddress_lte?: InputMaybe<Scalars['String']>;
  tokenInAddress_in?: InputMaybe<Array<Scalars['String']>>;
  tokenInAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenInAddress_contains?: InputMaybe<Scalars['String']>;
  tokenInAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenInAddress_not_contains?: InputMaybe<Scalars['String']>;
  tokenInAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenInAddress_starts_with?: InputMaybe<Scalars['String']>;
  tokenInAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenInAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInAddress_ends_with?: InputMaybe<Scalars['String']>;
  tokenInAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenInAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOutAddress?: InputMaybe<Scalars['String']>;
  tokenOutAddress_not?: InputMaybe<Scalars['String']>;
  tokenOutAddress_gt?: InputMaybe<Scalars['String']>;
  tokenOutAddress_lt?: InputMaybe<Scalars['String']>;
  tokenOutAddress_gte?: InputMaybe<Scalars['String']>;
  tokenOutAddress_lte?: InputMaybe<Scalars['String']>;
  tokenOutAddress_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOutAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOutAddress_contains?: InputMaybe<Scalars['String']>;
  tokenOutAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOutAddress_not_contains?: InputMaybe<Scalars['String']>;
  tokenOutAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOutAddress_starts_with?: InputMaybe<Scalars['String']>;
  tokenOutAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOutAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenOutAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOutAddress_ends_with?: InputMaybe<Scalars['String']>;
  tokenOutAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOutAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenOutAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenInPrice?: InputMaybe<Scalars['BigInt']>;
  tokenInPrice_not?: InputMaybe<Scalars['BigInt']>;
  tokenInPrice_gt?: InputMaybe<Scalars['BigInt']>;
  tokenInPrice_lt?: InputMaybe<Scalars['BigInt']>;
  tokenInPrice_gte?: InputMaybe<Scalars['BigInt']>;
  tokenInPrice_lte?: InputMaybe<Scalars['BigInt']>;
  tokenInPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenInPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenOutPrice?: InputMaybe<Scalars['BigInt']>;
  tokenOutPrice_not?: InputMaybe<Scalars['BigInt']>;
  tokenOutPrice_gt?: InputMaybe<Scalars['BigInt']>;
  tokenOutPrice_lt?: InputMaybe<Scalars['BigInt']>;
  tokenOutPrice_gte?: InputMaybe<Scalars['BigInt']>;
  tokenOutPrice_lte?: InputMaybe<Scalars['BigInt']>;
  tokenOutPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenOutPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountIn?: InputMaybe<Scalars['BigInt']>;
  amountIn_not?: InputMaybe<Scalars['BigInt']>;
  amountIn_gt?: InputMaybe<Scalars['BigInt']>;
  amountIn_lt?: InputMaybe<Scalars['BigInt']>;
  amountIn_gte?: InputMaybe<Scalars['BigInt']>;
  amountIn_lte?: InputMaybe<Scalars['BigInt']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountInAfterFees?: InputMaybe<Scalars['BigInt']>;
  amountInAfterFees_not?: InputMaybe<Scalars['BigInt']>;
  amountInAfterFees_gt?: InputMaybe<Scalars['BigInt']>;
  amountInAfterFees_lt?: InputMaybe<Scalars['BigInt']>;
  amountInAfterFees_gte?: InputMaybe<Scalars['BigInt']>;
  amountInAfterFees_lte?: InputMaybe<Scalars['BigInt']>;
  amountInAfterFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountInAfterFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountOut?: InputMaybe<Scalars['BigInt']>;
  amountOut_not?: InputMaybe<Scalars['BigInt']>;
  amountOut_gt?: InputMaybe<Scalars['BigInt']>;
  amountOut_lt?: InputMaybe<Scalars['BigInt']>;
  amountOut_gte?: InputMaybe<Scalars['BigInt']>;
  amountOut_lte?: InputMaybe<Scalars['BigInt']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapInfo_filter>>>;
};

export type SwapInfo_orderBy =
  | 'id'
  | 'orderKey'
  | 'receiver'
  | 'marketAddress'
  | 'tokenInAddress'
  | 'tokenOutAddress'
  | 'tokenInPrice'
  | 'tokenOutPrice'
  | 'amountIn'
  | 'amountInAfterFees'
  | 'amountOut'
  | 'priceImpactUsd'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type SwapVolumeInfo = {
  id: Scalars['ID'];
  period: Scalars['String'];
  tokenIn: Scalars['String'];
  tokenOut: Scalars['String'];
  timestamp: Scalars['Int'];
  volumeUsd: Scalars['BigInt'];
};

export type SwapVolumeInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn?: InputMaybe<Scalars['String']>;
  tokenIn_not?: InputMaybe<Scalars['String']>;
  tokenIn_gt?: InputMaybe<Scalars['String']>;
  tokenIn_lt?: InputMaybe<Scalars['String']>;
  tokenIn_gte?: InputMaybe<Scalars['String']>;
  tokenIn_lte?: InputMaybe<Scalars['String']>;
  tokenIn_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_contains?: InputMaybe<Scalars['String']>;
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut?: InputMaybe<Scalars['String']>;
  tokenOut_not?: InputMaybe<Scalars['String']>;
  tokenOut_gt?: InputMaybe<Scalars['String']>;
  tokenOut_lt?: InputMaybe<Scalars['String']>;
  tokenOut_gte?: InputMaybe<Scalars['String']>;
  tokenOut_lte?: InputMaybe<Scalars['String']>;
  tokenOut_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_contains?: InputMaybe<Scalars['String']>;
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  volumeUsd?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapVolumeInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapVolumeInfo_filter>>>;
};

export type SwapVolumeInfo_orderBy =
  | 'id'
  | 'period'
  | 'tokenIn'
  | 'tokenOut'
  | 'timestamp'
  | 'volumeUsd';

export type TokenPrice = {
  id: Scalars['ID'];
  minPrice: Scalars['BigInt'];
  maxPrice: Scalars['BigInt'];
  updateAt: Scalars['BigInt'];
};

export type TokenPrice_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  minPrice?: InputMaybe<Scalars['BigInt']>;
  minPrice_not?: InputMaybe<Scalars['BigInt']>;
  minPrice_gt?: InputMaybe<Scalars['BigInt']>;
  minPrice_lt?: InputMaybe<Scalars['BigInt']>;
  minPrice_gte?: InputMaybe<Scalars['BigInt']>;
  minPrice_lte?: InputMaybe<Scalars['BigInt']>;
  minPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxPrice?: InputMaybe<Scalars['BigInt']>;
  maxPrice_not?: InputMaybe<Scalars['BigInt']>;
  maxPrice_gt?: InputMaybe<Scalars['BigInt']>;
  maxPrice_lt?: InputMaybe<Scalars['BigInt']>;
  maxPrice_gte?: InputMaybe<Scalars['BigInt']>;
  maxPrice_lte?: InputMaybe<Scalars['BigInt']>;
  maxPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updateAt?: InputMaybe<Scalars['BigInt']>;
  updateAt_not?: InputMaybe<Scalars['BigInt']>;
  updateAt_gt?: InputMaybe<Scalars['BigInt']>;
  updateAt_lt?: InputMaybe<Scalars['BigInt']>;
  updateAt_gte?: InputMaybe<Scalars['BigInt']>;
  updateAt_lte?: InputMaybe<Scalars['BigInt']>;
  updateAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updateAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenPrice_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenPrice_filter>>>;
};

export type TokenPrice_orderBy =
  | 'id'
  | 'minPrice'
  | 'maxPrice'
  | 'updateAt';

export type TradeAction = {
  id: Scalars['ID'];
  eventName: Scalars['String'];
  orderKey: Scalars['String'];
  orderType: Scalars['BigInt'];
  account: Scalars['String'];
  marketAddress?: Maybe<Scalars['String']>;
  swapPath?: Maybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress: Scalars['String'];
  initialCollateralDeltaAmount: Scalars['BigInt'];
  sizeDeltaUsd?: Maybe<Scalars['BigInt']>;
  triggerPrice?: Maybe<Scalars['BigInt']>;
  acceptablePrice?: Maybe<Scalars['BigInt']>;
  executionPrice?: Maybe<Scalars['BigInt']>;
  collateralTokenPriceMin?: Maybe<Scalars['BigInt']>;
  collateralTokenPriceMax?: Maybe<Scalars['BigInt']>;
  indexTokenPriceMin?: Maybe<Scalars['BigInt']>;
  indexTokenPriceMax?: Maybe<Scalars['BigInt']>;
  priceImpactDiffUsd?: Maybe<Scalars['BigInt']>;
  priceImpactUsd?: Maybe<Scalars['BigInt']>;
  priceImpactAmount?: Maybe<Scalars['BigInt']>;
  positionFeeAmount?: Maybe<Scalars['BigInt']>;
  borrowingFeeAmount?: Maybe<Scalars['BigInt']>;
  fundingFeeAmount?: Maybe<Scalars['BigInt']>;
  pnlUsd?: Maybe<Scalars['BigInt']>;
  basePnlUsd?: Maybe<Scalars['BigInt']>;
  isLong?: Maybe<Scalars['Boolean']>;
  minOutputAmount?: Maybe<Scalars['BigInt']>;
  executionAmountOut?: Maybe<Scalars['BigInt']>;
  shouldUnwrapNativeToken?: Maybe<Scalars['Boolean']>;
  reason?: Maybe<Scalars['String']>;
  reasonBytes?: Maybe<Scalars['Bytes']>;
  transaction: Transaction;
};

export type TradeActionType =
  | 'OrderCreated'
  | 'OrderCancelled'
  | 'OrderExecuted'
  | 'OrderFrozen'
  | 'OrderUpdated';

export type TradeAction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  eventName?: InputMaybe<Scalars['String']>;
  eventName_not?: InputMaybe<Scalars['String']>;
  eventName_gt?: InputMaybe<Scalars['String']>;
  eventName_lt?: InputMaybe<Scalars['String']>;
  eventName_gte?: InputMaybe<Scalars['String']>;
  eventName_lte?: InputMaybe<Scalars['String']>;
  eventName_in?: InputMaybe<Array<Scalars['String']>>;
  eventName_not_in?: InputMaybe<Array<Scalars['String']>>;
  eventName_contains?: InputMaybe<Scalars['String']>;
  eventName_contains_nocase?: InputMaybe<Scalars['String']>;
  eventName_not_contains?: InputMaybe<Scalars['String']>;
  eventName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  eventName_starts_with?: InputMaybe<Scalars['String']>;
  eventName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventName_not_starts_with?: InputMaybe<Scalars['String']>;
  eventName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  eventName_ends_with?: InputMaybe<Scalars['String']>;
  eventName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  eventName_not_ends_with?: InputMaybe<Scalars['String']>;
  eventName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey?: InputMaybe<Scalars['String']>;
  orderKey_not?: InputMaybe<Scalars['String']>;
  orderKey_gt?: InputMaybe<Scalars['String']>;
  orderKey_lt?: InputMaybe<Scalars['String']>;
  orderKey_gte?: InputMaybe<Scalars['String']>;
  orderKey_lte?: InputMaybe<Scalars['String']>;
  orderKey_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_not_in?: InputMaybe<Array<Scalars['String']>>;
  orderKey_contains?: InputMaybe<Scalars['String']>;
  orderKey_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_contains?: InputMaybe<Scalars['String']>;
  orderKey_not_contains_nocase?: InputMaybe<Scalars['String']>;
  orderKey_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with?: InputMaybe<Scalars['String']>;
  orderKey_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with?: InputMaybe<Scalars['String']>;
  orderKey_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  orderType?: InputMaybe<Scalars['BigInt']>;
  orderType_not?: InputMaybe<Scalars['BigInt']>;
  orderType_gt?: InputMaybe<Scalars['BigInt']>;
  orderType_lt?: InputMaybe<Scalars['BigInt']>;
  orderType_gte?: InputMaybe<Scalars['BigInt']>;
  orderType_lte?: InputMaybe<Scalars['BigInt']>;
  orderType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  orderType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  swapPath?: InputMaybe<Array<Scalars['String']>>;
  swapPath_not?: InputMaybe<Array<Scalars['String']>>;
  swapPath_contains?: InputMaybe<Array<Scalars['String']>>;
  swapPath_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  swapPath_not_contains?: InputMaybe<Array<Scalars['String']>>;
  swapPath_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_gt?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_lt?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_gte?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_lte?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_in?: InputMaybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  initialCollateralTokenAddress_contains?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_contains?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_starts_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_ends_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  initialCollateralTokenAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  initialCollateralDeltaAmount?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_not?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_gt?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_lt?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_gte?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_lte?: InputMaybe<Scalars['BigInt']>;
  initialCollateralDeltaAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialCollateralDeltaAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaUsd?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_not?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lt?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_gte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_lte?: InputMaybe<Scalars['BigInt']>;
  sizeDeltaUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sizeDeltaUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggerPrice?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_not?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_gt?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_lt?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_gte?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_lte?: InputMaybe<Scalars['BigInt']>;
  triggerPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  triggerPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  acceptablePrice?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_not?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_gt?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_lt?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_gte?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_lte?: InputMaybe<Scalars['BigInt']>;
  acceptablePrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  acceptablePrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice?: InputMaybe<Scalars['BigInt']>;
  executionPrice_not?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executionPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executionPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMin?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_not?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']>;
  collateralTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMin?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_not?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_gt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_lt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_gte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_lte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMin_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMin_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMax?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_not?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_gt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_lt?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_gte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_lte?: InputMaybe<Scalars['BigInt']>;
  indexTokenPriceMax_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexTokenPriceMax_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactDiffUsd?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactDiffUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactDiffUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactAmount?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_not?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_gt?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_lt?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_gte?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_lte?: InputMaybe<Scalars['BigInt']>;
  priceImpactAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  priceImpactAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeeAmount?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  positionFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFeeAmount?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  borrowingFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowingFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingFeeAmount?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_not?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  fundingFeeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingFeeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pnlUsd?: InputMaybe<Scalars['BigInt']>;
  pnlUsd_not?: InputMaybe<Scalars['BigInt']>;
  pnlUsd_gt?: InputMaybe<Scalars['BigInt']>;
  pnlUsd_lt?: InputMaybe<Scalars['BigInt']>;
  pnlUsd_gte?: InputMaybe<Scalars['BigInt']>;
  pnlUsd_lte?: InputMaybe<Scalars['BigInt']>;
  pnlUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pnlUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  basePnlUsd?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_not?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_gt?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_lt?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_gte?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_lte?: InputMaybe<Scalars['BigInt']>;
  basePnlUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  basePnlUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isLong?: InputMaybe<Scalars['Boolean']>;
  isLong_not?: InputMaybe<Scalars['Boolean']>;
  isLong_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isLong_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  minOutputAmount?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_not?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_gt?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_lt?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_gte?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_lte?: InputMaybe<Scalars['BigInt']>;
  minOutputAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minOutputAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionAmountOut?: InputMaybe<Scalars['BigInt']>;
  executionAmountOut_not?: InputMaybe<Scalars['BigInt']>;
  executionAmountOut_gt?: InputMaybe<Scalars['BigInt']>;
  executionAmountOut_lt?: InputMaybe<Scalars['BigInt']>;
  executionAmountOut_gte?: InputMaybe<Scalars['BigInt']>;
  executionAmountOut_lte?: InputMaybe<Scalars['BigInt']>;
  executionAmountOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executionAmountOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shouldUnwrapNativeToken?: InputMaybe<Scalars['Boolean']>;
  shouldUnwrapNativeToken_not?: InputMaybe<Scalars['Boolean']>;
  shouldUnwrapNativeToken_in?: InputMaybe<Array<Scalars['Boolean']>>;
  shouldUnwrapNativeToken_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  reason?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reasonBytes?: InputMaybe<Scalars['Bytes']>;
  reasonBytes_not?: InputMaybe<Scalars['Bytes']>;
  reasonBytes_gt?: InputMaybe<Scalars['Bytes']>;
  reasonBytes_lt?: InputMaybe<Scalars['Bytes']>;
  reasonBytes_gte?: InputMaybe<Scalars['Bytes']>;
  reasonBytes_lte?: InputMaybe<Scalars['Bytes']>;
  reasonBytes_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reasonBytes_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  reasonBytes_contains?: InputMaybe<Scalars['Bytes']>;
  reasonBytes_not_contains?: InputMaybe<Scalars['Bytes']>;
  transaction?: InputMaybe<Scalars['String']>;
  transaction_not?: InputMaybe<Scalars['String']>;
  transaction_gt?: InputMaybe<Scalars['String']>;
  transaction_lt?: InputMaybe<Scalars['String']>;
  transaction_gte?: InputMaybe<Scalars['String']>;
  transaction_lte?: InputMaybe<Scalars['String']>;
  transaction_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
  transaction_contains?: InputMaybe<Scalars['String']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_contains?: InputMaybe<Scalars['String']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  transaction_starts_with?: InputMaybe<Scalars['String']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_ends_with?: InputMaybe<Scalars['String']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  transaction_?: InputMaybe<Transaction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradeAction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TradeAction_filter>>>;
};

export type TradeAction_orderBy =
  | 'id'
  | 'eventName'
  | 'orderKey'
  | 'orderType'
  | 'account'
  | 'marketAddress'
  | 'swapPath'
  | 'initialCollateralTokenAddress'
  | 'initialCollateralDeltaAmount'
  | 'sizeDeltaUsd'
  | 'triggerPrice'
  | 'acceptablePrice'
  | 'executionPrice'
  | 'collateralTokenPriceMin'
  | 'collateralTokenPriceMax'
  | 'indexTokenPriceMin'
  | 'indexTokenPriceMax'
  | 'priceImpactDiffUsd'
  | 'priceImpactUsd'
  | 'priceImpactAmount'
  | 'positionFeeAmount'
  | 'borrowingFeeAmount'
  | 'fundingFeeAmount'
  | 'pnlUsd'
  | 'basePnlUsd'
  | 'isLong'
  | 'minOutputAmount'
  | 'executionAmountOut'
  | 'shouldUnwrapNativeToken'
  | 'reason'
  | 'reasonBytes'
  | 'transaction'
  | 'transaction__id'
  | 'transaction__from'
  | 'transaction__to'
  | 'transaction__hash'
  | 'transaction__timestamp'
  | 'transaction__blockNumber'
  | 'transaction__transactionIndex';

export type TradingIncentivesStat = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  period: Scalars['String'];
  positionFeesUsd: Scalars['BigInt'];
  positionFeesInArb: Scalars['BigInt'];
  eligibleFeesInArb: Scalars['BigInt'];
  eligibleFeesUsd: Scalars['BigInt'];
  rebatesCapInArb: Scalars['BigInt'];
};

export type TradingIncentivesStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  positionFeesUsd?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_not?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_gt?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_lt?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_gte?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_lte?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeesUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeesInArb?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_not?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_gt?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_lt?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_gte?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_lte?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeesInArb_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesInArb?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_not?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesInArb_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesUsd?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_not?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rebatesCapInArb?: InputMaybe<Scalars['BigInt']>;
  rebatesCapInArb_not?: InputMaybe<Scalars['BigInt']>;
  rebatesCapInArb_gt?: InputMaybe<Scalars['BigInt']>;
  rebatesCapInArb_lt?: InputMaybe<Scalars['BigInt']>;
  rebatesCapInArb_gte?: InputMaybe<Scalars['BigInt']>;
  rebatesCapInArb_lte?: InputMaybe<Scalars['BigInt']>;
  rebatesCapInArb_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rebatesCapInArb_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradingIncentivesStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TradingIncentivesStat_filter>>>;
};

export type TradingIncentivesStat_orderBy =
  | 'id'
  | 'timestamp'
  | 'period'
  | 'positionFeesUsd'
  | 'positionFeesInArb'
  | 'eligibleFeesInArb'
  | 'eligibleFeesUsd'
  | 'rebatesCapInArb';

export type Transaction = {
  id: Scalars['ID'];
  from: Scalars['String'];
  to: Scalars['String'];
  hash: Scalars['String'];
  timestamp: Scalars['Int'];
  blockNumber: Scalars['Int'];
  transactionIndex: Scalars['Int'];
};

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionIndex?: InputMaybe<Scalars['Int']>;
  transactionIndex_not?: InputMaybe<Scalars['Int']>;
  transactionIndex_gt?: InputMaybe<Scalars['Int']>;
  transactionIndex_lt?: InputMaybe<Scalars['Int']>;
  transactionIndex_gte?: InputMaybe<Scalars['Int']>;
  transactionIndex_lte?: InputMaybe<Scalars['Int']>;
  transactionIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_filter>>>;
};

export type Transaction_orderBy =
  | 'id'
  | 'from'
  | 'to'
  | 'hash'
  | 'timestamp'
  | 'blockNumber'
  | 'transactionIndex';

export type User = {
  id: Scalars['ID'];
  account: Scalars['String'];
  totalSwapCount: Scalars['Int'];
  totalPositionCount: Scalars['Int'];
  totalDepositCount: Scalars['Int'];
  totalWithdrawalCount: Scalars['Int'];
};

export type UserGlpGmMigrationStat = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  period: Scalars['String'];
  account: Scalars['String'];
  glpRedemptionUsd: Scalars['BigInt'];
  glpRedemptionFeeBpsByUsd: Scalars['BigInt'];
  glpRedemptionWeightedAverageFeeBps: Scalars['Int'];
  gmDepositUsd: Scalars['BigInt'];
  eligibleRedemptionInArb: Scalars['BigInt'];
  eligibleRedemptionUsd: Scalars['BigInt'];
  eligibleUpdatedTimestamp: Scalars['Int'];
};

export type UserGlpGmMigrationStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  glpRedemptionUsd?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionUsd_not?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionUsd_gt?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionUsd_lt?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionUsd_gte?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionUsd_lte?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glpRedemptionUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glpRedemptionFeeBpsByUsd?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionFeeBpsByUsd_not?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionFeeBpsByUsd_gt?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionFeeBpsByUsd_lt?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionFeeBpsByUsd_gte?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionFeeBpsByUsd_lte?: InputMaybe<Scalars['BigInt']>;
  glpRedemptionFeeBpsByUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glpRedemptionFeeBpsByUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  glpRedemptionWeightedAverageFeeBps?: InputMaybe<Scalars['Int']>;
  glpRedemptionWeightedAverageFeeBps_not?: InputMaybe<Scalars['Int']>;
  glpRedemptionWeightedAverageFeeBps_gt?: InputMaybe<Scalars['Int']>;
  glpRedemptionWeightedAverageFeeBps_lt?: InputMaybe<Scalars['Int']>;
  glpRedemptionWeightedAverageFeeBps_gte?: InputMaybe<Scalars['Int']>;
  glpRedemptionWeightedAverageFeeBps_lte?: InputMaybe<Scalars['Int']>;
  glpRedemptionWeightedAverageFeeBps_in?: InputMaybe<Array<Scalars['Int']>>;
  glpRedemptionWeightedAverageFeeBps_not_in?: InputMaybe<Array<Scalars['Int']>>;
  gmDepositUsd?: InputMaybe<Scalars['BigInt']>;
  gmDepositUsd_not?: InputMaybe<Scalars['BigInt']>;
  gmDepositUsd_gt?: InputMaybe<Scalars['BigInt']>;
  gmDepositUsd_lt?: InputMaybe<Scalars['BigInt']>;
  gmDepositUsd_gte?: InputMaybe<Scalars['BigInt']>;
  gmDepositUsd_lte?: InputMaybe<Scalars['BigInt']>;
  gmDepositUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gmDepositUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleRedemptionInArb?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_not?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionInArb_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleRedemptionInArb_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleRedemptionUsd?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_not?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleRedemptionUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleRedemptionUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleUpdatedTimestamp?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_not?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_gt?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_lt?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_gte?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_lte?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  eligibleUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserGlpGmMigrationStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserGlpGmMigrationStat_filter>>>;
};

export type UserGlpGmMigrationStat_orderBy =
  | 'id'
  | 'timestamp'
  | 'period'
  | 'account'
  | 'glpRedemptionUsd'
  | 'glpRedemptionFeeBpsByUsd'
  | 'glpRedemptionWeightedAverageFeeBps'
  | 'gmDepositUsd'
  | 'eligibleRedemptionInArb'
  | 'eligibleRedemptionUsd'
  | 'eligibleUpdatedTimestamp';

export type UserGmTokensBalanceChange = {
  id: Scalars['ID'];
  account: Scalars['String'];
  marketAddress: Scalars['String'];
  tokensBalance: Scalars['BigInt'];
  timestamp: Scalars['Int'];
  cumulativeIncome: Scalars['BigInt'];
  cumulativeFeeUsdPerGmToken: Scalars['BigInt'];
  index: Scalars['BigInt'];
};

export type UserGmTokensBalanceChange_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokensBalance?: InputMaybe<Scalars['BigInt']>;
  tokensBalance_not?: InputMaybe<Scalars['BigInt']>;
  tokensBalance_gt?: InputMaybe<Scalars['BigInt']>;
  tokensBalance_lt?: InputMaybe<Scalars['BigInt']>;
  tokensBalance_gte?: InputMaybe<Scalars['BigInt']>;
  tokensBalance_lte?: InputMaybe<Scalars['BigInt']>;
  tokensBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeIncome?: InputMaybe<Scalars['BigInt']>;
  cumulativeIncome_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeIncome_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeIncome_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeIncome_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeIncome_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeIncome_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeIncome_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFeeUsdPerGmToken?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_not?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_gt?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_lt?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_gte?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_lte?: InputMaybe<Scalars['BigInt']>;
  cumulativeFeeUsdPerGmToken_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFeeUsdPerGmToken_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserGmTokensBalanceChange_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserGmTokensBalanceChange_filter>>>;
};

export type UserGmTokensBalanceChange_orderBy =
  | 'id'
  | 'account'
  | 'marketAddress'
  | 'tokensBalance'
  | 'timestamp'
  | 'cumulativeIncome'
  | 'cumulativeFeeUsdPerGmToken'
  | 'index';

export type UserMarketInfo = {
  id: Scalars['ID'];
  marketTokensBalance: Scalars['BigInt'];
  account: Scalars['String'];
  marketAddress: Scalars['String'];
};

export type UserMarketInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketTokensBalance?: InputMaybe<Scalars['BigInt']>;
  marketTokensBalance_not?: InputMaybe<Scalars['BigInt']>;
  marketTokensBalance_gt?: InputMaybe<Scalars['BigInt']>;
  marketTokensBalance_lt?: InputMaybe<Scalars['BigInt']>;
  marketTokensBalance_gte?: InputMaybe<Scalars['BigInt']>;
  marketTokensBalance_lte?: InputMaybe<Scalars['BigInt']>;
  marketTokensBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marketTokensBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress?: InputMaybe<Scalars['String']>;
  marketAddress_not?: InputMaybe<Scalars['String']>;
  marketAddress_gt?: InputMaybe<Scalars['String']>;
  marketAddress_lt?: InputMaybe<Scalars['String']>;
  marketAddress_gte?: InputMaybe<Scalars['String']>;
  marketAddress_lte?: InputMaybe<Scalars['String']>;
  marketAddress_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketAddress_contains?: InputMaybe<Scalars['String']>;
  marketAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains?: InputMaybe<Scalars['String']>;
  marketAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  marketAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserMarketInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserMarketInfo_filter>>>;
};

export type UserMarketInfo_orderBy =
  | 'id'
  | 'marketTokensBalance'
  | 'account'
  | 'marketAddress';

export type UserStat = {
  id: Scalars['ID'];
  totalSwapCount: Scalars['Int'];
  totalPositionCount: Scalars['Int'];
  totalDepositCount: Scalars['Int'];
  totalWithdrawalCount: Scalars['Int'];
  timestamp: Scalars['Int'];
  period: Scalars['String'];
  uniqueUsers: Scalars['Int'];
};

export type UserStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalSwapCount?: InputMaybe<Scalars['Int']>;
  totalSwapCount_not?: InputMaybe<Scalars['Int']>;
  totalSwapCount_gt?: InputMaybe<Scalars['Int']>;
  totalSwapCount_lt?: InputMaybe<Scalars['Int']>;
  totalSwapCount_gte?: InputMaybe<Scalars['Int']>;
  totalSwapCount_lte?: InputMaybe<Scalars['Int']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPositionCount?: InputMaybe<Scalars['Int']>;
  totalPositionCount_not?: InputMaybe<Scalars['Int']>;
  totalPositionCount_gt?: InputMaybe<Scalars['Int']>;
  totalPositionCount_lt?: InputMaybe<Scalars['Int']>;
  totalPositionCount_gte?: InputMaybe<Scalars['Int']>;
  totalPositionCount_lte?: InputMaybe<Scalars['Int']>;
  totalPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDepositCount?: InputMaybe<Scalars['Int']>;
  totalDepositCount_not?: InputMaybe<Scalars['Int']>;
  totalDepositCount_gt?: InputMaybe<Scalars['Int']>;
  totalDepositCount_lt?: InputMaybe<Scalars['Int']>;
  totalDepositCount_gte?: InputMaybe<Scalars['Int']>;
  totalDepositCount_lte?: InputMaybe<Scalars['Int']>;
  totalDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalWithdrawalCount?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_not?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_gt?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_lt?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_gte?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_lte?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalWithdrawalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uniqueUsers?: InputMaybe<Scalars['Int']>;
  uniqueUsers_not?: InputMaybe<Scalars['Int']>;
  uniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  uniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  uniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  uniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  uniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  uniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserStat_filter>>>;
};

export type UserStat_orderBy =
  | 'id'
  | 'totalSwapCount'
  | 'totalPositionCount'
  | 'totalDepositCount'
  | 'totalWithdrawalCount'
  | 'timestamp'
  | 'period'
  | 'uniqueUsers';

export type UserTradingIncentivesStat = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  period: Scalars['String'];
  account: Scalars['String'];
  positionFeesUsd: Scalars['BigInt'];
  positionFeesInArb: Scalars['BigInt'];
  eligibleFeesInArb: Scalars['BigInt'];
  eligibleFeesUsd: Scalars['BigInt'];
  eligibleUpdatedTimestamp: Scalars['Int'];
};

export type UserTradingIncentivesStat_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  positionFeesUsd?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_not?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_gt?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_lt?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_gte?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_lte?: InputMaybe<Scalars['BigInt']>;
  positionFeesUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeesUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeesInArb?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_not?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_gt?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_lt?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_gte?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_lte?: InputMaybe<Scalars['BigInt']>;
  positionFeesInArb_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positionFeesInArb_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesInArb?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_not?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesInArb_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesInArb_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesUsd?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_not?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_gt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_lt?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_gte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_lte?: InputMaybe<Scalars['BigInt']>;
  eligibleFeesUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleFeesUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  eligibleUpdatedTimestamp?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_not?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_gt?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_lt?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_gte?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_lte?: InputMaybe<Scalars['Int']>;
  eligibleUpdatedTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  eligibleUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserTradingIncentivesStat_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UserTradingIncentivesStat_filter>>>;
};

export type UserTradingIncentivesStat_orderBy =
  | 'id'
  | 'timestamp'
  | 'period'
  | 'account'
  | 'positionFeesUsd'
  | 'positionFeesInArb'
  | 'eligibleFeesInArb'
  | 'eligibleFeesUsd'
  | 'eligibleUpdatedTimestamp';

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalSwapCount?: InputMaybe<Scalars['Int']>;
  totalSwapCount_not?: InputMaybe<Scalars['Int']>;
  totalSwapCount_gt?: InputMaybe<Scalars['Int']>;
  totalSwapCount_lt?: InputMaybe<Scalars['Int']>;
  totalSwapCount_gte?: InputMaybe<Scalars['Int']>;
  totalSwapCount_lte?: InputMaybe<Scalars['Int']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPositionCount?: InputMaybe<Scalars['Int']>;
  totalPositionCount_not?: InputMaybe<Scalars['Int']>;
  totalPositionCount_gt?: InputMaybe<Scalars['Int']>;
  totalPositionCount_lt?: InputMaybe<Scalars['Int']>;
  totalPositionCount_gte?: InputMaybe<Scalars['Int']>;
  totalPositionCount_lte?: InputMaybe<Scalars['Int']>;
  totalPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDepositCount?: InputMaybe<Scalars['Int']>;
  totalDepositCount_not?: InputMaybe<Scalars['Int']>;
  totalDepositCount_gt?: InputMaybe<Scalars['Int']>;
  totalDepositCount_lt?: InputMaybe<Scalars['Int']>;
  totalDepositCount_gte?: InputMaybe<Scalars['Int']>;
  totalDepositCount_lte?: InputMaybe<Scalars['Int']>;
  totalDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalWithdrawalCount?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_not?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_gt?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_lt?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_gte?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_lte?: InputMaybe<Scalars['Int']>;
  totalWithdrawalCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalWithdrawalCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'account'
  | 'totalSwapCount'
  | 'totalPositionCount'
  | 'totalDepositCount'
  | 'totalWithdrawalCount';

export type VolumeInfo = {
  id: Scalars['ID'];
  period: Scalars['String'];
  volumeUsd: Scalars['BigInt'];
  marginVolumeUsd: Scalars['BigInt'];
  swapVolumeUsd: Scalars['BigInt'];
  depositVolumeUsd: Scalars['BigInt'];
  withdrawalVolumeUsd: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type VolumeInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  period?: InputMaybe<Scalars['String']>;
  period_not?: InputMaybe<Scalars['String']>;
  period_gt?: InputMaybe<Scalars['String']>;
  period_lt?: InputMaybe<Scalars['String']>;
  period_gte?: InputMaybe<Scalars['String']>;
  period_lte?: InputMaybe<Scalars['String']>;
  period_in?: InputMaybe<Array<Scalars['String']>>;
  period_not_in?: InputMaybe<Array<Scalars['String']>>;
  period_contains?: InputMaybe<Scalars['String']>;
  period_contains_nocase?: InputMaybe<Scalars['String']>;
  period_not_contains?: InputMaybe<Scalars['String']>;
  period_not_contains_nocase?: InputMaybe<Scalars['String']>;
  period_starts_with?: InputMaybe<Scalars['String']>;
  period_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_starts_with?: InputMaybe<Scalars['String']>;
  period_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  period_ends_with?: InputMaybe<Scalars['String']>;
  period_ends_with_nocase?: InputMaybe<Scalars['String']>;
  period_not_ends_with?: InputMaybe<Scalars['String']>;
  period_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  volumeUsd?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_not?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  volumeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marginVolumeUsd?: InputMaybe<Scalars['BigInt']>;
  marginVolumeUsd_not?: InputMaybe<Scalars['BigInt']>;
  marginVolumeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  marginVolumeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  marginVolumeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  marginVolumeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  marginVolumeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  marginVolumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapVolumeUsd?: InputMaybe<Scalars['BigInt']>;
  swapVolumeUsd_not?: InputMaybe<Scalars['BigInt']>;
  swapVolumeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  swapVolumeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  swapVolumeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  swapVolumeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  swapVolumeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapVolumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositVolumeUsd?: InputMaybe<Scalars['BigInt']>;
  depositVolumeUsd_not?: InputMaybe<Scalars['BigInt']>;
  depositVolumeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  depositVolumeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  depositVolumeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  depositVolumeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  depositVolumeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositVolumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalVolumeUsd?: InputMaybe<Scalars['BigInt']>;
  withdrawalVolumeUsd_not?: InputMaybe<Scalars['BigInt']>;
  withdrawalVolumeUsd_gt?: InputMaybe<Scalars['BigInt']>;
  withdrawalVolumeUsd_lt?: InputMaybe<Scalars['BigInt']>;
  withdrawalVolumeUsd_gte?: InputMaybe<Scalars['BigInt']>;
  withdrawalVolumeUsd_lte?: InputMaybe<Scalars['BigInt']>;
  withdrawalVolumeUsd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawalVolumeUsd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VolumeInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VolumeInfo_filter>>>;
};

export type VolumeInfo_orderBy =
  | 'id'
  | 'period'
  | 'volumeUsd'
  | 'marginVolumeUsd'
  | 'swapVolumeUsd'
  | 'depositVolumeUsd'
  | 'withdrawalVolumeUsd'
  | 'timestamp';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AffiliateRewardUpdate: ResolverTypeWrapper<AffiliateRewardUpdate>;
  AffiliateRewardUpdate_filter: AffiliateRewardUpdate_filter;
  AffiliateRewardUpdate_orderBy: AffiliateRewardUpdate_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Candle: ResolverTypeWrapper<Candle>;
  Candle_filter: Candle_filter;
  Candle_orderBy: Candle_orderBy;
  ClaimAction: ResolverTypeWrapper<ClaimAction>;
  ClaimActionType: ClaimActionType;
  ClaimAction_filter: ClaimAction_filter;
  ClaimAction_orderBy: ClaimAction_orderBy;
  ClaimCollateralAction: ResolverTypeWrapper<ClaimCollateralAction>;
  ClaimCollateralAction_filter: ClaimCollateralAction_filter;
  ClaimCollateralAction_orderBy: ClaimCollateralAction_orderBy;
  ClaimRef: ResolverTypeWrapper<ClaimRef>;
  ClaimRef_filter: ClaimRef_filter;
  ClaimRef_orderBy: ClaimRef_orderBy;
  ClaimableCollateral: ResolverTypeWrapper<ClaimableCollateral>;
  ClaimableCollateralGroup: ResolverTypeWrapper<ClaimableCollateralGroup>;
  ClaimableCollateralGroup_filter: ClaimableCollateralGroup_filter;
  ClaimableCollateralGroup_orderBy: ClaimableCollateralGroup_orderBy;
  ClaimableCollateral_filter: ClaimableCollateral_filter;
  ClaimableCollateral_orderBy: ClaimableCollateral_orderBy;
  ClaimableFundingFeeInfo: ResolverTypeWrapper<ClaimableFundingFeeInfo>;
  ClaimableFundingFeeInfo_filter: ClaimableFundingFeeInfo_filter;
  ClaimableFundingFeeInfo_orderBy: ClaimableFundingFeeInfo_orderBy;
  CollectedMarketFeesInfo: ResolverTypeWrapper<CollectedMarketFeesInfo>;
  CollectedMarketFeesInfo_filter: CollectedMarketFeesInfo_filter;
  CollectedMarketFeesInfo_orderBy: CollectedMarketFeesInfo_orderBy;
  DepositRef: ResolverTypeWrapper<DepositRef>;
  DepositRef_filter: DepositRef_filter;
  DepositRef_orderBy: DepositRef_orderBy;
  Distribution: ResolverTypeWrapper<Distribution>;
  Distribution_filter: Distribution_filter;
  Distribution_orderBy: Distribution_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GlpGmMigrationStat: ResolverTypeWrapper<GlpGmMigrationStat>;
  GlpGmMigrationStat_filter: GlpGmMigrationStat_filter;
  GlpGmMigrationStat_orderBy: GlpGmMigrationStat_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  LatestUserGmTokensBalanceChangeRef: ResolverTypeWrapper<LatestUserGmTokensBalanceChangeRef>;
  LatestUserGmTokensBalanceChangeRef_filter: LatestUserGmTokensBalanceChangeRef_filter;
  LatestUserGmTokensBalanceChangeRef_orderBy: LatestUserGmTokensBalanceChangeRef_orderBy;
  LiquidityProviderIncentivesStat: ResolverTypeWrapper<LiquidityProviderIncentivesStat>;
  LiquidityProviderIncentivesStat_filter: LiquidityProviderIncentivesStat_filter;
  LiquidityProviderIncentivesStat_orderBy: LiquidityProviderIncentivesStat_orderBy;
  MarketIncentivesStat: ResolverTypeWrapper<MarketIncentivesStat>;
  MarketIncentivesStat_filter: MarketIncentivesStat_filter;
  MarketIncentivesStat_orderBy: MarketIncentivesStat_orderBy;
  MarketInfo: ResolverTypeWrapper<MarketInfo>;
  MarketInfo_filter: MarketInfo_filter;
  MarketInfo_orderBy: MarketInfo_orderBy;
  Order: ResolverTypeWrapper<Order>;
  OrderDirection: OrderDirection;
  OrderStatus: OrderStatus;
  Order_filter: Order_filter;
  Order_orderBy: Order_orderBy;
  PoolAmountUpdate: ResolverTypeWrapper<PoolAmountUpdate>;
  PoolAmountUpdate_filter: PoolAmountUpdate_filter;
  PoolAmountUpdate_orderBy: PoolAmountUpdate_orderBy;
  PositionDecrease: ResolverTypeWrapper<PositionDecrease>;
  PositionDecrease_filter: PositionDecrease_filter;
  PositionDecrease_orderBy: PositionDecrease_orderBy;
  PositionFeesInfo: ResolverTypeWrapper<PositionFeesInfo>;
  PositionFeesInfoWithPeriod: ResolverTypeWrapper<PositionFeesInfoWithPeriod>;
  PositionFeesInfoWithPeriod_filter: PositionFeesInfoWithPeriod_filter;
  PositionFeesInfoWithPeriod_orderBy: PositionFeesInfoWithPeriod_orderBy;
  PositionFeesInfo_filter: PositionFeesInfo_filter;
  PositionFeesInfo_orderBy: PositionFeesInfo_orderBy;
  PositionIncrease: ResolverTypeWrapper<PositionIncrease>;
  PositionIncrease_filter: PositionIncrease_filter;
  PositionIncrease_orderBy: PositionIncrease_orderBy;
  PositionVolumeInfo: ResolverTypeWrapper<PositionVolumeInfo>;
  PositionVolumeInfo_filter: PositionVolumeInfo_filter;
  PositionVolumeInfo_orderBy: PositionVolumeInfo_orderBy;
  Query: ResolverTypeWrapper<{}>;
  SellUSDG: ResolverTypeWrapper<SellUSDG>;
  SellUSDG_filter: SellUSDG_filter;
  SellUSDG_orderBy: SellUSDG_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  SwapFeesInfo: ResolverTypeWrapper<SwapFeesInfo>;
  SwapFeesInfoWithPeriod: ResolverTypeWrapper<SwapFeesInfoWithPeriod>;
  SwapFeesInfoWithPeriod_filter: SwapFeesInfoWithPeriod_filter;
  SwapFeesInfoWithPeriod_orderBy: SwapFeesInfoWithPeriod_orderBy;
  SwapFeesInfo_filter: SwapFeesInfo_filter;
  SwapFeesInfo_orderBy: SwapFeesInfo_orderBy;
  SwapInfo: ResolverTypeWrapper<SwapInfo>;
  SwapInfo_filter: SwapInfo_filter;
  SwapInfo_orderBy: SwapInfo_orderBy;
  SwapVolumeInfo: ResolverTypeWrapper<SwapVolumeInfo>;
  SwapVolumeInfo_filter: SwapVolumeInfo_filter;
  SwapVolumeInfo_orderBy: SwapVolumeInfo_orderBy;
  TokenPrice: ResolverTypeWrapper<TokenPrice>;
  TokenPrice_filter: TokenPrice_filter;
  TokenPrice_orderBy: TokenPrice_orderBy;
  TradeAction: ResolverTypeWrapper<TradeAction>;
  TradeActionType: TradeActionType;
  TradeAction_filter: TradeAction_filter;
  TradeAction_orderBy: TradeAction_orderBy;
  TradingIncentivesStat: ResolverTypeWrapper<TradingIncentivesStat>;
  TradingIncentivesStat_filter: TradingIncentivesStat_filter;
  TradingIncentivesStat_orderBy: TradingIncentivesStat_orderBy;
  Transaction: ResolverTypeWrapper<Transaction>;
  Transaction_filter: Transaction_filter;
  Transaction_orderBy: Transaction_orderBy;
  User: ResolverTypeWrapper<User>;
  UserGlpGmMigrationStat: ResolverTypeWrapper<UserGlpGmMigrationStat>;
  UserGlpGmMigrationStat_filter: UserGlpGmMigrationStat_filter;
  UserGlpGmMigrationStat_orderBy: UserGlpGmMigrationStat_orderBy;
  UserGmTokensBalanceChange: ResolverTypeWrapper<UserGmTokensBalanceChange>;
  UserGmTokensBalanceChange_filter: UserGmTokensBalanceChange_filter;
  UserGmTokensBalanceChange_orderBy: UserGmTokensBalanceChange_orderBy;
  UserMarketInfo: ResolverTypeWrapper<UserMarketInfo>;
  UserMarketInfo_filter: UserMarketInfo_filter;
  UserMarketInfo_orderBy: UserMarketInfo_orderBy;
  UserStat: ResolverTypeWrapper<UserStat>;
  UserStat_filter: UserStat_filter;
  UserStat_orderBy: UserStat_orderBy;
  UserTradingIncentivesStat: ResolverTypeWrapper<UserTradingIncentivesStat>;
  UserTradingIncentivesStat_filter: UserTradingIncentivesStat_filter;
  UserTradingIncentivesStat_orderBy: UserTradingIncentivesStat_orderBy;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  VolumeInfo: ResolverTypeWrapper<VolumeInfo>;
  VolumeInfo_filter: VolumeInfo_filter;
  VolumeInfo_orderBy: VolumeInfo_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AffiliateRewardUpdate: AffiliateRewardUpdate;
  AffiliateRewardUpdate_filter: AffiliateRewardUpdate_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Candle: Candle;
  Candle_filter: Candle_filter;
  ClaimAction: ClaimAction;
  ClaimAction_filter: ClaimAction_filter;
  ClaimCollateralAction: ClaimCollateralAction;
  ClaimCollateralAction_filter: ClaimCollateralAction_filter;
  ClaimRef: ClaimRef;
  ClaimRef_filter: ClaimRef_filter;
  ClaimableCollateral: ClaimableCollateral;
  ClaimableCollateralGroup: ClaimableCollateralGroup;
  ClaimableCollateralGroup_filter: ClaimableCollateralGroup_filter;
  ClaimableCollateral_filter: ClaimableCollateral_filter;
  ClaimableFundingFeeInfo: ClaimableFundingFeeInfo;
  ClaimableFundingFeeInfo_filter: ClaimableFundingFeeInfo_filter;
  CollectedMarketFeesInfo: CollectedMarketFeesInfo;
  CollectedMarketFeesInfo_filter: CollectedMarketFeesInfo_filter;
  DepositRef: DepositRef;
  DepositRef_filter: DepositRef_filter;
  Distribution: Distribution;
  Distribution_filter: Distribution_filter;
  Float: Scalars['Float'];
  GlpGmMigrationStat: GlpGmMigrationStat;
  GlpGmMigrationStat_filter: GlpGmMigrationStat_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  LatestUserGmTokensBalanceChangeRef: LatestUserGmTokensBalanceChangeRef;
  LatestUserGmTokensBalanceChangeRef_filter: LatestUserGmTokensBalanceChangeRef_filter;
  LiquidityProviderIncentivesStat: LiquidityProviderIncentivesStat;
  LiquidityProviderIncentivesStat_filter: LiquidityProviderIncentivesStat_filter;
  MarketIncentivesStat: MarketIncentivesStat;
  MarketIncentivesStat_filter: MarketIncentivesStat_filter;
  MarketInfo: MarketInfo;
  MarketInfo_filter: MarketInfo_filter;
  Order: Order;
  Order_filter: Order_filter;
  PoolAmountUpdate: PoolAmountUpdate;
  PoolAmountUpdate_filter: PoolAmountUpdate_filter;
  PositionDecrease: PositionDecrease;
  PositionDecrease_filter: PositionDecrease_filter;
  PositionFeesInfo: PositionFeesInfo;
  PositionFeesInfoWithPeriod: PositionFeesInfoWithPeriod;
  PositionFeesInfoWithPeriod_filter: PositionFeesInfoWithPeriod_filter;
  PositionFeesInfo_filter: PositionFeesInfo_filter;
  PositionIncrease: PositionIncrease;
  PositionIncrease_filter: PositionIncrease_filter;
  PositionVolumeInfo: PositionVolumeInfo;
  PositionVolumeInfo_filter: PositionVolumeInfo_filter;
  Query: {};
  SellUSDG: SellUSDG;
  SellUSDG_filter: SellUSDG_filter;
  String: Scalars['String'];
  Subscription: {};
  SwapFeesInfo: SwapFeesInfo;
  SwapFeesInfoWithPeriod: SwapFeesInfoWithPeriod;
  SwapFeesInfoWithPeriod_filter: SwapFeesInfoWithPeriod_filter;
  SwapFeesInfo_filter: SwapFeesInfo_filter;
  SwapInfo: SwapInfo;
  SwapInfo_filter: SwapInfo_filter;
  SwapVolumeInfo: SwapVolumeInfo;
  SwapVolumeInfo_filter: SwapVolumeInfo_filter;
  TokenPrice: TokenPrice;
  TokenPrice_filter: TokenPrice_filter;
  TradeAction: TradeAction;
  TradeAction_filter: TradeAction_filter;
  TradingIncentivesStat: TradingIncentivesStat;
  TradingIncentivesStat_filter: TradingIncentivesStat_filter;
  Transaction: Transaction;
  Transaction_filter: Transaction_filter;
  User: User;
  UserGlpGmMigrationStat: UserGlpGmMigrationStat;
  UserGlpGmMigrationStat_filter: UserGlpGmMigrationStat_filter;
  UserGmTokensBalanceChange: UserGmTokensBalanceChange;
  UserGmTokensBalanceChange_filter: UserGmTokensBalanceChange_filter;
  UserMarketInfo: UserMarketInfo;
  UserMarketInfo_filter: UserMarketInfo_filter;
  UserStat: UserStat;
  UserStat_filter: UserStat_filter;
  UserTradingIncentivesStat: UserTradingIncentivesStat;
  UserTradingIncentivesStat_filter: UserTradingIncentivesStat_filter;
  User_filter: User_filter;
  VolumeInfo: VolumeInfo;
  VolumeInfo_filter: VolumeInfo_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AffiliateRewardUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AffiliateRewardUpdate'] = ResolversParentTypes['AffiliateRewardUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  affiliate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  delta?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nextValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nextPoolValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CandleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Candle'] = ResolversParentTypes['Candle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  close?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimAction'] = ResolversParentTypes['ClaimAction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['ClaimActionType'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tokenAddresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isLongOrders?: Resolver<Array<ResolversTypes['Boolean']>, ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimCollateralActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimCollateralAction'] = ResolversParentTypes['ClaimCollateralAction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['ClaimActionType'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tokenAddresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimRefResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimRef'] = ResolversParentTypes['ClaimRef']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimableCollateralResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimableCollateral'] = ResolversParentTypes['ClaimableCollateral']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  claimed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  factor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  factorByTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimableCollateralGroupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimableCollateralGroup'] = ResolversParentTypes['ClaimableCollateralGroup']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timeKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  factor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  claimables?: Resolver<Array<ResolversTypes['ClaimableCollateral']>, ParentType, ContextType, RequireFields<ClaimableCollateralGroupclaimablesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClaimableFundingFeeInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClaimableFundingFeeInfo'] = ResolversParentTypes['ClaimableFundingFeeInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketAddresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  tokenAddresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectedMarketFeesInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollectedMarketFeesInfo'] = ResolversParentTypes['CollectedMarketFeesInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  feeUsdForPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cummulativeFeeUsdForPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeUsdPerPoolValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cumulativeFeeUsdPerPoolValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeUsdPerGmToken?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cumulativeFeeUsdPerGmToken?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  prevCumulativeFeeUsdPerGmToken?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestampGroup?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositRefResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DepositRef'] = ResolversParentTypes['DepositRef']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DistributionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Distribution'] = ResolversParentTypes['Distribution']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountsInUsd?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GlpGmMigrationStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GlpGmMigrationStat'] = ResolversParentTypes['GlpGmMigrationStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  eligibleRedemptionUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleRedemptionInArb?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LatestUserGmTokensBalanceChangeRefResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LatestUserGmTokensBalanceChangeRef'] = ResolversParentTypes['LatestUserGmTokensBalanceChangeRef']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latestUserGmTokensBalanceChange?: Resolver<Maybe<ResolversTypes['UserGmTokensBalanceChange']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityProviderIncentivesStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityProviderIncentivesStat'] = ResolversParentTypes['LiquidityProviderIncentivesStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastMarketTokensBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cumulativeTimeByMarketTokensBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  weightedAverageMarketTokensBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketIncentivesStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketIncentivesStat'] = ResolversParentTypes['MarketIncentivesStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastMarketTokensSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cumulativeTimeByMarketTokensSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  weightedAverageMarketTokensSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarketInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketInfo'] = ResolversParentTypes['MarketInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  indexToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  longToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketTokensSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  callbackContract?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapPath?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  initialCollateralTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sizeDeltaUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  initialCollateralDeltaAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  triggerPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  acceptablePrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executionFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  callbackGasLimit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  minOutputAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAtBlock?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  orderType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  shouldUnwrapNativeToken?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLong?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  cancelledReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cancelledReasonBytes?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  frozenReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  frozenReasonBytes?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  createdTxn?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  cancelledTxn?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  executedTxn?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolAmountUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolAmountUpdate'] = ResolversParentTypes['PoolAmountUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  delta?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nextValue?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionDecreaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionDecrease'] = ResolversParentTypes['PositionDecrease']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positionKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralTokenPriceMin?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralTokenPriceMax?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeInUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeInTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeDeltaUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeDeltaInTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralDeltaAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executionPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceImpactDiffUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceImpactUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  orderType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  borrowingFactor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  longTokenFundingAmountPerSize?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  shortTokenFundingAmountPerSize?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceImpactAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  basePnlUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isLong?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionFeesInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionFeesInfo'] = ResolversParentTypes['PositionFeesInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  affiliate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralTokenPriceMin?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralTokenPriceMax?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  positionFeeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  borrowingFeeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fundingFeeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeUsdForPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalRebateFactor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  traderDiscountAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalRebateAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  affiliateRewardAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionFeesInfoWithPeriodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionFeesInfoWithPeriod'] = ResolversParentTypes['PositionFeesInfoWithPeriod']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalPositionFeeAmountForPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPositionFeeUsdForPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPositionFeeAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalPositionFeeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalBorrowingFeeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionIncreaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionIncrease'] = ResolversParentTypes['PositionIncrease']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positionKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralTokenPriceMin?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralTokenPriceMax?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  indexTokenPriceMin?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  indexTokenPriceMax?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fundingFeeAmountPerSize?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeInUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeInTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeDeltaUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeDeltaInTokens?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralDeltaAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  executionPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  orderType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  borrowingFactor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  longTokenFundingAmountPerSize?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  shortTokenFundingAmountPerSize?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  priceImpactAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceImpactUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isLong?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionVolumeInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionVolumeInfo'] = ResolversParentTypes['PositionVolumeInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  indexToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  candle?: Resolver<Maybe<ResolversTypes['Candle']>, ParentType, ContextType, RequireFields<QuerycandleArgs, 'id' | 'subgraphError'>>;
  candles?: Resolver<Array<ResolversTypes['Candle']>, ParentType, ContextType, RequireFields<QuerycandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  affiliateRewardUpdate?: Resolver<Maybe<ResolversTypes['AffiliateRewardUpdate']>, ParentType, ContextType, RequireFields<QueryaffiliateRewardUpdateArgs, 'id' | 'subgraphError'>>;
  affiliateRewardUpdates?: Resolver<Array<ResolversTypes['AffiliateRewardUpdate']>, ParentType, ContextType, RequireFields<QueryaffiliateRewardUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryorderArgs, 'id' | 'subgraphError'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryordersArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionIncrease?: Resolver<Maybe<ResolversTypes['PositionIncrease']>, ParentType, ContextType, RequireFields<QuerypositionIncreaseArgs, 'id' | 'subgraphError'>>;
  positionIncreases?: Resolver<Array<ResolversTypes['PositionIncrease']>, ParentType, ContextType, RequireFields<QuerypositionIncreasesArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionDecrease?: Resolver<Maybe<ResolversTypes['PositionDecrease']>, ParentType, ContextType, RequireFields<QuerypositionDecreaseArgs, 'id' | 'subgraphError'>>;
  positionDecreases?: Resolver<Array<ResolversTypes['PositionDecrease']>, ParentType, ContextType, RequireFields<QuerypositionDecreasesArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionFeesInfo?: Resolver<Maybe<ResolversTypes['PositionFeesInfo']>, ParentType, ContextType, RequireFields<QuerypositionFeesInfoArgs, 'id' | 'subgraphError'>>;
  positionFeesInfos?: Resolver<Array<ResolversTypes['PositionFeesInfo']>, ParentType, ContextType, RequireFields<QuerypositionFeesInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimableCollateral?: Resolver<Maybe<ResolversTypes['ClaimableCollateral']>, ParentType, ContextType, RequireFields<QueryclaimableCollateralArgs, 'id' | 'subgraphError'>>;
  claimableCollaterals?: Resolver<Array<ResolversTypes['ClaimableCollateral']>, ParentType, ContextType, RequireFields<QueryclaimableCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimableCollateralGroup?: Resolver<Maybe<ResolversTypes['ClaimableCollateralGroup']>, ParentType, ContextType, RequireFields<QueryclaimableCollateralGroupArgs, 'id' | 'subgraphError'>>;
  claimableCollateralGroups?: Resolver<Array<ResolversTypes['ClaimableCollateralGroup']>, ParentType, ContextType, RequireFields<QueryclaimableCollateralGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapInfo?: Resolver<Maybe<ResolversTypes['SwapInfo']>, ParentType, ContextType, RequireFields<QueryswapInfoArgs, 'id' | 'subgraphError'>>;
  swapInfos?: Resolver<Array<ResolversTypes['SwapInfo']>, ParentType, ContextType, RequireFields<QueryswapInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapFeesInfo?: Resolver<Maybe<ResolversTypes['SwapFeesInfo']>, ParentType, ContextType, RequireFields<QueryswapFeesInfoArgs, 'id' | 'subgraphError'>>;
  swapFeesInfos?: Resolver<Array<ResolversTypes['SwapFeesInfo']>, ParentType, ContextType, RequireFields<QueryswapFeesInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  collectedMarketFeesInfo?: Resolver<Maybe<ResolversTypes['CollectedMarketFeesInfo']>, ParentType, ContextType, RequireFields<QuerycollectedMarketFeesInfoArgs, 'id' | 'subgraphError'>>;
  collectedMarketFeesInfos?: Resolver<Array<ResolversTypes['CollectedMarketFeesInfo']>, ParentType, ContextType, RequireFields<QuerycollectedMarketFeesInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  userGmTokensBalanceChange?: Resolver<Maybe<ResolversTypes['UserGmTokensBalanceChange']>, ParentType, ContextType, RequireFields<QueryuserGmTokensBalanceChangeArgs, 'id' | 'subgraphError'>>;
  userGmTokensBalanceChanges?: Resolver<Array<ResolversTypes['UserGmTokensBalanceChange']>, ParentType, ContextType, RequireFields<QueryuserGmTokensBalanceChangesArgs, 'skip' | 'first' | 'subgraphError'>>;
  latestUserGmTokensBalanceChangeRef?: Resolver<Maybe<ResolversTypes['LatestUserGmTokensBalanceChangeRef']>, ParentType, ContextType, RequireFields<QuerylatestUserGmTokensBalanceChangeRefArgs, 'id' | 'subgraphError'>>;
  latestUserGmTokensBalanceChangeRefs?: Resolver<Array<ResolversTypes['LatestUserGmTokensBalanceChangeRef']>, ParentType, ContextType, RequireFields<QuerylatestUserGmTokensBalanceChangeRefsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tradeAction?: Resolver<Maybe<ResolversTypes['TradeAction']>, ParentType, ContextType, RequireFields<QuerytradeActionArgs, 'id' | 'subgraphError'>>;
  tradeActions?: Resolver<Array<ResolversTypes['TradeAction']>, ParentType, ContextType, RequireFields<QuerytradeActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPrice?: Resolver<Maybe<ResolversTypes['TokenPrice']>, ParentType, ContextType, RequireFields<QuerytokenPriceArgs, 'id' | 'subgraphError'>>;
  tokenPrices?: Resolver<Array<ResolversTypes['TokenPrice']>, ParentType, ContextType, RequireFields<QuerytokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimCollateralAction?: Resolver<Maybe<ResolversTypes['ClaimCollateralAction']>, ParentType, ContextType, RequireFields<QueryclaimCollateralActionArgs, 'id' | 'subgraphError'>>;
  claimCollateralActions?: Resolver<Array<ResolversTypes['ClaimCollateralAction']>, ParentType, ContextType, RequireFields<QueryclaimCollateralActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimAction?: Resolver<Maybe<ResolversTypes['ClaimAction']>, ParentType, ContextType, RequireFields<QueryclaimActionArgs, 'id' | 'subgraphError'>>;
  claimActions?: Resolver<Array<ResolversTypes['ClaimAction']>, ParentType, ContextType, RequireFields<QueryclaimActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimRef?: Resolver<Maybe<ResolversTypes['ClaimRef']>, ParentType, ContextType, RequireFields<QueryclaimRefArgs, 'id' | 'subgraphError'>>;
  claimRefs?: Resolver<Array<ResolversTypes['ClaimRef']>, ParentType, ContextType, RequireFields<QueryclaimRefsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolAmountUpdate?: Resolver<Maybe<ResolversTypes['PoolAmountUpdate']>, ParentType, ContextType, RequireFields<QuerypoolAmountUpdateArgs, 'id' | 'subgraphError'>>;
  poolAmountUpdates?: Resolver<Array<ResolversTypes['PoolAmountUpdate']>, ParentType, ContextType, RequireFields<QuerypoolAmountUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimableFundingFeeInfo?: Resolver<Maybe<ResolversTypes['ClaimableFundingFeeInfo']>, ParentType, ContextType, RequireFields<QueryclaimableFundingFeeInfoArgs, 'id' | 'subgraphError'>>;
  claimableFundingFeeInfos?: Resolver<Array<ResolversTypes['ClaimableFundingFeeInfo']>, ParentType, ContextType, RequireFields<QueryclaimableFundingFeeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketInfo?: Resolver<Maybe<ResolversTypes['MarketInfo']>, ParentType, ContextType, RequireFields<QuerymarketInfoArgs, 'id' | 'subgraphError'>>;
  marketInfos?: Resolver<Array<ResolversTypes['MarketInfo']>, ParentType, ContextType, RequireFields<QuerymarketInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  depositRef?: Resolver<Maybe<ResolversTypes['DepositRef']>, ParentType, ContextType, RequireFields<QuerydepositRefArgs, 'id' | 'subgraphError'>>;
  depositRefs?: Resolver<Array<ResolversTypes['DepositRef']>, ParentType, ContextType, RequireFields<QuerydepositRefsArgs, 'skip' | 'first' | 'subgraphError'>>;
  volumeInfo?: Resolver<Maybe<ResolversTypes['VolumeInfo']>, ParentType, ContextType, RequireFields<QueryvolumeInfoArgs, 'id' | 'subgraphError'>>;
  volumeInfos?: Resolver<Array<ResolversTypes['VolumeInfo']>, ParentType, ContextType, RequireFields<QueryvolumeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapVolumeInfo?: Resolver<Maybe<ResolversTypes['SwapVolumeInfo']>, ParentType, ContextType, RequireFields<QueryswapVolumeInfoArgs, 'id' | 'subgraphError'>>;
  swapVolumeInfos?: Resolver<Array<ResolversTypes['SwapVolumeInfo']>, ParentType, ContextType, RequireFields<QueryswapVolumeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionVolumeInfo?: Resolver<Maybe<ResolversTypes['PositionVolumeInfo']>, ParentType, ContextType, RequireFields<QuerypositionVolumeInfoArgs, 'id' | 'subgraphError'>>;
  positionVolumeInfos?: Resolver<Array<ResolversTypes['PositionVolumeInfo']>, ParentType, ContextType, RequireFields<QuerypositionVolumeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  userStat?: Resolver<Maybe<ResolversTypes['UserStat']>, ParentType, ContextType, RequireFields<QueryuserStatArgs, 'id' | 'subgraphError'>>;
  userStats?: Resolver<Array<ResolversTypes['UserStat']>, ParentType, ContextType, RequireFields<QueryuserStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapFeesInfoWithPeriod?: Resolver<Maybe<ResolversTypes['SwapFeesInfoWithPeriod']>, ParentType, ContextType, RequireFields<QueryswapFeesInfoWithPeriodArgs, 'id' | 'subgraphError'>>;
  swapFeesInfoWithPeriods?: Resolver<Array<ResolversTypes['SwapFeesInfoWithPeriod']>, ParentType, ContextType, RequireFields<QueryswapFeesInfoWithPeriodsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionFeesInfoWithPeriod?: Resolver<Maybe<ResolversTypes['PositionFeesInfoWithPeriod']>, ParentType, ContextType, RequireFields<QuerypositionFeesInfoWithPeriodArgs, 'id' | 'subgraphError'>>;
  positionFeesInfoWithPeriods?: Resolver<Array<ResolversTypes['PositionFeesInfoWithPeriod']>, ParentType, ContextType, RequireFields<QuerypositionFeesInfoWithPeriodsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityProviderIncentivesStat?: Resolver<Maybe<ResolversTypes['LiquidityProviderIncentivesStat']>, ParentType, ContextType, RequireFields<QueryliquidityProviderIncentivesStatArgs, 'id' | 'subgraphError'>>;
  liquidityProviderIncentivesStats?: Resolver<Array<ResolversTypes['LiquidityProviderIncentivesStat']>, ParentType, ContextType, RequireFields<QueryliquidityProviderIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketIncentivesStat?: Resolver<Maybe<ResolversTypes['MarketIncentivesStat']>, ParentType, ContextType, RequireFields<QuerymarketIncentivesStatArgs, 'id' | 'subgraphError'>>;
  marketIncentivesStats?: Resolver<Array<ResolversTypes['MarketIncentivesStat']>, ParentType, ContextType, RequireFields<QuerymarketIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userMarketInfo?: Resolver<Maybe<ResolversTypes['UserMarketInfo']>, ParentType, ContextType, RequireFields<QueryuserMarketInfoArgs, 'id' | 'subgraphError'>>;
  userMarketInfos?: Resolver<Array<ResolversTypes['UserMarketInfo']>, ParentType, ContextType, RequireFields<QueryuserMarketInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  sellUSDG?: Resolver<Maybe<ResolversTypes['SellUSDG']>, ParentType, ContextType, RequireFields<QuerysellUSDGArgs, 'id' | 'subgraphError'>>;
  sellUSDGs?: Resolver<Array<ResolversTypes['SellUSDG']>, ParentType, ContextType, RequireFields<QuerysellUSDGsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userGlpGmMigrationStat?: Resolver<Maybe<ResolversTypes['UserGlpGmMigrationStat']>, ParentType, ContextType, RequireFields<QueryuserGlpGmMigrationStatArgs, 'id' | 'subgraphError'>>;
  userGlpGmMigrationStats?: Resolver<Array<ResolversTypes['UserGlpGmMigrationStat']>, ParentType, ContextType, RequireFields<QueryuserGlpGmMigrationStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  glpGmMigrationStat?: Resolver<Maybe<ResolversTypes['GlpGmMigrationStat']>, ParentType, ContextType, RequireFields<QueryglpGmMigrationStatArgs, 'id' | 'subgraphError'>>;
  glpGmMigrationStats?: Resolver<Array<ResolversTypes['GlpGmMigrationStat']>, ParentType, ContextType, RequireFields<QueryglpGmMigrationStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userTradingIncentivesStat?: Resolver<Maybe<ResolversTypes['UserTradingIncentivesStat']>, ParentType, ContextType, RequireFields<QueryuserTradingIncentivesStatArgs, 'id' | 'subgraphError'>>;
  userTradingIncentivesStats?: Resolver<Array<ResolversTypes['UserTradingIncentivesStat']>, ParentType, ContextType, RequireFields<QueryuserTradingIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tradingIncentivesStat?: Resolver<Maybe<ResolversTypes['TradingIncentivesStat']>, ParentType, ContextType, RequireFields<QuerytradingIncentivesStatArgs, 'id' | 'subgraphError'>>;
  tradingIncentivesStats?: Resolver<Array<ResolversTypes['TradingIncentivesStat']>, ParentType, ContextType, RequireFields<QuerytradingIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  distribution?: Resolver<Maybe<ResolversTypes['Distribution']>, ParentType, ContextType, RequireFields<QuerydistributionArgs, 'id' | 'subgraphError'>>;
  distributions?: Resolver<Array<ResolversTypes['Distribution']>, ParentType, ContextType, RequireFields<QuerydistributionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SellUSDGResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SellUSDG'] = ResolversParentTypes['SellUSDG']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeBasisPoints?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  candle?: SubscriptionResolver<Maybe<ResolversTypes['Candle']>, "candle", ParentType, ContextType, RequireFields<SubscriptioncandleArgs, 'id' | 'subgraphError'>>;
  candles?: SubscriptionResolver<Array<ResolversTypes['Candle']>, "candles", ParentType, ContextType, RequireFields<SubscriptioncandlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  affiliateRewardUpdate?: SubscriptionResolver<Maybe<ResolversTypes['AffiliateRewardUpdate']>, "affiliateRewardUpdate", ParentType, ContextType, RequireFields<SubscriptionaffiliateRewardUpdateArgs, 'id' | 'subgraphError'>>;
  affiliateRewardUpdates?: SubscriptionResolver<Array<ResolversTypes['AffiliateRewardUpdate']>, "affiliateRewardUpdates", ParentType, ContextType, RequireFields<SubscriptionaffiliateRewardUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  order?: SubscriptionResolver<Maybe<ResolversTypes['Order']>, "order", ParentType, ContextType, RequireFields<SubscriptionorderArgs, 'id' | 'subgraphError'>>;
  orders?: SubscriptionResolver<Array<ResolversTypes['Order']>, "orders", ParentType, ContextType, RequireFields<SubscriptionordersArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionIncrease?: SubscriptionResolver<Maybe<ResolversTypes['PositionIncrease']>, "positionIncrease", ParentType, ContextType, RequireFields<SubscriptionpositionIncreaseArgs, 'id' | 'subgraphError'>>;
  positionIncreases?: SubscriptionResolver<Array<ResolversTypes['PositionIncrease']>, "positionIncreases", ParentType, ContextType, RequireFields<SubscriptionpositionIncreasesArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionDecrease?: SubscriptionResolver<Maybe<ResolversTypes['PositionDecrease']>, "positionDecrease", ParentType, ContextType, RequireFields<SubscriptionpositionDecreaseArgs, 'id' | 'subgraphError'>>;
  positionDecreases?: SubscriptionResolver<Array<ResolversTypes['PositionDecrease']>, "positionDecreases", ParentType, ContextType, RequireFields<SubscriptionpositionDecreasesArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionFeesInfo?: SubscriptionResolver<Maybe<ResolversTypes['PositionFeesInfo']>, "positionFeesInfo", ParentType, ContextType, RequireFields<SubscriptionpositionFeesInfoArgs, 'id' | 'subgraphError'>>;
  positionFeesInfos?: SubscriptionResolver<Array<ResolversTypes['PositionFeesInfo']>, "positionFeesInfos", ParentType, ContextType, RequireFields<SubscriptionpositionFeesInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimableCollateral?: SubscriptionResolver<Maybe<ResolversTypes['ClaimableCollateral']>, "claimableCollateral", ParentType, ContextType, RequireFields<SubscriptionclaimableCollateralArgs, 'id' | 'subgraphError'>>;
  claimableCollaterals?: SubscriptionResolver<Array<ResolversTypes['ClaimableCollateral']>, "claimableCollaterals", ParentType, ContextType, RequireFields<SubscriptionclaimableCollateralsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimableCollateralGroup?: SubscriptionResolver<Maybe<ResolversTypes['ClaimableCollateralGroup']>, "claimableCollateralGroup", ParentType, ContextType, RequireFields<SubscriptionclaimableCollateralGroupArgs, 'id' | 'subgraphError'>>;
  claimableCollateralGroups?: SubscriptionResolver<Array<ResolversTypes['ClaimableCollateralGroup']>, "claimableCollateralGroups", ParentType, ContextType, RequireFields<SubscriptionclaimableCollateralGroupsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapInfo?: SubscriptionResolver<Maybe<ResolversTypes['SwapInfo']>, "swapInfo", ParentType, ContextType, RequireFields<SubscriptionswapInfoArgs, 'id' | 'subgraphError'>>;
  swapInfos?: SubscriptionResolver<Array<ResolversTypes['SwapInfo']>, "swapInfos", ParentType, ContextType, RequireFields<SubscriptionswapInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapFeesInfo?: SubscriptionResolver<Maybe<ResolversTypes['SwapFeesInfo']>, "swapFeesInfo", ParentType, ContextType, RequireFields<SubscriptionswapFeesInfoArgs, 'id' | 'subgraphError'>>;
  swapFeesInfos?: SubscriptionResolver<Array<ResolversTypes['SwapFeesInfo']>, "swapFeesInfos", ParentType, ContextType, RequireFields<SubscriptionswapFeesInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  collectedMarketFeesInfo?: SubscriptionResolver<Maybe<ResolversTypes['CollectedMarketFeesInfo']>, "collectedMarketFeesInfo", ParentType, ContextType, RequireFields<SubscriptioncollectedMarketFeesInfoArgs, 'id' | 'subgraphError'>>;
  collectedMarketFeesInfos?: SubscriptionResolver<Array<ResolversTypes['CollectedMarketFeesInfo']>, "collectedMarketFeesInfos", ParentType, ContextType, RequireFields<SubscriptioncollectedMarketFeesInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  userGmTokensBalanceChange?: SubscriptionResolver<Maybe<ResolversTypes['UserGmTokensBalanceChange']>, "userGmTokensBalanceChange", ParentType, ContextType, RequireFields<SubscriptionuserGmTokensBalanceChangeArgs, 'id' | 'subgraphError'>>;
  userGmTokensBalanceChanges?: SubscriptionResolver<Array<ResolversTypes['UserGmTokensBalanceChange']>, "userGmTokensBalanceChanges", ParentType, ContextType, RequireFields<SubscriptionuserGmTokensBalanceChangesArgs, 'skip' | 'first' | 'subgraphError'>>;
  latestUserGmTokensBalanceChangeRef?: SubscriptionResolver<Maybe<ResolversTypes['LatestUserGmTokensBalanceChangeRef']>, "latestUserGmTokensBalanceChangeRef", ParentType, ContextType, RequireFields<SubscriptionlatestUserGmTokensBalanceChangeRefArgs, 'id' | 'subgraphError'>>;
  latestUserGmTokensBalanceChangeRefs?: SubscriptionResolver<Array<ResolversTypes['LatestUserGmTokensBalanceChangeRef']>, "latestUserGmTokensBalanceChangeRefs", ParentType, ContextType, RequireFields<SubscriptionlatestUserGmTokensBalanceChangeRefsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tradeAction?: SubscriptionResolver<Maybe<ResolversTypes['TradeAction']>, "tradeAction", ParentType, ContextType, RequireFields<SubscriptiontradeActionArgs, 'id' | 'subgraphError'>>;
  tradeActions?: SubscriptionResolver<Array<ResolversTypes['TradeAction']>, "tradeActions", ParentType, ContextType, RequireFields<SubscriptiontradeActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenPrice?: SubscriptionResolver<Maybe<ResolversTypes['TokenPrice']>, "tokenPrice", ParentType, ContextType, RequireFields<SubscriptiontokenPriceArgs, 'id' | 'subgraphError'>>;
  tokenPrices?: SubscriptionResolver<Array<ResolversTypes['TokenPrice']>, "tokenPrices", ParentType, ContextType, RequireFields<SubscriptiontokenPricesArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimCollateralAction?: SubscriptionResolver<Maybe<ResolversTypes['ClaimCollateralAction']>, "claimCollateralAction", ParentType, ContextType, RequireFields<SubscriptionclaimCollateralActionArgs, 'id' | 'subgraphError'>>;
  claimCollateralActions?: SubscriptionResolver<Array<ResolversTypes['ClaimCollateralAction']>, "claimCollateralActions", ParentType, ContextType, RequireFields<SubscriptionclaimCollateralActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimAction?: SubscriptionResolver<Maybe<ResolversTypes['ClaimAction']>, "claimAction", ParentType, ContextType, RequireFields<SubscriptionclaimActionArgs, 'id' | 'subgraphError'>>;
  claimActions?: SubscriptionResolver<Array<ResolversTypes['ClaimAction']>, "claimActions", ParentType, ContextType, RequireFields<SubscriptionclaimActionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimRef?: SubscriptionResolver<Maybe<ResolversTypes['ClaimRef']>, "claimRef", ParentType, ContextType, RequireFields<SubscriptionclaimRefArgs, 'id' | 'subgraphError'>>;
  claimRefs?: SubscriptionResolver<Array<ResolversTypes['ClaimRef']>, "claimRefs", ParentType, ContextType, RequireFields<SubscriptionclaimRefsArgs, 'skip' | 'first' | 'subgraphError'>>;
  poolAmountUpdate?: SubscriptionResolver<Maybe<ResolversTypes['PoolAmountUpdate']>, "poolAmountUpdate", ParentType, ContextType, RequireFields<SubscriptionpoolAmountUpdateArgs, 'id' | 'subgraphError'>>;
  poolAmountUpdates?: SubscriptionResolver<Array<ResolversTypes['PoolAmountUpdate']>, "poolAmountUpdates", ParentType, ContextType, RequireFields<SubscriptionpoolAmountUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  claimableFundingFeeInfo?: SubscriptionResolver<Maybe<ResolversTypes['ClaimableFundingFeeInfo']>, "claimableFundingFeeInfo", ParentType, ContextType, RequireFields<SubscriptionclaimableFundingFeeInfoArgs, 'id' | 'subgraphError'>>;
  claimableFundingFeeInfos?: SubscriptionResolver<Array<ResolversTypes['ClaimableFundingFeeInfo']>, "claimableFundingFeeInfos", ParentType, ContextType, RequireFields<SubscriptionclaimableFundingFeeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketInfo?: SubscriptionResolver<Maybe<ResolversTypes['MarketInfo']>, "marketInfo", ParentType, ContextType, RequireFields<SubscriptionmarketInfoArgs, 'id' | 'subgraphError'>>;
  marketInfos?: SubscriptionResolver<Array<ResolversTypes['MarketInfo']>, "marketInfos", ParentType, ContextType, RequireFields<SubscriptionmarketInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  depositRef?: SubscriptionResolver<Maybe<ResolversTypes['DepositRef']>, "depositRef", ParentType, ContextType, RequireFields<SubscriptiondepositRefArgs, 'id' | 'subgraphError'>>;
  depositRefs?: SubscriptionResolver<Array<ResolversTypes['DepositRef']>, "depositRefs", ParentType, ContextType, RequireFields<SubscriptiondepositRefsArgs, 'skip' | 'first' | 'subgraphError'>>;
  volumeInfo?: SubscriptionResolver<Maybe<ResolversTypes['VolumeInfo']>, "volumeInfo", ParentType, ContextType, RequireFields<SubscriptionvolumeInfoArgs, 'id' | 'subgraphError'>>;
  volumeInfos?: SubscriptionResolver<Array<ResolversTypes['VolumeInfo']>, "volumeInfos", ParentType, ContextType, RequireFields<SubscriptionvolumeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapVolumeInfo?: SubscriptionResolver<Maybe<ResolversTypes['SwapVolumeInfo']>, "swapVolumeInfo", ParentType, ContextType, RequireFields<SubscriptionswapVolumeInfoArgs, 'id' | 'subgraphError'>>;
  swapVolumeInfos?: SubscriptionResolver<Array<ResolversTypes['SwapVolumeInfo']>, "swapVolumeInfos", ParentType, ContextType, RequireFields<SubscriptionswapVolumeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionVolumeInfo?: SubscriptionResolver<Maybe<ResolversTypes['PositionVolumeInfo']>, "positionVolumeInfo", ParentType, ContextType, RequireFields<SubscriptionpositionVolumeInfoArgs, 'id' | 'subgraphError'>>;
  positionVolumeInfos?: SubscriptionResolver<Array<ResolversTypes['PositionVolumeInfo']>, "positionVolumeInfos", ParentType, ContextType, RequireFields<SubscriptionpositionVolumeInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  userStat?: SubscriptionResolver<Maybe<ResolversTypes['UserStat']>, "userStat", ParentType, ContextType, RequireFields<SubscriptionuserStatArgs, 'id' | 'subgraphError'>>;
  userStats?: SubscriptionResolver<Array<ResolversTypes['UserStat']>, "userStats", ParentType, ContextType, RequireFields<SubscriptionuserStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swapFeesInfoWithPeriod?: SubscriptionResolver<Maybe<ResolversTypes['SwapFeesInfoWithPeriod']>, "swapFeesInfoWithPeriod", ParentType, ContextType, RequireFields<SubscriptionswapFeesInfoWithPeriodArgs, 'id' | 'subgraphError'>>;
  swapFeesInfoWithPeriods?: SubscriptionResolver<Array<ResolversTypes['SwapFeesInfoWithPeriod']>, "swapFeesInfoWithPeriods", ParentType, ContextType, RequireFields<SubscriptionswapFeesInfoWithPeriodsArgs, 'skip' | 'first' | 'subgraphError'>>;
  positionFeesInfoWithPeriod?: SubscriptionResolver<Maybe<ResolversTypes['PositionFeesInfoWithPeriod']>, "positionFeesInfoWithPeriod", ParentType, ContextType, RequireFields<SubscriptionpositionFeesInfoWithPeriodArgs, 'id' | 'subgraphError'>>;
  positionFeesInfoWithPeriods?: SubscriptionResolver<Array<ResolversTypes['PositionFeesInfoWithPeriod']>, "positionFeesInfoWithPeriods", ParentType, ContextType, RequireFields<SubscriptionpositionFeesInfoWithPeriodsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityProviderIncentivesStat?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityProviderIncentivesStat']>, "liquidityProviderIncentivesStat", ParentType, ContextType, RequireFields<SubscriptionliquidityProviderIncentivesStatArgs, 'id' | 'subgraphError'>>;
  liquidityProviderIncentivesStats?: SubscriptionResolver<Array<ResolversTypes['LiquidityProviderIncentivesStat']>, "liquidityProviderIncentivesStats", ParentType, ContextType, RequireFields<SubscriptionliquidityProviderIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  marketIncentivesStat?: SubscriptionResolver<Maybe<ResolversTypes['MarketIncentivesStat']>, "marketIncentivesStat", ParentType, ContextType, RequireFields<SubscriptionmarketIncentivesStatArgs, 'id' | 'subgraphError'>>;
  marketIncentivesStats?: SubscriptionResolver<Array<ResolversTypes['MarketIncentivesStat']>, "marketIncentivesStats", ParentType, ContextType, RequireFields<SubscriptionmarketIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userMarketInfo?: SubscriptionResolver<Maybe<ResolversTypes['UserMarketInfo']>, "userMarketInfo", ParentType, ContextType, RequireFields<SubscriptionuserMarketInfoArgs, 'id' | 'subgraphError'>>;
  userMarketInfos?: SubscriptionResolver<Array<ResolversTypes['UserMarketInfo']>, "userMarketInfos", ParentType, ContextType, RequireFields<SubscriptionuserMarketInfosArgs, 'skip' | 'first' | 'subgraphError'>>;
  sellUSDG?: SubscriptionResolver<Maybe<ResolversTypes['SellUSDG']>, "sellUSDG", ParentType, ContextType, RequireFields<SubscriptionsellUSDGArgs, 'id' | 'subgraphError'>>;
  sellUSDGs?: SubscriptionResolver<Array<ResolversTypes['SellUSDG']>, "sellUSDGs", ParentType, ContextType, RequireFields<SubscriptionsellUSDGsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userGlpGmMigrationStat?: SubscriptionResolver<Maybe<ResolversTypes['UserGlpGmMigrationStat']>, "userGlpGmMigrationStat", ParentType, ContextType, RequireFields<SubscriptionuserGlpGmMigrationStatArgs, 'id' | 'subgraphError'>>;
  userGlpGmMigrationStats?: SubscriptionResolver<Array<ResolversTypes['UserGlpGmMigrationStat']>, "userGlpGmMigrationStats", ParentType, ContextType, RequireFields<SubscriptionuserGlpGmMigrationStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  glpGmMigrationStat?: SubscriptionResolver<Maybe<ResolversTypes['GlpGmMigrationStat']>, "glpGmMigrationStat", ParentType, ContextType, RequireFields<SubscriptionglpGmMigrationStatArgs, 'id' | 'subgraphError'>>;
  glpGmMigrationStats?: SubscriptionResolver<Array<ResolversTypes['GlpGmMigrationStat']>, "glpGmMigrationStats", ParentType, ContextType, RequireFields<SubscriptionglpGmMigrationStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  userTradingIncentivesStat?: SubscriptionResolver<Maybe<ResolversTypes['UserTradingIncentivesStat']>, "userTradingIncentivesStat", ParentType, ContextType, RequireFields<SubscriptionuserTradingIncentivesStatArgs, 'id' | 'subgraphError'>>;
  userTradingIncentivesStats?: SubscriptionResolver<Array<ResolversTypes['UserTradingIncentivesStat']>, "userTradingIncentivesStats", ParentType, ContextType, RequireFields<SubscriptionuserTradingIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tradingIncentivesStat?: SubscriptionResolver<Maybe<ResolversTypes['TradingIncentivesStat']>, "tradingIncentivesStat", ParentType, ContextType, RequireFields<SubscriptiontradingIncentivesStatArgs, 'id' | 'subgraphError'>>;
  tradingIncentivesStats?: SubscriptionResolver<Array<ResolversTypes['TradingIncentivesStat']>, "tradingIncentivesStats", ParentType, ContextType, RequireFields<SubscriptiontradingIncentivesStatsArgs, 'skip' | 'first' | 'subgraphError'>>;
  distribution?: SubscriptionResolver<Maybe<ResolversTypes['Distribution']>, "distribution", ParentType, ContextType, RequireFields<SubscriptiondistributionArgs, 'id' | 'subgraphError'>>;
  distributions?: SubscriptionResolver<Array<ResolversTypes['Distribution']>, "distributions", ParentType, ContextType, RequireFields<SubscriptiondistributionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type SwapFeesInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapFeesInfo'] = ResolversParentTypes['SwapFeesInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  swapFeeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeReceiverAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeUsdForPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapFeesInfoWithPeriodResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapFeesInfoWithPeriod'] = ResolversParentTypes['SwapFeesInfoWithPeriod']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalFeeReceiverUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFeeUsdForPool?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapInfo'] = ResolversParentTypes['SwapInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenInAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenOutAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenInPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenOutPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountIn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountInAfterFees?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  priceImpactUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapVolumeInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SwapVolumeInfo'] = ResolversParentTypes['SwapVolumeInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenIn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenOut?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPriceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenPrice'] = ResolversParentTypes['TokenPrice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maxPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updateAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TradeActionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradeAction'] = ResolversParentTypes['TradeAction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swapPath?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  initialCollateralTokenAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  initialCollateralDeltaAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sizeDeltaUsd?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  triggerPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  acceptablePrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executionPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  collateralTokenPriceMin?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  collateralTokenPriceMax?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  indexTokenPriceMin?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  indexTokenPriceMax?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  priceImpactDiffUsd?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  priceImpactUsd?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  priceImpactAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  positionFeeAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  borrowingFeeAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  fundingFeeAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  pnlUsd?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  basePnlUsd?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isLong?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  minOutputAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executionAmountOut?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  shouldUnwrapNativeToken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reasonBytes?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TradingIncentivesStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradingIncentivesStat'] = ResolversParentTypes['TradingIncentivesStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positionFeesUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  positionFeesInArb?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleFeesInArb?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleFeesUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rebatesCapInArb?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransactionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalSwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWithdrawalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGlpGmMigrationStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserGlpGmMigrationStat'] = ResolversParentTypes['UserGlpGmMigrationStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  glpRedemptionUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  glpRedemptionFeeBpsByUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  glpRedemptionWeightedAverageFeeBps?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gmDepositUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleRedemptionInArb?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleRedemptionUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleUpdatedTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGmTokensBalanceChangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserGmTokensBalanceChange'] = ResolversParentTypes['UserGmTokensBalanceChange']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokensBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeIncome?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cumulativeFeeUsdPerGmToken?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMarketInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserMarketInfo'] = ResolversParentTypes['UserMarketInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  marketTokensBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  marketAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserStat'] = ResolversParentTypes['UserStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalSwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWithdrawalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserTradingIncentivesStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserTradingIncentivesStat'] = ResolversParentTypes['UserTradingIncentivesStat']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positionFeesUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  positionFeesInArb?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleFeesInArb?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleFeesUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  eligibleUpdatedTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VolumeInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VolumeInfo'] = ResolversParentTypes['VolumeInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  period?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  marginVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  swapVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawalVolumeUsd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  AffiliateRewardUpdate?: AffiliateRewardUpdateResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Candle?: CandleResolvers<ContextType>;
  ClaimAction?: ClaimActionResolvers<ContextType>;
  ClaimCollateralAction?: ClaimCollateralActionResolvers<ContextType>;
  ClaimRef?: ClaimRefResolvers<ContextType>;
  ClaimableCollateral?: ClaimableCollateralResolvers<ContextType>;
  ClaimableCollateralGroup?: ClaimableCollateralGroupResolvers<ContextType>;
  ClaimableFundingFeeInfo?: ClaimableFundingFeeInfoResolvers<ContextType>;
  CollectedMarketFeesInfo?: CollectedMarketFeesInfoResolvers<ContextType>;
  DepositRef?: DepositRefResolvers<ContextType>;
  Distribution?: DistributionResolvers<ContextType>;
  GlpGmMigrationStat?: GlpGmMigrationStatResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  LatestUserGmTokensBalanceChangeRef?: LatestUserGmTokensBalanceChangeRefResolvers<ContextType>;
  LiquidityProviderIncentivesStat?: LiquidityProviderIncentivesStatResolvers<ContextType>;
  MarketIncentivesStat?: MarketIncentivesStatResolvers<ContextType>;
  MarketInfo?: MarketInfoResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  PoolAmountUpdate?: PoolAmountUpdateResolvers<ContextType>;
  PositionDecrease?: PositionDecreaseResolvers<ContextType>;
  PositionFeesInfo?: PositionFeesInfoResolvers<ContextType>;
  PositionFeesInfoWithPeriod?: PositionFeesInfoWithPeriodResolvers<ContextType>;
  PositionIncrease?: PositionIncreaseResolvers<ContextType>;
  PositionVolumeInfo?: PositionVolumeInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SellUSDG?: SellUSDGResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SwapFeesInfo?: SwapFeesInfoResolvers<ContextType>;
  SwapFeesInfoWithPeriod?: SwapFeesInfoWithPeriodResolvers<ContextType>;
  SwapInfo?: SwapInfoResolvers<ContextType>;
  SwapVolumeInfo?: SwapVolumeInfoResolvers<ContextType>;
  TokenPrice?: TokenPriceResolvers<ContextType>;
  TradeAction?: TradeActionResolvers<ContextType>;
  TradingIncentivesStat?: TradingIncentivesStatResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserGlpGmMigrationStat?: UserGlpGmMigrationStatResolvers<ContextType>;
  UserGmTokensBalanceChange?: UserGmTokensBalanceChangeResolvers<ContextType>;
  UserMarketInfo?: UserMarketInfoResolvers<ContextType>;
  UserStat?: UserStatResolvers<ContextType>;
  UserTradingIncentivesStat?: UserTradingIncentivesStatResolvers<ContextType>;
  VolumeInfo?: VolumeInfoResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = TperpSubgraphTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/tperp-subgraph/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const tperpSubgraphTransforms = [];
const additionalTypeDefs = [] as any[];
const tperpSubgraphHandler = new GraphqlHandler({
              name: "tperp-subgraph",
              config: {"endpoint":"http://127.0.0.1:8000/subgraphs/name/example/"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("tperp-subgraph"),
              logger: logger.child("tperp-subgraph"),
              importFn,
            });
sources[0] = {
          name: 'tperp-subgraph',
          handler: tperpSubgraphHandler,
          transforms: tperpSubgraphTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));