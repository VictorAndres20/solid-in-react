import { findAllUser } from '../../_services/user.service';

export const findAllUserEvent = async () => {
    return await findAllUser();
}