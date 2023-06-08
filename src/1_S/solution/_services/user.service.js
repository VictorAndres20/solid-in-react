import { GET_OPTIONS, handleFetch } from './base.service';

const BASE_PATH = `/user`

export const findAllUser = async () => {
    return await handleFetch(`${BASE_PATH}/all`, GET_OPTIONS);
}