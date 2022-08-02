import React from 'react';
import doc from './sortFunction.mdx';
import data from '../../constants/sampleMovieData';
import DataTable from '../../../DataTable';

const customSort = (rows, selector, direction) => {
	return rows.sort((a, b) => {
		// use the selector to resolve your field names by passing the sort comparators
		const aField = selector(a).toLowerCase();
		const bField = selector(b).toLowerCase();

		let comparison = 0;

		if (aField > bField) {
			comparison = 1;
		} else if (aField < bField) {
			comparison = -1;
		}

		return direction === 'desc' ? comparison * -1 : comparison;
	});
};

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: row => row.director,
		sortable: true,
	},
	{
		name: 'Year',
		selector: row => row.year,
		sortable: true,
	},
];

export const CustomSort = () => {
	return <DataTable title="Movie List" columns={columns} data={data} sortFunction={customSort} pagination />;
};

export default {
	title: 'DataTable/Sorting/Custom Sort',
	component: CustomSort,
	parameters: {
		docs: {
			page: doc,
		},
	},
};
