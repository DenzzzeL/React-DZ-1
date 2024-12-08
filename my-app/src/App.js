import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
	// Императивный стиль: создание объекта Date и вызов метода getFullYear
	const currentYear = new Date().getFullYear();

	// Императивный стиль: пошаговое описание структуры через createElement
	return React.createElement(
		'div', // Императивный стиль: вручную задаём тип элемента и его атрибуты
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			// Императивный стиль: явное указание свойств img (src, className, alt)
			React.createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			React.createElement(
				'p',
				null,
				// Декларативный стиль: передача разметки и текста в виде описания
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				// Декларативный стиль:
				'Learn React',
			),
			// Декларативный стиль: использование переменной для отображения данных
			React.createElement('p', null, currentYear),
		),
	);
};
