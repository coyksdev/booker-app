export type ServiceCategory = {
  id: string;
  name: string;
  icon: string;
};

export type FeaturedImage = {
  image: string;
};

export type Specialist = {
  id: string;
  firstName: string;
  profileImage: string;
  position: string;
};

export type Shop = {
  id: string;
  name: string;
  address: string;
  logo?: string;
  description?: string;
  featuredImages: FeaturedImage[];
  specialists: Specialist[];
};
