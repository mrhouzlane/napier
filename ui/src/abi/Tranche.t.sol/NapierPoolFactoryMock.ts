/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface NapierPoolFactoryMockInterface extends utils.Interface {
  functions: {
    "createPool(address,address)": FunctionFragment;
    "getData()": FunctionFragment;
    "getPools()": FunctionFragment;
    "isRegisteredPool(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createPool"
      | "getData"
      | "getPools"
      | "isRegisteredPool"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createPool",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getData", values?: undefined): string;
  encodeFunctionData(functionFragment: "getPools", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isRegisteredPool",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRegisteredPool",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NapierPoolFactoryMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NapierPoolFactoryMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createPool(
      underlying: PromiseOrValue<string>,
      nPT: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getData(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, string]>;

    getPools(overrides?: CallOverrides): Promise<[string[]]>;

    isRegisteredPool(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  createPool(
    underlying: PromiseOrValue<string>,
    nPT: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getData(
    overrides?: CallOverrides
  ): Promise<[BigNumber, string, string, string]>;

  getPools(overrides?: CallOverrides): Promise<string[]>;

  isRegisteredPool(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    createPool(
      underlying: PromiseOrValue<string>,
      nPT: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getData(
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, string, string]>;

    getPools(overrides?: CallOverrides): Promise<string[]>;

    isRegisteredPool(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    createPool(
      underlying: PromiseOrValue<string>,
      nPT: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getData(overrides?: CallOverrides): Promise<BigNumber>;

    getPools(overrides?: CallOverrides): Promise<BigNumber>;

    isRegisteredPool(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPool(
      underlying: PromiseOrValue<string>,
      nPT: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isRegisteredPool(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
