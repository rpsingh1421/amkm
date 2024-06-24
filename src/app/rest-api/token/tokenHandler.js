import jwtConfig from '@/utils/jwtConfig';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import RefreshTokenModel from './refreshTokenModel';

export const createAccessToken =(data)=>{
    const token = jwt.sign(
        data,
        jwtConfig.secret,
        {
          expiresIn: jwtConfig.jwtExpiration,//{ expiresIn: '1h' }or{ expiresIn: 3600 } both is ok and acceptable
        }
    );
    // const token = jwt.sign(
    //                 { userId: user.id, username: user.username },
    //                 jwtConfig.secret,
    //                 { expiresIn: '1h' }
    //               );
    return token;
}

export const createRefreshToken = async (data) => {
    let expiredAt = new Date();// creates a new Date object with the current date and time.
    const { user_id } = data;
    expiredAt.setSeconds(
      expiredAt.getSeconds() + jwtConfig.jwtRefreshExpiration
    );
  
    // const _token = uuidv4();

  const _token = jwt.sign(
        data,
        jwtConfig.refresh_secret,
        {
          expiresIn: jwtConfig.jwtExpiration,//{ expiresIn: '1h' }or{ expiresIn: 3600 } both is ok and acceptable
        }
    );
    const refresh_token_data = {
      token: _token,
      user_id: user_id,
      expiredAt: expiredAt.getTime(),
    };
    /** since, there should be only one refresh token associated with one user,
     * so if there is request of new refresh token, first check it exist for received usesrid or not
     * if exist then first remove that and then save new one
     */  
    const existingToken = await RefreshTokenModel.findOne({ user_id });
    if (existingToken != null) {
      await RefreshTokenModel.deleteOne({ user_id });
    }

    let refreshToken = await RefreshTokenModel.create(refresh_token_data);
  
    return refreshToken.token;
};

// verifyToken checks if the token is expired and throws an error if it is.
// Use verifyToken when you need to ensure that the token is valid and not expired, which is the common use case for validating tokens in authentication and authorization processes.
export const verifyToken = (token) => jwt.verify(token, jwtConfig.secret);

// ignores the expiration check and verifies the token even if it has expired.
// Use verifyExpiredToken when you need to access the information within an expired token, such as when implementing a refresh token mechanism or debugging.
export const verifyExpiredToken = (token) => jwt.verify(token, jwtConfig.secret, { ignoreExpiration: true });

export const isTokenExpired = (token) => {
  // Decode the token without verifying it
  const decoded = jwt.decode(token);
    
  // Get the current time in seconds since epoch
  const currentTime = Math.floor(Date.now() / 1000);
  
  // Check if the token is expired
  if (decoded.exp && decoded.exp < currentTime) {
      return true; // Token is expired
  } else {
      return false; // Token is not expired
  }
};

export const verifyRefreshToken = async (data) => {
    const { access_token, refresh_token } = data;
    const payload = jwt.verify(access_token, jwtConfig.secret, { ignoreExpiration: true });
   /**============================================== */      
        // payload is in this format
         //  "payload": {
        //     "id": "666886734550f113767b96e3",
        //     "iat": 1718192331,
        //     "exp": 1718195931
        // }
 /**==================================================== */  
    const existingRefreshToken = await RefreshTokenModel.findOne({ token: refresh_token, user_id: payload.id });
  
    if (existingRefreshToken) {
      const currentTime = new Date();
      const expiryTime = new Date(existingRefreshToken.expiredAt);
  
      if (currentTime.valueOf() <= expiryTime.valueOf()) {
        return { isValid: true, user_id: payload.id ,message:'refresh token is not expired'};
      } else {
        return { isValid: false ,message:'refresh token expired'};
      }
    }
    return { isValid:false,message: 'received refresh token either improper or invalid' };
  };