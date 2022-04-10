import { Day } from '../components';
import styled from 'styled-components';

const WorkoutSelector = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px;
	justify-content: space-evenly;
`

function Week() {
	return (
		<WorkoutSelector>
			<Day path="/workout" label="A" />
			<Day path="/workout" label="B" />
			<Day path="/workout" label="C" />
		</WorkoutSelector>
	);
}

export default Week;
