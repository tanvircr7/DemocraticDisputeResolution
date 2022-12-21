const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployements }) {
    const { deploy, log } = deployements
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChains.includes(network.name)) {
        log("Local network deteceted, deploying mocks")
        // deploy a mock vrf2 coordinator
    }
}
