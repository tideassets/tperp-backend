// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TperpSubgraphTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

  export type QuerySdk = {
      /** null **/
  candle: InContextSdkMethod<Query['candle'], QuerycandleArgs, MeshContext>,
  /** null **/
  candles: InContextSdkMethod<Query['candles'], QuerycandlesArgs, MeshContext>,
  /** null **/
  affiliateRewardUpdate: InContextSdkMethod<Query['affiliateRewardUpdate'], QueryaffiliateRewardUpdateArgs, MeshContext>,
  /** null **/
  affiliateRewardUpdates: InContextSdkMethod<Query['affiliateRewardUpdates'], QueryaffiliateRewardUpdatesArgs, MeshContext>,
  /** null **/
  order: InContextSdkMethod<Query['order'], QueryorderArgs, MeshContext>,
  /** null **/
  orders: InContextSdkMethod<Query['orders'], QueryordersArgs, MeshContext>,
  /** null **/
  positionIncrease: InContextSdkMethod<Query['positionIncrease'], QuerypositionIncreaseArgs, MeshContext>,
  /** null **/
  positionIncreases: InContextSdkMethod<Query['positionIncreases'], QuerypositionIncreasesArgs, MeshContext>,
  /** null **/
  positionDecrease: InContextSdkMethod<Query['positionDecrease'], QuerypositionDecreaseArgs, MeshContext>,
  /** null **/
  positionDecreases: InContextSdkMethod<Query['positionDecreases'], QuerypositionDecreasesArgs, MeshContext>,
  /** null **/
  positionFeesInfo: InContextSdkMethod<Query['positionFeesInfo'], QuerypositionFeesInfoArgs, MeshContext>,
  /** null **/
  positionFeesInfos: InContextSdkMethod<Query['positionFeesInfos'], QuerypositionFeesInfosArgs, MeshContext>,
  /** null **/
  claimableCollateral: InContextSdkMethod<Query['claimableCollateral'], QueryclaimableCollateralArgs, MeshContext>,
  /** null **/
  claimableCollaterals: InContextSdkMethod<Query['claimableCollaterals'], QueryclaimableCollateralsArgs, MeshContext>,
  /** null **/
  claimableCollateralGroup: InContextSdkMethod<Query['claimableCollateralGroup'], QueryclaimableCollateralGroupArgs, MeshContext>,
  /** null **/
  claimableCollateralGroups: InContextSdkMethod<Query['claimableCollateralGroups'], QueryclaimableCollateralGroupsArgs, MeshContext>,
  /** null **/
  swapInfo: InContextSdkMethod<Query['swapInfo'], QueryswapInfoArgs, MeshContext>,
  /** null **/
  swapInfos: InContextSdkMethod<Query['swapInfos'], QueryswapInfosArgs, MeshContext>,
  /** null **/
  swapFeesInfo: InContextSdkMethod<Query['swapFeesInfo'], QueryswapFeesInfoArgs, MeshContext>,
  /** null **/
  swapFeesInfos: InContextSdkMethod<Query['swapFeesInfos'], QueryswapFeesInfosArgs, MeshContext>,
  /** null **/
  collectedMarketFeesInfo: InContextSdkMethod<Query['collectedMarketFeesInfo'], QuerycollectedMarketFeesInfoArgs, MeshContext>,
  /** null **/
  collectedMarketFeesInfos: InContextSdkMethod<Query['collectedMarketFeesInfos'], QuerycollectedMarketFeesInfosArgs, MeshContext>,
  /** null **/
  userGmTokensBalanceChange: InContextSdkMethod<Query['userGmTokensBalanceChange'], QueryuserGmTokensBalanceChangeArgs, MeshContext>,
  /** null **/
  userGmTokensBalanceChanges: InContextSdkMethod<Query['userGmTokensBalanceChanges'], QueryuserGmTokensBalanceChangesArgs, MeshContext>,
  /** null **/
  latestUserGmTokensBalanceChangeRef: InContextSdkMethod<Query['latestUserGmTokensBalanceChangeRef'], QuerylatestUserGmTokensBalanceChangeRefArgs, MeshContext>,
  /** null **/
  latestUserGmTokensBalanceChangeRefs: InContextSdkMethod<Query['latestUserGmTokensBalanceChangeRefs'], QuerylatestUserGmTokensBalanceChangeRefsArgs, MeshContext>,
  /** null **/
  tradeAction: InContextSdkMethod<Query['tradeAction'], QuerytradeActionArgs, MeshContext>,
  /** null **/
  tradeActions: InContextSdkMethod<Query['tradeActions'], QuerytradeActionsArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<Query['tokenPrice'], QuerytokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<Query['tokenPrices'], QuerytokenPricesArgs, MeshContext>,
  /** null **/
  claimCollateralAction: InContextSdkMethod<Query['claimCollateralAction'], QueryclaimCollateralActionArgs, MeshContext>,
  /** null **/
  claimCollateralActions: InContextSdkMethod<Query['claimCollateralActions'], QueryclaimCollateralActionsArgs, MeshContext>,
  /** null **/
  claimAction: InContextSdkMethod<Query['claimAction'], QueryclaimActionArgs, MeshContext>,
  /** null **/
  claimActions: InContextSdkMethod<Query['claimActions'], QueryclaimActionsArgs, MeshContext>,
  /** null **/
  claimRef: InContextSdkMethod<Query['claimRef'], QueryclaimRefArgs, MeshContext>,
  /** null **/
  claimRefs: InContextSdkMethod<Query['claimRefs'], QueryclaimRefsArgs, MeshContext>,
  /** null **/
  poolAmountUpdate: InContextSdkMethod<Query['poolAmountUpdate'], QuerypoolAmountUpdateArgs, MeshContext>,
  /** null **/
  poolAmountUpdates: InContextSdkMethod<Query['poolAmountUpdates'], QuerypoolAmountUpdatesArgs, MeshContext>,
  /** null **/
  claimableFundingFeeInfo: InContextSdkMethod<Query['claimableFundingFeeInfo'], QueryclaimableFundingFeeInfoArgs, MeshContext>,
  /** null **/
  claimableFundingFeeInfos: InContextSdkMethod<Query['claimableFundingFeeInfos'], QueryclaimableFundingFeeInfosArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Query['transaction'], QuerytransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Query['transactions'], QuerytransactionsArgs, MeshContext>,
  /** null **/
  marketInfo: InContextSdkMethod<Query['marketInfo'], QuerymarketInfoArgs, MeshContext>,
  /** null **/
  marketInfos: InContextSdkMethod<Query['marketInfos'], QuerymarketInfosArgs, MeshContext>,
  /** null **/
  depositRef: InContextSdkMethod<Query['depositRef'], QuerydepositRefArgs, MeshContext>,
  /** null **/
  depositRefs: InContextSdkMethod<Query['depositRefs'], QuerydepositRefsArgs, MeshContext>,
  /** null **/
  volumeInfo: InContextSdkMethod<Query['volumeInfo'], QueryvolumeInfoArgs, MeshContext>,
  /** null **/
  volumeInfos: InContextSdkMethod<Query['volumeInfos'], QueryvolumeInfosArgs, MeshContext>,
  /** null **/
  swapVolumeInfo: InContextSdkMethod<Query['swapVolumeInfo'], QueryswapVolumeInfoArgs, MeshContext>,
  /** null **/
  swapVolumeInfos: InContextSdkMethod<Query['swapVolumeInfos'], QueryswapVolumeInfosArgs, MeshContext>,
  /** null **/
  positionVolumeInfo: InContextSdkMethod<Query['positionVolumeInfo'], QuerypositionVolumeInfoArgs, MeshContext>,
  /** null **/
  positionVolumeInfos: InContextSdkMethod<Query['positionVolumeInfos'], QuerypositionVolumeInfosArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  userStat: InContextSdkMethod<Query['userStat'], QueryuserStatArgs, MeshContext>,
  /** null **/
  userStats: InContextSdkMethod<Query['userStats'], QueryuserStatsArgs, MeshContext>,
  /** null **/
  swapFeesInfoWithPeriod: InContextSdkMethod<Query['swapFeesInfoWithPeriod'], QueryswapFeesInfoWithPeriodArgs, MeshContext>,
  /** null **/
  swapFeesInfoWithPeriods: InContextSdkMethod<Query['swapFeesInfoWithPeriods'], QueryswapFeesInfoWithPeriodsArgs, MeshContext>,
  /** null **/
  positionFeesInfoWithPeriod: InContextSdkMethod<Query['positionFeesInfoWithPeriod'], QuerypositionFeesInfoWithPeriodArgs, MeshContext>,
  /** null **/
  positionFeesInfoWithPeriods: InContextSdkMethod<Query['positionFeesInfoWithPeriods'], QuerypositionFeesInfoWithPeriodsArgs, MeshContext>,
  /** null **/
  liquidityProviderIncentivesStat: InContextSdkMethod<Query['liquidityProviderIncentivesStat'], QueryliquidityProviderIncentivesStatArgs, MeshContext>,
  /** null **/
  liquidityProviderIncentivesStats: InContextSdkMethod<Query['liquidityProviderIncentivesStats'], QueryliquidityProviderIncentivesStatsArgs, MeshContext>,
  /** null **/
  marketIncentivesStat: InContextSdkMethod<Query['marketIncentivesStat'], QuerymarketIncentivesStatArgs, MeshContext>,
  /** null **/
  marketIncentivesStats: InContextSdkMethod<Query['marketIncentivesStats'], QuerymarketIncentivesStatsArgs, MeshContext>,
  /** null **/
  userMarketInfo: InContextSdkMethod<Query['userMarketInfo'], QueryuserMarketInfoArgs, MeshContext>,
  /** null **/
  userMarketInfos: InContextSdkMethod<Query['userMarketInfos'], QueryuserMarketInfosArgs, MeshContext>,
  /** null **/
  sellUSDG: InContextSdkMethod<Query['sellUSDG'], QuerysellUSDGArgs, MeshContext>,
  /** null **/
  sellUSDGs: InContextSdkMethod<Query['sellUSDGs'], QuerysellUSDGsArgs, MeshContext>,
  /** null **/
  userGlpGmMigrationStat: InContextSdkMethod<Query['userGlpGmMigrationStat'], QueryuserGlpGmMigrationStatArgs, MeshContext>,
  /** null **/
  userGlpGmMigrationStats: InContextSdkMethod<Query['userGlpGmMigrationStats'], QueryuserGlpGmMigrationStatsArgs, MeshContext>,
  /** null **/
  glpGmMigrationStat: InContextSdkMethod<Query['glpGmMigrationStat'], QueryglpGmMigrationStatArgs, MeshContext>,
  /** null **/
  glpGmMigrationStats: InContextSdkMethod<Query['glpGmMigrationStats'], QueryglpGmMigrationStatsArgs, MeshContext>,
  /** null **/
  userTradingIncentivesStat: InContextSdkMethod<Query['userTradingIncentivesStat'], QueryuserTradingIncentivesStatArgs, MeshContext>,
  /** null **/
  userTradingIncentivesStats: InContextSdkMethod<Query['userTradingIncentivesStats'], QueryuserTradingIncentivesStatsArgs, MeshContext>,
  /** null **/
  tradingIncentivesStat: InContextSdkMethod<Query['tradingIncentivesStat'], QuerytradingIncentivesStatArgs, MeshContext>,
  /** null **/
  tradingIncentivesStats: InContextSdkMethod<Query['tradingIncentivesStats'], QuerytradingIncentivesStatsArgs, MeshContext>,
  /** null **/
  distribution: InContextSdkMethod<Query['distribution'], QuerydistributionArgs, MeshContext>,
  /** null **/
  distributions: InContextSdkMethod<Query['distributions'], QuerydistributionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  candle: InContextSdkMethod<Subscription['candle'], SubscriptioncandleArgs, MeshContext>,
  /** null **/
  candles: InContextSdkMethod<Subscription['candles'], SubscriptioncandlesArgs, MeshContext>,
  /** null **/
  affiliateRewardUpdate: InContextSdkMethod<Subscription['affiliateRewardUpdate'], SubscriptionaffiliateRewardUpdateArgs, MeshContext>,
  /** null **/
  affiliateRewardUpdates: InContextSdkMethod<Subscription['affiliateRewardUpdates'], SubscriptionaffiliateRewardUpdatesArgs, MeshContext>,
  /** null **/
  order: InContextSdkMethod<Subscription['order'], SubscriptionorderArgs, MeshContext>,
  /** null **/
  orders: InContextSdkMethod<Subscription['orders'], SubscriptionordersArgs, MeshContext>,
  /** null **/
  positionIncrease: InContextSdkMethod<Subscription['positionIncrease'], SubscriptionpositionIncreaseArgs, MeshContext>,
  /** null **/
  positionIncreases: InContextSdkMethod<Subscription['positionIncreases'], SubscriptionpositionIncreasesArgs, MeshContext>,
  /** null **/
  positionDecrease: InContextSdkMethod<Subscription['positionDecrease'], SubscriptionpositionDecreaseArgs, MeshContext>,
  /** null **/
  positionDecreases: InContextSdkMethod<Subscription['positionDecreases'], SubscriptionpositionDecreasesArgs, MeshContext>,
  /** null **/
  positionFeesInfo: InContextSdkMethod<Subscription['positionFeesInfo'], SubscriptionpositionFeesInfoArgs, MeshContext>,
  /** null **/
  positionFeesInfos: InContextSdkMethod<Subscription['positionFeesInfos'], SubscriptionpositionFeesInfosArgs, MeshContext>,
  /** null **/
  claimableCollateral: InContextSdkMethod<Subscription['claimableCollateral'], SubscriptionclaimableCollateralArgs, MeshContext>,
  /** null **/
  claimableCollaterals: InContextSdkMethod<Subscription['claimableCollaterals'], SubscriptionclaimableCollateralsArgs, MeshContext>,
  /** null **/
  claimableCollateralGroup: InContextSdkMethod<Subscription['claimableCollateralGroup'], SubscriptionclaimableCollateralGroupArgs, MeshContext>,
  /** null **/
  claimableCollateralGroups: InContextSdkMethod<Subscription['claimableCollateralGroups'], SubscriptionclaimableCollateralGroupsArgs, MeshContext>,
  /** null **/
  swapInfo: InContextSdkMethod<Subscription['swapInfo'], SubscriptionswapInfoArgs, MeshContext>,
  /** null **/
  swapInfos: InContextSdkMethod<Subscription['swapInfos'], SubscriptionswapInfosArgs, MeshContext>,
  /** null **/
  swapFeesInfo: InContextSdkMethod<Subscription['swapFeesInfo'], SubscriptionswapFeesInfoArgs, MeshContext>,
  /** null **/
  swapFeesInfos: InContextSdkMethod<Subscription['swapFeesInfos'], SubscriptionswapFeesInfosArgs, MeshContext>,
  /** null **/
  collectedMarketFeesInfo: InContextSdkMethod<Subscription['collectedMarketFeesInfo'], SubscriptioncollectedMarketFeesInfoArgs, MeshContext>,
  /** null **/
  collectedMarketFeesInfos: InContextSdkMethod<Subscription['collectedMarketFeesInfos'], SubscriptioncollectedMarketFeesInfosArgs, MeshContext>,
  /** null **/
  userGmTokensBalanceChange: InContextSdkMethod<Subscription['userGmTokensBalanceChange'], SubscriptionuserGmTokensBalanceChangeArgs, MeshContext>,
  /** null **/
  userGmTokensBalanceChanges: InContextSdkMethod<Subscription['userGmTokensBalanceChanges'], SubscriptionuserGmTokensBalanceChangesArgs, MeshContext>,
  /** null **/
  latestUserGmTokensBalanceChangeRef: InContextSdkMethod<Subscription['latestUserGmTokensBalanceChangeRef'], SubscriptionlatestUserGmTokensBalanceChangeRefArgs, MeshContext>,
  /** null **/
  latestUserGmTokensBalanceChangeRefs: InContextSdkMethod<Subscription['latestUserGmTokensBalanceChangeRefs'], SubscriptionlatestUserGmTokensBalanceChangeRefsArgs, MeshContext>,
  /** null **/
  tradeAction: InContextSdkMethod<Subscription['tradeAction'], SubscriptiontradeActionArgs, MeshContext>,
  /** null **/
  tradeActions: InContextSdkMethod<Subscription['tradeActions'], SubscriptiontradeActionsArgs, MeshContext>,
  /** null **/
  tokenPrice: InContextSdkMethod<Subscription['tokenPrice'], SubscriptiontokenPriceArgs, MeshContext>,
  /** null **/
  tokenPrices: InContextSdkMethod<Subscription['tokenPrices'], SubscriptiontokenPricesArgs, MeshContext>,
  /** null **/
  claimCollateralAction: InContextSdkMethod<Subscription['claimCollateralAction'], SubscriptionclaimCollateralActionArgs, MeshContext>,
  /** null **/
  claimCollateralActions: InContextSdkMethod<Subscription['claimCollateralActions'], SubscriptionclaimCollateralActionsArgs, MeshContext>,
  /** null **/
  claimAction: InContextSdkMethod<Subscription['claimAction'], SubscriptionclaimActionArgs, MeshContext>,
  /** null **/
  claimActions: InContextSdkMethod<Subscription['claimActions'], SubscriptionclaimActionsArgs, MeshContext>,
  /** null **/
  claimRef: InContextSdkMethod<Subscription['claimRef'], SubscriptionclaimRefArgs, MeshContext>,
  /** null **/
  claimRefs: InContextSdkMethod<Subscription['claimRefs'], SubscriptionclaimRefsArgs, MeshContext>,
  /** null **/
  poolAmountUpdate: InContextSdkMethod<Subscription['poolAmountUpdate'], SubscriptionpoolAmountUpdateArgs, MeshContext>,
  /** null **/
  poolAmountUpdates: InContextSdkMethod<Subscription['poolAmountUpdates'], SubscriptionpoolAmountUpdatesArgs, MeshContext>,
  /** null **/
  claimableFundingFeeInfo: InContextSdkMethod<Subscription['claimableFundingFeeInfo'], SubscriptionclaimableFundingFeeInfoArgs, MeshContext>,
  /** null **/
  claimableFundingFeeInfos: InContextSdkMethod<Subscription['claimableFundingFeeInfos'], SubscriptionclaimableFundingFeeInfosArgs, MeshContext>,
  /** null **/
  transaction: InContextSdkMethod<Subscription['transaction'], SubscriptiontransactionArgs, MeshContext>,
  /** null **/
  transactions: InContextSdkMethod<Subscription['transactions'], SubscriptiontransactionsArgs, MeshContext>,
  /** null **/
  marketInfo: InContextSdkMethod<Subscription['marketInfo'], SubscriptionmarketInfoArgs, MeshContext>,
  /** null **/
  marketInfos: InContextSdkMethod<Subscription['marketInfos'], SubscriptionmarketInfosArgs, MeshContext>,
  /** null **/
  depositRef: InContextSdkMethod<Subscription['depositRef'], SubscriptiondepositRefArgs, MeshContext>,
  /** null **/
  depositRefs: InContextSdkMethod<Subscription['depositRefs'], SubscriptiondepositRefsArgs, MeshContext>,
  /** null **/
  volumeInfo: InContextSdkMethod<Subscription['volumeInfo'], SubscriptionvolumeInfoArgs, MeshContext>,
  /** null **/
  volumeInfos: InContextSdkMethod<Subscription['volumeInfos'], SubscriptionvolumeInfosArgs, MeshContext>,
  /** null **/
  swapVolumeInfo: InContextSdkMethod<Subscription['swapVolumeInfo'], SubscriptionswapVolumeInfoArgs, MeshContext>,
  /** null **/
  swapVolumeInfos: InContextSdkMethod<Subscription['swapVolumeInfos'], SubscriptionswapVolumeInfosArgs, MeshContext>,
  /** null **/
  positionVolumeInfo: InContextSdkMethod<Subscription['positionVolumeInfo'], SubscriptionpositionVolumeInfoArgs, MeshContext>,
  /** null **/
  positionVolumeInfos: InContextSdkMethod<Subscription['positionVolumeInfos'], SubscriptionpositionVolumeInfosArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  userStat: InContextSdkMethod<Subscription['userStat'], SubscriptionuserStatArgs, MeshContext>,
  /** null **/
  userStats: InContextSdkMethod<Subscription['userStats'], SubscriptionuserStatsArgs, MeshContext>,
  /** null **/
  swapFeesInfoWithPeriod: InContextSdkMethod<Subscription['swapFeesInfoWithPeriod'], SubscriptionswapFeesInfoWithPeriodArgs, MeshContext>,
  /** null **/
  swapFeesInfoWithPeriods: InContextSdkMethod<Subscription['swapFeesInfoWithPeriods'], SubscriptionswapFeesInfoWithPeriodsArgs, MeshContext>,
  /** null **/
  positionFeesInfoWithPeriod: InContextSdkMethod<Subscription['positionFeesInfoWithPeriod'], SubscriptionpositionFeesInfoWithPeriodArgs, MeshContext>,
  /** null **/
  positionFeesInfoWithPeriods: InContextSdkMethod<Subscription['positionFeesInfoWithPeriods'], SubscriptionpositionFeesInfoWithPeriodsArgs, MeshContext>,
  /** null **/
  liquidityProviderIncentivesStat: InContextSdkMethod<Subscription['liquidityProviderIncentivesStat'], SubscriptionliquidityProviderIncentivesStatArgs, MeshContext>,
  /** null **/
  liquidityProviderIncentivesStats: InContextSdkMethod<Subscription['liquidityProviderIncentivesStats'], SubscriptionliquidityProviderIncentivesStatsArgs, MeshContext>,
  /** null **/
  marketIncentivesStat: InContextSdkMethod<Subscription['marketIncentivesStat'], SubscriptionmarketIncentivesStatArgs, MeshContext>,
  /** null **/
  marketIncentivesStats: InContextSdkMethod<Subscription['marketIncentivesStats'], SubscriptionmarketIncentivesStatsArgs, MeshContext>,
  /** null **/
  userMarketInfo: InContextSdkMethod<Subscription['userMarketInfo'], SubscriptionuserMarketInfoArgs, MeshContext>,
  /** null **/
  userMarketInfos: InContextSdkMethod<Subscription['userMarketInfos'], SubscriptionuserMarketInfosArgs, MeshContext>,
  /** null **/
  sellUSDG: InContextSdkMethod<Subscription['sellUSDG'], SubscriptionsellUSDGArgs, MeshContext>,
  /** null **/
  sellUSDGs: InContextSdkMethod<Subscription['sellUSDGs'], SubscriptionsellUSDGsArgs, MeshContext>,
  /** null **/
  userGlpGmMigrationStat: InContextSdkMethod<Subscription['userGlpGmMigrationStat'], SubscriptionuserGlpGmMigrationStatArgs, MeshContext>,
  /** null **/
  userGlpGmMigrationStats: InContextSdkMethod<Subscription['userGlpGmMigrationStats'], SubscriptionuserGlpGmMigrationStatsArgs, MeshContext>,
  /** null **/
  glpGmMigrationStat: InContextSdkMethod<Subscription['glpGmMigrationStat'], SubscriptionglpGmMigrationStatArgs, MeshContext>,
  /** null **/
  glpGmMigrationStats: InContextSdkMethod<Subscription['glpGmMigrationStats'], SubscriptionglpGmMigrationStatsArgs, MeshContext>,
  /** null **/
  userTradingIncentivesStat: InContextSdkMethod<Subscription['userTradingIncentivesStat'], SubscriptionuserTradingIncentivesStatArgs, MeshContext>,
  /** null **/
  userTradingIncentivesStats: InContextSdkMethod<Subscription['userTradingIncentivesStats'], SubscriptionuserTradingIncentivesStatsArgs, MeshContext>,
  /** null **/
  tradingIncentivesStat: InContextSdkMethod<Subscription['tradingIncentivesStat'], SubscriptiontradingIncentivesStatArgs, MeshContext>,
  /** null **/
  tradingIncentivesStats: InContextSdkMethod<Subscription['tradingIncentivesStats'], SubscriptiontradingIncentivesStatsArgs, MeshContext>,
  /** null **/
  distribution: InContextSdkMethod<Subscription['distribution'], SubscriptiondistributionArgs, MeshContext>,
  /** null **/
  distributions: InContextSdkMethod<Subscription['distributions'], SubscriptiondistributionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["tperp-subgraph"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
