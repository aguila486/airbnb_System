const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {

    dev: {
        SECRET_KEY: "CF6754B58RMXCJH34R3JTKZYZF2A",
        db: {
            url: "mongodb://airbnb:america486@ds211875.mlab.com:11875/airbnb"
        },
        port: 3000
    },

    test: {

    },

    production: {

    }
};

module.exports = ENVS[NODE_ENV];