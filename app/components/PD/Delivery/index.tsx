import { FC, useState, useEffect } from 'react';
import { ACTION_ROUTES } from '~/actions';
import DeliveryIcon from '~/components/Icons/DeliveryIcon';
import { API_METHODS, API_STATES } from '~/constants/api';
import { useConfig } from '~/hooks/useConfig';
import { useFetcherHandler } from '~/hooks/useFetcherHandler';
import Accordion from '~/shared/Accordion';
import InputBox from '~/shared/InputBox';
import { getCookie, setCookie } from '~/utils/cookies';
import AddressContainerComponent from './AddressContainer';
import {
  ADDRESS_DETAIL_FETCH_ERROR,
  ADDRESS_ID_FOR_DELIVERY,
  AUTO_ADDRESS_FETCH_ERROR,
  CONFIGURABLE,
  DEFAULT_API_ERROR_MSG,
  ENTER_PINCODE,
  ENTER_PINCODE_FOR_DELIVERY,
  OR,
  PIN_CODE_FOR_DELIVERY,
  PINCODE_COOKIE_EXPIRY,
  pincodeMaxLength,
  SAVED_ADDRESSES_FETCH_ERROR,
  SELECT_FROM_SAVED_ADD,
} from './constants';
import DeliveryDetails from './DeliveryDetails';
import {
  DeliveryContainer,
  DeliveryText,
  DeliveryButton,
  AccordionContent,
  SavedAddressesHeading,
  Divider,
  DividerLine,
  DividerText,
} from './styled';
import { Address } from './types';
import BottomSheet from '~/shared/BottomSheet';
import { logger } from '~/utils/logger';
import { useIsLoggedIn } from '~/hooks/useAuth';
import { getSkusForDelivery } from './helper';

interface DeliveryAccordionProps {
  currSkuId: string;
  product: any;
}

const DeliveryAccordion: FC<DeliveryAccordionProps> = ({
  product,
  currSkuId,
}) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [pincode, setPincode] = useState('');
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);
  const [skuDetails, setSkuDetails] = useState(null);
  const [inputPincode, setInputPincode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAutoAddressSuccess, setIsAutoAddressSuccess] = useState(false);
  const [isAddressDetailsSuccess, setIsAddressDetailsSuccess] = useState(false);
  const [state, setState] = useState('');
  const [addressDetailsResponse, setAddressDetailsResponse] = useState(null);
  const isLoggedIn = useIsLoggedIn();

  const callAddressDetailsAPI = (pincodeValue: string) => {
    setPincode(pincodeValue);
    setErrorMessage('');
    setIsAutoAddressSuccess(true);
    setIsAddressDetailsSuccess(false);

    addressDetailsFetcher.submit(
      {
        pincode: pincodeValue,
        skus: pskuArray && JSON.stringify(pskuArray),
        type: product?.productType,
      },
      { method: API_METHODS.POST, action: ACTION_ROUTES.addressDetail },
    );
  };

  useEffect(() => {
    const savedPincode = getCookie(PIN_CODE_FOR_DELIVERY)?.toString() || '';
    if (savedPincode) {
      callAddressDetailsAPI(savedPincode?.toString());
    }
  }, []);

  useEffect(() => {
    if (isAutoAddressSuccess && isAddressDetailsSuccess && !errorMessage) {
      handleCloseBottomSheet();
      setSkuDetails((prevDetails) => ({
        ...prevDetails,
        state: state,
      }));
      setCookie(PIN_CODE_FOR_DELIVERY, pincode, PINCODE_COOKIE_EXPIRY);
    }
  }, [isAutoAddressSuccess, isAddressDetailsSuccess, errorMessage]);

  const { fetcher: addressDetailsFetcher, isLoading: isAddressDetailsLoading } =
    useFetcherHandler({
      onSuccess: (data) => {
        if (data?.status === API_STATES.SUCCESS) {
          setAddressDetailsResponse(data);
          const skuDetailsResponse = data?.data?.details[currSkuId];
          setSkuDetails({
            ...skuDetailsResponse,
            pincode: pincode || skuDetailsResponse?.pincode,
            state: state,
            message: skuDetailsResponse?.message || data?.data?.message,
          });
          setIsAddressDetailsSuccess(true);
        } else {
          setIsAddressDetailsSuccess(false);
          setErrorMessage(data?.message || DEFAULT_API_ERROR_MSG);
        }
      },
      onError: (error) => {
        logger.error(error, ADDRESS_DETAIL_FETCH_ERROR);
        setErrorMessage(DEFAULT_API_ERROR_MSG);
      },
      successHandler: (data) => data?.status === API_STATES.SUCCESS,
    });

  useEffect(() => {
    const skuDetails = addressDetailsResponse?.data?.details?.[currSkuId];
    if (skuDetails) {
      setSkuDetails({
        ...skuDetails,
        pincode,
        state,
        message: skuDetails?.message || addressDetailsResponse?.data?.message,
      });
    }
  }, [currSkuId, addressDetailsResponse]);

  const { fetcher: savedAddressesFetcher } = useFetcherHandler({
    onSuccess: (data) => {
      setSavedAddresses(data?.data || []);
    },
    onError: (error) => {
      logger.error(error, SAVED_ADDRESSES_FETCH_ERROR);
    },
    successHandler: (data) => data?.status === 'success',
  });

  const { fetcher: autoAddressFetcher, isLoading: isAutoAddressLoading } =
    useFetcherHandler({
      onSuccess: (data) => {
        if (!data.status) {
          setIsAutoAddressSuccess(false);
          setErrorMessage(data.message || DEFAULT_API_ERROR_MSG);
        } else {
          setState(data.state);
          setIsAutoAddressSuccess(true);
        }
      },
      onError: (error) => {
        logger.error(error, AUTO_ADDRESS_FETCH_ERROR);
        setErrorMessage(error || DEFAULT_API_ERROR_MSG);
        setIsAutoAddressSuccess(false);
      },
      successHandler: (data) => data?.status === true,
    });

  const pskuArray = getSkusForDelivery(product, currSkuId);

  const config = useConfig();
  const deliveryDetailsAccConfig =
    config?.configs?.collapsePdConfig?.deliverySection || {};

  useEffect(() => {
    if (isLoggedIn) {
      savedAddressesFetcher.submit(
        { source: 'react' },
        { method: API_METHODS.POST, action: ACTION_ROUTES.savedAddress },
      );
    }
  }, [isLoggedIn]);

  const handleOpenBottomSheet = () => {
    setInputPincode('');
    setBottomSheetOpen(true);
  };

  const handleCloseBottomSheet = () => {
    setBottomSheetOpen(false);
    setErrorMessage('');
  };

  const callAddressAPIs = (pincodeValue: string) => {
    setPincode(pincodeValue);
    setErrorMessage('');
    setSkuDetails(null);
    setIsAutoAddressSuccess(false);
    setIsAddressDetailsSuccess(false);
    setState('');

    const queryParams = new URLSearchParams({
      pincode: pincodeValue,
      productType: product?.productType,
      sku: currSkuId,
    }).toString();

    Promise.all([
      autoAddressFetcher.load(`${ACTION_ROUTES.autoAddress}?${queryParams}`),
      addressDetailsFetcher.submit(
        {
          pincode: pincodeValue,
          skus: pskuArray && JSON.stringify(pskuArray),
          type: product?.productType,
        },
        { method: API_METHODS.POST, action: ACTION_ROUTES.addressDetail },
      ),
    ]);
  };

  const handleAddressClick = (addressId: string) => {
    setCookie(ADDRESS_ID_FOR_DELIVERY, addressId, PINCODE_COOKIE_EXPIRY);
    const selectedAddress = savedAddresses?.find(
      (address) => address.entity_id === addressId,
    );
    if (selectedAddress) {
      const newPincode = selectedAddress.postcode;

      setSavedAddresses((prevAddresses) =>
        prevAddresses.map((address) =>
          address.entity_id === addressId
            ? { ...address, selected: true }
            : { ...address, selected: false },
        ),
      );
      callAddressAPIs(newPincode);
    }
  };

  const handleCheckButtonClick = () => {
    callAddressAPIs(inputPincode);
  };

  const isLoading = isAutoAddressLoading || isAddressDetailsLoading;

  return (
    <>
      <Accordion
        title={deliveryDetailsAccConfig.title}
        subTitle={deliveryDetailsAccConfig.subTitle}
        opened={deliveryDetailsAccConfig.isOpened}
        keyValue={deliveryDetailsAccConfig.key}
        icon={<DeliveryIcon />}
      >
        <AccordionContent>
          {skuDetails &&
          isAutoAddressSuccess &&
          isAddressDetailsSuccess &&
          !errorMessage ? (
            <DeliveryDetails
              message={skuDetails?.message}
              pincode={skuDetails?.pincode}
              state={state}
              onChange={handleOpenBottomSheet}
            />
          ) : (
            <DeliveryContainer>
              <DeliveryText>{ENTER_PINCODE_FOR_DELIVERY}</DeliveryText>
              <DeliveryButton onClick={handleOpenBottomSheet}>
                {ENTER_PINCODE}
              </DeliveryButton>
            </DeliveryContainer>
          )}
        </AccordionContent>
      </Accordion>
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={handleCloseBottomSheet}
        closeOnClickOutside={!isLoading}
      >
        {savedAddresses.length > 0 && (
          <>
            <SavedAddressesHeading>
              {SELECT_FROM_SAVED_ADD}
            </SavedAddressesHeading>
            {savedAddresses.map((address) => (
              <AddressContainerComponent
                key={address.entity_id}
                address={address}
                onClick={isLoading ? () => {} : handleAddressClick}
              />
            ))}
            <Divider>
              <DividerLine />
              <DividerText>{OR}</DividerText>
              <DividerLine />
            </Divider>
          </>
        )}
        <InputBox
          value={inputPincode}
          onChange={(e) => {
            setInputPincode(e.target.value);
            setErrorMessage('');
          }}
          placeholder={ENTER_PINCODE}
          showSubtitle={true}
          onlyNumbers={true}
          maxLength={pincodeMaxLength}
          showButton={inputPincode.length === pincodeMaxLength}
          onButtonClick={handleCheckButtonClick}
          disabled={isLoading}
          error={errorMessage}
        />
      </BottomSheet>
    </>
  );
};

export default DeliveryAccordion;
