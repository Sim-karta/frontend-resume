import { AccountProvider } from "../entities/account/model/AccountContext";
import Account from "../widgets/Account/Account";
import './styles';

const App = () => {
    return (
		<AccountProvider>
			<Account />
		</AccountProvider>
    )
}

export default App
