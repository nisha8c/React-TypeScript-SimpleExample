import React from 'react';
import { UserData } from '../../types/Types';

interface IUserAddressComponentProps {
    user: UserData
}

const UserAddress = ({user}: IUserAddressComponentProps) => {
  return (
    <div>Address: {user.address}</div>
  )
}

export default UserAddress;