import {useQuery} from '@apollo/client';
import {useNhostClient} from '@nhost/react';
import {useState} from 'react';
import {ServiceCategory} from '../types';
import {GetCategoriesDocument} from '../__generated__/resolvers-types';

export default function useServiceCategories() {
  const nhost = useNhostClient();

  const [data, setData] = useState<ServiceCategory[]>([]);

  const {error, loading} = useQuery(GetCategoriesDocument, {
    onCompleted: async d => {
      const p = d.service_category.map(async sc => {
        const url = nhost.storage.getPublicUrl({
          fileId: sc.icon,
        });

        return {
          ...sc,
          icon: url,
        };
      });

      if (p) {
        const serviceCategories = await Promise.all(p);
        setData(serviceCategories);
      }
    },
  });

  return {data, error, loading};
}
