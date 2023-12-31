/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    APP_DEV : "http://127.0.0.1:3000" ,
    MONGO_URI:"mongodb+srv://AhmedShtya:rfOVazyZ1puX7cHD@cluster0.xgw84zk.mongodb.net/MRM_BLOGS?retryWrites=true"
  }
}

module.exports = nextConfig
