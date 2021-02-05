"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fabricatebAssetSendFrom = void 0;
const terra_js_1 = require("@terra-money/terra.js");
const validate_input_1 = require("../../utils/validate-input");
const address_1 = require("../../utils/validation/address");
const number_1 = require("../../utils/validation/number");
const fabricatebAssetSendFrom = ({ address, amount, bAsset, contract, owner, msg, }) => (addressProvider) => {
    validate_input_1.validateInput([
        address_1.validateAddress(address),
        number_1.validateIsNumber(+amount),
        number_1.validateIsGreaterThanZero(+amount),
        address_1.validateAddress(owner),
        address_1.validateAddress(contract),
    ]);
    const bAssetTokenAddress = addressProvider.bAssetToken(bAsset);
    let message = undefined;
    if (msg) {
        message = Buffer.from(JSON.stringify(msg)).toString('base64');
    }
    return [
        new terra_js_1.MsgExecuteContract(address, bAssetTokenAddress, {
            // @see https://github.com/Anchor-Protocol/anchor-bAsset-contracts/blob/cce41e707c67ee2852c4929e17fb1472dbd2aa35/contracts/anchor_basset_token/src/handler.rs#L203
            send_from: {
                owner: owner,
                contract: contract,
                amount: new terra_js_1.Int(new terra_js_1.Dec(amount).mul(1000000)).toString(),
                msg: message,
            },
        }),
    ];
};
exports.fabricatebAssetSendFrom = fabricatebAssetSendFrom;
