import {useQuery} from '@apollo/client';
import {useNhostClient} from '@nhost/react';
import {useState} from 'react';
import {FeaturedImage, Shop, Specialist} from '../types';
import {
  Exact,
  GetShopsDocument,
  InputMaybe,
  Shop_Bool_Exp,
} from '../__generated__/resolvers-types';

export default function useShops(
  variables?: Exact<{
    where?: InputMaybe<Shop_Bool_Exp> | undefined;
  }>,
) {
  const nhost = useNhostClient();
  const [data, setData] = useState<Shop[] | undefined>();

  const {loading} = useQuery(GetShopsDocument, {
    variables: variables,
    onCompleted: async d => {
      const shops = d.shop.map(s => {
        const featuredImages: FeaturedImage[] = s.featured_images.map(
          ({fileId}) => {
            const imageUrl = nhost.storage.getPublicUrl({
              fileId,
            });

            return {
              image: imageUrl,
            };
          },
        );

        const specialists: Specialist[] = s.specialists.map(specialist => {
          const imageUrl = nhost.storage.getPublicUrl({
            fileId: specialist.profileImageId,
          });

          return {
            ...specialist,
            profileImage: imageUrl,
          };
        });

        const shop: Shop = {
          id: s.id,
          name: s.name,
          description: s.description ?? undefined,
          address: s.address,
          logo: s.logo ?? undefined,
          featuredImages: featuredImages,
          specialists: specialists,
        };

        return shop;
      });

      setData(shops);
    },
    onError: e => {
      console.log(e);
    },
  });

  return {
    data,
    loading,
  };
}
