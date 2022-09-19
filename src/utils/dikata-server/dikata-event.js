import axios from "axios";
import { DIKATA_SERVER_BASE_URL } from "../env";

/**
 * Data about a Dikata Event
 *
 * @typedef DikataEvent
 *
 * @property {string} date
 *
 * @property {string} description
 *
 * @property {string} [image]
 * **TENTATIVE** based on current backend update, this field might not exist and
 * we need to get the image url from its own endpoint.
 *
 * @property {string} title
 *
 * @property {"not yet" | "ongoing" | "finished"} progress
 *
 */

const endpoint = `${DIKATA_SERVER_BASE_URL}/events`;

/**
 *
 * @param {number=} quant
 * @param {boolean=} recent
 *
 * @returns {Promise<DikataEvent[]>} resolves into an array of {@link DikataEvent}
 * with a maximum length of `quant`.
 */
export const getDikataEvents = async (quant = 10, recent = false) => {
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
 * @returns {Promise<DikataEvent>} resolves into a {@link DikataEvent} with the `id`.
 *
 */
export const getDikataEventById = async id => await axios.get(`${endpoint}/${id}`);
