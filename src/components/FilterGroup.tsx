
type Props = {
    // onRatingClick is a function that does not return a value = void
    onRatingClick: (rating: number) => void,
    minRating: number,
    ratings: number[]
} 
export default function FilterGroup({ onRatingClick, minRating, ratings }: Props) {
  return (
    <ul className="flex text-wrap gap-2">
      {ratings.map((rate) => (
        <li
          style={{ borderBottom: minRating === rate ? "solid" : "none" }}
          onClick={() => onRatingClick(rate)}
          key={rate}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
}
