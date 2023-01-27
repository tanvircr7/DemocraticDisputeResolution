const { inputToConfig } = require("@ethereum-waffle/compiler")
const { assert } = require("chai")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")
const { getNamedAccounts, deployments, ethers, network } = require("hardhat")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle Unit Tests", async function () {
          let raffle, vrfCoordinatorV2Mock
          const chainId = network.config.chainId

          beforeEach(async function () {
              const { deployer } = await getNamedAccounts()
              await deployments.fixture(["all"])

              raffle = await ethers.getContract("Raffle", deployer)
              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer)
          })

          describe("constructor", async function () {
              it("initializes the raffle contract", async function () {
                  // Ideally our tests have just 1 assert per it
                  const raffleState = await raffle.getRaffleState()
                  const interval = raffle.getInterval()
                  assert.equal(raffleState.toString(), "0")
                  //   assert.equal(interval.toString(), networkConfig[chainId]["interval"])
                  console.log("%s", interval)
                  assert.equal(interval.toString(), networkConfig[chainId]["interval"])
              })
          })
      })
