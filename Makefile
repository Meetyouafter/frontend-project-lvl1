install: #для первого клонирования репозитария
	npm ci

brain-games: #для запуска игры
	node bin/brain-games.js

publish: #очистка общего хранилища от учебных проектов
	npm publish --dry-run

lint: #запуск линтера
	npx eslint

brain-even: #для запуска игры
	node bin/brain-even.js

brain-calc: #для запуска игры
	node bin/brain-calc.js

brain-gsd: #для запуска игры
	node bin/brain-gsd.js

brain-prime: #для запуска игры
	node bin/brain-prime.js

brain-progression: #для запуска игры
	node bin/brain-progression.js