import { useInputSearchState } from '../../state/useInputSearchState/useInputSearchState'
import './input.css';

export function InputSearch() {
	const { value, setValue } = useInputSearchState((state) => state);
	return (
		<input
			className="input"
			type="search"
			placeholder="Ташкент"
			name="search"
      autoComplete='off'
			id="search"
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
		/>
	);
}
