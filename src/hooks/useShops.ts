import {useQuery} from '@apollo/client';
import {useState} from 'react';
import {Shop} from '../types';
import {GetShopDocument} from '../__generated__/resolvers-types';

export default function useShops() {
  const [data, setData] = useState<Shop[]>([]);

  const {loading} = useQuery(GetShopDocument, {
    onCompleted: d => {
      const shops: Shop[] = d.shop.map(i => {
        return {
          id: i.id,
          address: i.address,
          logo: i.logo ?? undefined,
          name: i.name,
        };
      });

      setData(shops);
    },
  });

  return {
    data,
    loading,
  };
}
