// src/app/page.tsx

import { Profile } from '@/widgets/Profile/Profile';

// Асинхронный компонент
const Home = async () => {
  const user = { id: '1', name: 'Александр', email: 'alexanderveretnov@gmail.com' }; // Получение данных на сервере

  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default Home;
