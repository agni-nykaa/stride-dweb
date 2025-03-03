import WebHeader from './WebHeader';
import AppHeader from './AppHeader';
import { isWeb } from '~/utils/device';

const Header = () => (isWeb() ? <WebHeader /> : <AppHeader />);
export default Header;
