import React from 'react';

import ClassCard from './ClassCard';

import cheatSheet from '../assets/js/cheat-sheet/_index';

export default () => {
	return (
		<div className="flex-basis-1200 p-4">
			<ul className="Card-list list-reset">
				{cheatSheet.map(v => {
					return (
						<li key={v.title} className={`span-${v.span}`} id={v.title}>
							<ClassCard
								title={v.title}
								color={v.color}
								children={v.children}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
