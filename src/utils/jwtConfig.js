const jwtConfig = {
    secret: process.env.JWT_SECRET || 'ssk-secret-key',
    refresh_secret:process.env.JWT_REFRESH_SECRET || 'amkm-ssk-rpsingh-refresh-secret-key',
    jwtExpiration: 3600, // 1 hour
    jwtRefreshExpiration: 86400, // 24 hours
  };
  
  export default jwtConfig;