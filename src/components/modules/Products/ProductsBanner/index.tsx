import styles from "./Banner.module.css";
const ProductBanner = ({ title, path }: { title: string; path: string }) => {
  return (
    <div
      className={`${styles.bannerImg} border-lime-300 border-5 mt-5 rounded-3xl flex items-center justify-center`}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold leading-10">{title}</h1>
        <h1 className="text-base">{path}</h1>
      </div>
    </div>
  );
};

export default ProductBanner;
