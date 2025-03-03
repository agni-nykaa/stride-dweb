export const fetchSavedAddresses = async () =>
  // Commenting out the API call for now
  // try {
  //   const response = await fetch('/api/savedAddresses');
  //   const data = await response.json();
  //   if (data.status === 'success') {
  //     return data.response.data;
  //   } else {
  //     throw new Error('Failed to fetch saved addresses');
  //   }
  // } catch (error) {
  //   console.error('Error fetching saved addresses:', error);
  //   throw error;
  // }

  [
    {
      city: 'Gurgaon',
      postcode: '122022',
      firstname: 'Sid',
      country_id: 'IN',
      region: 'Haryana',
      street: 'A-1345 Sushant Lok, Block D, Phase 3',
      kyc_status: 'kycNotInitiated',
      entity_id: 'e1dd9491a2054a4ab1aa9195a149b039',
      customer_address_id: 'e1dd9491a2054a4ab1aa9195a149b039',
      parent_id: '33304595',
      created_at: '2024-11-24 05:13:34',
      updated_at: '2024-11-24 05:13:34',
      is_active: '1',
      attribute_set_id: '0',
      entity_type_id: '2',
      increment_id: null,
      region_id: '0',
      is_set_default: 1,
      telephone: '9056325299',
    },
    {
      postcode: '110051',
      city: 'New Delhi',
      lastname: 'Khurana',
      region_id: '0',
      firstname: 'Siddharth',
      country_id: 'IN',
      region: 'Delhi',
      street:
        'House No. 1-B Chandu Park, Street Number 19, Near Nav Nirman School',
      kyc_status: 'kycNotInitiated',
      entity_id: '5ef290294d274d1492c7a16bb1b4640e',
      customer_address_id: '5ef290294d274d1492c7a16bb1b4640e',
      parent_id: '33304595',
      created_at: '2022-05-16 07:57:28',
      updated_at: '2024-11-24 05:13:34',
      is_active: '1',
      attribute_set_id: '0',
      entity_type_id: '2',
      increment_id: null,
      is_set_default: 0,
      telephone: '9711802969',
    },
    {
      city: 'New Delhi',
      postcode: '110051',
      firstname: 'Siddharth Khurana',
      country_id: 'IN',
      region: 'Delhi',
      street:
        'House No. 60, Aram Park, Near Som Bazar, Street No. 1, Near Jai Shree Ram Board',
      kyc_status: 'kycNotInitiated',
      entity_id: '11629367054a41a1b08377dc302620d6',
      customer_address_id: '11629367054a41a1b08377dc302620d6',
      parent_id: '33304595',
      created_at: '2024-06-27 06:10:37',
      updated_at: '2024-07-24 08:13:49',
      is_active: '1',
      attribute_set_id: '0',
      entity_type_id: '2',
      increment_id: null,
      region_id: '0',
      is_set_default: 0,
      telephone: '9711802969',
    },
  ];
