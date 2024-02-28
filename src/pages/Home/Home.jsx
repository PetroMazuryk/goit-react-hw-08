import { PhoneTitle } from '../../components/PhoneTitle/PhoneTitle';
import { HomeTitle } from '../../components/HomeTitle/HomeTitle';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { LoginForm } from '../../components/LoginForm/LoginForm';
export default function Home() {
  return (
    <div>
      <PhoneTitle />
      <HomeTitle />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}
