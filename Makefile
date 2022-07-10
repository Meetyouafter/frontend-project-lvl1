install: #для первого клонирования репозитария
	npm ci

brain-games: #для запуска игры
	node bin/brain-games.js

publish: #очистка общего хранилища от учебных проектов
	npm publish --dry-run

lint: #запуск линтера
	npx eslint