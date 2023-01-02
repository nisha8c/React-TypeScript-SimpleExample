import React from 'react';
import { UserData } from '../../types/Types';

interface IUserNameChangerComponentProps {
    user: UserData,
    onNameChanged(event: React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChanger = ({user, onNameChanged}: IUserNameChangerComponentProps) => {
  return (
    <>
        <h2>Change the name of {user.name}</h2>
        <input type="text" value={user.name} onChange={onNameChanged} />
    </>
  )
}

export default UserNameChanger;