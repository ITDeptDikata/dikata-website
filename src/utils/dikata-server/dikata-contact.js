import axios from "axios";
import { DIKATA_SERVER_BASE_URL } from "../env";

/**
 * Data about a Dikata Contact
 *
 * @typedef DikataContact
 *
 * @property {string} type
 *
 * @property {string} link
 *
 * @property {string} content
 *
 */

const endpoint = `${DIKATA_SERVER_BASE_URL}/contacts`;

/**
 * @returns {Promise<DikataContact[]>} resolves into an array of {@link DikataContact}.
 */
export const getDikataContacts = async () => await axios.get(endpoint);

// /**
//  *
//  * @param {string} id
//  *
//  * @returns {Promise<DikataContact>} resolves into a {@link DikataContact} with the `id`.
//  *
//  */
// export const getDikataContactById = async id => await axios.get(`${endpoint}/${id}`);
