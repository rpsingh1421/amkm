
import mongoose from 'mongoose';
import TeamMemberModel from '../models/memberModel';

const refreshTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'team_members',
    required: true,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
});

const RefreshTokenModel = mongoose.models.refresh_token || mongoose.model('refresh_token', refreshTokenSchema);
export default RefreshTokenModel;
