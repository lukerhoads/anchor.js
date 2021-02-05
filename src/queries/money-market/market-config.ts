import { LCDClient } from '@terra-money/terra.js';
import { AddressProvider } from '../../address-provider/provider';

interface Option {
  lcd: LCDClient;
  market: string;
}
interface ConfigResponse {
  ownerAddr: string;
  anchorToken: string;
  interestModel: string;
  overseerContract: string;
  stableDenom: string;
  reserveFactor: string;
}

export const queryMarketConfig = ({ lcd, market }: Option) => async (
  addressProvider: AddressProvider,
): Promise<ConfigResponse> => {
  const marketContractAddress = addressProvider.market(market);
  let response: ConfigResponse = await lcd.wasm.contractQuery(
    marketContractAddress,
    {
      config: {},
    },
  );
  return response;
};
