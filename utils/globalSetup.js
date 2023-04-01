import dotenv from "dotenv"

module.exports = async () => {
    if (process.env.test_env) {
        dotenv.config ({
            path: `.env.${process.env.test_env}`,
            override: true
        })
    }}