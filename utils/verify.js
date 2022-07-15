const { run } = require("hardhat")

const verify = async (contractAddrss, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddrss,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
