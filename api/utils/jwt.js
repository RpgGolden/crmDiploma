import jwt from 'jsonwebtoken';
import TokenModel from '../models/token-model.js';

export default {
    generate(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
        return {
            accessToken,
            refreshToken,
        };
    },

    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({ where: { userId } });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await TokenModel.create({ userId, refreshToken });
    },

    async removeToken(refreshToken) {
        return await TokenModel.destroy({ where: { refreshToken } });
    },

    verifyAccessToken(token) {
        return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    },

    verifyRefreshToken(token) {
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    },

    async findToken(refreshToken) {
        return await TokenModel.findOne({ where: { refreshToken } });
    },
    //
    // decode(token) {
    // 	return jwt.decode(token);
    // },

    decodeAccessTokenAndGetUserId(accessToken) {
        // Проверяем, передан ли токен доступа
        if (!accessToken) {
            throw new Error('Access token is missing');
        }

        try {
            // Декодируем токен доступа и извлекаем из него идентификатор пользователя (userId)
            const decodedToken = jwt.verify(accessToken, 'your_secret_key'); // Замените 'your_secret_key' на ваш секретный ключ
            const userId = decodedToken.id; // Предполагается, что в токене есть поле с идентификатором пользователя
            return userId;
        } catch (error) {
            throw new Error('Invalid access token');
        }
    },
};
