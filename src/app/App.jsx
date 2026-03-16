import { AccountProvider } from "../entities/resume/model/AccountContext";
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
