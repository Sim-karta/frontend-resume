import { AccountProvider } from '@/entities/account';
import AccountPage from '@/pages/AccountPage';
import ProfilePage from '@/pages/ProfilePage';
import Router from './routing/Router';
import './styles';

const App = () => {
	const routes = {
		'/': AccountPage,
		'/profile/:id': ProfilePage,
		'*': () => <div>404 Page not found</div>
	}

    return (
		<AccountProvider>
			<Router routes={routes} />
		</AccountProvider>
    )
}

export default App
