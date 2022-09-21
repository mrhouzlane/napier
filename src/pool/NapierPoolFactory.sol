// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.10;

import "../interfaces/INapierPoolFactory.sol";
import "./NapierPool.sol";

contract NapierPoolFactory is INapierPoolFactory {
    address public immutable governance;

    mapping(address => bool) private _isPoolRegistered;

    address internal _tempUnderlying;
    address internal _tempNpt;
    uint256 internal _tempMaturity;

    event PoolCreated(address indexed underlying, address indexed tranche);

    constructor(address _governance) {
        governance = _governance;
    }

    /// @notice Deploy a new Pool contract.
    /// @param underlying Address of the underlying token
    /// @param nPT Address of the Napier Principal Token
    /// @return The deployed Pool contract.
    function createPool(address underlying, address nPT) external returns (address) {
        _tempUnderlying = underlying;
        _tempNpt = nPT;
        _tempMaturity = ITranche(nPT).maturity();

        bytes32 salt = keccak256(abi.encodePacked(underlying, nPT));
        address pool = address(new NapierPool{salt: salt}());
        _isPoolRegistered[pool] = true;

        emit PoolCreated(underlying, nPT);

        // set back to 0-value for some gas savings
        delete _tempMaturity;
        delete _tempUnderlying;
        delete _tempNpt;

        return pool;
    }

    // @notice Callback function called by the Pool.
    /// @dev This is called by the Pool contract constructor.
    /// The return data is used for Pool initialization. Using this, the Pool avoids
    /// constructor arguments which can make the Pool bytecode needed for create2 address
    /// derivation non-constant.
    function getData()
        external
        view
        returns (
            uint256,
            address,
            address,
            address
        )
    {
        return (_tempMaturity, _tempUnderlying, _tempNpt, governance);
    }

    function isRegisteredPool(address pool) external view returns (bool) {
        return _isPoolRegistered[pool];
    }
}
