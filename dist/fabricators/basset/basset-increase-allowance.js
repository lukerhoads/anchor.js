"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fabricatebAssetIncreaseAllowance = void 0;
const terra_js_1 = require("@terra-money/terra.js");
const validate_input_1 = require("../../utils/validate-input");
const address_1 = require("../../utils/validation/address");
const number_1 = require("../../utils/validation/number");
const fabricatebAssetIncreaseAllowance = ({ address, amount, bAsset, spender, expires, }) => (addressProvider) => {
    validate_input_1.validateInput([
        address_1.validateAddress(address),
        number_1.validateIsNumber(+amount),
        number_1.validateIsGreaterThanZero(+amount),
        address_1.validateAddress(spender),
    ]);
    const bAssetTokenAddress = addressProvider.bAssetToken(bAsset);
    return [
        new terra_js_1.MsgExecuteContract(address, bAssetTokenAddress, {
            // @see https://github.com/Anchor-Protocol/anchor-bAsset-contracts/blob/cce41e707c67ee2852c4929e17fb1472dbd2aa35/contracts/anchor_basset_token/src/contract.rs#L57
            increase_allowance: {
                spender: spender,
                amount: new terra_js_1.Int(new terra_js_1.Dec(amount).mul(1000000)).toString(),
                expires: expires,
            },
        }),
    ];
};
exports.fabricatebAssetIncreaseAllowance = fabricatebAssetIncreaseAllowance;
