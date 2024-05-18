import { ROLES } from '../../shared/constants/constants';
import { UserGender } from '../enums/gender.enum';
import { UserStatus } from '../enums/status.enum';

export const usersData = [
  {
    firstName: 'Rehman',
    lastName: 'Akram',
    status: UserStatus.ACTIVE,
    email: 'umairtariq403@gmail.com',
    gender: UserGender.MALE,
    phoneNo: '+923167769283',
    password: 'Abcdef@123',
    emailVerified: true,
    phoneVerified: true,
    role: ROLES.SUPER_ADMIN,
  },
];
