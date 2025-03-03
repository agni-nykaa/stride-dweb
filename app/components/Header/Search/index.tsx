import { useLocation } from '@remix-run/react';
import SearchIcon from '../assets/SearchIcon';
import { getSearchURL } from '../helper';
import { Link } from '../styled';
import { getDevice, isAndroid, isWeb } from '~/utils/device';
import { webViewCallbacks } from '~/constants/webview';
import { webViewCallbackhandler } from '~/utils/webview';

const Search = () => {
  const { pathname } = useLocation();
  const handleSearchClickForApp = () => {
    const appParams = {
      device: getDevice(),
      callbackFunctionName: webViewCallbacks.showSearch,
      callbackParams: isAndroid() ? null : {},
    };
    webViewCallbackhandler(appParams);
  };
  const redirectToQueryPage = () => {
    if (!isWeb()) {
      handleSearchClickForApp();
      return;
    }
    const searchLink = getSearchURL(pathname);
    window.location.href = searchLink;
  };
  return (
    <Link onClick={redirectToQueryPage}>
      <SearchIcon fillColor="none" />
    </Link>
  );
};

export default Search;
