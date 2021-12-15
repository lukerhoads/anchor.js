import { AddressProvider, COLLATERAL_DENOMS, MARKET_DENOMS } from './provider';

export interface AddressMap {
  bLunaHub: string;
  bLunaAirdrop: string;
  bLunaValidatorsRegistry: string;
  bLunaToken: string;
  bLunaReward: string;
  bLunaConverter: string;
  bLunaCustody: string;
  bEthToken: string;
  bEthReward: string;
  bEthConverter: string;
  bEthCustody: string;
  bAtomToken: string;
  bAtomReward: string;
  bAtomConverter: string;
  bAtomCustody: string;
  bSolToken: string;
  bSolReward: string;
  bSolConverter: string;
  bSolCustody: string;
  mmInterestModel: string;
  mmOracle: string;
  mmMarket: string;
  mmOverseer: string;
  mmLiquidation: string;
  mmLiquidationQueue: string;
  mmDistributionModel: string;
  aTerra: string;
  terraswapblunaLunaPair: string;
  terraswapblunaLunaLPToken: string;
  terraswapAncUstPair: string;
  terraswapAncUstLPToken: string;
  gov: string;
  distributor: string;
  collector: string;
  community: string;
  staking: string;
  ANC: string;
  airdrop: string;
  investor_vesting: string;
  team_vesting: string;
}

export type AllowedAddressKeys = keyof AddressMap;

export class AddressProviderFromJson implements AddressProvider {
  constructor(private data: AddressMap) {}

  bLunaHub(): string {
    return this.data.bLunaHub;
  }

  bLunaValidatorsRegistry(): string {
    return this.data.bLunaValidatorsRegistry;
  }

  bAssetToken(collateral: COLLATERAL_DENOMS): string {
    switch (collateral) {
      case COLLATERAL_DENOMS.UBLUNA:
        return this.data.bLunaToken;
      case COLLATERAL_DENOMS.UBETH:
        return this.data.bEthToken;
      case COLLATERAL_DENOMS.UBATOM:
        return this.data.bAtomToken;
      case COLLATERAL_DENOMS.UBSOL:
        return this.data.bSolToken;
    }
  }

  bAssetReward(collateral: COLLATERAL_DENOMS): string {
    switch (collateral) {
      case COLLATERAL_DENOMS.UBLUNA:
        return this.data.bLunaReward;
      case COLLATERAL_DENOMS.UBETH:
        return this.data.bEthReward;
      case COLLATERAL_DENOMS.UBATOM:
        return this.data.bAtomReward;
      case COLLATERAL_DENOMS.UBSOL:
        return this.data.bSolReward;
    }
  }

  bAssetConverter(collateral: COLLATERAL_DENOMS): string {
    switch (collateral) {
      case COLLATERAL_DENOMS.UBLUNA:
        return this.data.bLunaConverter;
      case COLLATERAL_DENOMS.UBETH:
        return this.data.bEthConverter;
      case COLLATERAL_DENOMS.UBATOM:
        return this.data.bAtomConverter;
      case COLLATERAL_DENOMS.UBSOL:
        return this.data.bSolConverter;
    }
  }

  bAssetCustody(_denom: MARKET_DENOMS, collateral: COLLATERAL_DENOMS): string {
    switch (collateral) {
      case COLLATERAL_DENOMS.UBLUNA:
        return this.data.bLunaCustody;
      case COLLATERAL_DENOMS.UBETH:
        return this.data.bEthCustody;
      case COLLATERAL_DENOMS.UBATOM:
        return this.data.bAtomCustody;
      case COLLATERAL_DENOMS.UBSOL:
        return this.data.bSolCustody;
    }
  }

  market(): string {
    return this.data.mmMarket;
  }

  overseer(): string {
    return this.data.mmOverseer;
  }

  aTerra(): string {
    return this.data.aTerra;
  }

  oracle(): string {
    return this.data.mmOracle;
  }

  interest(): string {
    return this.data.mmInterestModel;
  }

  liquidation(): string {
    return this.data.mmLiquidation;
  }

  liquidationQueue(): string {
    return this.data.mmLiquidationQueue;
  }

  terraswapblunaLunaPair(): string {
    return this.data.terraswapblunaLunaPair;
  }

  terraswapblunaLunaLPToken(): string {
    return this.data.terraswapblunaLunaLPToken;
  }

  gov(): string {
    return this.data.gov;
  }

  terraswapAncUstPair(): string {
    return this.data.terraswapAncUstPair;
  }

  terraswapAncUstLPToken(): string {
    return this.data.terraswapAncUstLPToken;
  }

  collector(): string {
    return this.data.collector;
  }

  staking(): string {
    return this.data.staking;
  }

  community(): string {
    return this.data.community;
  }

  distributor(): string {
    return this.data.distributor;
  }

  ANC(): string {
    return this.data.ANC;
  }

  airdrop(): string {
    return this.data.airdrop;
  }

  investorLock(): string {
    return this.data.investor_vesting;
  }

  teamLock(): string {
    return this.data.team_vesting;
  }
}
