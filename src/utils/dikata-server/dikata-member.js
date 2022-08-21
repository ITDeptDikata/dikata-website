import axios from "axios";
import { DIKATA_SERVER_BASE_URL } from "../env";

/**
 * @typedef DikataMemberContacts
 *
 * @property {string} phone
 *
 * @property {string} email
 */

/**
 * Data about a Dikata Member
 *
 * @typedef DikataMember
 *
 * @property {DikataMemberContacts} contacts
 *
 * @property {string} department
 *
 * @property {string} division
 *
 * @property {string} name
 *
 * @property {"founder" | "manager" | "member"} status
 *
 * @property {string} [image]
 * **TENTATIVE** based on current backend update, this field might not exist and
 * we need to get the image url from its own endpoint.
 */

const endpoint = `${DIKATA_SERVER_BASE_URL}/members`;

/**
 * @typedef DikataMembersFilters
 *
 * @property {string} dept
 *
 * @property {string} div
 *
 * @property {DikataMember["status"]} status
 *
 * @property {string} name
 */

/**
 *
 * @param {DikataMembersFilters=} filters
 *
 * @param {number=} quant
 *
 * @returns {Promise<DikataMember[]>} resolves into an array of {@link DikataMember}
 * with a maximum length of `quant`.
 */
export const getDikataMembers = async (filters = {}, quant = 10) => {
    return await axios.get(endpoint, {
        params: {
            quant,
            ...filters,
        },
    });
};

/**
 *
 * @param {string} id
 *
 * @returns {Promise<DikataMember>} resolves into a {@link DikataMember} with the `id`.
 *
 */
export const getDikataMemberById = async id => await axios.get(`${endpoint}/${id}`);
