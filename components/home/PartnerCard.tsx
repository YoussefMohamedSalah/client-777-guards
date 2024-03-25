"use client";
import Image from "next/image";

interface Props {
  item: any;
  className?: string;
}

const CategoryCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="single-cat-item">
      <div className="item-img">
        <Image
          src={item.url ?? "/assets/placeholders/category.png"}
          alt={item.name}
          width={200}
          height={200}
          quality={100}
          className="img-fluid contain"
          loading="eager"
        />
      </div>
      <h5 className="title"> {item.name} </h5>
      <h5 className="title"> {item.location} </h5>
    </div>
  );
};

export default CategoryCard;
