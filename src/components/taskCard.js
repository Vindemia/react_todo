import React from 'react';

const TaskCard = ({ title, description, onChange, id, onDelete }) => {
	return (
		<div className="border-2 flex flex-col border-black p-2 rounded-lg border-opacity-100 shadow-lg">
			<div className="flex justify-end" >
				<button onClick={onDelete} className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r bg-red-400 hover:bg-red-600" >Supprimer</button>
			</div>
			<input onChange={(e) => onChange(e, 'title', id)} value={title} />
			<input onChange={(e) => onChange(e, 'description', id)} value={description} />
		</div>
	);
};

export default TaskCard;
