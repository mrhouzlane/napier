// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {BaseAdapter as Adapter} from "../adapters/BaseAdapter.sol";

/// @title Napier Principal Token interface
interface ITranche is IERC20Metadata {
    struct Series {
        // address zero; // Zero ERC20 token
        address claim; // Claim ERC20 token
        Adapter adapter; // Adapter
        uint256 reward; // tracks fees due to the series' settler
        uint256 iscale; // scale at issuance
        uint256 mscale; // scale at maturity
        uint256 maxscale; // max scale value from this series' lifetime
        uint128 tilt; // % of underlying principal initially reserved for Claims
    }

    event SeriesInitialized(address indexed nPT, uint256 indexed maturity, address indexed sponsor);

    event Issued(address pt, uint256 balance, address indexed sender);
    event Combined(address pt, uint256 balance, address indexed sender);
    event Collected(address pt, uint256 collected);

    function maturity() external returns (uint256);

    function issuance() external returns (uint256);

    function underlying() external returns (IERC20);

    function getSeries(address) external view returns (Series memory);

    /// @notice mint NapierPT
    /// @dev only registered pools can mint
    /// @param account The address to send the minted tokens
    /// @param amount The amount to be minted
    function mintNapierPT(address account, uint256 amount) external;

    /// @notice burn NapierPT
    /// @dev only registered pools can burn
    /// @param account The address from where to burn tokens from
    /// @param amount The amount to be burned
    function burnNapierPT(address account, uint256 amount) external;

    function scale() external;

    /// @notice Mint Zeros and Claims of a specific protocol
    /// @param pt principal token address
    /// @param tAmount amount of Target to deposit
    /// @dev The balance of Zeros/Claims minted will be the same value in units of underlying (less fees)
    function issue(address pt, uint256 tAmount) external returns (uint256 uAmount);

    /// @notice Reconstitute Target by burning Zeros and Claims
    /// @dev Explicitly burns claims before maturity, and implicitly does it at/after maturity through `_collect()`
    /// @param pt principal token address
    /// @param uAmount Balance of Zeros and Claims to burn
    function combine(address pt, uint256 uAmount) external returns (uint256 tAmount);

    /// @notice Burn Zeros of a Series once its been settled
    /// @dev The balance of redeemable Target is a function of the change in Scale
    /// @param pt principal token address
    /// @param uAmount Amount of Zeros to burn, which should be equivelent to the amount of Underlying owed to the caller
    function redeemZero(address pt, uint256 uAmount) external returns (uint256 tBal);

    function collect(
        address usr,
        address pt,
        uint256 uAmountTransfer,
        address to
    ) external returns (uint256 collected);
}
