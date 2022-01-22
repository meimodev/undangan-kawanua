const EventInfo = ({builder}) => {
	if (builder) {
		return builder();
	}

	return <div>this is Event Info</div>;
};
export default EventInfo;
