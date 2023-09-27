import IconAngleLeft from "assets/icons/new/IconAngleLeft";
import Link from "next/link";
interface IGameCard {
  image: string;
  name: string;
  link: string;
  color: string;
}

const GameCard = (props: IGameCard) => {
  const {name, image, link, color} = props;
  return (
    <Link href={link} className={`w-full h-[220px] rounded-[10px] flex relative bg-[${color}]`}>
      <div className="flex items-center justify-center">
        <img src={image} alt="" className="w-40 h-40 sm:w-auto sm:h-auto" />
      </div>
      <div className="flex flex-col">
        <p className="text-textColor text-base sm:text-xl font-bold mt-10 sm:mt-6 mb-4">
          <span>نام بازی: </span>
          <span>{name}</span>
        </p>
        <p className="text-textColor text-base sm:text-xl font-bold">
          <span>امتیاز هر دست: </span>
          <span> 20</span>
        </p>
        <div className="absolute bottom-4 left-10">
          <p className="text-textColor text-base sm:text-xl font-bold flex gap-3">
            <span>َشروع بازی</span>
            <IconAngleLeft className="w-3" />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;