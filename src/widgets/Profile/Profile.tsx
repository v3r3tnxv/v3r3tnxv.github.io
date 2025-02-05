// widgets/Profile: Компонент профиля пользователя, который собирает в себе несколько сущностей (например, User, Avatar).

import { User } from '@/entities/User/User';

interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
  </div>
);

