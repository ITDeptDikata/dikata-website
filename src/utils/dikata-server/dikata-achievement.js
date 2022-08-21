import axios from "axios";
import { DIKATA_SERVER_BASE_URL } from "../env";

/**
 * Data about a Dikata Achievement
 *
 * @typedef DikataAchievement
 *
 * @property {string} date
 *
 * @property {string} description
 *
 * @property {string} title
 *
 * @property {string} [image]
 * **TENTATIVE** based on current backend update, this field might not exist and
 * we need to get the image url from its own endpoint.
 *
 */

const endpoint = `${DIKATA_SERVER_BASE_URL}/achievements`;

/**
 *
 * @param {number=} quant
 * @param {boolean=} recent
 *
 * @returns {Promise<DikataAchievement[]>} resolves into an array of {@link DikataAchievement}
 * with a maximum length of `quant`.
 */
export const getDikataAchievements = async (quant = 10, recent = false) => {
    return await axios.get(endpoint, {
        params: {
            quant,
            recent: Number(recent),
        },
    });
};

/**
 *
 * @param {string} id
 *
 * @returns {Promise<DikataAchievement>} resolves into a {@link DikataAchievement} with the `id`.
 *
 */
export const getDikataAchievementById = async id =>
    await axios.get(`${endpoint}/${id}`);
